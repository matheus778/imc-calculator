import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function Button(props){
    return (
        <TouchableHighlight onPressIn={props.onPressIn} style={styles.buttonContainer}>
            <Text style={styles.buttonText}> {props.text} </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
    margin: 10,
    width: 200,
    height: 40,
    backgroundColor: '#02734A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
    },

    buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400'
    }
});