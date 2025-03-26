import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Logoutfunc } from "../../hooks&func/logout";


interface topinterface{
  
  onclose:()=>void


}



export function Topbar({onclose }:topinterface){

  const nav=useNavigate()

  function logout(){

    localStorage.removeItem("token")
    localStorage.removeItem("logedin")
nav("/signin")
  }


    return <div className="h-25 w-[79.3%] border  rounded-b-2xl   bg-black text-black absolute top-0 right-0">


<div className="flex justify-end mt-2">
    <Button  textcol="text-white" size="sm" 
    
    
    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-white size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
   } 
   
   color="bg-purple-500" text="add" onClick={()=>onclose()}/>

<Button  textcol="text-white" size="sm" 
    
    
    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-white size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
      </svg>
      
   } 
   
   color="bg-purple-500" text="logout" onClick={()=>{Logoutfunc(nav)}} />
    </div>
    </div>
}