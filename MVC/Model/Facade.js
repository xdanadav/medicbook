// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
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
  }
  writeUserData(userId, name, email, imageUrl) {
    set(ref(this.database, '/User/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  writeTry(){
    console.log("Trying to Write: ", "496351", "Lola", "a@gmail.com", "https://google.images.flower.png")
    this.writeUserData("496351", "Lola", "a@gmail.com", "https://google.images.flower.png");
  }
}
let facade = new Facade();

export default facade;
