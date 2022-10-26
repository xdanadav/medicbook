import React, {useState} from 'react';
import {Animated, StyleSheet, View, Button, Text } from 'react-native';

export default function DefaultScreen({navigation}){
    let state = {
        animation: new Animated.Value(0),
        opacity1 : new Animated.Value(1),
        opacity2 : new Animated.Value(0),
    };

    
    const bgStyle = {
        backgroundColor: state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["rgba(0,99,71, 1)", "rgba(255,99,71, 0)"],
        }),
    };
    let hueVal = state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
    }) 

    const filterStyle = {
        filter: "hue-rotate(" +   hueVal + ")"
    }
    console.log(filterStyle)
    console.log(hueVal)

    
    console.log(filterStyle)
    Animated.loop(
        Animated.sequence([
                Animated.timing(
                    state.opacity1, {
                        toValue: 0,
                        duration: 2000,
                }),
                Animated.timing(
                    state.opacity2, {
                        toValue: 1,
                        duration: 2000,
                }),
                Animated.timing(
                    state.opacity2, {
                        toValue: 0,
                        duration: 2000,
                }),
                
                Animated.timing(
                    state.opacity1, {
                        toValue: 1,
                        duration: 2000,
                }),
                
                ]),
        {
        iterations: 100
    }
    ).start()
    

    
    return(
        <View style={{width: '100%', height: '100%'}}>
            <Animated.Image style={[{width: '100%', height: '100%', position: 'absolute'}, {opacity: state.opacity1}]} source={require('../../res/assets/ Trivia/Group 58 (1).png')}/>
            <Animated.Image style={[{width: '100%', height: '100%', position: 'absolute'}, {opacity: state.opacity2}]} source={require('../../res/assets/ Trivia/background2.png')}/>
        </View>
        
        
    )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      height: 100,
      width: 100,
    },
  });