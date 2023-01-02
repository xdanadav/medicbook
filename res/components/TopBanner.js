import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';
import { Dimensions } from 'react-native';

const TopBanner = (props) =>{
    const element = (
        <View style={styles.banner}>
            <Image style={styles.rectengles} id="output" source={require('../assets/ChooseBranch/TopBannerRectengles.png')}/>
            {props.isSign? 
            <Image style={styles.medicbookSign} source={require('../assets/ChooseBranch/MedicBook.png')}/> :
            <View></View>
        }
            {/**/}
        </View>
    )
    return element
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//WU - Width Unit
const WU = windowWidth / 100
const HU = windowHeight / 100


const styles = StyleSheet.create({
    banner:{
        width: parseInt(100 * WU),
        height: parseInt(33 * HU),
        
    },
    rectengles:{
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        filter: "hue-rotate(3deg)",
    },

    medicbookSign:{
        right: 0,
        left: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        position: 'absolute',
        width: '70%',
        height: '70%',
        resizeMode: "contain",
        top: 40,
    },
})


export default TopBanner