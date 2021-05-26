/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('node-fetch');
const {
  CreateContactError,
  CreateConverstaionError,
  CreateLabelError,
  CreateMessageError
} = require('./errors');
const { reportError } = require('./error-logger');

const CHATWOOT_ACCESS_TOKEN = process.env.CHATWOOT_ACCESS_TOKEN;
const CHATWOOT_ACCOUNT_ID = process.env.CHATWOOT_ACCOUNT_ID;
const CHATWOOT_BASE_URL = process.env.CHATWOOT_BASE_URL;
const CHATWOOT_INBOX_ID = process.env.CHATWOOT_INBOX_ID;

const BASE_FETCH_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    api_access_token: CHATWOOT_ACCESS_TOKEN
  }
};
const SUBJECT_OPTIONS = {
  press: 'press-inquiry',
  accountIssues: 'account-issues',
  other: 'other'
};

class ChatwootMessenger {
  constructor(email, name, message, subject) {
    this.email = email;
    this.name = name;
    this.message = message;
    this.subject = subject;
    this.isEmailTaken = false;
    this.inboxSourceId = null;
    this.conversationId = null;
    this.userId = null;
  }

  _findUser(users, email) {
    if (!users) return {};
    return users.find((user) => user.email === email);
  }

  _findSourceId(contactInboxes) {
    const apiInbox = contactInboxes.find(
      (contactInbox) => contactInbox.inbox.id === Number(CHATWOOT_INBOX_ID)
    );

    if (!apiInbox) return null;

    return apiInbox.source_id;
  }

  _findSubject(subject) {
    if (Object.values(SUBJECT_OPTIONS).includes(subject)) return subject;

    return SUBJECT_OPTIONS.other;
  }

  async createContact() {
    try {
      const data = await fetch(
        `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/contacts`,
        {
          ...BASE_FETCH_OPTIONS,
          method: 'post',
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            inbox_id: CHATWOOT_INBOX_ID
          })
        }
      );
      const response = await data.json();

      if (!response) throw new CreateContactError();

      if (
        response.message &&
        response.message === 'Email has already been taken'
      ) {
        this.isEmailTaken = true;
      } else if (response.payload && response.payload.contact.id) {
        const { contact_inboxes } = response.payload.contact;
        this.inboxSourceId = this._findSourceId(contact_inboxes);
      }
    } catch (error) {
      throw new CreateContactError(error);
    }

    // If email is taken, retrieve contact data
    if (this.isEmailTaken) {
      try {
        const data = await fetch(
          `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/contacts/search?q=${this.email}`,
          {
            ...BASE_FETCH_OPTIONS,
            method: 'get'
          }
        );
        const response = await data.json();
        const user = this._findUser(response.payload, this.email);

        if (user.id) {
          this.userId = user.id;
          this.inboxSourceId = this._findSourceId(user.contact_inboxes);
        }
      } catch (error) {
        await reportError(error);
        throw new CreateContactError(error);
      }
    }

    // If user is not in the API inbox, we add it
    if (!this.inboxSourceId) {
      try {
        const data = await fetch(
          `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/contacts/${this.userId}/contact_inboxes`,
          {
            ...BASE_FETCH_OPTIONS,
            method: 'post',
            body: JSON.stringify({
              inbox_id: CHATWOOT_INBOX_ID
            })
          }
        );
        const response = await data.json();

        this.inboxSourceId = response.source_id;
      } catch (error) {
        await reportError(error);
        throw new CreateContactError(error);
      }
    }
  }

  async createConverstaion() {
    try {
      const data = await fetch(
        `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/conversations`,
        {
          ...BASE_FETCH_OPTIONS,
          method: 'post',
          body: JSON.stringify({
            source_id: this.inboxSourceId
          })
        }
      );
      const response = await data.json();

      if (!response) throw new CreateConverstaionError();

      if (response && response.id) this.conversationId = response.id;
    } catch (error) {
      await reportError(error);
      throw new CreateConverstaionError(error);
    }
  }

  async createLabel() {
    try {
      const subject = this._findSubject(this.subject);
      const data = await fetch(
        `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/conversations/${this.conversationId}/labels`,
        {
          ...BASE_FETCH_OPTIONS,
          method: 'post',
          body: JSON.stringify({
            labels: [subject]
          })
        }
      );
      const response = await data.json();

      if (!response.payload) throw new CreateLabelError();
    } catch (error) {
      await reportError(error);
      throw new CreateLabelError(error);
    }
  }

  async createMessage() {
    try {
      const data = await fetch(
        `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/conversations/${this.conversationId}/messages`,
        {
          ...BASE_FETCH_OPTIONS,
          method: 'post',
          body: JSON.stringify({
            content: this.message,
            message_type: 'incoming'
          })
        }
      );
      const response = await data.json();

      if (!response.id) throw new CreateMessageError();

      return data;
    } catch (error) {
      await reportError(error);
      throw new CreateMessageError(error);
    }
  }
}

module.exports = ChatwootMessenger;
