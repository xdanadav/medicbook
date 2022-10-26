//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Navigator from './src/routes/homeStack'
import facade from './src/mainClasses/DatabaseFacade'

//TODO: Replace the start loading of the materials to a better place

//import BranchesPageController from './MVC/Controller/BranchesPageController'


export default function App() {
  
  return (
    <Navigator options={{ headerShown: false }}/>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    height: '150%',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

    backgroundColor: '#2A2A2A',
  },
  sectionTitle: {
    fontSize: 50,
    fontWeight: 'bold',

  },
  items:{},
  HelloText:{
    backgroundColor: '#78A409',


  },
  touchableOpacity: {
    backgroundColor: '#22AAFF',
    width: 100,
    aspectRation: 1,
  },
  imageView: {
    height: 300,
    width: 300,

  },
  topBanner: {
    height: 300,
    width: 300,
  },

});


