# Developing mobile app
* Native
    - Android studio + emulator + gradle + etc (recommended: 8 GB RAM)
* Hybrid
    - Ionic: Basically using web view
* Native app
    - Native Script: Purely in javascript, compiled into native app
        - Same codebase for both IOS and android (sounds good, but has it's own drawback)
    - __React Native__: Different codebase for android and android.

# Why React Native?
* Facebook and Instagram mobile app were built on top of it
* Using OS specific features.
* You prefer to code in notepad++ / sublime / atom / emacs / vim
* You love javascript
* Different codebase for android and IOS?
    - Not really.

# Preparation - Installation
* Ensure you have android SDK, Node JS, and NPM installed
* Run this command:
    - `npm install -g react-native-cli`
* put this in ~/.profile 
```bash
export ANDROID_HOME=${HOME}/Android/Sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
* Install yarn to make things faster
    - `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
    - `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

# Preparation - Real device
* Enable USB Debugging
* Install Vysor (google chrome extension)

# Preparation - Start Project
* Connect to internet
* `react-native init myApp`
* `cd myApp`
* Run `adb reverse tcp:8081 tcp:8081` to avoid white-blank-screen problem
* `npm start`
* `react-native run-android`

# Preparation (Alternative)
* Connect to internet
* Open up https://facebook.github.io/react-native/docs/tutorial.html
* Start to code there

# Code 01 - Hello world
```javascript
import React, { Component } from 'react';
import {AppRegistry,Text,View} from 'react-native';

export default class myApp extends Component {
  render() {
    return (
        <Text>Hello World</Text>
    );
  }
}

AppRegistry.registerComponent('myApp', () => myApp);
```

* jsx
* Anonymous function

# Code 02 - properties
```javascript
// put this on render method of code 01

let pic = 'http://imgurl/some-image.jpg';
return(
    <Text>Hello World</Text>
    <Image source={pic} style={{width: 193, height: 110}}/>
);
```
* variable
* json

# Code 03 - props
```javascript
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
```
* props are read only

# Code 04 - state
```javascript
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
```
* states are not read only

# Code 05 - funny example
```javascript
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);
```
