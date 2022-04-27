import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import SectionsScreen from '../screens/SectionsScreen';
import TopicScreen from '../screens/TopicScreen';
import DefaultScreen from '../screens/DefaultScreen';
import MaterialsScreen from '../screens/MaterialsScreen';
import VideosScreen from '../screens/VideosScreen';
import PresentationsScreen from '../screens/PresentationsScreen';
import TriviaScreen from '../screens/TriviaScreen';
import SingleMaterialScreen from '../screens/SingleMaterialScreen';
import PreEnteryLoadingScreen from '../screens/PreEnteryLoadingScreen';


const screens = {
    PreEnteryLoadingScreen : {
        screen: PreEnteryLoadingScreen
    },
    SectionsScreen: {
        screen: SectionsScreen
    },
    SingleMaterialScreen:{
        screen: SingleMaterialScreen,
        
    },
    TopicScreen: {
        screen: TopicScreen
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
        screen: VideosScreen
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);