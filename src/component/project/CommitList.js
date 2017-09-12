import React, { Component } from 'react';
import { Button, Timeline, Icon } from 'antd';
import {
  createPaginationContainer,
  graphql
} from 'react-relay';
import Commit from './Commit';

class CommitList extends Component {
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
          <Button onClick={this._loadMore} type="primary">
            load more
            <Icon type="caret-down" />
          </Button>
        </div>
      </div>
    )
  }
  _loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(
      10, // Fetch the next 10 feed items
      e => {
        console.log(e);
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
      query CommitListForwardQuery($count: Int!, $after: String, $name: String!) {
        repository(owner: "facebook", name: $name) {
          ref(qualifiedName: "master") {
            target {
              ...CommitList_commits
            }
          }
        }
      }
    `,
    getConnectionFromProps(props) {
      console.log(arguments);
      return props.commits && props.commits.history;
    },
    getFragmentVariables(prevVars, totalCount) {
      console.log(arguments)
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      console.log(arguments)
      return {
        count,
        after: cursor,
        name: props.name
      };
    },

  }
)