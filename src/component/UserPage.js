import React, { Component } from 'react';
import { Button } from 'antd';
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../relay/Environment'
import User from '../component/User';

const UserPageQuery = graphql`
query UserPageQuery{
	relay{
    user(login:"AshoneA"){
      ...User_profile
    }
  }
}
`
class UserPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={UserPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            console.log(props)
            return <User />
          }
          return <div>Loading</div>
        }}
      />
    );
  }
}

export default UserPage;
