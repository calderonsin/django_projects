import { useEffect,useState } from "react"
import {getAllUsers} from '../api/user.api'
import { UserCard } from "./UserCard";
export function UserList(){
    const [users,setUsers] = useState([])

    useEffect(()=>{

        async function loadTasks(){
            const res = await getAllUsers()
            setUsers(res.data)
            console.log(res)

        }
        loadTasks()        

    } ,[]);
    return(
        <div>
            {users.map(user =>(    
                <UserCard key = {user.id} user = {user}/>                

            )           
                )}
        </div>
    )
}

