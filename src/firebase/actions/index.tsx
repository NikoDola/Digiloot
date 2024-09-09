"use server"
import { db } from '@/firebase'
import { cookies } from 'next/headers'
import { doc, getDoc } from 'firebase/firestore'

export async function getUser() {
    const cookiesStore = cookies()
    const userID = cookiesStore.get('user_id')?.value 

    const docRef = doc(db, 'users', userID)
    const gettingUser = await getDoc(docRef)
    
    return gettingUser.data() || {}
}
