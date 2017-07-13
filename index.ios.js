/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeUINotOnMainThread extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.text}>
          {"ꜛ\nScroll me\nꜜ"}
        </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 200,
  }
});

AppRegistry.registerComponent('ReactNativeUINotOnMainThread', () => ReactNativeUINotOnMainThread);
