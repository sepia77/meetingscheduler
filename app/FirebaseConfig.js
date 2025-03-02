// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "project2-aa633.firebaseapp.com",
  projectId: "project2-aa633",
  storageBucket: "project2-aa633.firebasestorage.app",
  messagingSenderId: "158871649266",
  appId: "1:158871649266:web:4bd9a19bef57c0a424c96b",
  measurementId: "G-2GGNGZ1R4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };