/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Banner from './Banner';
import Greeting from './Greeting';
import Blink from './Blink';


export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Banner />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Blink text="Use State" />
        <Text style={styles.instructions}>
          <Greeting name="Benni" />
          <Greeting name="Clemens" />
          <Greeting name="Daniel" />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 30
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
