import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import { Spin } from 'antd';
import environment from '../../relay/Environment'
import PRChart from './PRChart';

const PRChartPageQuery = graphql`
  query PRChartPageQuery(
    $owner: String!,
    $name: String!,
  ){
    repository(owner: $owner,name: $name){
      ...PRChart_PR
    }
  }
`

class PRChartPage extends Component {
  render() {
    const { name, owner } = this.props.params;
    return (
      <QueryRenderer
        environment={environment}
        query={PRChartPageQuery}
        variables={{ name, owner }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <PRChart PR={props.repository} />
            )
          }
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Spin tip="loading" />
            </div>
          )
        }}
      />
    )
  }
}

export default PRChartPage;
