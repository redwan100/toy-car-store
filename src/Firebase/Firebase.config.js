// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGHMwCqDQZqKBZAtrPO_tp7Hj__85LHBg",
  authDomain: "toy-store-a9638.firebaseapp.com",
  projectId: "toy-store-a9638",
  storageBucket: "toy-store-a9638.appspot.com",
  messagingSenderId: "656732081363",
  appId: "1:656732081363:web:dd53c638f45202c9351826",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;