
import { db } from "@/firebase";
import { cookies } from "next/headers";
import {collection, doc, getDocs} from 'firebase/firestore'
import WordSearcher from "@/components/WordSearcher";
import { getUser } from "@/firebase/actions";


export default async function asyncParentComponent() {

    const cookieStore = cookies()
    const uid = cookieStore.get('user_id')?.value

        const docRef = doc(db, 'users', uid)
        const colRef = collection(docRef, 'languages')
        const getLang = await getDocs(colRef)

        const langCollection = getLang.docs.map((item)=>({
            id: item.id,
            ...item.data()
        }))
        try {
        } catch (error) {
            console.error(error)
            console.log(error)
        }
        return (
            <div>
                <form>
                   <WordSearcher value={langCollection}/>
                </form>
            
            </div>
        );
    }
