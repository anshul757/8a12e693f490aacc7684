import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Routes from './app/Routes';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <Routes />
      </>
    )
  }
}
const styles = StyleSheet.create({});

export default App;
