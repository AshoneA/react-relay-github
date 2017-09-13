import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from '../../relay/Environment';
import IssueList from './IssueList';

const IssueListPageQuery = graphql`
  query IssueListPageQuery(
    $name:String!
    $after: String
    $count: Int!
  ){
    repository(owner: "AshoneA", name: $name) {
        ...IssueList_issues
    }
  }
`;

class IssueListPage extends Component {
  state = {
    name: 'react-relay-github'
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={IssueListPageQuery}
        variables={{
          count: 10,
          name: this.state.name
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <IssueList issues={props.repository} name={this.state.name} />
          }
          return <div>loading</div>
        }}
      />
    )
  }
}

export default IssueListPage;