import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import { Spin } from 'antd';
import environment from '../../relay/Environment';
import CommitList from './CommitList';

const CommitListPageQuery = graphql`
  query CommitListPageQuery(
    $count: Int!
    $after: String
    $name: String!
    $owner: String!
  ) {
    repository(owner:$owner,name:$name){
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
    const { owner, name } = this.props.params;
    return (
      <QueryRenderer
        environment={environment}
        query={CommitListPageQuery}
        variables={{
          count: 10,
          name,
          owner,
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <CommitList
              owner={owner}
              commits={props.repository.ref.target}
              name={name} />
          }
          return <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spin />
          </div>
        }}
      />
    )
  }
}

export default CommitListPage;