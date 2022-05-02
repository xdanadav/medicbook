import React, {useState} from 'react';
import {FlatList, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import map from '../global/map' 
import TopBanner from '../components/TopBanner'
import MapObjectView from '../MVC/View/MapObjectView'

import facade from '../MVC/Model/Facade'
import globalStyles from '../global/Style'
import BackButton from '../components/BackButton'



let pagePointer = null

export default function SectionsScreen({navigation, route}){
    
    
  
    //mapPointer = facade.map
    
    //Adding A Button for each map child
    let allButtonNames = facade.map.getChild("TrainingBranches").getChild("Medics").children;
    //Adding a Dynamic instance that can effect the html file
    const [mapObjectViews, setMapObjectViews] = useState(allButtonNames);

    if(pagePointer ==  null) pagePointer = facade.map.getChild("TrainingBranches").getChild("Medics")
    


    
    

    //HandlePress navigates to the written topic based on the index
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

    //Function that triggers on native button press and navigates back
    const goBack = () => {
      if(pagePointer ==  null) pagePointer = facade.map.getChild("TrainingBranches").getChild("Medics")
      if(pagePointer.parent == null) return
      pagePointer = pagePointer.parent
      
      allButtonNames = pagePointer.children
      setMapObjectViews(allButtonNames)
    }

    return(
        <View style={styles.container}>
            
          {/*Top Banner requires goBack function*/}
          <TopBanner goBackFunction={()=>goBack}/>
          
          <BackButton onPress={()=>goBack()}/>
          {/*Back Button to go back to the other screen*/}
          {/*<TouchableOpacity style={styles.backButtonContainer} onPress={()=>{goBack()}}>
              <Image style = {styles.backButton} source={require('../assets/ChooseBranch/backButton.png')}/>      
          </TouchableOpacity>*/}
          
          <Text style={styles.sectionTitle}>{pagePointer.displayName}</Text>

          {/*View that contains all of the layers buttons*/}
          <View style={styles.tasksWrapper}>
              {/*<View styles={styles.items}>   
              {
                  //for each of the mapObjects we construct a View that will display it's name
                  mapObjectViews.map((item, index)=> {
                  return <MapObjectView key={index} text={item.displayName} onPress={() => handlePress(index)}/>
                  })
              }
            </View>*/}
              <FlatList data={mapObjectViews}
                    numColumns={1}
                    renderItem = {({item, index}) => <MapObjectView key={index} text={item.displayName} onPress={()=>handlePress(index)}/>}>
              </FlatList>

          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    navigationOptions:{
      headerShown: false
    },
    backButtonContainer:{
      width: '10%',
      height: '10%',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    backButton:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf: "flex-end",
        position: 'static',
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
        textAlignVertical: "center",
        textAlignHorizontal: "center",
        textAlign: "center",
        fontFamily: "Hibbo",
        fontSize: 50,
        color: '#3B3B30',
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
  