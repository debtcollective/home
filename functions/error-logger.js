/* eslint-disable @typescript-eslint/no-var-requires */
const Sentry = require('@sentry/node');

const { SENTRY_DSN } = process.env;

let sentryInitialized = false;

function initErrorLogger() {
  if (SENTRY_DSN) {
    Sentry.init({ dsn: SENTRY_DSN });
    sentryInitialized = true;
  }
}

async function reportError(error) {
  initErrorLogger();

  if (!sentryInitialized) return;

  if (typeof error === 'string') {
    Sentry.captureMessage(error);
  } else {
    Sentry.captureException(error);
  }

  Sentry.flush();
}

module.exports = {
  reportError
};
