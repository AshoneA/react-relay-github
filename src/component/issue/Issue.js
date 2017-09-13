import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import moment from 'moment';

class Issue extends Component {

  render() {
    const { issue } = this.props;
    return (
      <div className="issue-issue">
        <div className="avatar">
          <a href={issue.author.url}>
            <img src={issue.author.avatarUrl} alt={issue.author.url} />
          </a>
        </div>
        <div className="profile">
          <h2><Link to={`issues/${issue.number}`}>{issue.title}</Link></h2>
          <p>
            #{issue.number}
            {moment().to(moment(issue.updatedAt))} by {issue.author.login}
            {issue.comments.nodes[0] && `the last replay from ${issue.comments.nodes[0].author.login}`}
          </p>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(Issue, graphql`
  fragment Issue_issue on Issue {
    title
    id
    number
    updatedAt
    author {
      login
      avatarUrl
      url
    }
    comments(last:1){
      nodes{
        author {
          login
        }
      }
    }
  }
`)