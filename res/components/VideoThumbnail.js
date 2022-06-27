import react from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {global} from '../../src/global/Style'


const VideoThumbnail = (props) => {
    let youtubeThumbnailUrl = "https://img.youtube.com/vi/" + props.VideoId + "/sddefault.jpg"
    let charaterLimit = 40
    let displayedVideoName = props.text.slice(0, Math.min(charaterLimit, props.text.length))
    if (displayedVideoName.length < props.text.length){
        displayedVideoName += "..."
    }
    return(
        <TouchableOpacity style={styles.item} onPress={props.onPress}>
            <View style={styles.Image}>
                <Image style={{width: '100%', height: '100%', borderRadius: 10 }} resizeMode="cover" source={{uri: youtubeThumbnailUrl}}/>
            </View>
            <Text style={global.globalStyles.youtubeTumbnailText}>{displayedVideoName}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    Image: {
        marginTop: '2.5%',
        backgroundColor : "red",
        display: "block",
        width: '95%',
        height: '70%',
        backgroundColor: "#36ECC6",
        borderRadius: 10,
        alignSelf: "center",
        
        
    },
    item: {
        width: '40%', // is 50% of container width
        aspectRatio: 1,
        backgroundColor: "#EAEAEA",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlignment: "center",
    },
    thumbnailText: {
        color: "#000",
        alignSelf: "center",
        fontWeight: 'bold',
        fontFamily: "OpenSansHebrew-Regular",
        
    },


});

export default VideoThumbnail;