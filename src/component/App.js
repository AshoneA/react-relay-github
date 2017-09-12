import React, { Component } from 'react';
import MainLayout from './MainLayout.jsx';

class App extends Component {
  render() {
    return (
      <MainLayout>
        {this.props.children}
      </MainLayout>
    )
  }
}

export default App;