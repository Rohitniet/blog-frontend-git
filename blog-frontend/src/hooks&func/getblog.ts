import axios from "axios"


//@ts-ignore
export async function Getblogs(setblogs){
    console.log("getboging is working ")

    try{

const blogsreq= await axios.get("http://localhost:3000/user/allblog",{
        headers:{
            "token":localStorage.getItem("token")
        }
    })

  setblogs(blogsreq.data.blogs)
}catch(e){

        //@ts-ignore
        setblogs(["error while gettingb blogs"])
    }

}