"use client";
import { useUser } from '@/contexts/userContext';


export default function Profile() {
  const { user, userVerify, deleteUsers, logout} = useUser();

  return (
    <main>
      <h1>User Profile</h1>
      {user ? (
        <div>
          {user.emailVerified ? (
            <p>Your email is verified.</p>
          ) : (
            <p>Your email is not verified. Please check your inbox for a verification email.</p>
          )}          
          <p>Email: {user.email}</p>
          <p>Display Name: {user.username || user.displayName || `Uknown` }</p>
          <p>
            Email Verified: {user.emailVerified ? "Yes" : "No"}
          </p>
          <div className='logInSignInForm'>
            <button className='mainButton' onClick={logout}>Log Out</button>
            <button className='mainButton' onClick={deleteUsers}>Delete user</button>
          </div>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </main>
  );
}
