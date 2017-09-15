import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import { Icon, Button, Popconfirm, message } from 'antd';
import moment from 'moment';
import { removeIssue } from '../../gitapi';
import { cache } from '../../relay/Environment';

class IssueComment extends Component {

  _remove = (databaseId) => {
    cache.clear();
    removeIssue(databaseId).then(() => {
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
                type="danger" size="small"
                style={{ float: 'right', position: 'absolute', right: 50 }}>
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