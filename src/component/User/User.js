import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class User extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.profile.avatarUrl}</h1>
      </div>
    );
  }
}

export default createFragmentContainer(User, graphql`
fragment User_profile on User{
  avatarUrl,
  createdAt,
}
` )