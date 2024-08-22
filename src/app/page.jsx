"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const { user, signIn } = useUser();
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn();
    router.push("/profile");
  };

  return (
    <main>
      <div className="logInSignInForm">
        <Image
          className="logo"
          src={"/branding/logo/vozise_text_logo.svg"}
          width={200}
          height={15}
          alt="Vozise Logo"
        />
        <div className="buttonSignUp">
          <Image
            src={"/branding/icons/icon_github.svg"}
            width={15}
            height={15}
            alt="Apple Icon"
          />
          <p>Sign up with Apple</p>
        </div>
        <div className="buttonSignUp" onClick={handleSignIn}>
          <Image
            src={"/branding/icons/icon_google.svg"}
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
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
        <p>
          Have an account already?{" "}
          <a className="text-blue-500" href="https://www.nikodola.art">
            Login
          </a>
        </p>
        <p>{user ? `Welcome ${user.displayName}` : ""}</p>
      </div>
    </main>
  );
}
