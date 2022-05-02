import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import globalStyles from '../../global/Style'

const MaterialButton = (props) => {
    //Renders a text to a button
    return(
        <View style={styles.container}>
            <TouchableOpacity  style = {styles.item} onPress={props.onPress}>
                <Text style={globalStyles.defaultText}>{props.text}</Text>
                {/*<View style = {styles.rect}>
                </View>*/}
            </TouchableOpacity>
        </View>
    )
}

var leftSpacing = 5;
var maxItemWidth = (100 - leftSpacing*2)

const styles = StyleSheet.create({
    rect: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignSelf: 'flex-end',
        backgroundColor: '#' + Math.floor(Math.random() * 1000000).toString(),
        flexDirection: 'row',
        justifyContent: 'center',

    },
    item: {
        backgroundColor: '#E3EEFF',
        borderRadius: 30,
        marginBottom: 15,
        marginTop: 15,
    
        
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        
        maxWidth: '90%',
        marginLeft: '5%',
        aspectRatio: 6,
        minWidth: 150,
        flwxWrap: "wrap",

    },

    itemText: {
        textAlignVertical: "center",
        textAlignHorizontal: "center",
        textAlign: "center",
        fontFamily: "Open Sans Hebrew",
        fontSize: 20,
        color: '#3B3B30',  
    },

});

export default MaterialButton