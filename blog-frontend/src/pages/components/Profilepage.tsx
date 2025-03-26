import { useParams } from "react-router-dom"

export function  Profile(){
 
    const{userid}=useParams()
console.log(userid)




    return <div>
{userid}

    </div>

}