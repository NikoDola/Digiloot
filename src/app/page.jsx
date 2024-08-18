"use client";
import Image from "next/image";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import { provider, auth } from "../Server/firebase";

export default function Home() {
  const [logIn, setLogIn] = useState(null);
  const [user, setUser] = useState(null); 


const handleSignIn = async () =>{
 
  const result = await signInWithPopup(auth, provider)
 
  const credential = GoogleAuthProvider.credentialFromResult(result)
  const token = credential.accessToken;
  const user = result.user
  setUser(user)
  setLogIn(true)
  
}

  // Uncomment the following line if you want to trigger sign-in automatically on component mount
  // useEffect(() => {
  //   handleSignIn();
  // }, []); // Empty dependency array means this runs once on component mount

  return (
    <main>
      <div className="logInSignInForm">
        <Image
          className="logo"
          src={'/branding/logo/vozise_text_logo.svg'}
          width={200}
          height={15}
          alt="Vozise Logo"
        />
        <div className="buttonSignUp">
          <Image
            src={'/branding/icons/icon_apple.svg'}
            width={15}
            height={15}
            alt="Apple Icon"
          />
          <p>Sign up with Apple</p>
        </div>
        <div className="buttonSignUp" onClick={handleSignIn}>
          <Image
            src={'/branding/icons/icon_google.svg'}
            width={15}
            height={15}
            alt="Google Icon"
          />
          <p>Sign up with Google</p>
        </div>
        <p className="bettweenForm">or</p>
        <div className="mainButton">
          <p>Create an Account</p>
        </div>
        <p className="small">
          By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
        </p>
        <p>
          Have an account already?{" "}
          <a className="text-blue-500" href="www.nikodola.art">
            Login
          </a>
        </p>
        <p>{`welcome ${user}`}</p>
      </div>
    </main>
  );
}
