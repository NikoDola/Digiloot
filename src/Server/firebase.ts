// src/Server/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy3ewvQHBppsCsSBVkEAzKOhcT_kzC0Ow",
  authDomain: "fir-10-4f552.firebaseapp.com",
  databaseURL: "https://fir-10-4f552-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-10-4f552",
  storageBucket: "fir-10-4f552.appspot.com",
  messagingSenderId: "370559014043",
  appId: "1:370559014043:web:403908c6a4463c3111e23e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export {db, provider, auth };
