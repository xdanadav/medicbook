import {View, Text} from "react-native"

export default function TopicListItem(props) {
    let color = '#'+Math.floor(Math.random()*16777215).toString(16); // random color
    if(props.color){
        color = props.color
    }
    
    const item = props.item
    let fontSize = 36
    if(item.length > 20){
      fontSize = 20
      if(item.length > 30){
        fontSize = 16
      }
    }

    return (
      <View 
        style={{
          
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          borderTopLeftRadius: 35,
          borderBottomLeftRadius: 35,
          marginRight: '0', // cancelled margin
          marginTop: '10px',
          marginBottom: '10px',
          height: '85px',
          width: '380px', // default width
         flexDirection: 'row',
         backgroundColor: '#E8F1FF',
         right: 0,
         marginRight: 0,
         marginLeft: 'auto',
         zIndex: 2,
          //marginLeft: `${5 * index}px`, // calculated margin
          
        }}
      >
        <View 
          style={{
            height: '80%',
            aspectRatio: 1,
            borderRadius: '50%',
            backgroundColor: color, // random color
            marginRight: '20px',
            marginLeft: '5px' // increased margin
          }}
        />
        <Text style={{pointerEvents: "none", fontFamily: 'Heebo', textAlign: 'right', fontSize: fontSize, marginRight: 20, marginLeft:'auto'}}>{item}</Text>
      </View>
    );
  
}