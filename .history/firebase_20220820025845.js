// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjdM_zFF5zPhdPLOeLq-MIP1lLbQUrukM",
  authDomain: "facebook-clone-a17e6.firebaseapp.com",
  projectId: "facebook-clone-a17e6",
  storageBucket: "facebook-clone-a17e6.appspot.com",
  messagingSenderId: "1066645809924",
  appId: "1:1066645809924:web:13b9e67f16208a97173e51",
  measurementId: "G-VSK08971L6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
