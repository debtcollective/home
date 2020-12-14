enum GoogleAnalyticEventName {
  ONE_OFF_DONATION = 'one_off_donation',
  DUES_DONATION = 'dues_donation'
}

type GoogleAnalyticEvent = {
  event?: GoogleAnalyticEventName;
};

let dl: Array<GoogleAnalyticEvent> = [];

if (typeof window !== 'undefined') {
  dl = (window as any).dataLayer || [];
}

/**
 * Allows to send events to google tag manager for further analysis over
 * our google analytics dashboard https://developers.google.com/tag-manager/devguide
 *
 * @param eventName the name of the event to push to the data layer
 * @param opts any other param to enrich intended event
 */
const sendEvent = (eventName: GoogleAnalyticEventName, opts = {}) => {
  dl.push({
    event: eventName,
    ...opts
  });
};

const metrics = {
  sendEvent,
  ...GoogleAnalyticEventName
};

export default metrics;
