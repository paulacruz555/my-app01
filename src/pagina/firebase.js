// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkvPoDB19M4lZS-XauWupd-1pRriooWPU",
  authDomain: "sandra-f515e.firebaseapp.com",
  projectId: "sandra-f515e",
  storageBucket: "sandra-f515e.appspot.com",
  messagingSenderId: "42711673204",
  appId: "1:42711673204:web:4a4a05320b161b1a992421",
  measurementId: "G-LRY48K5L8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);  
export const  storage = getStorage(app);