import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import moment from 'moment';
import { Link } from 'react-router';
import { Icon, Row, Col } from 'antd';

class ProjectProfile extends Component {
  render() {
    const { repository } = this.props;
    return (
      <div className="project-profile">
        <div className="title">
          <Link to={`/commit/${repository.owner.login}/${repository.name}`}
            title="show commit history"
            style={{
              fontSize: 20,
              lineHeight: '26px'
            }}>{repository.name}</Link>
          <p style={{ fontSize: 14, margin: '4px 0 6px 0' }}>{repository.description}</p>
          <Row style={{ margin: '8px 0' }}>
            <Col span={2}><Icon type="star" />{repository.stargazers.totalCount}</Col>
            <Col span={2}><Icon type="fork" />{repository.forks.totalCount}</Col>
            <Col span={6}>{moment().to(moment(repository.updateAt))}</Col>
            <Col span={3}><span style={{
              width: 10,
              background: repository.primaryLanguage && repository.primaryLanguage.color,
              height: 10,
              display: 'inline-block',
              borderRadius: 5
            }}></span>&nbsp;&nbsp;&nbsp;
              {repository.primaryLanguage && repository.primaryLanguage.name}</Col>
          </Row >
        </div >
      </div >
    )
  }
}

export default createFragmentContainer(ProjectProfile, graphql`
  fragment ProjectProfile_repository on Repository {
    name
    description
    url
    description
    id
    updatedAt
    owner{
      login
    }
    primaryLanguage {
      id
      name
      color
    }
    stargazers(first: 10) {
      totalCount
    }
    forks(first: 10) {
      totalCount
    }
  }
`)