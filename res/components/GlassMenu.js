import react, {useState, Component} from 'react';
import { TouchableWithoutFeedback, View, Dimensions, Image, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialButton from './MaterialButton'
import { NavigationEvents } from 'react-navigation';

let icon_size = 80
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function getGlassMenu(props){
    //["Gilad", "Haharony", "has", "bolobol"]
    
    let glassMenuWidth = windowWidth
    let flatListWidth = glassMenuWidth - 60

    let things = [];
        props.facade.materialsSnapshot.child(props.topic).forEach(function(_child){
        things.push(_child.child("url").val().split(".pdf")[0]);
    })

    let [topic, setTopic] = useState(things);
    //console.log("\n \n \n \n \n \n \n + topic")
    
    function handlePress(index){
        //console.log(navigation, "topic: ", props.topic, "thing: ", things[index])
        props.navigationFunction({currentTopic: props.topic, currentMaterial: things[index]})
        
    }

    return(

            <View style={{position: 'absolute', right: 0, height: '100%', width: glassMenuWidth, zIndex: 100}} >
                <View style={[styles.titleContainer, {width: flatListWidth - 10}]}>
                    <Image style={[styles.topicTitleBackground]} source={require('../assets/glassMenu/glassTitle.png')} />
                    <Text style={[styles.topicTitleText, {fontSize : getFontSizeFromLength(props.topicDisplayName.length)}]}> {props.topicDisplayName}</Text>
                </View>


                <TouchableWithoutFeedback style={{zIndex: 100, backgroundColor: 'black', width: 10, height: '100%', position: 'absolute', right: 0}} onPress={props.dismissFunction}>
                    <View style={{zIndex: 100, width: windowWidth - flatListWidth, height: '100%'}}></View>
                </TouchableWithoutFeedback>
                
                
                <Image style = {{ zIndex: -1, resizeMode: 'stretch', position: 'absolute', width: '100%', height: '100%'}} source={require('../assets/glassMenu/glass.png')}/> 
                <FlatList data={topic} style={{position:'absolute', top: 142,right: 0, zIndex: 100,height: windowHeight ,width: flatListWidth}}
                    numColumns={1}
                    renderItem = {({item, index}) => <MaterialButton key={item + index.toString()} width={flatListWidth} text={item} onPress={()=>handlePress(index)}/>}>
                </FlatList>

                {true? <View></View>:
                
            
                <View style={styles.icons}>
                    <TouchableOpacity style={styleIcons.main} >
                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/glassMenu/book_icon.png')} />
                    </TouchableOpacity>
                    <Image style={{position: 'absolute', width: 8, height: 8, resizeMode: 'contain', top: bottomFromTop(33), right: icon_size / 2}} source={require('../assets/glassMenu/dot.png')}/>
                    


                    <TouchableOpacity style={styleIcons.second} >
                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/glassMenu/youtube_icon.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styleIcons.third} >
                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/glassMenu/presentation_icon.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styleIcons.fourth} >
                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/glassMenu/trivia_icon.png')} />
                    </TouchableOpacity>
                </View>}
            </View>  
    )
        
    
}

function bottomFromTop(bottom){
    return windowHeight - bottom 
}

function materialPress(index){
    console.log(index)
}

function getFontSizeFromLength(length){
    let bottomRange = 25
    let topRange = 60

    let bottomLength = 6
    let topLength = 45

    if(length < bottomLength) return topRange
    let fontSize = topRange + (length - bottomLength) / (topLength - bottomLength) * (bottomRange - topRange)  
    console.log(fontSize)
    return fontSize    

}



var leftSpacing = 5;
var maxItemWidth = (100 - leftSpacing*2)

const styleIcons = StyleSheet.create({
    icons:{
        
    },
    main: { width: icon_size,
            aspectRatio: 1,
            position: 'absolute',
            top: bottomFromTop(35) - icon_size,
            right: 0, 
            zIndex: -1,
    },
    second:{
        width: icon_size,
        aspectRatio: 1,
        position: 'absolute',
        top: bottomFromTop(22) - icon_size,
        right: icon_size, 
        zIndex: -1,
    },
    third: {
        width: icon_size,
        aspectRatio: 1,
        position: 'absolute',
        top: bottomFromTop(22) - icon_size,
        right: 2*icon_size, 
        zIndex: -1,
        
    },
    fourth: {
        width: icon_size,
        aspectRatio: 1,
        position: 'absolute',
        top: bottomFromTop(22) - icon_size,
        right: 3*icon_size, 
        zIndex: -1,

    },
})


const styles = StyleSheet.create({
    titleContainer:{
        height: 113,
        zIndex: 6,
        position: 'absolute',
        right: 0,
        top: 15,
        justifyContent: 'center'

    },
    topicTitleBackground:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        zIndex:  9,
        opacity: 1,
        zIndex: 5,
        position: 'absolute',
    },
    
    topicTitleText:{
        fontFamily: 'David',
        fontWeight: 'bold',
        right: 0,
        left: 0,
        marginRight: 'auto',
        marginRight: 'auto',
        width: '90%',
        zIndex: 10,
        color: '#0C4F44',
        
        opacity: '51%',       
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 50,
        marginLeft: leftSpacing.toString() + '%',
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        maxWidth: maxItemWidth.toString() + '%',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: 40,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,  
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#AAAAAA',
        borderWidth: 2,
        borderRadius: 5,
    },
    items:{
        marginTop: 30,
    },

});

export default getGlassMenu;