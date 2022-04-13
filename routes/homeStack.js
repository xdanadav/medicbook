import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import SectionsScreen from '../screens/SectionsScreen';
import TopicScreen from '../screens/TopicScreen';
import DefaultScreen from '../screens/DefaultScreen';
import MaterialsScreen from '../screens/MaterialsScreen';
import VideosScreen from '../screens/VideosScreen';
import PresentationsScreen from '../screens/PresentationsScreen';
import TriviaScreen from '../screens/TriviaScreen';



const screens = {
    SectionsScreen: {
        screen: SectionsScreen
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