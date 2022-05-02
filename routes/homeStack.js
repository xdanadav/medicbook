import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import {View} from 'react-native'

import SectionsScreen from '../screens/SectionsScreen';
import TopicScreen from '../screens/TopicScreen';
import DefaultScreen from '../screens/DefaultScreen';
import MaterialsScreen from '../screens/MaterialsScreen';
import VideosScreen from '../screens/VideosScreen';
import PresentationsScreen from '../screens/PresentationsScreen';
import TriviaScreen from '../screens/TriviaScreen';
import SingleMaterialScreen from '../screens/SingleMaterialScreen';
import PreEnteryLoadingScreen from '../screens/LoadingScreens/PreEnteryLoadingScreen';
import YoutubePlayerScreen from '../screens/YoutebePlayerScreen';
import VideosLoadingScreen from '../screens/LoadingScreens/VideosLoadingScreen'

const screens = {
    PreEnteryLoadingScreen : {
        screen: PreEnteryLoadingScreen,
        navigationOptions: {
            header: null,
        }
    },
    SectionsScreen: {
        screen: SectionsScreen,
        navigationOptions: {
            header: null,
        }
    },
    SingleMaterialScreen:{
        screen: SingleMaterialScreen
    },
    YoutubePlayerScreen: {
        screen: YoutubePlayerScreen
    },
    TopicScreen: {
        screen: TopicScreen,
        navigationOptions: {
            header: null,
        }
    },
    DefaultScreen: {
        screen: DefaultScreen
    },
    MaterialsScreen: {
        screen: MaterialsScreen
    },
    TriviaScreen: {
        screen: TriviaScreen
    },
    PresentationsScreen: {
        screen: PresentationsScreen
    },
    VideosScreen: {
        screen: VideosScreen,
    },
    VideosLoadingScreen: {
        screen: VideosLoadingScreen,
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);