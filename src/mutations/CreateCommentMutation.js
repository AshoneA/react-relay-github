import {
  commitMutation,
  graphql
} from 'react-relay';
import environment from '../relay/Environment';

const mutation = graphql`
  mutation CreateCommentMutation($input:AddCommentInput!) {
    addComment(input: $input) {
      commentEdge {
        cursor
        node {
          bodyHTML
          createdAt
          author {
            avatarUrl
            login
            url
          }
        }
      }
    }
  }
`

export default (subjectId, body, callback) => {  
  const variables = {
    input: {
      subjectId,
      body,
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: proxyStore => {
        console.log(proxyStore);
        // ... you'll implement this in a bit
      },
      updater: proxyStore => {
        // ... this as well
      },
      onCompleted: (response) => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}