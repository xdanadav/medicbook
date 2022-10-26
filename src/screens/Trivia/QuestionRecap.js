import React, { useRef, useEffect, useState} from 'react';
import {global} from '../../global/Style'
import {Animated, ScrollView, Image, StyleSheet, View, Button, Text } from 'react-native';
import TriviaAnswer from '../../../res/components/Trivia/TriviaAnswer'
import QuestionTitle from '../../../res/components/Trivia/QuestionTitle'
import { back } from 'react-native/Libraries/Animated/Easing';
import { Easing } from 'react-native-reanimated';
import BackButton from '../../../res/components/BackButton';
import WrongButtonFragment from '../../Fragments/WrongButtonFragment'
import Question from '../../mainClasses/Question'




function doNothing(){
    console.log("doing Nothing")
}
/*[
    new Question("שאלה 1", 0, ["1", "2", "3", "4", "5"]), new Question("שאלה 2", 0, ["1", "2", "3", "4", "5"]),
    new Question("שאלה 3", 0, ["1", "2", "3", "4", "5"]), new Question("שאלה4", 0, ["1", "2", "3", "4", "5"]),
    new Question("שאלה 5", 0, ["1", "2", "3", "4", "5"]), new Question("שאלה 6", 0, ["1", "2", "3", "4", "5"]),
    new Question("שאלה 7", 0, ["1", "2", "3", "4", "5"]), new Question("שאלה 8", 0, ["1", "2", "3", "4", "5"]),
    new Question("שאלה 9", 0, ["1", "2", "3", "4", "5"]), new Question("שאלה 10", 0, ["1", "2", "3", "4", "5"]),
]*/

export default function QuestionScreen({navigation}){
    let question = navigation.state.params.question
    
    function goBack(){
        //navigation.navigate("TriviaSummary")
        navigation.goBack() 
    }
    
    
    const transitionOpacity = useRef(
        new Animated.Value(1)
    ).current;
    const backgroundOffset = useRef(new Animated.Value(0)).current

    // First set up animation 
    

    // Next, interpolate beginning and end values (in this case 0 and 1)
    

    const [answersText, setAnswersText] = useState(question.allAnswers)
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionText, setQuestionText] = useState(question.question)

    const state = {
        opacityBG1 : new Animated.Value(1),
        opacityBG2 : new Animated.Value(0),
        opacityBG3 : new Animated.Value(0),
        opacityBG4 : new Animated.Value(0),
        opacityBG5 : new Animated.Value(0),
    }
    function startAnimation(){
        
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    state.opacityBG1,
                    {
                        delay: 1400,
                        toValue: 0.3,
                        duration: 1000,
                        eading: Easing.easeOut
                    },
                    
                ),
                
                Animated.timing(
                    state.opacityBG1,
                    {
                        delay: 1400,
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.easeIn
                    }
                ),
                Animated.timing(
                    state.opacityBG1,
                    {
                        delay: 2000,
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.easeOut
                    },
                    
                ),
                
                Animated.timing(
                    state.opacityBG1,
                    {
                        delay: 2000,
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.easeIn
                    }
                )],

            {
                iterations: 10
            }
        ).start())
    }
    startAnimation()


    return(
        <View style={styles.container}>
            <Animated.View style={[styles.backgroundGrid, {opacity: state.opacityBG1, transform: [{translateX: backgroundOffset}]}]}>
                <Image style={styles.fullSize} source={require('../../../res/assets/ Trivia/RecapBackground.png')}/>
            </Animated.View>
            

            {/*<Animated.View style={[styles.backgroundGrid, {right: "101%",opacity: transitionOpacity, transform: [{translateX: backgroundOffset}]}]}>
                <Image style={styles.fullSize} source={require('../../../res/assets/ Trivia/Group 58 (1).png')}/>
            </Animated.View>*/}
            <BackButton onPress={goBack}/>
            <QuestionTitle text={questionText} 
            currentQuestionNumber={navigation.state.params.index + 1} totalQuestionsNumber={navigation.state.params.totalQuestions}/>
            
            {answersText.map((item, index)=> {
                    console.log(item, question.correctAnswer, question.answered)
                    return(
                        <TriviaAnswer text={item} key={index} 
                        correctAnswer={index == question.correctAnswer} 
                        wrongAnswer={!question.wasCorrect && index == question.answered}/>       
                    )
            })}
            
            
            
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