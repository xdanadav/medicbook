// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue} from "firebase/database";
import MapObject from "./MapObject";
import { Array } from "core-js";
// Initialize Firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmvPCAFYgzrQ2UkQaf1gSwSEPzjuVgw4g",
  authDomain: "tilquiz-90d16.firebaseapp.com",
  databaseURL: "https://tilquiz-90d16.firebaseio.com",
  projectId: "tilquiz-90d16",
  storageBucket: "tilquiz-90d16.appspot.com",
  messagingSenderId: "228388314548",
  appId: "1:228388314548:web:1b637bf008a07de5d1e6e1"
};
  

class Facade{
  constructor() {
    //Starting the facade by connecting the server or whatever the getDataBase() function does
    this.app = initializeApp(firebaseConfig);
    this.database = getDatabase(this.app);
    
    //Loads the material from the data base, probably all of the materials. 
    //Should be changed to only the topic's material in the future
    this.materials = null
    this.materialsPointer = null

    this.videos = null
    this.videosSnapShot = null
    //TODO: check if the structure pointer can be made before we got the database
    this.structurePointer = ref(this.database, 'Structure/')
    this.structureSnapShot = null
    this.map = null



  }

  readStructure(callbackMethod){
    console.log("Startind Read Structure")
    console.log("CallBackFunction: ", callbackMethod)
    onValue(this.structurePointer, (snapshot) => {
      this.structureSnapShot = snapshot
      console.log("Structure snapshot arived, triggering callbackMethod")
      console.log(this.structureSnapShot)
      this.setMap()
      callbackMethod()
    })
  }

  setMap(){
    this.map = MapObject.displayNameInstance("OverAllMapView", "כללי")
    let baseFunctionMapPointer = this.map
    //Map Subject Set Up
    this.structureSnapShot.forEach(function(_branch){
      //We are in the Branches layer.

      //Ignoring the "Name" parameter
      if(_branch.key != "Name") {
        //Creating A node for the map that holds the VariableName and the display name
        let branch = MapObject.displayNameInstance(_branch.key, _branch.child("Name").val())
        /// branch = MapObject.displayNameInstance(*Branch Name*, *Branch displayName*)
        baseFunctionMapPointer.addChild(branch)

        _branch.forEach(function(_subject){
          //We Are in the subject layer
          
          //If we are looking at the "Name" Parameter we want to skip it
          if(_subject.key != "Name"){
            let subject = MapObject.displayNameInstance(_subject.key, _subject.child("Name").val())
            branch.addChild(subject)
            _subject.forEach(function(_topic){
              //We are in the topics layer

              //Ignoring the "Name" Paramater that we already used
              if(_topic.key != "Name"){
                let topic = MapObject.displayNameInstance(_topic.key, _topic.child("Name").val())
                subject.addChild(topic)
              }
            })
          }
        })
      }

    })
    console.log(this.map) 
  }

  isMapSet(){
    if(this.map != null) return true;
    return false;
  }

  didMaterialsLoad(){
    return this.materials != null
  }
  didVideosLoad(){
    return this.videos != null
  }

  readAllMaterials(callbackMethod){
    let startCountRef = ref(this.database, 'SortedMaterials/')
    onValue(startCountRef, (snapshot) => {
      let array = [];
      snapshot.forEach(function(_child){
        array.push(_child.key);
      })
      console.log(array)
      this.materials = array
      this.materialsPointer = snapshot.child("SortedMaterials")
      this.materialsSnapshot = snapshot
      callbackMethod()
    });
  }
  readAllVideos(callbackMethod){
    let youtubeRef = ref(this.database, 'SortedVideos/')
    onValue(youtubeRef, (snapshot) => {
      let array = [];
      snapshot.forEach(function(_child){
        array.push(_child.key);
      })
      console.log(array)
      this.videos = array
      this.videosSnapShot = snapshot
      callbackMethod()
    });

  }
}

let facade = new Facade();

export default facade;
