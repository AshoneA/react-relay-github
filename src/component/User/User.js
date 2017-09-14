import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import { Tabs } from 'antd';
import ProjectProfile from './ProjectProfile';

const { TabPane } = Tabs;
class User extends Component {

  render() {
    const {
      avatarUrl, name, login, bio, location,
      repositories, starredRepositories, watching
     } = this.props.profile;
    console.log(this.props.profile)
    return (
      <div className="user">
        <div className="profile">
          <div className="own-repositories">
            <Tabs defaultActiveKey="1" >
              <TabPane tab={`Repositories ${repositories.totalCount}`} key="1">
                {
                  repositories.nodes.map((node) => (
                    <ProjectProfile key={node.__id} repository={node} />
                  ))
                }
              </TabPane>
              <TabPane tab={`star ${starredRepositories.totalCount}`} key="2">
                {
                  starredRepositories.nodes.map((node) => (
                    <ProjectProfile key={node.__id} repository={node} />
                  ))
                }
              </TabPane>
              <TabPane tab={`watching ${watching.totalCount}`} key="3">
                {
                  watching.nodes.map((node) => (
                    <ProjectProfile key={node.__id} repository={node} />
                  ))
                }
              </TabPane>
            </Tabs>

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
    starredRepositories(first:10){
      totalCount
      nodes{
        ...ProjectProfile_repository
      }  
    }
    watching(first:10) {
      totalCount
      nodes{
        ...ProjectProfile_repository
      }
    }
  }
` )