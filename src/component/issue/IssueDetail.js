import React, { Component } from 'react';
import moment from 'moment';
import {
  createRefetchContainer,
  graphql
} from 'react-relay';
import { Input, Button } from 'antd';
import IssueComment from './IssueComment';
import CreateCommenttMutation from '../../mutations/CreateCommentMutation';

const { TextArea } = Input;
class IssueDetail extends Component {
  state = {
    content: '',
    publishing: false,
  }

  _createComment = () => {
    this.setState({ publishing: true });
    CreateCommenttMutation(this.props.issue.issue.id, this.state.content,
      () => {
        this.refetch();
        this.setState({ content: '', publishing: false });
      })
  }

  refetch = () => {
    this.props.relay.refetch(refetchVariables => refetchVariables, null);
  }

  render() {
    const { issue } = this.props.issue;
    return (
      <div className="issue-detail">
        <div className="header">
          <div className="title">
            <h1>{issue.title} #{issue.number}</h1>
            <p>{moment().to(moment(issue.createdAt))} by {issue.author.login}
              {issue.comments.totalCount} comments
            </p>
          </div>
          <div className="avatar">
            <img src={issue.author.avatarUrl} alt="" />
          </div>
        </div>
        <div className="body">
          <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}></div>
        </div>
        <div className="comments">
          {
            issue.comments.edges.map(({ node }) => (
              <IssueComment key={node.__id} comment={node} refetch={this.refetch} />
            ))
          }
        </div>
        <div className="publish">
          <TextArea
            value={this.state.content}
            rows={8}
            onChange={e => this.setState({ content: e.target.value })}
          />
          <Button
            disabled={this.state.publishing}
            style={{ float: 'right', margin: 10 }}
            type="primary" onClick={this._createComment}>Comment</Button>
        </div>
      </div>
    )
  }
}

export default createRefetchContainer(IssueDetail, {
  issue: graphql`
  fragment IssueDetail_issue on Repository {
    issue(number:$number) {
      id
      createdAt
      bodyHTML
      number
      title
      author{
        avatarUrl
        login
      }
      comments(first:100){
        totalCount
        edges{
          node{
            ...IssueComment_comment
          }
        }
      }
    }
  }
`},
  graphql.experimental`
  query IssueDetailQuery($number: Int!) {
    repository(owner: "AshoneA", name: "react-relay-github") {
      ...IssueDetail_issue 
    }
  }
  `,
)