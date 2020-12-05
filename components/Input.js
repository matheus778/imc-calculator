import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Input(props){
    return(
        <TextInput onChangeText={props.onChangeText} style={styles.input} keyboardType={"numeric"} > 
        </TextInput>
    );
}


const styles = StyleSheet.create({
    input: {
        margin: 10,
        width: 120,
        height: 40,
        borderRadius: 8,
        borderWidth:5,
        borderColor: '#02734A',
        textAlign: 'center'
    }
});