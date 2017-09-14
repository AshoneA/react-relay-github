import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache.js';
import config from '../config';

const cache = new RelayQueryResponseCache({ size: 250, ttl: 60 * 5 * 1000 });
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');
const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  const queryID = operation.text;
  const data = cache.get(queryID, variables);
  if (data !== null) return data;
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${config.token}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  }).then(jsonPayload => {
    if (jsonPayload) {
      cache.set(queryID, variables, jsonPayload);
      return jsonPayload;
    }

    // errors etc
  });
})

const environment = new Environment({
  network,
  store,
})

export default environment
export {
  cache
}