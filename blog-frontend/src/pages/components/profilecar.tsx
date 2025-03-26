import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

interface profileinter{

username:string,
email:string

}



export function Profile(prop:profileinter){

    const nav=useNavigate()

    return  <div className=" w-[100%] h-[50%] bg-gray-900 flex flex-col rounded-l-none rounded-2xl">
                <div className="h-[40%] w-[100%] bg-gradient-to-t from-slate-800 via-slate-900 to-black flex justify-center items-center">
                  {" "}
                  <img
                    className="w-32 h-32 rounded-full object-cover"
                    src="https://wallpapers.com/images/hd/cool-profile-picture-purple-astronaut-mm73otj7x18b5r7m.jpg"
                    alt="profile image"
                  />
                </div>
                <div className="h-[60%] w-[100%] bg-gray-800  flex flex-col  text-white">
                  
                  <div className="text-3xl items-center flex justify-center">{prop.username}</div>
                  <div className="text-xl flex justify-center mt-3">Gmail-{prop.email}</div>
    
                  <div className="m-5">
                    <Button  onClick={()=>nav("/dashboard")}text="Dashboard" textcol="text-white "color="bg-black" size="md"/>
                  </div>
                </div>
              </div>
}




export function CommonProfile(){


const nav=useNavigate()
    return<div className=" w-[100%] h-[50%] bg-gray-900 flex flex-col rounded-l-none rounded-2xl">
         <div className="h-[100%] w-[100%]  flex flex-col bg-gradient-to-t from-slate-800 via-slate-900 to-black justify-center items-center">

            <div className="text-2xl text-white p-5 m-5">
                Want to Write your own Blogs?
            </div>

            <div className="flex flex-col ">
                <Button text="Login" textcol="text-white" color="bg-black" onClick={()=>{nav("/signin")}} size="md"/>
                    <div className="text-white text-xl flex justify-center">OR</div>
                <Button text="Signup" textcol="text-white" color="bg-black" onClick={()=>{nav("/signup")}} size="md"/>
            </div>
         </div>
    </div>



}