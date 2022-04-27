import react from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const VideoThumbnail = (props) => {
    let youtubeThumbnailUrl = "https://img.youtube.com/vi/" + props.VideoId + "/sddefault.jpg"

    return(
        <View style={styles.item}>
            <View style={styles.Image}>
                <Image style={{width: '100%', height: '100%', borderRadius: 10 }} resizeMode="cover" source={{uri: youtubeThumbnailUrl}}/>
            </View>
            <Text style={styles.thumbnailText}>{props.text}</Text>
        </View>
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
        
    },


});

export default VideoThumbnail;