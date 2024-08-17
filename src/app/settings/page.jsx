"use client";

import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { provider, auth } from "../../Server/firebase";

export default function Login() {
    const [logIn, setLogin] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const auth = await getAuth();
            // You can add additional logic here if needed
        };
        fetchData(); // Don't forget to call the async function
    }, []);

    return (
        <div>
            <h1>Settings</h1>
            <p>LogIn</p>
            <p>Delete Account</p>
        </div>
    );
}
