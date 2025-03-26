import axios from "axios";
import { Card } from "./card";
import { useEffect, useState } from "react";
import { Getblogs } from "../../hooks&func/getblog";

//@ts-ignore
export function Rendercomp ({blogs,setblogs}){



    useEffect(()=>{

      

        Getblogs(setblogs);
    },[])

    

   
   
    


    return <div className="bg-black w-[78%] h-[82%] overflow-scroll custom-scrollbar  absolute top-30 right-0 border rounded-2xl mr-2">

        {
            blogs.map(({title,userid,date})=><Card 
            title={title}
            //@ts-ignore
            username={userid.username}
            //@ts-ignore
            date={date}
            setblogs={setblogs}

            />)
        }



    </div>
}