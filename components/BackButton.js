import react from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const BackButton = (props) => {
    return(
        <TouchableOpacity style={styles.backButtonContainer} onPress={props.onPress}>
                <Image style = {styles.backButton} source={require('../assets/ChooseBranch/backButton.png')}/>      
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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



export default BackButton;