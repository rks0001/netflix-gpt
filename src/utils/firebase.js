// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Wyw6OUP0_vyK7E9fpgrj6h8z1JnZEKs",
  authDomain: "netflix-gpt-e463d.firebaseapp.com",
  projectId: "netflix-gpt-e463d",
  storageBucket: "netflix-gpt-e463d.appspot.com",
  messagingSenderId: "640181774446",
  appId: "1:640181774446:web:03859ffe56e70a7156de7f",
  measurementId: "G-Y5HLCMLNX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();