import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import { Icon, Button, Popconfirm, message } from 'antd';
import moment from 'moment';

class IssueComment extends Component {

  _remove = (databaseId) => {
    fetch(`https://api.github.com/repos/AshoneA/react-relay-github/issues/comments/${databaseId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer c8ebc092f5c9795335177a453c242b458d97df13'
      }
    }).then(() => {
      message.success('delete success!');
      this.props.refetch();
    })
      .catch(() => message.error('delete fail'));
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="issue-issue-comment">
        <div className="avatar">
          <img style={{ width: 50 }} src={comment.author.avatarUrl} alt="" />
        </div>
        <div className="content">
          <p><a href={comment.author.url}>{comment.author.login}</a>
            &nbsp;&nbsp;&nbsp;&nbsp;{moment().to(moment(comment.createdAt))}
            <Popconfirm title="Are you sure delete this comment?"
              onConfirm={() => this._remove(comment.databaseId)}>
              <Button
                type="danger" size="small" style={{ float: 'right' }}>
                <Icon type="close" />
              </Button>
            </Popconfirm>
          </p>
          <div dangerouslySetInnerHTML={{ __html: comment.bodyHTML }} style={{
            fontSize: 14,
            color: '#000000'
          }}></div>
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