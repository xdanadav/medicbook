import React, {document, WebView, useRef, useEffect, useState} from 'react';
import { Animated, Dimensions, FlatList, Text, StyleSheet, View, TouchableOpacity, Image,  BackHandler } from 'react-native';
import map from '../../../src/global/map' 
import TopBanner from '../../../res/components/TopBanner'
import BottomBanner from '../../../res/components/BottomBanner'
import MapObjectView from '../../../res/components/MapObjectView'
import GlassMenu from '../../../res/components/GlassMenu'
import disableScroll from 'disable-scroll';

import {useNavigate, useLocation} from 'react-router-dom'

import facade from '../../mainClasses/DatabaseFacade'
import globalStyles from '../../../src/global/Style'
import BackButton from '../../../res/components/BackButton'
import { string } from 'browserslist';
import { Easing } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';






let pagePointer = null

export default function SectionsScreen({navigation, route}){
    console.log("Navigation: First Navigation", navigation)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [lastTopic, setLastTopic] = useState(0);
    const [topicDisplayName, setTopicDisplayName] = useState('ERROR');
    //mapPointer = facade.map

  //Location of the entery
    
    const navigationObj = useNavigate()
    const locationObj = useLocation()

    //Glass Animation Propreties
    const maxTranslation = -400
    const translation = useRef(
      new Animated.Value(0)
    ).current;
    const maxIconsTranslation = -100
    let iconsTranslation = useRef(
      new Animated.Value(maxIconsTranslation)
    ).current


    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    //Adding A Button for each map child
    let allButtonNames = facade.map.children
    const [mapObjectViews, setMapObjectViews] = useState(allButtonNames);
    

    if(pagePointer ==  null) pagePointer = facade.map

    let isFrontScreen = !Boolean(pagePointer.parent)
    let listTop = -50
    if(isFrontScreen){
      listTop = 0
    }
    
    //HandlePress navigates to the written topic based on the index
    const handlePress = (index) => {
      setLastTopic(pagePointer.children[index].name)

      if (pagePointer.children[index].children.length == 0) {
        console.log("no children")
        
        //scroll to the top, and show the menu
        setTopicDisplayName(pagePointer.children[index].displayName)
        //console.log(pagePointer.children[index], topicDisplayName)
        Animated.timing(translation, {
          toValue: maxTranslation,
          duration: 320,
          useNativeDriver: false
          //delay: 20,
        }).start();
        Animated.timing(iconsTranslation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start();        
        //navigation.navigate("TopicScreen", pagePointer.children[index].name);
        setIsModalVisible(true)
        window.scrollTo(0,0)

        return
      }
      pagePointer = pagePointer.children[index]
      allButtonNames = pagePointer.children
      setMapObjectViews(allButtonNames)
    }
    console.log("Navigation: ", navigation)

    //Function that triggers on native button press and navigates back
    const goBack = () => {
      
      if(pagePointer ==  null) pagePointer = facade.map.getChild("TrainingBranches").getChild("Medics")
      if(pagePointer.parent == null) return
      pagePointer = pagePointer.parent
      allButtonNames = pagePointer.children
      setMapObjectViews(allButtonNames)
      window.scrollTo(0,0)
    }

    function getMenu(){
      return <Animated.View style={[styles.GlassMenuAnimatedView, 
        {right: maxTranslation,
        transform: [{translateX: translation}]}] }>
      
          <GlassMenu navigationFunction={navigateFunction} 
                    facade = {facade} 
                    topic={lastTopic} 
                    topicDisplayName={topicDisplayName} 
                    dismissFunction={dismissMenu}
                    navigation={navigation}/>

      </Animated.View>
    }

    function getIcons(){
        function navigateToTrivia(){
          console.log("Navigating to Trivia")
          navigation.navigate("TriviaScreen", {topicChosen: lastTopic})
        }
        function navigateToYoutube(){
          console.log("Navigating to youtubeu")
          navigation.navigate("VideosScreen", lastTopic)
        }
      
        return <Animated.View style={[{position: 'absolute', zIndex: 150, width: '20%', height: '100%'}, 
                  {left: 0 ,
                  transform: [{translateX: iconsTranslation  }]}] }>
                  <TouchableOpacity style={{width: '100%', height: '100%'}} onPress={dismissMenu}>
                    <TouchableOpacity 
                        style={[styleIcons.youtube, {left: 0, top: 10}]} 
                        onPress={navigateToTrivia}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../../../res/assets/glassMenu/TriviaIcon.png')} />
                    </TouchableOpacity>

                    {/*Youtube Button */}
                    <TouchableOpacity 
                        style={[styleIcons.youtube, {left: 0, top: 100}]} 
                        onPress={navigateToYoutube}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../../../res/assets/glassMenu/YoutubeIcon.png')} />
                    </TouchableOpacity>
                  </TouchableOpacity>
          </Animated.View>
          
    }

    function setMenuInvisible(){
      setIsModalVisible(false)
    }

    function navigateFunction(screen, props){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        navigation.navigate(screen, props)

    }

    

    function dismissMenu(){
      //function to animate the dissmising of the glassMenu
      Animated.timing(translation, {
        toValue: 0,
        duration: 400,
        delay: 70,
        useNativeDriver: false
      }).start(setMenuInvisible);

      Animated.timing(iconsTranslation, {
        toValue: maxIconsTranslation,
        duration: 700,
        delay: 100,
        useNativeDriver: false

      }
      ).start()
      //disableScroll.off()  
    }

    function getFullGlassMenu(){
      return(<View style={{width: '100%', height: '100%'}}>
        {true? getIcons() : <View/>}

        {true? getMenu() : <View/>}
        
      </View>)


    }
    return(
      <View style={{width: '100%', height: "100%"}}>
          <View style={[styles.container]} >
            {/*Top Banner requires goBack function*/}
            <TopBanner style={[styles.topBanner, {position: 'absolute'}]} isSign={isFrontScreen} goBackFunction={()=>goBack}/>
            {pagePointer.parent == null? <View></View> : 
            <BackButton onPress={()=>goBack()}/>}
            {/*Back Button to go back to the other screen*/}
            
            {true? <Text></Text>
            :
            <Text style={[styles.sectionTitle, 
            {position: 'static', 
            left: 0, 
            right: 0, 
            marginLeft: 'auto',
            marginRight: 'auto' }]}>
            {pagePointer.displayName}</Text>}

            {/*View that contains all of the layers buttons*/}
            <View style={[styles.tasksWrapper, {height: windowHeight / 1.5}]}>
              <FlatList
                    style={[styles.flatList, {top: listTop} ]} 
                    data={mapObjectViews}
                    numColumns={1}
                    renderItem = {({item, index}) => <MapObjectView key={item.displayName} text={item.displayName} onPress={()=>handlePress(index)}/>}>
              </FlatList>
            </View>

            {/*<Image style={{width: '100%', height: '10%'}} id="output" source={require('../assets/ChooseBranch/BottomBannerRectengles.png')}/>*/}
            <BottomBanner stickToBottom={true} /> {/*{isFrontScreen}/>*/}
            
          </View>
          
          {isModalVisible? getFullGlassMenu() : 
          <View></View>}
        
        <link href="https://fonts.googleapis.com/css2?family=Alef&family=Heebo&family=Ms+Madi&family=Nabla&family=Noto+Sans+Buhid&family=Open+Sans&family=Oswald&display=swap" rel="stylesheet"/>
    </View>
    
    );
    
}

const styleIcons = StyleSheet.create({

  youtube: {
      width: '90%',
      aspectRatio: 1,
      position: 'fixed',
      zIndex: 7
  },
})


const styles = StyleSheet.create({
  flatList:{
    height: '100%',
    width: '100%',
    paddingBottom: 100,
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
    height: "100%",
    width: '100%',

  },
  taskWrapper: {
    paddingHorizontal: 20,
    position: 'relative',
    top: "30%",
    
    width: '100%',
  },
  sectionTitle: {
      textAlignVertical: "center",
      textAlignHorizontal: "center",
      textAlign: "center",
      fontFamily: "Heebo",
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


  