import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA5stvYcOB3ZorCQI2YxHbqNjtfmZ5bryo",
    authDomain: "discord-clone-a6438.firebaseapp.com",
    projectId: "discord-clone-a6438",
    storageBucket: "discord-clone-a6438.appspot.com",
    messagingSenderId: "1093827947352",
    appId: "1:1093827947352:web:52eb1ccc997f544ee5932d",
    measurementId: "G-J7WEMCS6HS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider };
export default db;
  
