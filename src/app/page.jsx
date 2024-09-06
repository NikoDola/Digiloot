"use client";
import { useUser } from "@/contexts/userContext";

export default function Home() {
  const {user} = useUser()
  
  return (
    <main>
      
     <p>Home page</p>
     {user ? <p>{user.uid}</p>: <p>No one is logged in</p>}

    </main>
  );
}
