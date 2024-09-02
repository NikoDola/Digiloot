"use client"
import { useUser } from "@/contexts/userContext"
import Link from 'next/link'
import Image from "next/image"

export default function Footer(){

    const {user, logout} = useUser()
    if(user){
        console.log('user is login')
    }else{
        console.log('user is not login')
    }
    return(
        <footer>
           <p>Hello</p>
        </footer>
    )
}