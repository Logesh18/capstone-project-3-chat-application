import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBlUIKUPCjKmKDrmQHPekr2YRhSuYfHO-8",
    authDomain: "my-chat-application-524b1.firebaseapp.com",
    projectId: "my-chat-application-524b1",
    storageBucket: "my-chat-application-524b1.appspot.com",
    messagingSenderId: "724699696336",
    appId: "1:724699696336:web:98b01cb3b55001bea1a2d5",
    measurementId: "G-N71SHQ1VEZ"
  }).auth()