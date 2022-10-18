// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8KjTn6LuH66WcQaIv33FMQ5oCRYhln2E",
  authDomain: "phonebook-firebase-df75e.firebaseapp.com",
  projectId: "phonebook-firebase-df75e",
  storageBucket: "phonebook-firebase-df75e.appspot.com",
  messagingSenderId: "1009525386749",
  appId: "1:1009525386749:web:a1c4959cf5a1796caa7d94",
  measurementId: "G-3NWVZCTZ5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};