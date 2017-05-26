import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, Button, View } from 'react-native';

class myApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'command' : '',
            'result' : '',
        };
    }

    buttonClick() {
        this.setState({'result':eval(this.state.command)});
    }

    render() {
        return(
            <View>
                <TextInput onChangeText = {(text) => {this.setState({'command':text});}} />
                <Button onPress = {() =>{this.buttonClick()}} title="Calculate" />
                <Text>Command: {this.state.command}</Text>
                <Text>Result: {this.state.result}</Text>
            </View>
        );
    }

}

AppRegistry.registerComponent('myApp', ()=>myApp)
