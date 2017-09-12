import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from '../../relay/Environment';
import CommitList from './CommitList';

const CommitListPageQuery = graphql`
  query CommitListPageQuery(
    $count: Int!
    $after: String
  ) {
    repository(owner:"facebook",name:"react"){
      ref(qualifiedName:"master"){
        target{
          ...CommitList_commits
        }
      }
    }
  }
`

class CommitListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CommitListPageQuery}
        variables={{
          count: 10
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <CommitList commits={props.repository.ref.target} />
          }
          return <div>loading</div>
        }}
      />
    )
  }
}

export default CommitListPage;