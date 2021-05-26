/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('node-fetch');
const ChatwootMessenger = require('./messenger');
const { reportError } = require('./error-logger');

const RECAPTCHA_SECRET = process.env.GATSBY_RECAPTCHA_V3_SECRET_KEY;
const RECAPTCHA_MINIMUM_SCORE = 0.5;

const verifyRecaptcha = async (token) => {
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

    if (!isValidRecaptcha) {
      statusCode = 409;
      body = JSON.stringify({
        type: 'Recaptcha',
        message: 'We could not verify you are a human, please try again',
        status: statusCode
      });
    }
  } catch (error) {
    console.error(error);
    await reportError(error);
    statusCode = 500;
    body = JSON.stringify({
      message: 'Internal Error'
    });
  }

  try {
    await messenger.createContact();
  } catch (error) {
    console.error(error);
    await reportError(error);
    body = JSON.stringify({
      type: 'Contact',
      message: 'Something went wrong, please try again',
      status: statusCode
    });
  }

  try {
    await messenger.createConverstaion();
  } catch (error) {
    console.error(error);
    await reportError(error);
    body = JSON.stringify({
      type: 'Contact',
      message: 'Something went wrong, please try again',
      status: statusCode
    });
  }

  try {
    await messenger.createLabel();
  } catch (error) {
    console.error(error);
    await reportError(error);
    body = JSON.stringify({
      type: 'Contact',
      message: 'Something went wrong, please try again',
      status: statusCode
    });
  }

  try {
    const response = await messenger.createMessage();

    statusCode = 200;
    body = JSON.stringify({
      content: message,
      id: response.id,
      message: 'Message created successfully',
      status: 200
    });
  } catch (error) {
    console.error(error);
    await reportError(error);
    body = JSON.stringify({
      type: 'Contact',
      message: 'Something went wrong, please try again',
      status: statusCode
    });
  }

  return {
    statusCode,
    body
  };
};
