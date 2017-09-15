import React, { Component } from 'react';
import { Button } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { browserHistory } from 'react-router';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import starPir from './utils/starPie';
import repBar from './utils/repBar';

const initState = {
  languages: new Map(),
  option: {
    series: []
  },
}

class Chart extends Component {

  state = {
    ...initState,
  }
  level = 1

  onEvents = {
    'click': this.onChartClick
  }

  componentDidMount() {
    this.setStarOption();
  }

  setStarOption = () => {
    const edges = this.props.stars.starredRepositories.edges;
    const { languages } = this.state;
    edges.forEach((edge) => {
      if (edge.node.primaryLanguage === null) {
        return;
      }
      const { name } = edge.node.primaryLanguage;
      if (languages.has(name)) {
        languages.set(name, languages.get(name) + 1);
      } else {
        languages.set(name, 1);
      }
    })
    let data = [];
    languages.forEach((value, key) => {
      data.push({ value, name: key });
    })
    this.setState({ option: starPir(data) });
  }

  onChartClick = (e) => {
    if (this.level === 1) {
      this.level = 2;
      let starredRep = [];
      const { edges } = this.props.stars.starredRepositories;
      console.log(this.props);
      edges.forEach(({ node }) => {
        if (node.primaryLanguage !== null && node.primaryLanguage.name === e.name) {
          starredRep.push({ name: `${node.owner.login}/${node.name}`, value: node.stargazers.totalCount })
        }
      })
      this.setStarredSort(starredRep.sort((a, b) => a.value - b.value));
    } else {
      this.level = 2;
      browserHistory.push(`/chart/${e.name}`);
    }

  }

  setStarredSort = (data) => {
    this.setState({ option: repBar(data) });
  }

  render() {
    let onEvents = {
      'click': this.onChartClick
    }
    return (
      <div style={{ height: 800 }}>
        <Button onClick={
          () => {
            this.level = 1;
            this.setState({ languages: new Map() }, () => {
              this.setStarOption()
            });
          }
        }>返回</Button>
        <ReactEcharts
          onEvents={onEvents}
          notMerge={true}
          option={this.state.option}
          style={{ height: '100%', width: '100%' }}
          className='react_for_echarts' />
      </div>
    )
  }
}

export default createFragmentContainer(Chart, graphql`
  fragment Chart_stars on User {
    starredRepositories(last:50){
      totalCount
      edges{
        node{
          owner{
            login
            repositories(first:0){
              totalCount
            }
          }
          stargazers(first:0){
            totalCount
          }
          name
          primaryLanguage {
            id
            color
            name
          }
        }
      }
    }
  }
`)