import {Dimensions, Button,Image,  View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {global} from '../../src/global/Style'

const maxLetters = 30
let preferedFontItemSize = global.preferedFontItemSize



const WrongButtonFragment = (props) => {
    //Renders a text to a button
    
    
    return(
        <View style={[styles.container, styles.item]}>
            <TouchableOpacity onPress={props.closeSelf}>
                <Image style={{width: 30, height: 30, position: 'absolute', top: 5, right: 5, zIndex: 29}} source={require('../../res/assets/ Trivia/xButton.png')} />
            </TouchableOpacity>
            <View style={{position: 'relative', top: 35, width: '100%', height: '80%', justifyContent: 'center', textAlign: 'center', zIndex: 14}}>
                <Text style={[styles.itemText,{fontSize: 30}]}>{props.text}</Text>
            </View> 
        </View>
    )
}




const windowWidth = Dimensions.get('window').width;
const WU = windowWidth / 100

//var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        position: 'absolute',
        alignSelf: 'center',

    },
    item: {
        backgroundColor: '#E3EEFF',
        borderRadius: 13,
        marginBottom: 15,
        marginTop: 15,
        
        top: 100,   
        textAlignHorizontal: 'center',
        
        width: 80 * WU,
        aspectRatio: 1.2,
        minWidth: 150,
        flwxWrap: "wrap",

        border: 2,

    },

    itemText: {
        textAlignVertical: "center",
        textAlignHorizontal: "center",
        alignSelf: 'center',
        /*fontFamily: global.fontFamily,
        */
        fontFamily: 'Heebo',
        color: '#3B3B30',
    },

});

export default WrongButtonFragment