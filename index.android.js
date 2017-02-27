/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';

import Banner from './Banner';
import Greeting from './Greeting';
import FlexBox from './FlexBox';
import Blink from './Blink';
import Translate from './Translate';
import List from './List';
import MyScene from './MyScene';

export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => (
          <View style={styles.container}>
            <Banner />
            <MyScene
              title={route.title}
              onForward={() => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex
                });
              }}
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
            <FlexBox />
            <Translate />
            <List />
            <Blink text="Using State" />
            <Text style={styles.greetings}>
              <Greeting name="Benni" />
              <Greeting name="Clemens" />
              <Greeting name="Daniel" />
            </Text>
          </View>
        )}
      />
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
  greetings: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 10,
    borderColor: '#333333',
    borderStyle: 'solid',
    borderTopWidth: 2
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
