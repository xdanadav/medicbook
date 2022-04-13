import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import map from '../global/map' 
import TopBanner from '../components/TopBanner'
import MapObjectView from '../MVC/View/MapObjectView'



let basePointer =  map
let pagePointer = map


export default function SectionsScreen({navigation}){
    let allButtonNames = map.children;
    const [mapObjectViews, setMapObjectViews] = useState(allButtonNames);


    const handlePress = (index) => {

      if (pagePointer.children[index].children.length == 0) {
        console.log("Navigating to topic screen...")
        navigation.navigate("TopicScreen", pagePointer.children[index].name);
        return
      }
      pagePointer = pagePointer.children[index]
      allButtonNames = pagePointer.children
      setMapObjectViews(allButtonNames)
    }

    const goBack = () => {
      if(pagePointer.parent == null) return
      pagePointer = pagePointer.parent
      
      allButtonNames = pagePointer.children
      setMapObjectViews(allButtonNames)
    }

    return(
        <View style={styles.container}>
            {/*Top Banner requires goBack function*/}
            <TopBanner goBackFunction={()=>goBack}/>
            
            {/*Back Button to go back to the other screen*/}
            <TouchableOpacity style={styles.backButtonContainer} onPress={()=>{goBack()}}>
                <Image style = {styles.backButton} source={require('../assets/ChooseBranch/backButton.png')}/>      
            </TouchableOpacity>
            
            {/*View that contains all of the layers buttons*/}
            <View style={styles.tasksWrapper}>
                <View styles={styles.items}>   
                {
                    //for each of the mapObjects we construct a View that will display it's name
                    mapObjectViews.map((item, index)=> {
                    return <MapObjectView key={index} text={item.name} onPress={() => handlePress(index)}/>
                    })
                }
                </View>
            </View>
        </View>


    );
}


const styles = StyleSheet.create({
    backButtonContainer:{
      width: '10%',
      height: '10%',
    },
    backButton:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf: "flex-end",
    },
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
  
});
  