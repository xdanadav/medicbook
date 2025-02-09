import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import {View} from 'react-native'

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
import TopicsScreen from '../screens/Structure/TopicsScreen'


let screens = {
   
    PreEnteryLoadingScreen : {
        screen: PreEnteryLoadingScreen,
        
        navigationOptions: {
            headerShown: false,
        },
        
    }, 
    DefaultScreen: {
        screen: DefaultScreen
    },
    TopicsScreen: {
        screen: TopicsScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    
    TriviaScreen: {
        screen: TriviaScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    
    SectionsScreen: {
        screen: SectionsScreen,
        
        navigationOptions: {
            headerShown: false
        }
    },
    
    QuestionRecap: {
        screen: QuestionRecap,
        navigationOptions: {
            headerShown: false,
        }
    },
    TriviaSummary: {
        screen: TriviaSummary,
        navigationOptions: {
            headerShown: false,
        }
    },
    
    
    
    AddMaterialScreen:{
        screen: AddMaterialScreen
    },
    
    SingleMaterialScreen:{
        screen: SingleMaterialScreen,
        navigationOptions: {
            headerShown: false,
        }
        
    },
    YoutubePlayerScreen: {
        screen: YoutubePlayerScreen
    },
    
    TopicScreen: {
        screen: TopicScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    
    MaterialsScreen: {
        screen: MaterialsScreen,
        navigationOptions:{
            title: 'חומרים'
        }
    },
    
    PresentationsScreen: {
        screen: PresentationsScreen
    },
    VideosScreen: {
        screen: VideosScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    VideosLoadingScreen: {
        screen: VideosLoadingScreen,
        
    },
    QuestionsScreen: {
        screen: QuestionsScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);