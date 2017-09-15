import React, { Component } from 'react';
import { Button } from 'antd';
import {
  createPaginationContainer,
  graphql
} from 'react-relay';
import Issue from './Issue';

class IssueList extends Component {

  state = {
    isloading: false,
    text: 'load more',
  }

  _loadmore = () => {
    this.setState({ text: 'loading...' });
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      this.setState({ text: 'no more' });
      return;
    }
    this.setState({ isloading: true });
    this.props.relay.loadMore(
      10, // Fetch the next 10 feed items
      e => {
        this.setState({ isloading: false, text: 'load more' });
      },
    );
  }
  render() {
    const { issues } = this.props;
    return (
      <div>
        {
          issues.issues.edges.map(({ node }) => (
            <Issue key={node.__id} issue={node} />
          ))
        }
        <Button onClick={this._loadmore} loading={this.state.isloading}>
          {this.state.text}</Button>
      </div>
    )
  }
}

export default createPaginationContainer(IssueList,
  {
    issues: graphql`fragment IssueList_issues on Repository {
        issues(first: $count ,after: $after) 
          @connection(key:"IssueList_issues") {
          edges{
            node{
              ...Issue_issue
            }
          }
          pageInfo{
            endCursor
            hasNextPage
          }
      }
    }`
  },
  {
    directory: 'forward',
    query: graphql`
      query IssueListPageQuery(
        $name:String!
        $after: String
        $count: Int!
      ){
        repository(owner: "AshoneA", name: $name) {
            ...IssueList_issues
        }
      }
    `,
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        after: cursor,
        name: props.name
      };
    },
  }
);
