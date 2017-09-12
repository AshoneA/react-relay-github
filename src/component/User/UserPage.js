import React, { Component } from 'react';
import { Tabs } from 'antd';
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../../relay/Environment'
import User from './User';

const { TabPane } = Tabs;
const UserPageQuery = graphql`
query UserPageQuery{
  user(login:"AshoneA"){
    ...User_profile
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
            return (
              <User profile={props.user} />
            )
          }
          return <div>Loading</div>
        }}
      />
    );
  }
}

export default UserPage;
