import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { requireNativeViewManager } from 'expo-modules-core';
import { Dimensions } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

export default function TopicsTopBanner(props) {
   
    let sliderColor = '#75F1E3'
    let sliderStartMarginLeft = 130
    let degrees = 0

    var BannerTextFontStartingSize = 70
    var BannerTextFontSmallestSize = 50
    console.log(props.sectionName.length, "length")
    if(props.sectionName.length > 12){
        BannerTextFontStartingSize = 40
        BannerTextFontSmallestSize = 30
        if(props.sectionName.length > 30){
            BannerTextFontStartingSize = 30
            BannerTextFontSmallestSize = 20
        }
    }

    //Banner Text Color
    var colorValue = Math.round(Math.min(props.scrollVal / 2, 100) / 100 * 255); 
    var color = 'rgb(' + colorValue + ',' + colorValue + ',' + colorValue + ')';
    
    var BannerHeight = 100 + Math.max(0, 150 - props.scrollVal / 1.5)
    
    
    var BannerTextFontSize = Math.max(BannerTextFontSmallestSize, BannerTextFontStartingSize - props.scrollVal / 10)
    var BannerBackgroundSizePercentage = `${Math.min(100, 70 + props.scrollVal / 10)}%`
    //If shouldChangeAccordingToScrollVal is false it means we should have a specifiec expression to 
    //set this variables
    if(!props.shouldBannerChangeAccordingToScrollVal){
        console.log("True")
        color = "rgb(0, 0, 0)"
        BannerTextFontSize = 70
        if(props.sectionName.length > 12){
            BannerTextFontSize = 40
            if(props.sectionName.length > 30){
                console.log("Changing font size to 30")
                BannerTextFontSize = 30
            }
        }

        BannerHeight = 250
        BannerBackgroundSizePercentage = '70%'

    }
    
    
    console.log(`${Math.floor(Math.min(-100 + (props.scrollVal/ windowWidth) * 100  , -1))}%`)
    if(props.degrees) degrees = props.degrees
    const element = (
        <View style={[styles.banner, {height: BannerHeight, zIndex: props.zIndex }]}>
            <View style={{width: '100%', height: '100%', position: 'relative', top: 0}}>
                <Image style={[styles.rectengles, { zIndex: 10, filter: `hue-rotate(${degrees}deg)`}]} id="output" source={require('../../assets/TopicsScreen/TopBanner.svg')}/>
                <Text style={{
                    color: color,
                    fontSize: BannerTextFontSize,
                    fontFamily: 'Heebo', fontWeight: 'bold',
                    
                    left: '50%', marginLeft: -200,
                    top: '50%', marginTop: -40,
                    width: 400,
                    height: 80,
                    alignSelf: 'center',
                    position: 'absolute',
                    
                    zIndex: 11}}>{props.sectionName}</Text>
                <View style={{
                    backgroundColor: "#A1B6FF",
                    width: '100%',
                    height: BannerBackgroundSizePercentage,
                    position: 'absolute',
                }}>

                </View>
                {/*<Text style={{fontSize: 30 ,zIndex: 15, color: 'white', marginLeft: 'auto', marginRight: 'auto'}}>Medics</Text>*/}
                {/*<View style={[{ width: `${sliderStartMarginLeft}%`,
                            height: '100%',
                            zIndex: 11,
                            //transform: [{ rotate: '45deg' }],
                            //backgroundColor: '#000',
                            marginLeft :  `${ Math.min(47 -sliderStartMarginLeft + (props.scrollVal/ windowWidth) * 100  , 0)}%`,
                            position: 'absolute', top: 0,
                            overflow: 'hidden',
                            filter: `hue-rotate(${degrees}deg)`}]}> 
                
                    <View style={{transform: [{ rotate: '45deg' }], backgroundColor: sliderColor, width: 300, height: 300, marginLeft: 'auto',marginTop: `-${ sliderStartMarginLeft / 12}%` ,marginRight: `${sliderStartMarginLeft / 7}%`, borderRadius: 21 }}/>
                    <View style={{backgroundColor: sliderColor, height: '100%', width: '65%', position: 'absolute', marginRight: 'auto', marginLeft: 0}}>
                    
                 </View>
            </View>*/}
            
            
            
            
            </View>
            
            
            {/*<Image style={[styles.medicbookSign, {zIndex : 12}]} source={require('../../assets/ChooseBranch/MedicBook.png')}/> */}
        
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
        width: '100%', //parseInt(100 * WU),
        height: parseInt(40 * HU),
        
    },
    rectengles:{
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        
        backgroundPosition: "200px 140px",
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


