import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Image } from 'react-native';
import facade from '../../MVC/Model/Facade'
import LottieView from 'lottie-react-native';
import LoadingAnimation from '../../components/LoadingAnimation'
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
      facade.readAllMaterials(navigateNextScreen)
      facade.readAllVideos(navigateNextScreen)
    }
    console.log("Starting to render")
    
    console.log("Finished rendering...")

    let [infoCounter, setInfoCounter] = useState(0)
    function navigateNextScreen(){
        //We need for all the request to come back... 3 requests currently
        //When it is called for the third time, it means all is loaded and we can navigate to the next screens
        if(infoCounter >= 2){
            navigation.navigate("SectionsScreen")
        }
        else{
            infoCounter += 1
        }
        

    }
    
    return(
        <View style={styles.container}>
            {/*<LottieView source={require("../animations/loadingAnimation.json")}/>
            
            <Imgae src={require('../assets/ChooseBranch/medicbook.png')}/>
            */}
            <Image style={styles.medicbookSign} source={require('../../assets/ChooseBranch/MedicBook.1.png')}/>
        </View>
    ) 
    
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    defaultText: {
        fontSize: 50,
        color: "#fff",
        fontFamily: "David"

    },
    medicbookSign:{
        marginLeft: '20%',
        position: 'absolute',
        width: '60%',
        height: '60%',
        resizeMode: "contain",
        top: 90,
    },
});