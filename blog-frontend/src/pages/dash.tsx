import { useState } from "react";
import { Rendercomp } from "./components/render";
import { Sidebar } from "./components/sidebar";
import { Topbar } from "./components/topbar";
import { Addblog } from "./components/add";
import { Getblogs } from "../hooks&func/getblog";



export function  Dashboard({}){

     const [blogs,setblogs]=useState([])

    const [openvar,onclose]=useState(false)
         

function trial(){
    Getblogs(setblogs)
    onclose(false)
}



    return <div className="h-screen w-screen bg-neutral-900">
<div className="relative">
        <Sidebar/>
        <Topbar onclose={()=>onclose(true)} />
        <Rendercomp blogs={blogs} setblogs={setblogs}/>
        <Addblog openvar={openvar} onclose={trial}/>
        
        </div>
    </div>
}