import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class ProjectProfile extends Component {
  render() {
    const { repository } = this.props;
    return (
      <div className="project-profile">
        <div className="title">{repository.name}</div>

      </div>
    )
  }
}

export default createFragmentContainer(ProjectProfile, graphql`
  fragment ProjectProfile_repository on Repository {
    name
    projectsUrl
    description
    id
    primaryLanguage {
      id
      name
    }
    stargazers(first: 10) {
      totalCount
    }
  }
`)