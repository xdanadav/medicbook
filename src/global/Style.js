import {Dimensions, StyleSheet} from 'react-native'



let preferedFontItemSize = 25
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
if(windowWidth > 500){
    preferedFontItemSize = 60
}




const globalStyles = StyleSheet.create({
    defaultText: {
        textAlignVertical: "center",
        textAlignHorizontal: "center",
        textAlign: "center",
        fontFamily: "OpenSansHebrew-Regular",
        fontSize: 30,
        color: '#3B3B30', 
    },
    
    defaultButton: {
        backgroundColor: '#E3EEFF',
        borderRadius: 13,
        marginBottom: 15,
        marginTop: 15,
        
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        
        width: '60%',
        
        aspectRatio: 3.672,
        minWidth: 150,
        flwxWrap: "wrap",

        opacity: 0.8,
        border: 2,

    },
    youtubeThumbnailText: {
        textAlignVertical: "center",
        textAlignHorizontal: "center",
        textAlign: "center",
        fontFamily: "OpenSansHebrew",
        fontSize: 15,
        color: '#3B3B30', 
    },
    backButtonContainer:{
        width: '10%',
        height: '10%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    backButton:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf: "flex-end",
        position: 'static',
    },
  });

  export const global = {
      globalStyles: globalStyles,
      preferedFontItemSize: preferedFontItemSize,
      fontFamily: 'Secular One'
  }