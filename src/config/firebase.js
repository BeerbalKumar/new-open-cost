import firebase from 'firebase'
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyDyrXwfbbAZT-d79-1Uzs7NQUTysW4jLo8",
    authDomain: "open-cost.firebaseapp.com",
    projectId: "open-cost",
    storageBucket: "open-cost.appspot.com",
    messagingSenderId: "83334753256",
    appId: "1:83334753256:web:b3dca9be44a1c74124125d",
    measurementId: "G-XVWX5PF5L1"
  };
// Initialize Firebase


const FirebaseApp = firebase.initializeApp(firebaseConfig);
export default FirebaseApp
