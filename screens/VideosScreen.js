import React, {useState} from 'react';
import {StyleSheet, View, Button, Text } from 'react-native';
import VideoThumbnail from '../components/VideoThumbnail'
import facade from '../MVC/Model/Facade';

export default function VideoScreen({navigation}){
    let videoIds = []
    let thumbnails = []

    setVideoList()
    function setVideoList(){
        
        let holder = facade.videosSnapShot.child(navigation.state.params + "/")
        holder.forEach(function(_video){
            let id = _video.child("url/").val()
            let thumbnail = _video.child("Name/").val()
            videoIds.push(id)
            thumbnails.push(thumbnail)
            //console.log(id)
        });
    }

    let [videos, setVideos] = useState(videoIds);
    let [videoNames, setVideoNames] = useState(thumbnails);




    return(
        <View style={styles.container}>
            {videos.length == 0? <Text style={styles.noVideos}>אין סרטונים בנושא זה</Text>:
        
        
            videos.map((item, index)=>{
                return(
                    <VideoThumbnail key={index} text={videoNames[index]} VideoId={item}/>
                )
            })
        }
            


        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '40%', // is 50% of container width
        aspectRatio: 1,
        backgroundColor: "#EAEAEA",
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    defaultText: {
        fontSize: 50,
        color: "#fff"

    },
    noVideos:{
        fontSize: 100,
        alignSelf: "center",
        fontWeight: 'bold'
    }
});