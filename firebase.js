// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmjUT-EIB08W5TmjRaGKCxnhSYJ1NiYdo",
  authDomain: "next-auth-crud-71378.firebaseapp.com",
  projectId: "next-auth-crud-71378",
  storageBucket: "next-auth-crud-71378.appspot.com",
  messagingSenderId: "655329275036",
  appId: "1:655329275036:web:632292e82e03edd15ad159"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);