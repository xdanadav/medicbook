import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import globalStyle from '../../../src/global/Style'

//Projects modules
import facade from '../../mainClasses/DatabaseFacade'
import MapObjectView from '../../../res/components/MapObjectView'
import MaterialButton from '../../../res/components/MaterialButton'
import BackButton from '../../../res/components/BackButton';
import { red } from 'colorette';


export default function MaterialScreen({navigation}){
    let things = [];
        facade.materialsSnapshot.child(navigation.state.params).forEach(function(_child){
        things.push(_child.child("url").val().split(".pdf")[0]);
    })

    let [topic, setTopic] = useState(things);
    let currentTopic = navigation.state.params
    let pdfURL = "https://firebasestorage.googleapis.com/v0/b/tilquiz-90d16.appspot.com/o/";

    const materialPress = (index) => {
        
        let currentMaterial = things[index];
        let fullPath = facade.getMaterialUrl(currentTopic, currentMaterial)
        //TO DO: Change to clients token instead of mine to distinguish
        //let token= "?alt=media&token=94588795-6226-42ad-9f78-7cdb49792ce3"
        //
        //let path = pdfURL + currentTopic + "%2F" + currentMaterial +  ".pdf"// + token
        //let fullPath = path + token//facade.getMaterialUrl(path)
        //console.log(fullPath)
        navigation.navigate("SingleMaterialScreen", {currentTopic: currentTopic, currentMaterial: currentMaterial})//fullPath)
    }

    function addMaterial(){
        navigation.navigate("AddMaterialScreen")
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
            {/*<TouchableOpacity style={styles.addMaterialButton} onPress={()=>addMaterial()}>
                   <Text>+</Text>
                </TouchableOpacity>*/}
            {things.length == 0?  <Text style ={styles.noMaterials}> אין קבצים בנושא זה</Text>:
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

        opacity: 0.9,
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    defaultText: {
        fontSize: 50,
        color: "#fff"

    },
    noMaterials:{
        fontSize: 50,
        alignSelf: "center",
        fontWeight: 'bold',
        fontFamily: "OpenSansHebrew-Bold",
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
    addMaterialButton:{
        backgroundColor: '#DA3C3C',
        borderRadius: 100,
        width: '20%', 
        aspectRatio: 1,
        color: '#FFF', 
        fontSize: 50 }
});