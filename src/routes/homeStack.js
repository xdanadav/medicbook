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


let screens = {
    
    PreEnteryLoadingScreen : {
        screen: PreEnteryLoadingScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    TriviaScreen: {
        screen: TriviaScreen
    },
    AddMaterialScreen:{
        screen: AddMaterialScreen
    },
    SectionsScreen: {
        screen: SectionsScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SingleMaterialScreen:{
        screen: SingleMaterialScreen,
        navigationOptions: {
            title: 'מסמך pdf',
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
    DefaultScreen: {
        screen: DefaultScreen
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
            title: 'סרטונים',
        }
    },
    VideosLoadingScreen: {
        screen: VideosLoadingScreen,
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);