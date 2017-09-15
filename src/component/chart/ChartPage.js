import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from '../../relay/Environment'
import Chart from './Chart';
import Loading from '../Loading';

const ChartPageQuery = graphql`
  query ChartPageQuery($name: String!){
    user(login: $name){
      ...Chart_stars
    }
  }
`;

class ChartPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={ChartPageQuery}
        variables={{
          name: this.props.params.user
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <Chart stars={props.user} />
            )
          }
          return <Loading />
        }}
      />
    )
  }
}

export default ChartPage;