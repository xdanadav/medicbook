import {Dimensions, Button, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {global} from '../../src/global/Style'
//import { ScaleFromCenterAndroid } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';

let maxStringLetters = 46;

const windowWidth = Dimensions.get("window").width

const MaterialButton = (props) => {
    return (
    <TouchableOpacity onPress={props.onPress} style={[styles.item, {width: props.width}]}>
            <Image style = {[styles.Image, {width: props.width}]} source={require('../assets/glassMenu/materialButton.png')}/>
            <Text style={styles.itemText}>{formatString(props.text)}</Text>
    </TouchableOpacity>
  )
}

function formatString(string){
  if (string.length > maxStringLetters){
    string = string.slice(0, maxStringLetters - 3) +  "..."
  }
  return string
}



let itemHeight = 54
if(windowWidth > 500)
  itemHeight = 100


const styles = StyleSheet.create({
  item: {
    height: itemHeight,
    justifyContent: "center",
    marginBottom: 10,
    textAlign: "right",
    right: 0,
    //backgroundColor: '#000'
  },
  
  itemText: {  
    position:'absolute',
    width: '70%',
    color: '#0C4F44',
    opacity: 1,
    right: 20,
    fontSize: global.preferedFontItemSize * 0.8,
    fontWeight: 'bold',
    fontFamily: global.fontFamily
  },

  Image: {
      height: itemHeight,
      //backgroundColor: 'red',
      resizeMode: "contain",
      opacity: 1,
      position: 'absolute',
      right: '-10%',
      alignSelf: 'right',
  }  
});


    
//    let displayText  = props.text.slice(0,30 )
//    if(displayText.length < props.text.length){
//        displayText += "..."
//    }
//    
//    //Renders a text to a button
//    return(
//        <View style={styles.container}>
//            <TouchableOpacity  style = {styles.item} onPress={props.onPress}>
//                <Text style={styles.itemText}>{displayText}</Text>
//                {/*<View style = {styles.rect}>
//                </View>*/}
//            </TouchableOpacity>
//        </View>
//    )
//}
//
//var leftSpacing = 5;
//var maxItemWidth = (100 - leftSpacing*2)
//
//const styles = StyleSheet.create({
//    rect: {
//        width: 50,
//        height: 50,
//        borderRadius: 50,
//        alignSelf: 'flex-end',
//        backgroundColor: '#' + Math.floor(Math.random() * 1000000).toString(),
//        flexDirection: 'row',
//        justifyContent: 'center',
//
//    },
//    item: {
//        backgroundColor: '#E3EEFF',
//        borderRadius: 30,
//        marginBottom: 6,
//        marginTop: 6,
//    
//        
//        justifyContent: 'center',
//        alignItems: "center",
//        flexDirection: "row",
//        
//        maxWidth: '90%',
//        marginLeft: '5%',
//        aspectRatio: 6,
//        minWidth: 150,
//        flwxWrap: "wrap",
//
//    },
//
//    itemText: {
//        textAlignVertical: "center",
//        textAlignHorizontal: "center",
//        textAlign: "center",
//        fontFamily: "Arial",
//        fontSize: 25,
//        color: '#3B3B30',  
//    },
//
//});
//
export default MaterialButton