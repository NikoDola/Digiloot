import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore';
import { cookies } from 'next/headers';

export default async function Profile({ params }) {
  const cookiesStore = cookies();
  const userID = cookiesStore.get('user_id')?.value || null;

  try {
    const docRef = doc(db, 'users', userID)
    const docSnap = await getDoc(docRef)
    const userName = docSnap.data().user_name || null
    return(
        <p>{ userName || userID ||  params.userID} is logged in</p>
    )
    
  } catch (error) {
    
  }



}
