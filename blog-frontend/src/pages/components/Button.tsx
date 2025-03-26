import React from "react"


const size={
    "sm":"m-2 p-2 ",
    "md":"m-2 p-3",
    "lg":"m-2 p-6",
}

interface Buttoninterface {

"size":"sm"|"md"|"lg",
"svg"?:React.ReactNode,
"onClick"?:()=>void,
"text"?:string,
"color":string,
"textcol"?:string,
"textsize"?:string,


}


const common=" rounded-2xl font-light flex items-center justify-center cursor-pointer"
export function Button(prop:Buttoninterface){


    return <button onClick={prop.onClick} className= {`font-bold ${prop.textsize} ${prop.textcol} ${prop.color} ${size[prop.size]} ${common} `}>  <div>{prop.svg}</div> {prop.text}</button>
    
}