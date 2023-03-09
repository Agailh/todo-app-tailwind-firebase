// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3_RL5aciWj_1RCIstozfKwDxMZo36wb4",
  authDomain: "todoapp-tailwind-c17c0.firebaseapp.com",
  projectId: "todoapp-tailwind-c17c0",
  storageBucket: "todoapp-tailwind-c17c0.appspot.com",
  messagingSenderId: "595095878101",
  appId: "1:595095878101:web:5c75101b655fd6cf94255c",
  measurementId: "G-VYJYGZXVVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
