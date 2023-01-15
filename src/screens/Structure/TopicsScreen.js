import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, View, Button, Text, FlatList } from 'react-native';

import facade from '../../mainClasses/DatabaseFacade'
import TopicListItem from '../../../res/components/Topics/TopicListItem'
import TopicsTopBanner from '../../../res/components/Topics/TopicsTopBanner'
import BackButton from '../../../res/components/BackButton';
import {useHistory, useLocation, useNavigate} from 'react-router-dom'
import routerHistory from '../../mainClasses/routerHistory'
import { createBrowserHistory } from 'history'

export default function TopicsScreen({navigation}){
    let map = facade.map
    //["אנטומיה", "אנמנזה", "קרימינולוגיה", "עששת", "חדשות 12", "קרמבו", "עבודה בצוות", "עבודה בצוות", "OneMore", "כישופי רפואה" , "עוד"]//Array(15).fill("אנטומיה")
    let routerNavigate = useNavigate()
    let branch = navigation.state.params.branch
    let section = navigation.state.params.section
    let topic = navigation.state.params.topic
    
   
    
    //console.log("HIstoRY ObjEct: ", routerNavigate)
    if(branch){
        map = map.getChild(branch)
        if(section){
            map = map.getChild(section)
        }
    }
    
    
    let [data, setData] = useState(map.children)
    let [title, setTitle] = useState(map.displayName)
    
    
    const [scrollVal, setScrollVal] = useState(0)
    function OnScroll(event) {
        console.log(scrollVal, event.nativeEvent.contentOffset.y )
        setScrollVal(event.nativeEvent.contentOffset.y) 
        
    }

    function backButtonAction(){
        //go back to section screen
        if(!routerHistory.isEmpty()){
            console.log("Popping the the HISTORY STACK")
            routerNavigate(-1)
            
        }
        else{
            let path = constructPath(branch, section, topic)
            let pathList = path.split("/")
            let lastPath = "/"
            if(pathList.length > 2)
                lastPath = pathList.slice(0, pathList.length - 1).join("/")
            
        
            routerHistory.remove('SectionScreen' ,path)
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
   

    return(
        <View style={{width: '100%', height: '100%', colors:["red", "green", "blue"],}}>
        <TopicsTopBanner scrollVal={scrollVal} degrees={0} zIndex= {9} sectionName = {title} shouldBannerChangeAccordingToScrollVal = {data.length > 11}/>
        <BackButton style={{zIndex: 150, position: 'absolute'}} backButtonAction={backButtonAction} onPress={backButtonAction}/>
        <FlatList style={{zIndex: 8, width: '100%', height: 300, alignSelf: 'center',paddingTop: 100, paddingBottom: 60, marginTop: Math.min(0, -160)}} data={data}
                renderItem = {({item, index}) => <TopicListItem item = {item.displayName} key={index} color={"#F27D88"}/>}
                onScroll = {OnScroll}>
        </FlatList>

            
        </View>
        
        
    )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      height: 100,
      width: 100,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
      },
  });