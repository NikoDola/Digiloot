"use client";
import { useUser } from "@/contexts/userContext";
import { db } from '@/firebase';
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";


export default function FormComponent() {
    const { user } = useUser();
    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');
    const [frameWork, setFrameWork] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create snippetInfo object
        const snippetInfo = {
            code,
            title,
            description,
            language,
            frameWork
        };

        if (user) {
            try {
                const userDocRef = doc(db, 'users', user.uid);
                const snippetsCollectionRef = collection(userDocRef, 'snippets');
                const newSnippetDocRef = doc(snippetsCollectionRef);

                await setDoc(newSnippetDocRef, snippetInfo);

                console.log('Snippet added successfully');
                
                setCode('');
                setTitle('');
                setDescription('');
            } catch (error) {
                console.error('Error adding snippet: ', error);
            }
        }
    };

    return (
        <main className="mb-32">
            {user ? (
                    <form onSubmit={handleSubmit} className="logInSignInForm">
                    <input
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <input
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                    <input
                        name="language"
                        value={description}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder="Language"
                    />
                    <input
                        name="framework"
                        value={frameWork}
                        onChange={(e) => setFrameWork(e.target.value)}
                        placeholder="Framework"
                    />
                    <textarea
                        className="code"
                        name="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Code"
                    />
                    <button className="mainButton" type="submit">Submit</button>
                </form>
    ): <p>User not found</p>}

        </main>
    );
}
