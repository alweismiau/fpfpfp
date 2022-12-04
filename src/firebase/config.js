// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://firebase.google.com/docs/firestore/quickstart
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIBhyyNbXD3SFFtTwB9A4hzWrgk9nioIw",
  authDomain: "finalprojectpw.firebaseapp.com",
  projectId: "finalprojectpw",
  storageBucket: "finalprojectpw.appspot.com",
  messagingSenderId: "296051950813",
  appId: "1:296051950813:web:cd5d389ac3b73336e8c734",
  measurementId: "G-B3E79085PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
