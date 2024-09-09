"use client"
import { useUser } from "@/contexts/userContext";

export default function ProfilePage({ params }) {
  const {user} = useUser()
  return (
    <div>
      <p>{user.uid}</p>
      <h1>Profile Page for User {params.userID}</h1>
      <p>This is the profile page for user {params.userID}.</p>
    </div>
  );
}
