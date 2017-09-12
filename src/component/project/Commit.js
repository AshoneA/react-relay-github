import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class Commit extends Component {
  render() {
    return (
      <div>
        <p>author:{this.props.commit.author.name}</p>
        <p>body:{this.props.commit.messageBodyHTML}</p>
        <p>id:{this.props.commit.id}</p>
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
    }
  }
` )
