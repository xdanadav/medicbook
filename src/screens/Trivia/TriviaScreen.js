import React, {useState} from 'react';
import {global} from '../../global/Style'
import {ScrollView, StyleSheet, View, Button, Text } from 'react-native';
import MapObjectView from '../../../res/components/MapObjectView'




function doNothing(){
    console.log("doing Nothing")
}

export default function TriviaScreen({navigation}){
    function goToTrivia(){
        console.log("Trying To go to trivia")
        
        navigation.navigate("TriviaScreen", navigation.state.params);
    }
    return(
        <View style={styles.container}>
            <Text style ={styles.questionNumberText}> שאלה 1:</Text>
            <Text style ={styles.defaultText}> על מה צריך ללחוץ כדי להתחיל?</Text>
            <MapObjectView text={"על זה נראה לי"} onPress={doNothing}/>
            <MapObjectView text={"לא על זה"} onPress={doNothing}/>
            <MapObjectView text={"בטוח לא על זה"} onPress={doNothing}/>
            <MapObjectView text={"swipe"} onPress={goToTrivia}/>
            <Text style={global.globalStyles.defaultText}> {navigation.state.params} </Text>
        </View>
    )   
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#fff"
    },
    questionNumberText: {
        fontSize: 40,
        color: "#000",
        alignSelf: "center",
    },
    defaultText: {
        fontSize: 25,
        color: "#000",
        alignSelf: "center",

    },
});