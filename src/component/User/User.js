import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import ProjectProfile from './ProjectProfile';

class User extends Component {

  render() {
    const { avatarUrl, name, login, bio, location } = this.props.profile;
    return (
      <div className="user">
        <div className="profile">
          <div className="own-repositories">
            {
              this.props.profile.repositories.nodes.map((node) => (
                <ProjectProfile key={node.id} repository={node} />
              ))
            }
          </div>
          <div className="user-info">
            <img src={avatarUrl} alt="avatar" />
            <p>{name}</p>
            <p>{login}</p>
            <p>{bio}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(User, graphql`
  fragment User_profile on User {
    avatarUrl
    createdAt
    bio
    name
    login
    location
    repositories(first: 10) {
      totalCount
      nodes{
        ...ProjectProfile_repository
      }
    }
  }
` )