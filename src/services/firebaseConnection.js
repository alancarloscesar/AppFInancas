import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDBtIiWioz-H8uFGOxQBvCmCc86P8UGxc0",
  authDomain: "financas-2a470.firebaseapp.com",
  databaseURL: "https://financas-2a470-default-rtdb.firebaseio.com",
  projectId: "financas-2a470",
  storageBucket: "financas-2a470.appspot.com",
  messagingSenderId: "888648603833",
  appId: "1:888648603833:web:7e569946bf7505ff072368"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;