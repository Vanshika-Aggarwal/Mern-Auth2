// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "skilled-axis-299808.firebaseapp.com",
  projectId: "skilled-axis-299808",
  storageBucket: "skilled-axis-299808.appspot.com",
  messagingSenderId: "963915765979",
  appId: "1:963915765979:web:7b94a4538a690f23f094fe",
  measurementId: "G-JPJQZ7XC9K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
