// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
  apiKey: "AIzaSyBk3mETQBaIw2Bo-EhQdqKSUgoS8dMCGfU",
  authDomain: "erescuselab.firebaseapp.com",
  projectId: "erescuselab",
  storageBucket: "erescuselab.appspot.com",
  messagingSenderId: "948001080260",
  appId: "1:948001080260:web:f3af560381dbdb3f421a91",
  measurementId: "G-3YP3NC464Y"
};
const app = firebase.initializeApp(firebaseConfig);
const db  = firebase.firestore(app);


export {firebase}