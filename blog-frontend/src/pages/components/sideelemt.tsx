import React from "react"

interface elements{
    "svg":React.ReactNode,
    "title":string
    "onclick"?:()=>void
}



export function Sideelement(prop:elements){



    return <div className="not-only:text-white border-white w-68 rounded-lg  flex mt-5 ml-1.5 p-2 justify-center items-center text-xl bg-red-300 cursor-pointer  ">

    <div className="mr-2">{prop.svg}</div>
    <button onClick={prop.onclick}>{prop.title}</button>

    </div>
}