"use client";
import { useState } from "react";
import { useUser } from "@/contexts/userContext"
import { FormEvent } from 'react';
import  Link  from 'next/link'

export default function Login() {
    const { login, error } = useUser();


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
            <form onSubmit={Log}>
                <input type="text" name="email" placeholder="email" required />
                <input type="password" name="password" placeholder="password" required />
                <button type="submit">Login</button>
            </form>
            <p><Link href='/login/reset-password'>Lost your password?</Link> </p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </main>
    );
}
