import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import globalStyle from '../global/Style'

//Projects modules
import facade from '../MVC/Model/Facade'
import MapObjectView from '../MVC/View/MapObjectView'
import MaterialButton from '../MVC/View/MaterialButton'
import BackButton from '../components/BackButton';


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
            {/*things.length == 0 ? 
            <Text style ={styles.noMaterials}> אין קבצים בקטגוריה הזאת {navigation.state.params}</Text> : 
                <View styles={styles.items}>   
                        {
                            topic.map((item, index)=> {
                            return(
                                    <MaterialButton key = {index} text={item} onPress={() => materialPress(index)} />       
                            )
                            })
                        }
                </View>
                    */}
            {things.length == 0?  <Text style ={styles.noMaterials}> אין קבצים בקטגוריה הזאת</Text>:
                <FlatList data={topic}
                    numColumns={1}
                    renderItem = {({item, index}) => <MaterialButton key={index} text={item} onPress={()=>materialPress(index)}/>}>
                </FlatList>
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
    noMaterials:{
        fontSize: 100,
        alignSelf: "center",
        fontWeight: 'bold'
    },
    items:{
        alignItems: "right",
        paddingRight: -100,
        zindex: 0,
    },
    backButtonContainer:{
        width: '10%',
        height: '10%',
        width: '10%',
        height: '10%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zindex: 1,
    },
    backButton:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf: "flex-end",
        position: 'static',
    },
});