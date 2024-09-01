"use client"
import { useUser } from '@/contexts/userContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
    const { signInWithEmail, signUpWithEmail } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleSignIn = async () => {
        try {
          await signInWithEmail(email, password);
        } catch (error) {
          if (error) { // Check if there's any error
            console.log('Something happened (error during sign-inEEEEEEEEE):', error);
          }
        }
      };

    const handleSignUp = () => {
        signUpWithEmail(email, password);
     
    };

    return (
        <div>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
            />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}
