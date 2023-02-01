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
        width: 80,
        height: 50,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 250,
        marginTop: 0,
     
        
    },
    backButton:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf: "flex-end",
        position: 'absolute',
        marginRight: 0,
        


    },
});



export default BackButton;