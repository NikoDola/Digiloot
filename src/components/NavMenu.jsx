"use client"
import Link from "next/link";

export default function NavMenu() {
    return (
        <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 flex gap-6 ">
            <Link href='/'>Home</Link>
            <Link href='/settings'>Settings</Link>
        </ul>
    );
}
