import React, { Component } from 'react';
import { Button, Timeline } from 'antd';
import {
  createPaginationContainer,
  graphql
} from 'react-relay';
import Commit from './Commit';

class CommitList extends Component {

  state = {
    isloading: false,
    text: 'load more',
  }
  render() {
    return (
      <div>
        <Timeline>
          {
            this.props.commits.history.edges.map(({ node }) => (
              <Timeline.Item key={node.__id}>
                <Commit commit={node} />
              </Timeline.Item>
            ))
          }
        </Timeline>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            loading={this.state.isloading}
            onClick={this._loadMore}
            type="primary"
          >
            {this.state.text}
          </Button>
        </div>
      </div>
    )
  }
  _loadMore = () => {
    this.setState({ text: 'loading...' });
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      this.setState({ text: 'no more' });
      return;
    }
    this.setState({ isloading: true });
    this.props.relay.loadMore(
      10,
      e => {
        this.setState({ text: 'load more' });
        this.setState({ isloading: false });
      },
    );
  }
}

export default createPaginationContainer(CommitList,
  {
    commits: graphql`
    fragment CommitList_commits on Commit{
      history(
        first:$count,
        after:$after,
      ) @connection(key: "CommitList_history"){
        edges{
          node{
            ...Commit_commit
          }
        }
        pageInfo{
          endCursor
          hasNextPage
        }
      }
    }
  `
  },
  {
    direction: 'forward',
    query: graphql`
      query CommitListForwardQuery($count: Int!, $after: String, $name: String!,$owner: String!) {
        repository(owner: $owner, name: $name) {
          ref(qualifiedName: "master") {
            target {
              ...CommitList_commits
            }
          }
        }
      }
    `,
    getVariables({ name, owner }, { count, cursor }, fragmentVariables) {
      return {
        count,
        after: cursor,
        name,
        owner,
      };
    },

  }
)