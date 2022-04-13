import React, {useState} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MapObject from '../Model/MapObject';
import MapObjectView from '../View/MapObjectView';
import TopBanner from '../../components/TopBanner';


let map;

function main(){
    map = new MapObject("Branches");
    let truama = new MapObject("Trauma");
    let anatomy = new MapObject("Anatomy");

    let rafmaz = new MapObject("Rafmaz");
    let trainingBranches = new MapObject("הכשרות");
    let corpsBranches = new MapObject("ענפי החייל");
    
    let medics = new MapObject("חובשים");
    let dentistAssistent = new MapObject("סייעות שיניים");
    let academy = new MapObject("ענף אקדמיה");
    let advencedTrainings = new MapObject("הכשרות מתקדמות");
    let recoveryUnit = new MapObject("מש״קיות רמ 2");

    medics.addChild(truama);
    medics.addChild(anatomy);
    
    trainingBranches.addChild(medics);
    trainingBranches.addChild(dentistAssistent);
    trainingBranches.addChild(academy);
    trainingBranches.addChild(advencedTrainings);
    trainingBranches.addChild(recoveryUnit);

    corpsBranches.addChild(rafmaz);
    map.addChild(trainingBranches);
    map.addChild(corpsBranches);    
}


const BranchesPage = (props) => {
    let allButtonNames = map.children;
    const [mapObjectViews, setMapObjectViews] = useState(allButtonNames);

    return (
        <View style={styles.container}>
        <TopBanner/>
        <View style={styles.tasksWrapper}>
            <View styles={styles.items}>   
            {
                mapObjectViews.map((item, index)=> {
                console.log(index)
                return <MapObjectView key={index} text={item.name} onPress={() => openSubject(index)}/>
                })
            }
            </View>
        </View>

        </View>
    ); 
}

main();

export default BranchesPageController
