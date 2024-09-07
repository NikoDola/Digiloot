"use server"
import { db } from '@/firebase'
import { collection, doc } from 'firebase/firestore'
import { cookies } from 'next/headers'

export const whoIsMe = async () => {
    const cookieStore = cookies()
    const userUID = cookieStore.get('user_id')?.value || null
    
    if (!userUID) return null; // Return null if user isn't authenticated

 
    const userDocRef = doc(db, 'users', userUID);
    

    const snippetsCollectionRef = collection(userDocRef, 'snippets');
    
    return snippetsCollectionRef; // Return the reference to the snippets collection
}
