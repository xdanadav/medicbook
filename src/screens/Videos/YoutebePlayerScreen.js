import React, {useState} from 'react';
import {StyleSheet, View, Button, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YoutubePlayerScreen({navigation}){
    return(
        <View>
            <YoutubePlayer 
                height={300}
                play={true}
                videoId={'Jt2gLGvLKW0'}
                host= {"${window.location.protocol}"}
                
            
            />
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