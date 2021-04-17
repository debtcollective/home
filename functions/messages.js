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

const RECAPTCHA_SECRET = process.env.GATSBY_RECAPTCHA_V3_SECRET_KEY;
const RECAPTCHA_MINIMUM_SCORE = 0.5;

const verifyRecaptcha = async (token) => {
  try {
    const data = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify({
          secret: RECAPTCHA_SECRET,
          response: token
        })
      }
    );
    const response = await data.json();

    return (
      response.success && Number(response.score) >= RECAPTCHA_MINIMUM_SCORE
    );
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
    'g-recaptcha-response-data': recaptchaToken
  } = JSON.parse(event.body || {});
  const messenger = new ChatwootMessenger(email, name, message, subject);

  let statusCode = 500;
  let body = JSON.stringify({
    message: 'Internal Error'
  });

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
    if (error instanceof RecaptchaError) {
      statusCode = 409;
      body = JSON.stringify({
        type: 'Recaptcha',
        message: 'We could not verify you are a human, please try again',
        status: statusCode
      });
    }

    if (error instanceof CreateContactError) {
      body = JSON.stringify({
        type: 'Contact',
        message: 'Something went wrong, please try again',
        status: statusCode
      });
    }

    if (error instanceof CreateConverstaionError) {
      body = JSON.stringify({
        type: 'Conversation',
        message: 'Something went wrong, please try again',
        status: statusCode
      });
    }

    if (error instanceof CreateLabelError) {
      body = JSON.stringify({
        type: 'Label',
        message: 'Something went wrong, please try again',
        status: statusCode
      });
    }

    if (error instanceof CreateMessageError) {
      body = JSON.stringify({
        type: 'Message',
        message: 'Something went wrong, please try again',
        status: statusCode
      });
    }
  }

  return {
    statusCode,
    body
  };
};
