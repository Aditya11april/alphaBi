// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAaglJfZsEWZEdW9aLYnIYRr-YhbHcEBE",
  authDomain: "alphabi-aa388.firebaseapp.com",
  projectId: "alphabi-aa388",
  storageBucket: "alphabi-aa388.appspot.com",
  messagingSenderId: "59802430622",
  appId: "1:59802430622:web:232167d69e9a2cdf189f8f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default {app, auth};

export default firebase;
