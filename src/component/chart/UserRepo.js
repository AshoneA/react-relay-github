import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import ReactEcharts from 'echarts-for-react';
import UserRepoBar from './utils/UserRepoBar';

class UserRepo extends Component {

  state = {
    option: UserRepoBar([])
  }

  componentDidMount() {
    this.setUserRepoOption();
  }

  setUserRepoOption = () => {
    const data = {};
    console.log(this.props)
    this.props.repo.repositories.edges.forEach(({ node }) => {
      if (!node.primaryLanguage) return;
      const { name } = node.primaryLanguage;
      data[name] = data[name] ? data[name] + 1 : 1;
    })
    const barData = Object.keys(data).map(key => ({ name: key, value: data[key] }));
    this.setState({ option: UserRepoBar(barData) });
  }

  render() {
    return (
      <ReactEcharts
        option={this.state.option}
      />
    )
  }
}

export default createFragmentContainer(UserRepo, graphql`
  fragment UserRepo_repo on User{
    repositories(first:50){
      edges{
        node{
          primaryLanguage{
            name
          }
        }
      }
    }
  }
`)