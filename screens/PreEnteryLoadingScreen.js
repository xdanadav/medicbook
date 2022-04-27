import React, {useState} from 'react';
import {StyleSheet, View, Button, Text } from 'react-native';
import facade from '../MVC/Model/Facade'
import LottieView from 'lottie-react-native';
import LoadingAnimation from '../components/LoadingAnimation'
import * as ReactDOM from 'react-dom';

//ReactDOM.render(<LoadingAnimation/>, document.getElementById("root")) 
export default function PreEnteryLoadingScreen({navigation}){
    //Creating a loadinglistener that determines if we display the loading screen or not
    //setting a call back method at the facade, so when somthing changes it will trigger the loadinglistener to update
    
    //let [loadingListener, setLoadingListener] = useState(facade.isMapSet());
    
    //Fireing requests to get the structure and material
    if(!facade.isMapSet()){
        console.log("Sends a message to server")
      facade.readStructure(navigateNextScreen)
      facade.readAllMaterials()
      facade.readAllVideos()
    }
    console.log("Starting to render")
    
    console.log("Finished rendering...")

    function navigateNextScreen(){
        navigation.navigate("SectionsScreen")
    }
    
    return(
        <View style={styles.container}>
            {/*<LottieView source={require("../animations/loadingAnimation.json")}/>
            */}
        </View>
    ) 
    
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#AAFF1B"
    },
    defaultText: {
        fontSize: 50,
        color: "#fff",
        fontFamily: "David"

    },
});