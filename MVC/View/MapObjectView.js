import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const MapObjectView = (props) => {
    //Renders a text to a button
    return(
        <View style={styles.container}>
            <TouchableOpacity  style= {styles.item} onPress={props.onPress}>
                <Text style={styles.itemText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

var leftSpacing = 5;
var maxItemWidth = (100 - leftSpacing*2)

const styles = StyleSheet.create({
    container: {

    },
    item: {
        backgroundColor: '#E3EEFF',
        borderRadius: 13,
        marginBottom: 15,
        marginTop: 15,
        
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        
        maxWidth: '60%',
        marginLeft: '20%',
        aspectRatio: 3.672,
        minWidth: 150,
        flwxWrap: "wrap"

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

export default MapObjectView