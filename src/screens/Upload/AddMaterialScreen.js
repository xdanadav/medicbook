import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image
} from 'react-native';
//import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
//import * as Progress from 'react-native-progress';
import * as ImagePicker from 'expo-image-picker';



//import * as Progress from 'react-native-progress';




export default function ImagePickerExample() {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        

    };

    
    const uploadImageToStorage = () => {
        let path = image
        let imageName = "jkljkl"
        let reference = storage().ref(imageName);         // 2
        let task = reference.putFile(path);               // 3

        task.then(() => {                                 // 4
            console.log('Image uploaded to the bucket!');
        }).catch((e) => console.log('uploading image error => ', e));
    }

    

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
                <Text style={styles.buttonText}>Pick an image</Text>
            </TouchableOpacity>
            
                
            <TouchableOpacity style={styles.uploadButton} onPress={uploadImageToStorage}>
                <Text style={styles.buttonText}>Upload image</Text>
            </TouchableOpacity>
              
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            
        </SafeAreaView>
    );

    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#bbded6'
    },
    selectButton: {
      borderRadius: 5,
      width: 150,
      height: 50,
      backgroundColor: '#8ac6d1',
      alignItems: 'center',
      justifyContent: 'center'
    },
    uploadButton: {
      borderRadius: 5,
      width: 150,
      height: 50,
      backgroundColor: '#ffb6b9',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    imageContainer: {
      marginTop: 30,
      marginBottom: 50,
      alignItems: 'center'
    },
    progressBarContainer: {
      marginTop: 20
    },
    imageBox: {
      width: 300,
      height: 300
    }
  });