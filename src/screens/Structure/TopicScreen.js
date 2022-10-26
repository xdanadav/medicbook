import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Image, TouchableOpacity } from 'react-native';
import MapObjectView from '../../../res/components/MapObjectView';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import TopBanner from '../../../res/components/TopBanner';
import SectionsScreen from './SectionsScreen';
import Navigator from '../../routes/homeStack';
import facade from '../../mainClasses/DatabaseFacade'

import TopicScreenItem from '../../../res/components/TopicScreenItem'
import BackButton from '../../../res/components/BackButton';


const model = {
    Materials: 0,
    Videos: 1,
    Presentations: 3,
    Trivia: 2,
}


export default function topicScreen({navigation}){
    let allMaterial = getFromFacade()
    let [materials, setMaterials] = useState(allMaterial);

    


    const LeftActions = () => {
        return(
            <Navigator/>
        )
    }
    

    const allowForwardNavigation = () =>{

    }

    const segueTo = (index) =>{
        console.log("index" , index)
        console.log(".key = ", model.Materials)
        console.log("\n\n\n Navigation State Params:\n\n\n\n", navigation.state.params)
        switch(index){
            case model.Materials:
                navigation.navigate("MaterialsScreen", navigation.state.params);
                break;
            case model.Videos:
                navigation.navigate("VideosScreen", navigation.state.params);
                break;
            case model.Presentations: 
                navigation.navigate("PresentationsScreen", navigation.state.params);
                break;
            case model.Trivia:
                navigation.navigate("TriviaScreen", navigation.state.params);
                break;
            default:
                navigation.navigate("DefaultScreen", navigation.state.params);
        }
        return
    }
    return(
        <View style={styles.container}>
            <BackButton onPress={() => navigation.goBack()}/>

            <View styles={styles.items}>   
            {   
                
                materials.map((item, index)=> {
                return(
                        <TopicScreenItem key = {index} text={item} onPress={() => segueTo(index)}/>       
                )
                })
            }
            </View>
    
        </View>
    )

}

function getFromFacade(){
    return ["חומרים", "סרטונים", "טריוויה"]//, "טריוויה"]
}

const styles = StyleSheet.create({
    items: {
        width: "100%"
    },
    container: {
        backgroundColor: "#FFFFFF",
        height: '100%',
    }
  
});