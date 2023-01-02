import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import {View} from 'react-native'
import React from 'react'

import SectionsScreen from '../screens/Structure/SectionsScreen';
import TopicScreen from '../screens/Structure/TopicScreen';
import DefaultScreen from '../screens/DefaultScreen';
import MaterialsScreen from '../screens/Pdfs/MaterialsScreen';
import VideosScreen from '../screens/Videos/VideosScreen';
import PresentationsScreen from '../screens/PresentationsScreen';
import TriviaScreen from '../screens/Trivia/TriviaScreen';
import SingleMaterialScreen from '../screens/Pdfs/SingleMaterialScreen';
import PreEnteryLoadingScreen from '../screens/LoadingScreens/PreEnteryLoadingScreen';
import YoutubePlayerScreen from '../screens/Videos/YoutebePlayerScreen';
import VideosLoadingScreen from '../screens/LoadingScreens/VideosLoadingScreen'
import AddMaterialScreen from '../screens/Upload/AddMaterialScreen'
import QuestionsScreen from '../screens/Trivia/QuestionsScreen'
import TriviaSummary from '../screens/Trivia/TriviaSummary'
import QuestionRecap from '../screens/Trivia/QuestionRecap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigator from './homeStack'
import history from '../routes/history'


export default class MainRouter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return(<>
            <Router history={history}>
                <Routes>
                    <Route path="/" element={<Navigator options={{ headerShown: false }}/>} />
                    <Route path="/:branch" element={<Navigator options={{ headerShown: false }}/>} />
                    <Route path="/:branch/:section" element={<Navigator options={{ headerShown: false }}/>} />
                    <Route path="/:branch/:section/:topic" element={<Navigator options={{ headerShown: false }}/>} />

                    
                </Routes>
             </Router>
        </>)


    }
        


    



}