// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxkbePdJA5ThEpxjDdjDNJKAsbEwOPWMM",
  authDomain: "otp-project2-87ff6.firebaseapp.com",
  projectId: "otp-project2-87ff6",
  storageBucket: "otp-project2-87ff6.appspot.com",
  messagingSenderId: "905970492336",
  appId: "1:905970492336:web:ce27e2a88c545134006c75",
  measurementId: "G-ZGFTDZS9BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);