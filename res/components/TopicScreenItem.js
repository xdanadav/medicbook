import {Image, Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import globalStyles from '../../src/global/Style'


function renderSwitch(param) {
    switch(param) {
        case 'חומרים':
            return <Image style={styles.folderImage} source={require("../assets/TopicScreen/folder.png")}/>;
        case 'סרטונים':
            return <Image style={styles.youtubeImage} source={require("../assets/TopicScreen/youtube_player.png")}/>;
        case 'טריוויה':
            return <Text style={{fontSize: 40}}>טריוויה</Text>//<Image style={styles.youtubeImage} source={require("../assets/TopicScreen/trivia_button.png")}/>;
        default:
            return <Image style={styles.youtubeImage} source={require("../assets/TopicScreen/trivia_button.png")}/>;
    }
}


const TopicScreenItem = (props) => {
    //Renders a text to a button
    return(
        <View style={styles.container}>
            <TouchableOpacity  style = {styles.item} onPress={props.onPress}>
                {/*<Text style={globalStyles.defaultText}>{props.text}</Text>*/}
                {renderSwitch(props.text)}
            </TouchableOpacity>
        </View>
    )
}



var leftSpacing = 5;
var maxItemWidth = (100 - leftSpacing*2)



const styles = StyleSheet.create({
    rect: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignSelf: 'flex-end',
        backgroundColor: '#' + Math.floor(Math.random() * 1000000).toString(),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    
    item: {
        backgroundColor: "#E3EEFF",
        borderRadius: 500,
        marginBottom: 15,
        marginTop: 15,
        marginRight: 15,
    
        
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        
        width: '50%',
        alignSelf: 'center',
        aspectRatio: 1,
        minWidth: 150,
        flwxWrap: "wrap",

    },

    itemText: {
        textAlignVertical: "center",
        textAlignHorizontal: "center",
        textAlign: "center",
        fontFamily: "Open Sans Hebrew",
        fontSize: '50vh',
        fontWeight: 'bold',
        color: '#3B3B30',  
    },
    youtubeImage:{
        width: '70%',
        height: '70%',
        resizeMode: "contain",
    },
    folderImage:{
        marginLeft: '10%',
        width: '80%',
        height: '80%',
        resizeMode: "contain",
    },
    triviaImage:{
        marginLeft: '10%',
        width: '80%',
        height: '80%',
        resizeMode: "contain",
    },

});

export default TopicScreenItem