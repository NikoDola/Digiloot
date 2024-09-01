"use client";
import Link from "next/link";
import { useUser } from "@/contexts/userContext";

export default function Home() {
  const {user} = useUser()

  return (
    <main>
     <p>Home page</p>
     {user ? <p>Some one is loggedin</p>: <p>no one is loged in</p>}
    </main>
  );
}
