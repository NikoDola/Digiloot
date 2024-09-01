"use client"

import { FormEvent, useState } from 'react';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db, auth } from '@/firebase'; // Adjust the import based on your setup
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetPasswordForm = () => {
    const [message, setMessage] = useState<string>('');

    const resetPasswordHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Retrieve email from form data
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;

        try {
            // Query Firestore to check if the email exists
            const q = query(collection(db, 'users'), where('email', '==', email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                // Email does not exist
                console.error('Email not found');
                setMessage('Email not found');
                return;
            }
            
            // Email exists, proceed to send password reset email
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent');
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred');
        }
    };

    return (
        <form onSubmit={resetPasswordHandler}>
            <input type="email" name="email" required placeholder="Enter your email" />
            <button type="submit">Reset Password</button>
            <p>{message}</p>
        </form>
    );
};

export default ResetPasswordForm;
