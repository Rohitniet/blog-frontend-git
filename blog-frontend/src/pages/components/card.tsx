import axios from "axios";
import { Button } from "./Button";
import { Getblogs } from "../../hooks&func/getblog";

interface cardinterface {
  title: string;
  username: string;
  date: string;
  setblogs?:()=>void
}

export function Card(prop: cardinterface) {
  async function DeleteBlog(title: string) {
    try {
      const res = await axios.delete("http://localhost:3000/user/delblog", {
        headers: {
          token: localStorage.getItem("token"),
        },

        data: {
          title: title,
        },
      });

      Getblogs(prop.setblogs)
      //@ts-ignore
      alert(`your blog has been deleted`);

      
    } catch (e) {
      alert("unabel to delete message");
    }
  }

  return (
    <div className=" flex flex-col w-[60%] m-4 h-18 bg-red-400 border-black rounded-2xl">
      <div className="flex  w-[90%]   text-white ml-2 justify-between items-center relative ">
        <div className="text-2xl">{prop.title}</div>

        <div className="flex justify-center items-center  ">
          <Button
          onClick={()=>DeleteBlog(prop.title)}
            size="sm"
            color="bg-purple-500"
            text-col="text-white"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            }
          />

          <Button
            size="sm"
            color="bg-purple-500"
            text-col="text-white"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            }
          />
        </div>
      </div>

      <div className="flex  w-[90%] ml-2  text-white justify-between items-center relative ">
        <div>BY {prop.username}</div>

        <div>Date- {prop.date}</div>
      </div>
    </div>
  );
}
