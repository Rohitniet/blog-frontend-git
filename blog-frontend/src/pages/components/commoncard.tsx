import { Button } from "./Button"

interface cardinterfacecommon{
    title: string,
    username: string,
    date: string,
}



export function CommonCard(prop:cardinterfacecommon){



return<div className="w-126 p-2 m-2  bg-violet-800 h-30 flex flex-col rounded-2xl">

    
<div className="flex justify-between ">

<div className="text-white flex justify-center items-center text-2xl w-40">{prop.title}</div>

<div className="flex w-40flex-end ">
    <Button text="Read" textcol="text-white" size="sm" color="bg-purple-500" svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-white size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
}/>

<Button text="Read" textcol="text-white" size="sm" color="bg-purple-500" svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-white size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

}/>
</div>

</div>



<div className="flex w-108 justify-evenly mt-2 ">

    <div className=" text-white text-xl border rounded-2xl p-2"> BY {prop.username}</div>
    <div className=" text-white text-xl border rounded-2xl p-2 ">{prop.date}</div>
</div>

</div>

}