import react from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
            </View>
            
            
            <Text style={styles.itemText}>{props.text}</Text>
            <View style={styles.circular }></View>
        </View>
    )
}
var leftSpacing = 5;
var maxItemWidth = (100 - leftSpacing*2)


const styles = StyleSheet.create({
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

export default Task;