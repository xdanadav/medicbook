import React, {useState} from 'react';
import {Animated, StyleSheet, View, Button, Text } from 'react-native';


export default class CompScreen extends React.Component{


    constructor(props){
        super(props)
    }

    

    render(){  
        return(
            <View style={{width: '100%', height: '100%', backgroundColor: 'blue'}}>
                
            </View>
            
            
        )
    }
       
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