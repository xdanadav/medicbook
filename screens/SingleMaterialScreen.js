import React, {useState} from 'react';
import {StyleSheet, View, Button, Text } from 'react-native';
//import {WebView} from 'react-native-webview';

export default function SingleMaterialScreen({navigation}){
    //console.log("loged into material screen", navigation.state.params)

    return(
        <View style={styles.container}>
            {/*<Text style ={styles.defaultText}> Default Page</Text>
                <WebView style={{width: '100%', height: '100%'}} source = {{uri = navigation.state.params}}/>
            */} 
            <iframe style={{width: '100%', height: '100%'}} src={navigation.state.params}/>
            
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
        color: "#fff"

    },
});