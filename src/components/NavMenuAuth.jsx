"use client"
import { useUser } from "@/contexts/userContext"
import Link from 'next/link'
import Image from "next/image"

export default function NavMenuAuth(){

    const {user, logout} = useUser()
    if(user){
        console.log('user is login')
    }else{
        console.log('user is not login')
    }
    return(
        <nav>
           <Link href={'/'}> <Image src='/branding/logo/snipsnap_horizontal-logo.svg' width={150} height={150} alt="snipsnap logo"/></Link>
            <ul className="flex gap-5 justify-center">
                { user && <li><Link href={'/profile'}>Profile </Link></li>}
                <li onClick={user && logout}><Link href={user ? '#' : '/login'}>{user ? 'Logout': 'Login'}</Link></li>
                {!user && <Link href={'/signup'}>Signup</Link>}
            </ul>
        </nav>
    )
}