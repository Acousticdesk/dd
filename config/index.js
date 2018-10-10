import zendesk from './zendesk';

const getEndpoint = () => (PRODUCTION ? 'https://developers.display.io/api?method=' : 'http://developers.dist.loc/api?method=');

export default {
  endpoint: getEndpoint(),
  ...zendesk,
};
