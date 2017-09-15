import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';
import './MainLayout.css';

const { Header, Sider, Content } = Layout;

class MainLayout extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className="main-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu
            onSelect={({ item, key }) => browserHistory.push(key)}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}>
            <Menu.Item key="/user" >
              <Icon type="user" />
              <span>profile</span>
            </Menu.Item>
            <Menu.Item key="/commit/facebook/react">
              <Icon type="video-camera" />
              <span>commit history</span>
            </Menu.Item>
            <Menu.Item key="/issues">
              <Icon type="upload" />
              <span>issues</span>
            </Menu.Item>
            <Menu.Item key="/chart/primary/AshoneA">
              <Icon type="upload" />
              <span>charts</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 1440 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;