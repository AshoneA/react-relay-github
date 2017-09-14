import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import ReactEcharts from 'echarts-for-react';
import { browserHistory } from 'react-router';
import PRBar from './utils/PRBar';
import UserRepoPage from './UserRepoPage';


class PRChart extends Component {

  state = {
    option: PRBar([]),
    user: 'AshoneA'
  }

  componentDidMount() {
    this.setPROption();
  }

  setPROption = () => {
    const data = {};
    this.props.PR.pullRequests.edges.map(({ node }) => {
      const { login } = node.author;
      data[login] = data[login] ? data[login] + 1 : 1;
    })
    const PRBarData = Object.keys(data)
      .map(k => ({ name: k, value: data[k] }))
      .sort((a, b) => a.value - b.value)
    this.setState({ option: PRBar(PRBarData) });
  }

  render() {
    return (
      <div>
        <ReactEcharts
          style={{ height: 800 }}
          option={this.state.option}
          onEvents={{
            click: (e) => {
              this.setState({ user: e.name });
            }
          }}
        />
        <UserRepoPage name={this.state.user} />
      </div>
    )
  }
}

export default createFragmentContainer(PRChart, graphql`
  fragment PRChart_PR on Repository{
    pullRequests(last:50){
      totalCount
      edges{
        node{
          createdAt
          title
          author {
            avatarUrl
            login
            resourcePath
            url
          }
        }
      }
    }
  }
`);