import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from '../../relay/Environment'
import UserRepo from './UserRepo';
import Loading from '../Loading';

const UserRepoPageQuery = graphql`
  query UserRepoPageQuery(
    $user: String!
  ){
    user(login: $user){
      ...UserRepo_repo
    }
  }
`

class UserRepoPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={UserRepoPageQuery}
        variables={{
          user: this.props.name
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <UserRepo repo={props.user} />
            )
          }
          return <Loading />
        }}
      />
    )
  }
}

export default UserRepoPage;