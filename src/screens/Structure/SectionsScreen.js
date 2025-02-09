import React, {document, WebView, useRef, useEffect, useState, useContext, createContext} from 'react';
import { Animated, Dimensions, FlatList, Text, StyleSheet, View, TouchableOpacity, Image,  BackHandler } from 'react-native';
import map from '../../../src/global/map' 
import TopBanner from '../../../res/components/TopBanner'
import BottomBanner from '../../../res/components/BottomBanner'
import MapObjectView from '../../../res/components/MapObjectView'
import GlassMenu from '../../../res/components/GlassMenu'
import Spotify from 'react-spotify-embed'

import disableScroll from 'disable-scroll';

import {useNavigate, useLocation} from 'react-router-dom'

import facade from '../../mainClasses/DatabaseFacade'
import globalStyles from '../../../src/global/Style'
import BackButton from '../../../res/components/BackButton'
import { string } from 'browserslist';
import { Easing } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import routerHistory, {NavigationOption} from '../../mainClasses/routerHistory'


let pagePointer = null

export default function SectionsScreen({navigation, route}){
  
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [lastTopic, setLastTopic] = useState(0);
    const [topicDisplayName, setTopicDisplayName] = useState('ERROR');

    const routerNavigate = useNavigate()

    let branch = navigation.state.params.branch
    let section = navigation.state.params.section
    let topic = navigation.state.params.topic
    
    
    useEffect(()=>{
        pagePointer = facade.map
        if(branch){
          pagePointer = pagePointer.getChild(branch)
          if(section){
            pagePointer = pagePointer.getChild(section)
            if( topic){
              pagePointer = pagePointer.getChild(topic)
            }
          }
        }
        
        setMapObjectViews(pagePointer.children)
      
    }, [branch, section, topic])

    
    

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

    
    /*if(pagePointer ==  null) {
      pagePointer = facade.map
      if(branch){
        pagePointer = pagePointer.getChild(branch)
        if(section){
          pagePointer = pagePointer.getChild(section)
          if( topic){
            pagePointer = pagePointer.getChild(topic)
          }
        }
      }
    }*/
    if(pagePointer == null) {
      pagePointer = facade.map
      if(branch){
        pagePointer = pagePointer.getChild(branch)
        if(section){
          pagePointer = pagePointer.getChild(section)
          if( topic){
            pagePointer = pagePointer.getChild(topic)
          }
        }
      }
    }
   


    

    //Adding A Button for each map child
    let allButtonNames = pagePointer.children
    const [mapObjectViews, setMapObjectViews] = useState(allButtonNames);



    let isFrontScreen = !Boolean(pagePointer.parent)
    let listTop = -50
    if(isFrontScreen){
      listTop = 0
    }
    
    //HandlePress navigates to the written topic based on the index
    const handlePress = (index) => {
      
      routerHistory.push(`SectionScreen`, `/${branch}/${section}`, NavigationOption.Next)
      routerNavigate(pagePointer.children[index].name, {state: {alreadyRendered: true}})
      /*setLastTopic(pagePointer.children[index].name)

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
      setMapObjectViews(allButtonNames)*/
    }
    

    //Function that triggers on native button press and navigates back
    
    const goBack = () => {
      /*if(pagePointer ==  null) pagePointer = facade.map.getChild("TrainingBranches").getChild("Medics")
      if(pagePointer.parent == null) return
      pagePointer = pagePointer.parent
      allButtonNames = pagePointer.children
      setMapObjectViews(allButtonNames)*/
      
      //routerNavigate(-1)
        if(false){}//!routerHistory.isEmpty()){routerNavigate(-1)}
        else{
            let path = constructPath(branch, section, topic)
            let pathList = path.split("/")
            let lastPath = "/"
            if(pathList.length > 2)
                lastPath = pathList.slice(0, pathList.length - 1).join("/")

        
                
            routerHistory.remove('SectionScreen' ,path)


            console.log("Display Name: ", pagePointer.parent.displayName)
            routerNavigate(lastPath, {replace: true})
            window.scrollTo(0,0)

      }
    }

    function constructPath(branch, section, topic){
      if(branch){
        if(section){
          if(topic){
            return "/" + branch + "/" + section + "/" + topic
          }
          return "/" + branch + "/" + section
        }
        return "/" + branch
      }
      return "/"
    }

    function getMenuComponent(){
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
    

    function getIconsComponent(){
        function navigateToTrivia(){
          console.log("Navigating to Trivia")
          navigation.navigate("TriviaScreen", {topicChosen: lastTopic})
        }
        function navigateToYoutube(){
          console.log("Navigating to youtubeu")
          navigation.navigate("VideosScreen", lastTopic)
        }
      
        return <Animated.View style={[styles.icons, 
                  {left: 0 ,
                  transform: [{translateX: iconsTranslation  }]}] }>
                  <TouchableOpacity style={styles.fullScreen} onPress={dismissMenu}>
                    <TouchableOpacity 
                        style={[styleIcons.youtube, {left: 0, top: 10}]} 
                        onPress={navigateToTrivia}>
                            <Image style={[styles.fullScreen, {resizeMode: 'contain'}]} source={require('../../../res/assets/glassMenu/TriviaIcon.png')} />
                    </TouchableOpacity>

                    {/*Youtube Button */}
                    <TouchableOpacity 
                        style={[styleIcons.youtube, {left: 0, top: 100}]} 
                        onPress={navigateToYoutube}>
                            <Image style={[styles.fullScreen, {resizeMode: 'contain'}]} source={require('../../../res/assets/glassMenu/YoutubeIcon.png')} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </Animated.View>
          
    }

    function setMenuInvisible(){
      setIsModalVisible(false)
    }

    function navigateFunction(screen, props){
        navigation.navigate(screen, props)
        forceUpdate()
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
    }

    function getFullGlassMenu(){
      return(<View style={styles.fullScreen}>

        {true? getIconsComponent() : <View/>}
        {true? getMenuComponent() : <View/>}
        
      </View>)


    }
    return(
      <View style={styles.fullScreen}>
          <View style={[styles.container]} >
            {/*TOP BANNER*/}
            <TopBanner style={{zIndex: 8}} isSign={isFrontScreen} goBackFunction={()=>goBack}/>
            
            {/*BACK BUTTON, Appears ONLY on topic screens*/}
            {pagePointer.parent == null? <View></View> : 
            <BackButton onPress={()=>goBack()}/>}
            
            {/*BUTTONS LIST in the topic*/}
            <View style={[styles.tasksWrapper, {height: windowHeight / 1.6}]}>
              <FlatList
                    style={[styles.flatList, {top: listTop, zIndex: 6} ]} 
                    data={mapObjectViews}
                    numColumns={1}
                    renderItem = {({item, index}) => <MapObjectView key={item.displayName} text={item.displayName} onPress={()=>handlePress(index)}/>}>
              </FlatList>
            </View>

            {/*BOTTOM BANNER*/}
            <BottomBanner style={{zIndex: 8}} stickToBottom={true} /> 
            
          </View>
          
          {/*GLASS MENU - Appears only after clicking on a Topic */}
          {isModalVisible? getFullGlassMenu() : 
          <View></View>}
          
          {branch == "Medicast"? <Spotify style={{position: 'absolute', top: 0, bottom: 0, marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto', right: 0, left: 0, marginLeft: 'auto'}} 
          link="https://open.spotify.com/episode/6U3LWmoEwYac7fshMEMZS6?si=5323e56f5414414b" /> : null}
          
        
        {/*Importing Fonts for the project */}
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
    paddingTop: 20,
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
},

fullScreen: {
  width: '100%',
  height: '100%',
},

icons: {position: 'absolute',
        zIndex: 150,
        width: '20%',
        height: '100%'},



});

const WU = Dimensions.get('window').width / 100
//const HU = windowHeight / 100


  