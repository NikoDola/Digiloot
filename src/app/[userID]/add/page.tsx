"use client"

import { db } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"


export default function AddLanguage(){
  const [languageList, setLanguageList] = useState([])

  useEffect(()=>{
    const fetchData = async() =>{
      const colRef = collection(db, 'languages')
      const querySnapshot = await getDocs(colRef)
      const mapping = querySnapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      setLanguageList(mapping)
    }
    fetchData();
  }, [])

  return(
    <ul>
      {languageList.map((element)=>(
        <ul key={element.id}>
          <li value={element.name}>{element.name}</li>
        </ul>
      ))}
    </ul>
  )
}
