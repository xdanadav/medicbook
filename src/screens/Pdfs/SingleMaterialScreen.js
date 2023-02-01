import React, {useState, useEffect} from 'react';
import {WebView, Dimensions, StyleSheet, View, Button, Text, Image, TouchableOpacity } from 'react-native';
import facade from '../../mainClasses/DatabaseFacade'
import BackButton from '../../../res/components/BackButton'
import {useNavigate, useParams} from 'react-router-dom'


//import {Document, Page} from 'react-pdf';
//import {WebView} from 'react-native-webview';



export default function SingleMaterialScreen({navigation}){
    
    const [pdfFile, setPdfFile] = useState(null)
    let {branch, section, topic} = useParams()
    const [url, setUrl] = useState(
        "https://storage.googleapis.com/tilquiz-90d16.appspot.com/" +  topic + "%2F" + navigation.state.params.pdfURL
    )
    
    let routerNavigate = useNavigate()
    

    //useEffect(() => {
    //    setUrl(facade.getMaterialUrl(navigation.state.params.currentTopic, navigation.state.params.material.url))
    //    console.log(url)
    //}, [])

    //url = "https://docs.google.com/viewer?url=" + url + "&embedded=true"
    
    useEffect(() => {
        setUrl("https://storage.googleapis.com/tilquiz-90d16.appspot.com/" +  topic + "%2F" + navigation.state.params.pdfURL)
    })

    function setTitle(){
        console.log("setting title")
        navigation.setParams({
            title: `Your Updated Title`,
        })
    }

    function goBack(){
        console.log("eEHKJ")
        console.log(branch, "LOCSTIONOI") ;
        routerNavigate("/" + branch + "/" + section + "/" + topic, {replace: true})
    }

    const windowHeight = Dimensions.get('window').height;
    
    return(
        <View style={styles.container}>
            {/*<Text style ={styles.defaultText}> Default Page</Text>
                <WebView style={{width: '100%', height: '100%'}} source = {{uri = navigation.state.params}}/>
            
            <TouchableOpacity  style = {styles.item} onPress={setTitle}>{navigation.state.params.currentMaterial}</TouchableOpacity>
            */}
            <TouchableOpacity style={{alignText: 'center'}} onPress={()=>{goBack()}}> exit</TouchableOpacity>
            <BackButton onPress={goBack} />
            {/*<iframe style={{width: '100%', height: "10%"}} src={url}/>*/}

            <iframe style={{width: '100%', height: "90%"}} src={"https://docs.google.com/viewer?url=" + 
            url + 
            "&embedded=true"}/>
            
            
           
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
    item: {
        backgroundColor: '#E3EEFF',
        borderRadius: 30,
        marginBottom: 15,
        marginTop: 15,
    
        
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        
        maxWidth: '90%',
        marginLeft: '5%',
        aspectRatio: 6,
        minWidth: 150,
        flwxWrap: "wrap",

    },
});