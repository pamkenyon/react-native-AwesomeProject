/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Press Cmd+M then Reload to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  _onPressHighlight() {
    Alert.alert('Hope you saw my highlight! It was there!')
  }

  _onPressOpacity() {
    Alert.alert('You saw the Opacity effect! Congratulations!')
  }

  _onPressNoFeedback() {
    Alert.alert('Nothing to see here, keep moving!')
  }

  _onLongPressLong() {
    Alert.alert('Aw yeah! You long-pressed the button!')
  }

  _onPressButton() {
    Alert.alert('That was not a long press! Try again.')
  }

  render() {
    return (
      <View style={styles.container} accessibilityLabel="testview">
        <Text style={styles.welcome}>
          Pamela's React Native App and Appium POC
        </Text>
        <Text style={styles.instructions}>
          I edit the App.js file to make changes to my app!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TextInput
          style={styles.instructions}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && ':-D').join(' ')}
        </Text>
        <TouchableHighlight style={styles.container2} onPress={this._onPressHighlight} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity style={styles.container2} onPress={this._onPressOpacity}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback style={styles.container2} onPress={this._onPressNoFeedback}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight style={styles.container2} onPress={this._onPressButton} onLongPress={this._onLongPressLong} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  container2: {
    paddingTop: 0,
    alignItems: 'center'
  },
  button: {
    marginBottom: 40,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    color: 'white',
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
  },
});
