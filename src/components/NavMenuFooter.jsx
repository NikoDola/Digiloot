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
        <nav >
            <ul className="navMenuFooter" >
                <Link href={'/profile'}><Image 
                    src='/branding/icons/profile.svg'
                    width={24}
                    height={24}
                    alt="profile icon"
                    className="filter invert brightness-100"
                    />
                </Link>

                <Link href={'/search'}><Image 
                    src='/branding/icons/search.svg'
                    width={24}
                    height={24}
                    alt="search icon"
                    className="filter invert brightness-100"
                    />
                </Link>

                <Link href={'/add'}><Image 
                    src='/branding/icons/add.svg'
                    width={24}
                    height={24}
                    alt="add icon"
                    className="filter invert brightness-100"
                    />
                </Link>

                <Link href={'/documents'}><Image 
                    src='/branding/icons/documents.svg'
                    width={24}
                    height={24}
                    alt="documents icon"
                    className="filter invert brightness-100"
                    />
                </Link>

                <Link href={'/settings'}><Image 
                    src='/branding/icons/settings.svg'
                    width={24}
                    height={24}
                    alt="settings icon"
                    className="filter invert brightness-100"
                    />
                </Link>

            </ul>
        </nav>
    )
}