import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, View, Button, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import facade from '../../mainClasses/DatabaseFacade'
import TopicListItem from '../../../res/components/Topics/TopicListItem'
import TopicsTopBanner from '../../../res/components/Topics/TopicsTopBanner'
import BackButton from '../../../res/components/BackButton';
import {useHistory, useLocation, useNavigate, useParams} from 'react-router-dom'
import routerHistory from '../../mainClasses/routerHistory'
import { createBrowserHistory } from 'history'
import GlassMenu from '../../../res/components/GlassMenu'

export default function TopicsScreen({navigation}){
    //Displayed whenever you go into a section.
    //Gets state.params of the branch, section and topic which are all correct children in the map
    
    let map = facade.map
    let routerNavigate = useNavigate()
    let {branch, section, topic} = useParams()

    let [topicsDisplayName, setTopicsDisplayName] = useState("None")


    
    useEffect(() => {
        if(branch){
            map = map.getChild(branch)
            if(section){
                map = map.getChild(section)
                if(topic){
                    setTopicsDisplayName(map.getChild(topic).displayName)
                }
            }
        }
        setData(map.children)
        setTitle(map.displayName)
        setShowGlassMenu(false)
        if(topic){
            setShowGlassMenu(true)
        }
        console.log("Used Effect")

        console.log("Branch: ", branch, "\nSection: ", section, "\nTopic: ", topic,  "\nShowGlassMenu: ", showGlassMenu, "\nData: ", data,  "\nTitle: ", title )

    }, [branch, section, topic])
    
   
    
    //console.log("HIstoRY ObjEct: ", routerNavigate)
    if(branch){
        map = map.getChild(branch)
        if(section){
            map = map.getChild(section)
        }
    }
    
    
    let [data, setData] = useState(map.children)
    let [title, setTitle] = useState(map.displayName)
    let [showGlassMenu, setShowGlassMenu] = useState(false)
   
    
    
    const [scrollVal, setScrollVal] = useState(0)
    function OnScroll(event) {
        
        setScrollVal(event.nativeEvent.contentOffset.y) 
        
    }

    function backButtonAction(){
        //go back to section screen
        //if(!routerHistory.isEmpty()){
        //    console.log("Popping the the HISTORY STACK")
        //    routerNavigate(-1)
        //    
        //}
        //else{
        let path = constructPath(branch, section, topic)
        let pathList = path.split("/")
        let lastPath = "/"
        if(pathList.length > 2)
            lastPath = pathList.slice(0, pathList.length - 1).join("/")
        
    
        routerHistory.remove('SectionScreen' ,path)
        routerNavigate(lastPath, {replace: true})
        window.scrollTo(0,0)

        //}
        
    }

    function getFullGlassMenu(){
        return(<View style={styles.fullScreen}>
  
          {true? getIconsComponent() : <View/>}
          {true? getMenuComponent() : <View/>}
          
        </View>)
  
  
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
                        style={[styleIcons.youtube, {left: 0, bottom: 10}]} 
                        onPress={navigateToTrivia}>
                            <Image style={[styles.fullScreen, {resizeMode: 'contain'}]} source={require('../../../res/assets/glassMenu/TriviaIcon.png')} />
                    </TouchableOpacity>

                    {/*Youtube Button */}
                    <TouchableOpacity 
                        style={[styleIcons.youtube, {left: 0, bottom: 100}]} 
                        onPress={navigateToYoutube}>
                            <Image style={[styles.fullScreen, {resizeMode: 'contain'}]} source={require('../../../res/assets/glassMenu/YoutubeIcon.png')} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </Animated.View>
          
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

    function handlePress(index){
        //console.log(map.children[index].displayName, "Display Name:")
        
        routerNavigate("/" + branch + "/" + section + "/" + map.children[index].name)
    }
    function dismissGlassMenu(){
        console.log("Back")
        routerNavigate("/" + branch + "/" + section, {replace: true})
    }

    return(
        <View style={{width: '100%', height: '100%', colors:["red", "green", "blue"],}}>
            <TopicsTopBanner scrollVal={scrollVal} degrees={0} zIndex= {9} sectionName = {title} shouldBannerChangeAccordingToScrollVal = {data.length > 11}/>
            {!showGlassMenu? <BackButton style={{zIndex: 150, position: 'absolute'}} backButtonAction={backButtonAction} onPress={backButtonAction}/>
            : <View></View>}
            <FlatList style={{zIndex: 8, width: '100%', height: 300, alignSelf: 'center',paddingTop: 100, paddingBottom: 60, marginTop: Math.min(0, -160)}} data={data}
                    renderItem = {({item, index}) => <TopicListItem item = {item.displayName} key={index} color={"#F27D88"} onPress={() =>{handlePress(index)}}/>}
                    onScroll = {OnScroll}>
            </FlatList>
            {showGlassMenu? 
                <GlassMenu navigationFunction={routerNavigate} 
                    facade = {facade} 
                    topic={topic} 
                    topicDisplayName={topicsDisplayName} 
                    branch = {branch} section = {section} topic={topic}
                    dismissFunction={dismissGlassMenu}/> 
            
        : <View></View>}
                {showGlassMenu? <Animated.View style={[styles.icons] }>
                        
                    <TouchableOpacity 
                        style={[styleIcons.youtube, {left: 0, top: 10}]} 
                        onPress={()=> {routerNavigate("option?trivia=true")}}>
                            
                            <Image style={[styles.fullScreen, {resizeMode: 'contain'}]} source={require('../../../res/assets/glassMenu/TriviaIcon.png')} />
                    </TouchableOpacity>

                    {/*Youtube Button */}
                    <TouchableOpacity 
                        style={[styleIcons.youtube, {left: 0, top: 100}]} 
                        onPress={()=>{routerNavigate("option?videos=true")}}>
                            <Image style={[styles.fullScreen, {resizeMode: 'contain'}]} source={require('../../../res/assets/glassMenu/YoutubeIcon.png')} />
                    </TouchableOpacity>
                    
                </Animated.View> : null}
        
            
        </View>
    )   
}

const styleIcons = StyleSheet.create({

    youtube: {
        width: '90%',
        aspectRatio: 1,
        position: 'absolute',
        zIndex: 100
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
          width: 100,
          height: '100%',
        },
  
  
  
  });