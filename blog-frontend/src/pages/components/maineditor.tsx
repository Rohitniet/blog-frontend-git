import { useEffect, useState } from "react"
import Tiptap from "./editor"


export function Editor(){


const [content ,setcontent]=useState("")

useEffect(()=>{
console.log(content+"use effect")
},[content])

function contenthandler(d){
    setcontent(d);
    console.log("hitting it")
}

    return <div>

        <Tiptap passparent={contenthandler}/>
    </div>
}