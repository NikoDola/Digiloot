// This component remains the same as the previous version
"use client";
import { useUser } from "../../ClientComponents/userContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
    const { user, signOut } = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const handleLogout = async () => {
        await signOut(); 
        router.push("/"); 
    };

    useEffect(() => {
        if (user !== null) {
            console.log("User is logged in:", user.displayName);
            setIsLoading(false);
        } else {
            console.log("No user is logged in or still loading...");
        }
    }, [user]);

    return (
        <div>
            <h1>Profile Page</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : user ? (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button> 
                </div>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}