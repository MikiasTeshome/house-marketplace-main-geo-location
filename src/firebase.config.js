// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANZaILFz_dfTVyoBTKIT9gZkQe-XB0MYQ",
  authDomain: "housemarketplace-3b2ab.firebaseapp.com",
  projectId: "housemarketplace-3b2ab",
  storageBucket: "housemarketplace-3b2ab.appspot.com",
  messagingSenderId: "419163290569",
  appId: "1:419163290569:web:51d1fa5444a601f901c618"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()