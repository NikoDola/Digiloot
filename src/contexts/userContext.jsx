"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { 
    signInWithPopup, 
    signOut as firebaseSignOut, 
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, provider, db } from "@/firebase"; 

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider.google);
            const user = result.user;

            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);

                if (!userDoc.exists()) {
                    await setDoc(userRef, { 
                        displayName: user.displayName, 
                        email: user.email 
                    });
                } 

                setUser(user);
            } else {
                console.error("User not authenticated after sign-in");
            }
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error during sign-out:", error);
        }
    };

    useEffect(() => {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                const unsubscribe = onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const userRef = doc(db, "users", user.uid);
                        const userDoc = await getDoc(userRef);

                        if (userDoc.exists()) {
                            setUser({ ...user, ...userDoc.data() }); 
                        } else {
                            console.error("User not found in Firestore"); 
                        }
                    } else {
                        setUser(null); 
                    }
                    setLoading(false); // Set loading to false once user state is updated
                });

                return () => unsubscribe();
            })
            .catch((error) => {
                console.error("Error setting persistence:", error);
                setLoading(false); // Ensure loading is disabled in case of error
            });
    }, []); 

    return (
        <UserContext.Provider value={{ user, signIn, signOut, loading }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
