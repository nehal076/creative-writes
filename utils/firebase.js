// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase';
import { getFireStore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPZ2luxu2RTNYLYNi4tmZAcf4wU12aRq0",
  authDomain: "fullstack-react-nehal.firebaseapp.com",
  projectId: "fullstack-react-nehal",
  storageBucket: "fullstack-react-nehal.appspot.com",
  messagingSenderId: "147146953577",
  appId: "1:147146953577:web:e119c03efe5e883a9da3f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFireStore(app);