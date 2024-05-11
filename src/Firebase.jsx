// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAifVX3215LMJQK1bI7DQfeiSKVHPxvSpg",
  authDomain: "test-dbe2f.firebaseapp.com",
  projectId: "test-dbe2f",
  storageBucket: "test-dbe2f.appspot.com",
  messagingSenderId: "15538991046",
  appId: "1:15538991046:web:be7247aa4f50505b408cc7",
  measurementId: "G-DVTH20FZEG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export{auth}