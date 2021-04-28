/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('node-fetch');
const {
  CreateContactError,
  CreateConverstaionError,
  CreateLabelError,
  CreateMessageError,
  RecaptchaError
} = require('./errors');
const ChatwootMessenger = require('./messenger');
const { reportError } = require('./error-logger');

const RECAPTCHA_SECRET = process.env.GATSBY_RECAPTCHA_V3_SECRET_KEY;
const RECAPTCHA_MINIMUM_SCORE = 0.5;

const verifyRecaptcha = async (token) => {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(
        RECAPTCHA_SECRET
      )}&response=${encodeURIComponent(token)}`,
      {
        method: 'POST'
      }
    );
    const data = await response.json();

    return data.success && Number(data.score) >= RECAPTCHA_MINIMUM_SCORE;
  } catch (error) {
    throw new RecaptchaError();
  }
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: 'Method Not Allowed',
        status: 405
      })
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        type: 'Missing parameters',
        message: 'Something went wrong, please try again',
        status: 400
      })
    };
  }

  const {
    email,
    name,
    message,
    subject,
    'g-recaptcha-response': recaptchaToken
  } = JSON.parse(event.body || {});
  const messenger = new ChatwootMessenger(email, name, message, subject);

  let statusCode;
  let body;

  if (!email || !name || !message || !subject) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        type: 'Missing parameters',
        message: 'Something went wrong, please try again',
        status: 400
      })
    };
  }

  try {
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);

    if (!isValidRecaptcha) throw new RecaptchaError();

    await messenger.createContact();
    await messenger.createConverstaion();
    await messenger.createLabel();
    const response = await messenger.createMessage();

    statusCode = 200;
    body = JSON.stringify({
      content: message,
      id: response.id,
      message: 'Message created successfully',
      status: 200
    });
  } catch (error) {
    await reportError(error);

    switch (true) {
      case error instanceof RecaptchaError: {
        statusCode = 409;
        body = JSON.stringify({
          type: 'Recaptcha',
          message: 'We could not verify you are a human, please try again',
          status: statusCode
        });
        break;
      }
      case error instanceof CreateContactError: {
        body = JSON.stringify({
          type: 'Contact',
          message: 'Something went wrong, please try again',
          status: statusCode
        });
        break;
      }
      case error instanceof CreateConverstaionError: {
        body = JSON.stringify({
          type: 'Conversation',
          message: 'Something went wrong, please try again',
          status: statusCode
        });
        break;
      }
      case error instanceof CreateLabelError: {
        body = JSON.stringify({
          type: 'Label',
          message: 'Something went wrong, please try again',
          status: statusCode
        });
        break;
      }
      case error instanceof CreateMessageError: {
        body = JSON.stringify({
          type: 'Message',
          message: 'Something went wrong, please try again',
          status: statusCode
        });
        break;
      }
      default: {
        statusCode = 500;
        body = JSON.stringify({
          message: 'Internal Error'
        });
      }
    }
  }

  return {
    statusCode,
    body
  };
};
