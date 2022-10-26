import React, {useState} from 'react';
import {Image, StyleSheet, View, Button, Text } from 'react-native';
import facade from '../../mainClasses/DatabaseFacade'

export default function DefaultScreen({navigation}){
    
    let [canNavigate, setCanNavigate] = useState(facade.didVideosLoad())
    if(facade.didVideosLoad()){
        navigation.navigate("VideosScreen", navigation.state.params);
    }
    return(
        <View style={styles.container}>
            <Image style={styles.medicbookSign} source={require('../../../res/assets/ChooseBranch/MedicBook.1.png')}/>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    defaultText: {
        fontSize: 50,
        color: "#fff"

    },
    medicbookSign:{
        marginLeft: '20%',
        position: 'absolute',
        width: '60%',
        height: '60%',
        resizeMode: "contain",
        top: 90,
    },
});