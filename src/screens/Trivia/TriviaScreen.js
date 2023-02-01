import React, { useRef, useEffect, useState} from 'react';
import {global} from '../../global/Style'
import {Animated, ScrollView, Image, StyleSheet, View, Button, Text } from 'react-native';
import TriviaAnswer from '../../../res/components/Trivia/TriviaAnswer'
import QuestionTitle from '../../../res/components/Trivia/QuestionTitle'
import { back } from 'react-native/Libraries/Animated/Easing';
import { Easing } from 'react-native-reanimated';
import BackButton from '../../../res/components/BackButton';
import WrongButtonFragment from '../../Fragments/WrongButtonFragment'
import facade from '../../mainClasses/DatabaseFacade'
import {useNavigate, useParams} from 'react-router-dom'




function doNothing(){
    console.log("doing Nothing")
}

export default function TriviaScreen({navigation}){
    const [firstRun, setFirstRun] = useState(true)
    const [isQuestionsInTopic, setIsQuestionsInTopic] = useState(facade.isQuestionsInTopic(navigation.state.params))

    let {branch, section, topic} = useParams()
    let routerNavigate = useNavigate()

    console.log(navigation.state.params)
    if(firstRun){
        console.log("starting reading")
        setFirstRun(false)  
    }    
    
    
    function moveForward(){
        console.log("Is questions in topic", isQuestionsInTopic)
        if(isQuestionsInTopic){
            navigation.navigate("QuestionsScreen", navigation.state.params)
        }
        else{
            setNoQuestionsPopupVisible(true)
        }
        
    }

    function goBack(){
        //navigation.goBack()
        routerNavigate("/" + branch + "/" + section + "/" + topic, {replace: true})
    }


    
    const transitionOpacity = useRef(
        new Animated.Value(1)
    ).current;
    const backgroundOffset = useRef(new Animated.Value(0)).current

    const heuRotationValue = new Animated.Value(0)

    const heuRotation = heuRotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    

    // First set up animation 
    

    
    const [popUpVisible, setPopUpVisible] = useState(false)
    const [noQuestionsPopupVisible, setNoQuestionsPopupVisible] = useState(false)
    const [popUpText, setPopUpText] = useState('')
    const [popUpTextIndex, setPopUpTextIndex] = useState(0)

    





    /* Animated.timing(
                        backgroundOffset,
                        {
                            toValue: Math.floor( Math.random() * 400),
                        }
                    ), */

    function startAnimation(){
        console.log(transitionOpacity)
            Animated.loop(
                Animated.sequence([
                    Animated.timing(
                        transitionOpacity,
                        {
                            delay: 1400,
                            toValue: 0.3,
                            duration: 1000,
                            eading: Easing.easeOut
                        },
                        
                    ),
                    
                    Animated.timing(
                        transitionOpacity,
                        {
                            delay: 1400,
                            toValue: 1,
                            duration: 2000,
                            easing: Easing.easeIn
                        }
                    ),
                    
                
                
                Animated.timing(
                    transitionOpacity,
                    {
                        delay: 2000,
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.easeOut
                    },
                    
                ),
                
                Animated.timing(
                    transitionOpacity,
                    {
                        delay: 2000,
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.easeIn
                    }
                )]),
                    
            
                {
                    iterations: 100
                }
            ).start()

           
    }

    startAnimation()

    function wrongButtonPress(){
        let possibleTexts = ["לא, לא זה", "אמרנו לא זה","תנסה כפתור אחר אולי", "מה קרה לך, חביבי?", "פאשלה....", "וואי וואי אתה מוגזם", "איך עברת צו ראשון תגיד לי", "קיבינימט"]
        setPopUpVisible(true)
        setPopUpTextIndex(popUpTextIndex + 1)
        console.log(popUpTextIndex, popUpTextIndex  % possibleTexts.length)
        setPopUpText(possibleTexts[popUpTextIndex  % possibleTexts.length])

    }

    return(
        <View style={styles.container}>
            <Animated.View style={[styles.backgroundGrid, {opacity: transitionOpacity, transform: [{translateX: backgroundOffset}]}]}>
                <Image style={styles.fullSize} source={require('../../../res/assets/ Trivia/Group 58 (1).png')}/>
            </Animated.View>
            <Animated.View style={[styles.backgroundGrid, {right: "101%",opacity: transitionOpacity, transform: [{translateX: backgroundOffset}]}]}>
                <Image style={styles.fullSize} source={require('../../../res/assets/ Trivia/Group 58 (1).png')}/>
            </Animated.View>
            <BackButton onPress={goBack}/>
            <QuestionTitle question={"שאלה 1:"} text={"על מה צריך ללחוץ כדי להתחיל?"}/>
            <TriviaAnswer text={"על זה"} onPress={moveForward}/>
            <TriviaAnswer text={"על זה לא"} onPress={wrongButtonPress}/>
            <TriviaAnswer text={"על זה בטוח לא"} onPress={wrongButtonPress}/>
            {/* Pop Up */}
            {popUpVisible? <WrongButtonFragment text={popUpText} closeSelf={()=>{setPopUpVisible(false)}} visible={false}/>:
                <View/>
            }

            {noQuestionsPopupVisible? <WrongButtonFragment text={"אין שאלות בנושא זה עדיין"} closeSelf={()=>{setNoQuestionsPopupVisible(false)}} visible={false}/>:
                <View/>
            }   
            
            
            
            <link href="https://fonts.googleapis.com/css2?family=Alef&family=Heebo&family=Ms+Madi&family=Nabla&family=Noto+Sans+Buhid&family=Open+Sans&family=Oswald&display=swap" rel="stylesheet"/>
        </View>
    )   
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#fff"
    },
    backgroundGrid: {
        width: '100%', height:'100%', position: 'absolute', zIndex: -1,
    },
    fullSize: {
        width: '100%',
        height: '100%',
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