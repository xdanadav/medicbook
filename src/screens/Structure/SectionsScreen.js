import React, {document, WebView, useRef, useEffect, useState} from 'react';
import { Animated, Dimensions, FlatList, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import map from '../../../src/global/map' 
import TopBanner from '../../../res/components/TopBanner'
import BottomBanner from '../../../res/components/BottomBanner'
import MapObjectView from '../../../res/components/MapObjectView'
import GlassMenu from '../../../res/components/GlassMenu'
import disableScroll from 'disable-scroll';



import facade from '../../MainClasses/Facade'
import globalStyles from '../../../src/global/Style'
import BackButton from '../../../res/components/BackButton'
import { string } from 'browserslist';
import { Easing } from 'react-native-reanimated';
//import { BlurView, VibrancyView } from "@react-native-community/blur";
//import {BlurView} from 'expo';





let pagePointer = null

export default function SectionsScreen({navigation, route}){
    

    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [backgroundBlur, setBackgroundBlur] = useState(0);
    const [lastTopic, setLastTopic] = useState(0);
    const [topicDisplayName, setTopicDisplayName] = useState('ERROR');
    //mapPointer = facade.map

    //Glass Animation Propreties
    const maxTranslation = -400
    const translation = useRef(
      new Animated.Value(0)
    ).current;


    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    //Adding A Button for each map child
    let allButtonNames = facade.map.children
    const [mapObjectViews, setMapObjectViews] = useState(allButtonNames);

    if(pagePointer ==  null) pagePointer = facade.map
    
    //HandlePress navigates to the written topic based on the index
    const handlePress = (index) => {
      setLastTopic(pagePointer.children[index].name)
    
      if (pagePointer.children[index].children.length == 0) { 
        //if we are at the Last topic we will: animate menu movment, set blur to background,
        //scroll to the top, and show the menu
        setTopicDisplayName(pagePointer.children[index].displayName)
        //console.log(pagePointer.children[index], topicDisplayName)
        Animated.timing(translation, {
          toValue: maxTranslation,
          duration: 350,
          useNativeDriver: false
          //delay: 20,
        }).start();        
        //navigation.navigate("TopicScreen", pagePointer.children[index].name);
        setIsModalVisible(true)
        setBackgroundBlur(5);
        window.scrollTo(0,0)

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

    function getMenu(){
      return <Animated.View style={[styles.GlassMenuAnimatedView, 
        {right: maxTranslation,
        transform: [{translateX: translation}]}] }>
      
        <GlassMenu  navigationFunction={navigateFunction} 
                    facade = {facade} 
                    topic={lastTopic} 
                    topicDisplayName={topicDisplayName} 
                    dismissFunction={dismissMenu}/>

      </Animated.View>
    }

    function setMenuInvisible(){
      setIsModalVisible(false)
      setBackgroundBlur(0)
    }

    function navigateFunction(props){
        navigation.navigate("SingleMaterialScreen", props)
    }

    function dismissMenu(){
      //function to animate the dissmising of the glassMenu
      Animated.timing(translation, {
        toValue: 0,
        duration: 400,
        delay: 70,
        useNativeDriver: false
      }).start(setMenuInvisible);
      //disableScroll.off()  
    }

    return(
      <View style={{width: '100%', height: '100%'}}>
        <View style={[styles.container, {filter: "blur(" + backgroundBlur.toString() + "px)"}]} >
          {/*Top Banner requires goBack function*/}
          <TopBanner style={[styles.topBanner, {position: 'absolute'}]} goBackFunction={()=>goBack}/>
          
          <BackButton onPress={()=>goBack()}/>
          {/*Back Button to go back to the other screen*/}
          
          
          <Text style={[styles.sectionTitle, 
          {position: 'static', 
          left: 0, 
          right: 0, 
          marginLeft: 'auto',
          marginRight: 'auto' }]}>
          {pagePointer.displayName}</Text>

          {/*View that contains all of the layers buttons*/}
          <View style={styles.tasksWrapper}>
             
          <FlatList style={styles.flatList} data={mapObjectViews}
                numColumns={1}
                renderItem = {({item, index}) => <MapObjectView key={item.displayName} text={item.displayName} onPress={()=>handlePress(index)}/>}>
          </FlatList>

          </View>
          {/*<Image style={{width: '100%', height: '10%'}} id="output" source={require('../assets/ChooseBranch/BottomBannerRectengles.png')}/>*/}
          <BottomBanner/>
        </View>
        
        {isModalVisible? getMenu() : 
        <View></View>}
    </View>
    );
    
}


const styles = StyleSheet.create({
  flatList:{
    

  },
  GlassMenuAnimatedView:{
    width: '100%',
    height: '100%', 
  },
  navigationOptions:{
    headerShown: false
  },
  backButtonContainer:{
    width: '10%',
    height: '10%',
    position: 'absolute',
    top: 36,
    right: 0,
    
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
    height: parseInt(100 * WU),
    width: '100%',

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
      fontFamily: global.fontFamily,
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
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    
    width: 60 * WU,
    
    aspectRatio: 3.672,
    minWidth: 150,
    flwxWrap: "wrap",
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
},
transparent: {
    backgroundColor: '#00000000'
}

});

const WU = Dimensions.get('window').width / 100
//const HU = windowHeight / 100


  