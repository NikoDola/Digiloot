"use client"

import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import {provider, auth} from "../../Server/firebase"

export default function login(){

    const [logIn, setLogin] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            const auth = await getAuth()
            
        }
    },[])

    return(
        <div>
            <h1>Settings</h1>
            <p>LogIn</p>
            <p>Delete Account</p>
        </div>
    )
}