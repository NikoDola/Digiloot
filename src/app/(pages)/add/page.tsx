import AddingSnippets from "@/components/AddingSnippets"
import cookie from 'cookie';

export default async function AddSnippet(){

    console.log(cookie)

    return(
        <main>
            <AddingSnippets/>
        </main>
    )

    }
  