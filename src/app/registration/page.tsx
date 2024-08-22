import { useUser } from '@/contexts/userContext';
import { useState } from 'react';

export default function SignInPage() {
    const { signInWithEmail, signUpWithEmail } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        signInWithEmail(email, password);
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
