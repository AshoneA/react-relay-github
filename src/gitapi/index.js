import config from '../config';

export function removeIssue(databaseId) {
  return fetch(`https://api.github.com/repos/AshoneA/react-relay-github/issues/comments/${databaseId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${config.token}`
    }
  })
}