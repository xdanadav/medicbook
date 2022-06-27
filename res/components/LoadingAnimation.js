import React from 'react';

import LottieView from 'lottie-react-native';
import * as data from "../animations/loadingAnimation.json";
import {StyleSheet, Text} from 'react-native';


export default class LoadingAnimation extends React.Component {

  render() {
    return (
        <LottieView
        style={styles.lottieLoading}
        source={require('../animations/loadingAnimation.json')}
        autoPlay
        />
    );
  }
}

const styles = StyleSheet.create({
    lottieLoading:{
        width: 20,
        height: 20,
    }
});
