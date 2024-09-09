"use client"
import { useUser } from "@/contexts/userContext"
import Link from 'next/link'
import Image from "next/image"

export default function NavMenuAuth(){

    const {user, logout} = useUser()

    return(
        <nav className="">
           <Link href={'/'}> 
           <Image 
                src="/branding/logo/snipsnap_horizontal-logo.svg" 
                width={150} 
                height={50} 
                alt="snipsnap logo" 
                style={{ width: '150px', height: '40px' }} // Inline styles
                priority={true}
            />
           </Link>
            <ul className="flex gap-5 justify-center">
                { user && <li><Link href={'/profile'}>My Account </Link></li>}
                <li onClick={user && logout}><Link href={user ? '#' : '/login'}>{user ? 'Logout': 'Login'}</Link></li>
                {!user && <Link href={'/signup'}>Signup</Link>}
            </ul>
        </nav>
    )
}