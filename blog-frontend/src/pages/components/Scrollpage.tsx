import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "./card";
import { InfiniteLoader } from "./loader";
import { CommonCard } from "./commoncard";
import { Logo } from "../icons/logo";
import { Button } from "./Button";
import { BluetoothSearching } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CommonProfile, Profile } from "./profilecar";
import { Logoutfunc } from "../../hooks&func/logout";

export function Scroll() {

const nav= useNavigate()
 

  
  const [userdet, setuserdet] = useState("nothing");

  const [blog, setblog] = useState([]);
  const [more, setmore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {

   
    async function getcommonblog() {
      try {
        const response = await axios.post(
          "http://localhost:3000/common/blogs",
          {
            page: 1,
          }
        );

        setblog(response.data.blogs);
      } catch (e) {
        return e;
      }
    }

   
    getcommonblog();
  }, [userdet]);


  useEffect(()=>{
    async function getdetail() {

     
     const token= localStorage.getItem("token")
     
      try{

      const res=  await axios.get("http://localhost:3000/user/detail",{
        headers:{
          "token":token
        }
      })
 
  
    setuserdet(res.data.user);
   
         }catch(e){
      console.log(e)
    }
    
   

   
  }

  if (localStorage.getItem("logedin") == "true") {
      
    getdetail();
    console.log(userdet)
  }
  
  },[])



  async function getmoreblog() {
    try {
      const response = await axios.post("http://localhost:3000/common/blogs", {
        page: index,
      });

      //@ts-ignore
      setblog((prev) => [...prev, ...response.data.blogs]);

      response.data.blogs.length > 0 ? setmore(true) : setmore(false);

      setIndex((p) => p + 1);
    } catch (e) {
      return e;
    }
  }

  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <div className="h-20 bg-gray-800 w-screen flex justify-between">
        <div className="m-5">
          <Logo size="lg" colour="text-white" />
        </div>
        <div className="mr-5">
          <Button size="sm" color="bg-purple-600 " text="logout" onClick={()=>{Logoutfunc(nav)}} />
        </div>
      </div>

      <div className="flex w-screen">
        <div className=" w-[25%] h-screen flex justify-center bg-black items-center">
          {(localStorage.getItem("logedin")=="true") &&<Profile username={userdet.username} email={userdet.email}/>}

          {(localStorage.getItem("logedin")==null) &&<CommonProfile/>}
        </div>
          

        <div
          id="parentdiv"
          className="bg-black w-[100%] h-screen flex justify-items-start overflow-auto  "
        >
          <InfiniteScroll
            dataLength={blog.length}
            next={getmoreblog}
            hasMore={more}
            loader={<InfiniteLoader />}
            scrollableTarget="parentdiv"
            scrollThreshold={0.9} // Scroll threshold to trigger next
            endMessage={
              <span className=" w-76 bg-black text-white">
                No more blogs to load
              </span>
            }
          >
            <div className="w-208 rounded-2xl  bg-amber-500 ml-8 custom-scrollbar">
              {blog.map(({ title, userid, date }) => (
                <CommonCard
                  title={title}
                  //@ts-ignore
                  username={userid.username}
                  //@ts-ignore
                  date={date}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
