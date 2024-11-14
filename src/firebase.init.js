// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADfkZIj8N0kYidQexkKN5Q5Agp7MxDTns",
  authDomain: "email-password-auth-c2750.firebaseapp.com",
  projectId: "email-password-auth-c2750",
  storageBucket: "email-password-auth-c2750.firebasestorage.app",
  messagingSenderId: "640872427727",
  appId: "1:640872427727:web:997398b523f25938a687ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)