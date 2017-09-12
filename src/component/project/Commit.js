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
          <a href={commit.author.user.url}>
            <img
              style={{ width: 70, height: 70 }}
              src={commit.author.avatarUrl}
              alt={commit.author.name} />
            <p>{this.props.commit.author.name}</p>
          </a>
        </div>
        <div className="content">
          <h3>{commit.messageHeadline}</h3>
          {commit.messageBodyHTML}
          <p>{moment(commit.committedDate).format('YYYY/MM/DD/ HH:mm')}</p>
          {/* <p>id:{this.props.commit.id}</p> */}
          {/* <p>time:{commit.committedDate}</p> */}
        </div>
      </div>
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
