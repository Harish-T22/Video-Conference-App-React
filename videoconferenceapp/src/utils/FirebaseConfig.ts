// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection,getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7J0D_ktRzHONnkZc5KdiiEqoArqdDHWY",
  authDomain: "videoconferenceapp-371ea.firebaseapp.com",
  projectId: "videoconferenceapp-371ea",
  storageBucket: "videoconferenceapp-371ea.appspot.com",
  messagingSenderId: "645678744961",
  appId: "1:645678744961:web:2b57ed5e9168541f0c5480",
  measurementId: "G-V5XNM14LDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
export const firebaseDB= getFirestore(app);
export const userRef=collection(firebaseDB,"users");
export const meetingsRef=collection(firebaseDB,"meetings");

