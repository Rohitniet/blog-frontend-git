import axios from "axios"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export function Signin (){


const emailref= useRef<HTMLInputElement>(null)
const passwordref= useRef<HTMLInputElement>(null)


const navigate=useNavigate()


async function signin (){
    
    const email= emailref.current?.value
    const password= passwordref.current?.value
   

   const response= await axios.post("http://localhost:3000/user/signin",{
        email,
        password,
       
    })

    const token= response.data.token

    localStorage.setItem("token",token)
    localStorage.setItem("logedin","true")

    navigate("/dashboard")

    
}

const common =" border p-2 m-2 border rounded-lg border-2  text-base "

    return <div className=" flex h-screen w-screen justify-center items-center bg-black">


        <div
        className="h-72 w-72 flex bg-white flex-col justify-center items-center p-5 m-5 border rounded-lg">

            <div className="text-lg"> SIGNIN</div>

            <input ref ={emailref} type="text" className={common}   placeholder="enter your email"/>
            <input ref ={passwordref} type="text" className={common}  placeholder="enter your password"/>
            
            <button className=" bg-black text-white border rounded-lg p-2 cursor-pointer " onClick={signin}> Signin</button>

        </div>
        


    </div>
}