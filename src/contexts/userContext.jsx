"use client";

import { useState, useEffect, useContext, createContext } from "react";
import { 
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  deleteUser,
} from "firebase/auth";
import { auth } from '@/firebase';
import { db } from '@/firebase'
import { setDoc, doc, collection, deleteDoc } from "firebase/firestore";

export const UserContext = createContext();

export function WrapFunction({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [userVerify, setUserVerify] = useState(false);
  const [lastPasswordChange, setLastPasswordChange] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setUserVerify(currentUser.emailVerified);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUpWithEmail = async (email, pass, confirmPass) => {
    if (pass !== confirmPass) {
      setError('Passwords do not match');
    } else if (pass.length <= 9) {
      setError('Password needs to be at least 9 characters');
    } else {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, pass);
        await sendEmailVerification(result.user);
  
        const colRef = collection(db, 'users'); // Reference to the 'users' collection
        const docRef = doc(colRef, result.user.uid); // Document reference with UID as the ID
  
        // Set the document with the required data
        await setDoc(docRef, { 
          user: result.user.uid, 
          email: result.user.email
        });
  
        setUser(result.user);
        setError(null);
        console.log("Sign-up successful:", result.user);
  
        window.open('/verification', '_blank');
      } catch (error) {
        console.error("Sign-up failed", error);
        if (error.code === 'auth/email-already-in-use') {
          setError('Email already in use');
        } else if (error.code === 'auth/weak-password') {
          setError('Password needs to be at least 9 characters');
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
      }
    }
  };
  const changePassword = async (newPassword) => {
  if (!user) {
    setError('User is not authenticated.');
    return;
  }

  const currentTime = Date.now();
  const cooldownPeriod = 5 * 60 * 1000; // 5 minutes

  if (lastPasswordChange && currentTime - lastPasswordChange < cooldownPeriod) {
    setError('Please wait before attempting to change your password again.');
    return;
  }

  try {
    await updatePassword(user, newPassword);
    setLastPasswordChange(currentTime);
    setError(null);
    console.log("Password updated successfully.");
  } catch (error) {
    console.error("Failed to update password", error);
    if (error.code === 'auth/requires-recent-login') {
      setError('Please log in again to update your password.');
    } else {
      setError('Failed to update password. Please try again.');
    }
  }
  };

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result.user.emailVerified) {
        setUser(result.user);
        setUserVerify(true);
        return result;
      } else if (!result.user.emailVerified) {
        setError(`Email not verified, we just sent you a verification link, please check your inbox or spam folder.`)
        sendEmailVerification(result.user);
      } else if (error.code === 'auth/invalid-credential') {
        setError("Wrong email or password");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("Failed to log in. Please check your credentials and try again.");
      throw error;
    }
  };

  const logout = () =>{
    signOut(auth)
  }

  const resetPassword = async(email) => {
    sendPasswordResetEmail(auth, email)
  }

  const deleteUsers = async () =>{
    const docRef = doc(db, 'users', user.uid)
    await deleteDoc(docRef)
    deleteUser(user)
   
  }

  return (
    <UserContext.Provider value={{ 
      user, 
      signUpWithEmail, 
      error, 
      logout,
      deleteUsers,
      userVerify, 
      login, 
      changePassword, 
      setError,
      resetPassword }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
