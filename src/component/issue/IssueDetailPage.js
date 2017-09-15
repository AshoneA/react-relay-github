import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import { Spin } from 'antd';
import environment from '../../relay/Environment';
import IssueDetail from './IssueDetail';

const IssueDetailPageQuery = graphql`
  query IssueDetailPageQuery(
    $number:Int!
  ) {
    repository(owner:"AshoneA", name:"react-relay-github") {
      ...IssueDetail_issue
    }
  }
`

class IssueDetailPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={IssueDetailPageQuery}
        variables={{
          number: parseInt(this.props.params.number, 10)
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <IssueDetail issue={props.repository} />
          }
          return <div style={{ display: 'flex', justifyContent: 'center' }}
          ><Spin />
          </div>
        }}
      />
    )
  }
}

export default IssueDetailPage;