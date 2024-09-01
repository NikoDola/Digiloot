"use client";

import { useUser } from '@/contexts/userContext'
import { useState } from 'react';

export default function Home() {
  const { signUpWithEmail, error, user, userVerify } = useUser();
  const [ hidePasRs, setHidePass, ] = useState('text')

  async function getFormData(event: any) {
    try {
      event.preventDefault(); // Prevent the form from reloading the page
      const formData = new FormData(event.target); // Get form data
      const email = formData.get('email') as string;
      const pass = formData.get('password') as string;
      const confPass = formData.get('confirmPassword') as string;
  
      await signUpWithEmail(email, pass, confPass);
  
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <main>
      <form onSubmit={getFormData}>
        <input type="text" name="email" placeholder="Email" required />
        <input  type={''} name="password" placeholder="Password" required />
        <input type="text" name="confirmPassword" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
}
