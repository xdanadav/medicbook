import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';
import { Dimensions } from 'react-native';

const TopBanner = (props) =>{
    const element1 = (

        <View style={[styles.banner, {position: 'fixed', bottom: 0}]}>
            <Image style={styles.rectengles} id="output" source={require('../assets/ChooseBranch/BottomBannerRectengles.png')}/>
        </View> 
        
        
    )
    const element2 = (
        <View style={styles.banner}>
                <Image style={styles.rectengles} id="output" source={require('../assets/ChooseBranch/BottomBannerRectengles.png')}/>
        </View>
    )

    if(props.stickToBottom){
        return element1
    }
    return element2
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
})


export default TopBanner