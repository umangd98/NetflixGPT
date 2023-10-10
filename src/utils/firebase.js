// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCX9P0xbuPRecR0CtroOUiNV4YYxvnIaI",
  authDomain: "netflix-gpt-7bb30.firebaseapp.com",
  projectId: "netflix-gpt-7bb30",
  storageBucket: "netflix-gpt-7bb30.appspot.com",
  messagingSenderId: "1001436115619",
  appId: "1:1001436115619:web:bb408f24b6bf4b8f95c516",
  measurementId: "G-D17DY0N4EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();