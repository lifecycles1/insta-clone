// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrvoP07nxQNYkkCoGUAQZfEqk8sOXOaDY",
  authDomain: "instagram-clone-7439f.firebaseapp.com",
  projectId: "instagram-clone-7439f",
  storageBucket: "instagram-clone-7439f.appspot.com",
  messagingSenderId: "548314935635",
  appId: "1:548314935635:web:b6c105c6de1c1fdb0cf1a6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
