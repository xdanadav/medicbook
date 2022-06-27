import {Dimensions, Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {global} from '../../src/global/Style'

const maxLetters = 30
let preferedFontItemSize = global.preferedFontItemSize



const MapObjectView = (props) => {
    //Renders a text to a button
    let {text, textItemFontSize} = getTextAndTextItemFontSize(props.text)
    
    return(
        <View style={styles.container}>
            <TouchableOpacity  style= {styles.item} onPress={props.onPress}>
                <Text style={[styles.itemText,{fontSize: textItemFontSize}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

function getTextAndTextItemFontSize(text){
    let textItemFontSize = preferedFontItemSize
    if(text.length > maxLetters){
        textItemFontSize = preferedFontItemSize - 7
        if(text.length > maxLetters + 14)
        text = text.slice(0,maxLetters + 11) + "..."
    }
    return {text, textItemFontSize}
}



const windowWidth = Dimensions.get('window').width;
const WU = windowWidth / 100

//var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

const styles = StyleSheet.create({
    container: {

    },
    item: {
        backgroundColor: '#E3EEFF',
        borderRadius: 13,
        marginBottom: 15,
        marginTop: 15,
        
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        
        width: 60 * WU,
        
        aspectRatio: 3.672,
        minWidth: 150,
        flwxWrap: "wrap",

        opacity: 0.8,
        border: 2,

    },

    itemText: {
        textAlignVertical: "center",
        textAlignHorizontal: "center",
        textAlign: "center",
        fontFamily: global.fontFamily,
        color: '#3B3B30',
    },

});

export default MapObjectView