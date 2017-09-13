import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import moment from 'moment';

class IssueComment extends Component {

  _remove = () => {
    fetch.delete(`https://api.github.com/repos/AshoneA/react-relay-github/issues/comments/${this.props.comment.databaseId}`)
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="issue-issue-comment">
        <div className="avatar">
          <img style={{ width: 50 }} src={comment.author.avatarUrl} alt="" />
          <p><a href={comment.author.url}>{comment.author.login}</a>
            createdAt:{moment().to(moment(comment.createdAt))}</p>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: comment.bodyHTML }}></div>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(IssueComment, graphql`
  fragment IssueComment_comment on IssueComment{
      id
      bodyHTML
      databaseId
      createdAt
      author {
        avatarUrl
        login
        url
      }
    }
`)