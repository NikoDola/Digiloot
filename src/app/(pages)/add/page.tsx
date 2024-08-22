
import AddingSnippets from "@/components/AddingSnippets"


export default async function AddSnippet(){
    let theData = {}

    const getData = async (formData: FormData) =>{
        "use server"
        const title = formData.get('title')
        const language = formData.get('language')
        const code = formData.get('code')
        const descr = formData.get('description')

        theData = {
            title,
            language,
            code,
            descr
        }
    }
    return(
        <main>
            <AddingSnippets/>
        </main>
    )

    }
  