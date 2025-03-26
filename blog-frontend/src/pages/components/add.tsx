import axios from "axios"
import { Button } from "./Button"
import { useRef } from "react"

interface addinterface{
    openvar:boolean,
    onclose:()=>void
}



export function Addblog({openvar,onclose}:addinterface){


  const titleref =useRef<HTMLInputElement>(null)
  const contentref =useRef<HTMLTextAreaElement>(null)



  async function addblog(){
//@ts-ignore
    const title=titleref.current.value
    console.log(title)


    //@ts-ignore
    const content=contentref.current.value 

    try{

      await axios.post("http://localhost:3000/user/addblog",{

        title:title,
        content:content},{

        headers:{
          token:localStorage.getItem("token")
        },
        
         
        

        
      })

      alert("content has been added")
      onclose()
    }catch(e){

      alert("error in adding blog")
      onclose()
    }

  }


    return <div>
        
        
        {openvar && (
  <div className="h-screen w-screen bg-black fixed left-0 top-0  flex justify-center items-center">
    <div className="bg-white w-[60%] h-[90%] border rounded-2xl flex flex-col items-center ">

<div className="flex w-[95%]">

      <div className="w-[90%]"><input type="text"  className=" w-[90%] text-3xl bg-gray-200 rounded-2xl text-black m-2 p-6 border-transparent" placeholder="TITLE" ref={titleref} /> </div>
      
      
      <Button onClick={()=>{onclose()}} size="md" color="bg-purple-500" svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
} />
      
      </div>
      
      <div className=" w-[90%] h-[80%] flex  justify-center"><textarea ref={contentref} className="  p-3 resize-none border-transparent text-lg w-[100%] h-[80%] bg-gray-200 border rounded-2xl"></textarea></div>

   <Button size="md" text="ADD" color="bg-purple-500" onClick={()=>{addblog()}}/>

    </div>
  </div>
)}
        </div>
    
    }
   