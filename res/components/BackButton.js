import react from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BackButton = (props) => {
    return(
        <TouchableOpacity style={styles.backButtonContainer} onPress={props.onPress}>
                <Image style = {styles.backButton} source={require('../assets/ChooseBranch/backButton.png')}/>      
        </TouchableOpacity>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WU = windowWidth / 100;
const WH = windowHeight / 100;

const styles = StyleSheet.create({
    backButtonContainer:{
        width: parseInt(20 * WU),
        height: parseInt(20 * WH),
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 150,
    },
    backButton:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf: "flex-end",
        position: 'static',

    },
});



export default BackButton;