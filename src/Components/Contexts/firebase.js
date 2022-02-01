import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD0xzyP6J4OyIJVBA0YZ1Kr2NhR4OE28gA",
    authDomain: "mychatapp-6d2be.firebaseapp.com",
    projectId: "mychatapp-6d2be",
    storageBucket: "mychatapp-6d2be.appspot.com",
    messagingSenderId: "728570286369",
    appId: "1:728570286369:web:94477db398790809186e60"
  }).auth()