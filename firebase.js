// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxpdKbFvV5C6JvAxxh86GbWB9X9ED0too",
  authDomain: "body-of-work-8cf9a.firebaseapp.com",
  projectId: "body-of-work-8cf9a",
  storageBucket: "body-of-work-8cf9a.appspot.com",
  messagingSenderId: "191728735829",
  appId: "1:191728735829:web:28bb7d607cdee311ede6dc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };