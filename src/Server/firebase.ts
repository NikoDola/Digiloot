// src/Server/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGRpnoe-hWkKaYTTU6JCPcZIDGLz7xwVo",
  authDomain: "testing23-5f4ec.firebaseapp.com",
  projectId: "testing23-5f4ec",
  storageBucket: "testing23-5f4ec.appspot.com",
  messagingSenderId: "1060839012537",
  appId: "1:1060839012537:web:4952b6b9693cbe304d8368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export {db, provider, auth };
//commentar