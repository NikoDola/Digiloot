"use client"
import {  signInWithPopup } from "firebase/auth"
import { provider, auth } from '../../Server/firebase';
import { useEffect, useState } from "react"


export default function loginTest(){
    console.log(`auth:${auth}, provider:${provider}`)
    const [user, setUser] = useState(null)


    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error("Error signing in:", error);   
    
        }
    };



    return(
        <div>
            <button onClick={handleLogin} className="mainButton">Login</button>
            <p>{user}</p>
        </div>
        
    )
}