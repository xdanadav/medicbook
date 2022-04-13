import React, {useState} from 'react';
import {StyleSheet, View, Button, Text } from 'react-native';
import MapObjectView from '../MVC/View/MapObjectView';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import TopBanner from '../components/TopBanner';
import SectionsScreen from './SectionsScreen';
import Navigator from '../routes/homeStack';
import facade from '../MVC/Model/Facade'


const model = {
    Materials: 0,
    Videos: 1,
    Presentations: 2,
    Trivia: 3,
}


export default function topicScreen({navigation}){
    let allMaterial = getFromFacade()
    let [materials, setMaterials] = useState(allMaterial);
    console.log("Params", navigation.state.params)
    const LeftActions = () => {
        return(
            <Navigator/>
        )
    }
    const goBack = () => {
        navigation.navigate("SectionsScreen");
    }

    const segueTo = (index) =>{

        console.log("index" , index)
        console.log(".key = ", model.Materials)
        
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
            <View style={styles.tasksWrapper}>
                <Swipeable
                    renderLeftActions={LeftActions}
                    onSwipeableLeftOpen={goBack}
                    >
                    <View styles={styles.items}>   
                    {
                        materials.map((item, index)=> {
                        return(
                                <MapObjectView key = {index} text={item} onPress={() => facade.writeTry()}/>//segueTo(index)}/>       
                        )
                        })
                    }
                    </View>
                </Swipeable>
            </View>
        </View>
    )

}

function getFromFacade(){
    return ["חומרים", "סרטונים", "מצגות", "טריוויה"]
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF', 
      height: '150%',
    },
    taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
  
      backgroundColor: '#2A2A2A',
    },
    sectionTitle: {
      fontSize: 50,
      fontWeight: 'bold',
  
    },
    items:{},
    HelloText:{
      backgroundColor: '#78A409',
  
  
    },
    touchableOpacity: {
      backgroundColor: '#22AAFF',
      width: 100,
      aspectRation: 1,
    },
    imageView: {
      height: 300,
      width: 300,
  
    },
    topBanner: {
      height: 300,
      width: 300,
    },
    buttonsText:{
        color: 'white',
        fontSize: 32,
    },
    leftAction: {
        backgroundColor: "#FFD700",
        justifyContent: 'center',
        flex: 1,
    },
    leftActionText:{
        color: "#fff",
        fontWeight: 600,
        padding: 20,
    },
  
});