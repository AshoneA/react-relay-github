import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import moment from 'moment';

class Commit extends Component {
  render() {
    const { commit } = this.props;
    return (
      <div className="project-commit">
        <div className="author">
          <a>
            <img
              style={{ width: 70, height: 70 }}
              src={commit.author.avatarUrl}
              alt={commit.author.name} />
            <p>{this.props.commit.author.name}</p>
          </a>
        </div>
        <div className="content">
          <a href={commit.commitUrl}><h3>{commit.messageHeadline}</h3></a>
          {commit.messageBodyHTML}
          <p>{moment(commit.committedDate).format('YYYY/MM/DD/ HH:mm')}</p>
        </div>
      </div >
    )
  }
}

export default createFragmentContainer(Commit, graphql`
  fragment Commit_commit on Commit {
    committedDate
    message
    messageBody
    messageBodyHTML
    messageHeadline
    commitUrl
    id
    author{
      avatarUrl
      date
      name
      email
      user{
        url
      }
    }
  }
` )
