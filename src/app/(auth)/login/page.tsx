"use client";
import { useState, useEffect } from "react";
import { useUser } from "@/contexts/userContext"
import { FormEvent } from 'react';
import  Link  from 'next/link'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Login() {
    const { login, error, googleSign, gitHubSign, user} = useUser();
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (user) {
            // Redirect to the profile page if the user is already logged in
            router.push('/profile');
        }
    }, [user, router]);

    user && window.open('/profile')
    const handleShowPassword = () =>{
        showPassword ? setShowPassword(false)  : setShowPassword(true)
        console.log(showPassword)
    }

    async function Log(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            const result = await login(email, password);
            if (result && result.user && result.user.emailVerified) {
                // Redirect to the profile page if the email is verified
                window.location.href = '/profile';
            } else {
                // Set error if the email is not verified
                console.log(error)
            }
        } catch (e: any) {
            // Handle login errors
            console.error(error)
        }
    }

    return (
        <main>
            <Image className="logo" src='/branding/logo/snipsnap_vertical-logo.svg' width={200} height={200} alt="Logo" />

            <form onSubmit={Log} className="logInSignInForm">
            <div onClick={googleSign} className="buttonSignUp">
                <Image src={"/branding/icons/google.svg"} width={16} height={16} alt="google icon"/>
                <p>Login with Google</p>
            </div>
            <div onClick={gitHubSign} className="buttonSignUp">
                <Image src={"/branding/icons/github.svg"} width={16} height={16} alt="google icon"/>
                <p>Login with Github</p>
            </div>
                <p className="bettweenForm">or login with email and password</p>
                <input className="input" type="text" name="email" placeholder="email" required />
                <div className="password">
                <div onClick={handleShowPassword}  className="w-14 h-full ">
                <Image className="icon cursor-pointer" src={showPassword ? '/branding/icons/visual.svg' : '/branding/icons/blind.svg'} height={16} width={16} alt="visual"/>
                </div>
                <input className="w-full" type={showPassword ? 'text': 'password'} name="password" placeholder="password" required />
                </div>
                <button className="mainButton" type="submit">Login</button>
            </form>     
            <p className="my-4">Lost your password? <Link className="text-blue-500" href='/login/reset-password'> Reset your password!</Link> </p>
            <p className="my-4"> Dont have an account? <Link className="text-blue-500" href='/login/signin'> Create one!</Link> </p>          
            <form className="logInSignInForm">
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </main>
    );
}
