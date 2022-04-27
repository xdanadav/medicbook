import React, {useState} from 'react';
import {StyleSheet, View, Button, Text } from 'react-native';

//Projects modules
import facade from '../MVC/Model/Facade'
import MapObjectView from '../MVC/View/MapObjectView'
import MaterialButton from '../MVC/View/MaterialButton'


export default function MaterialScreen({navigation}){
    let things = [];
    //console.log("params: ", navigation.state.params)
    //console.log("pointer", facade.materialsSnapshot)//.child(navigation.state.params))
    facade.materialsSnapshot.child(navigation.state.params).forEach(function(_child){
        things.push(_child.key);
    })
    console.log(things)

    let [topic, setTopic] = useState(things);

    let currentTopic = navigation.state.params
    let pdfURL = "https://firebasestorage.googleapis.com/v0/b/tilquiz-90d16.appspot.com/o/";
    
    console.log("things: ", things) 
    if(things.length == 0){
        console.log("\n\n\n\n\nHello\n\n\n\n")
    }

    const materialPress = (index) => {
        let currentMaterial = things[index];
        
        let docsPdfViewer = "https://docs.google.com/viewer?url="

        //TO DO: Change to clients token instead of mine to distinguish
        let token= "?alt=media&token=44fe60d4-9480-4041-a5d5-3a2e83ab3a9a";
        console.log("topic: ", currentTopic, " Material: ", currentMaterial)
        

        let fullPath = pdfURL + currentTopic + "%2F" + currentMaterial + ".pdf" + token
        console.log(fullPath)
        
        navigation.navigate("SingleMaterialScreen", fullPath)

    }

    return(
        <View style={styles.container}>
            
            {things.length == 0 ? 
            <Text style ={styles.defaultText}> אין קבצים בקטגוריה הזאת {navigation.state.params}</Text> : 
                <View styles={styles.items}>   
                        {
                            topic.map((item, index)=> {
                            return(
                                    <MaterialButton key = {index} text={item} onPress={() => materialPress(index)} />       
                            )
                            })
                        }
                </View>
            }
            
            
            
        
        </View>
    )
    
    
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#ffffff",
        opacity: 0.9,
    },
    defaultText: {
        fontSize: 50,
        color: "#fff"

    },
    items:{
        alignItems: "right",
        paddingRight: -100,
    }
});