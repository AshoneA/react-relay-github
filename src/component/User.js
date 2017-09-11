import React, { Component } from 'react';
import { Button } from 'antd';
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../relay/Environment'

const UserQuery = graphql`
  query UserQuery{
    viewer {
      login
      name
    }
  }
`
class User extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={UserQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            console.log(props)
            return <Button >123</Button>
          }
          return <div>Loading</div>
        }}
      />
    );
  }
}

export default User;
