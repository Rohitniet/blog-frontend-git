import axios from "axios"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export function Signup (){


const emailref= useRef<HTMLInputElement>(null)
const passwordref= useRef<HTMLInputElement>(null)
const userref= useRef<HTMLInputElement>(null)

const navigate=useNavigate()


async function signup (){
    
    const email= emailref.current?.value
    const password= passwordref.current?.value
    const username= userref.current?.value

    await axios.post("http://localhost:3000/user/signup",{
        email,
        password,
        username
    })

    navigate("/signin")
}

const common =" border p-2 m-2 border rounded-lg border-2  text-base "

    return <div className=" flex h-screen w-screen justify-center items-center bg-black">


        <div
        className="h-72 w-72 flex bg-white flex-col justify-center items-center p-5 m-5 border rounded-lg">

            <div className="text-lg"> SIGNUP</div>

            <input ref ={emailref} type="text" className={common}   placeholder="enter your email"/>
            <input ref ={passwordref} type="text" className={common}  placeholder="enter your password"/>
            <input  ref = {userref} type="text" className={common}  placeholder="enter your username"/>

            <button className=" bg-black text-white border rounded-lg p-2 cursor-pointer " onClick={signup}> Signup</button>

        </div>
        


    </div>
}