import React, {useState} from 'react';
import {StyleSheet, View, Button, Text } from 'react-native';

export default function DefaultScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style ={styles.defaultText}> Presentations Page for:</Text>
            <Text style={styles.defaultText}> {navigation.state.params} </Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#AAFF1B"
    },
    defaultText: {
        fontSize: 50,
        color: "#F17581"

    },
});