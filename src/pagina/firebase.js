// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkawwmC-vWjZReaVSc2yhEUb_Yk6yZmpg",
  authDomain: "appreact-be5a3.firebaseapp.com",
  projectId: "appreact-be5a3",
  storageBucket: "appreact-be5a3.appspot.com",
  messagingSenderId: "542380031367",
  appId: "1:542380031367:web:90466b1173774b3801a722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);  
export const  storage = getStorage(app);