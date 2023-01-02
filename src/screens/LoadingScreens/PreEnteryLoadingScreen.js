import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View, Button, Text, Image } from 'react-native';
import facade, {recreateDB} from '../../mainClasses/DatabaseFacade'
import LottieView from 'lottie-react-native';
import LoadingAnimation from '../../../res/components/LoadingAnimation'
import history from '../../routes/history'

import {useNavigate, useLocation, useParams} from "react-router-dom"



class Person{
    constructor(name){
        this.name = name;
        this.id = 100;
        if(name == "Ronnie"){
            this.id = 1;
        }
    }
}


//ReactDOM.render(<LoadingAnimation/>, document.getElementById("root")) 
export default function PreEnteryLoadingScreen({navigation}){
    //Creating a loadinglistener that determines if we display the loading screen or not
    //setting a call back method at the facade, so when somthing changes it will trigger the loadinglistener to update
    
    
    
    //Fireing requests to get the structure and material
    const translation = useRef(
        new Animated.Value(0)
    ).current;

    const {branch, section, topic} = useParams()



    const signMovingUpAmount = -240
    if(!facade.isMapSet()){
        console.log("calling readStructure()")
      facade.readQuestions()
      facade.readStructure(navigateNextScreen)
      facade.readAllMaterials(navigateNextScreen)
      facade.readAllVideos(navigateNextScreen)
      
    }
    else{
        navigateNext()
        console.log("Navigating next")
    }
    let navigate = useNavigate()
    console.log("Rerender")


    let [infoCounter, setInfoCounter] = useState(0)
    function navigateNextScreen(){
        console.log("call back method called")
        //We need for all the request to come back... 3 requests currently
        //When it is called for the third time, it means all is loaded and we can navigate to the next screens
        if(infoCounter >= 2){
            Animated.timing(translation, {
                toValue: signMovingUpAmount,
                duration: 50,
                delay: 20,
                }).start(navigateNext);  
        }
        else{
            infoCounter+=1
        }
    }
    function navigateNext(){
        //navigate("/SectionScreen", {replace: true})
        navigation.navigate("SectionsScreen", {branch: branch, section: section, topic: topic})
    }
    
    return(
        <>
            <Text>Branch: {branch} Section: {section} Topic: {topic}</Text>
            <Animated.View  style={[styles.container]}>
                {/*<LottieView source={require("../animations/loadingAnimation.json")}/>
                
                <Imgae src={require('../assets/ChooseBranch/medicbook.png')}/>
                */}
                <Animated.Image style={[styles.medicbookSign , {transform: [{translateY: translation}]}]} source={require('../../../res/assets/ChooseBranch/MedicBook.1.png')}/>

            </Animated.View>
        </>
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
        color: "#fff",
        fontFamily: "David"

    },
    medicbookSign:{
        marginLeft: '15%',
        position: 'absolute',
        width: '70%',
        height: '70%',
        resizeMode: "contain",
        top: 90,
    },
});