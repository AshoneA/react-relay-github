const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'bearer 50f2ca3a3e7b275e84ecf724b28a7706c87a52a9'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})

const environment = new Environment({
  network,
  store,
})

export default environment