import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcu7uJUl35woLKhkrcR221H2CQltb9PPM",
  authDomain: "digiloot-a91cf.firebaseapp.com",
  projectId: "digiloot-a91cf",
  storageBucket: "digiloot-a91cf.appspot.com",
  messagingSenderId: "594800097590",
  appId: "1:594800097590:web:732c6890e062d279c69b97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, provider, db, app}