import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Image, TouchableOpacity } from 'react-native';
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
        backgroundColor: "#525759"
    },
    defaultText: {
        fontSize: 50,
        color: "#fff"

    },
    backButtonContainer:{
        width: '10%',
        height: '10%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    backButton:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf: "flex-end",
        position: 'static',
        
    },
});