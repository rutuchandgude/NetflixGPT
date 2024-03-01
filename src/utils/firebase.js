import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5FoJbnfk8_CHBUCxjnihIHpskeV2anhM",
  authDomain: "netflixgpt-f0c54.firebaseapp.com",
  projectId: "netflixgpt-f0c54",
  storageBucket: "netflixgpt-f0c54.appspot.com",
  messagingSenderId: "1085106202312",
  appId: "1:1085106202312:web:9abe80151caa52114b67fd",
  measurementId: "G-93873MMQ9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();