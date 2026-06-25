// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfVlC1OKZwMZvDq23UNfnunlRhk6RNKwI",
  authDomain: "netflix-gpt-dd7cc.firebaseapp.com",
  projectId: "netflix-gpt-dd7cc",
  storageBucket: "netflix-gpt-dd7cc.firebasestorage.app",
  messagingSenderId: "213034220998",
  appId: "1:213034220998:web:e0ed79f54c6b4d81fa06c7",
  measurementId: "G-VCQCDG5J66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();