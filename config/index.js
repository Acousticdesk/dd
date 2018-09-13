const ZENDESK_URL = 'https://support.display.io/hc/';
const ARTICLES_PATH = 'en-us/articles/';
const API_URL = `${ZENDESK_URL}${ARTICLES_PATH}360001659993`;

const getEndpoint = () => {
  return PRODUCTION ? 'https://developers.display.io/api?method=' : 'http://developers.dist.loc/api?method=';
};

const zendeskUrls = {
  zendesk: {
    general: ZENDESK_URL,
    ios: {
      Interstitial: `${ZENDESK_URL}${ARTICLES_PATH}360001560513-Interstitial`
    },
    android: {
      InFeed: `${ZENDESK_URL}${ARTICLES_PATH}360001478974-In-Feed`,
      Interstitial: `${ZENDESK_URL}${ARTICLES_PATH}360001478934-Interstitial`,
      RewardedVideo: `${ZENDESK_URL}${ARTICLES_PATH}360001544534-Rewarded-Video`,
      Native: `${ZENDESK_URL}${ARTICLES_PATH}360001465653-Native-Ads`
    },
    api: {
      InFeed: API_URL,
      Interstitial: API_URL,
      RewardedVideo: API_URL,
      Native: API_URL
    }
  }
};

export default {
  endpoint: getEndpoint(),
  ...zendeskUrls
};
