import { useEffect,useState } from "react"
import {getAllUsers} from '../api/user.api'
import { UserTable } from "./UserTable";
import { useNavigate} from 'react-router-dom';
export function UserList(){
    const [users,setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{

        async function loadTasks(){
            await getAllUsers().then((res)=> {
                setUsers(res.data)
                //console.log(res)


            })
            .catch((error=>{
                if(error.response.status ==401){

                    navigate('/login');
                }
                console.log(error.response)
                
            }))
            
            

        }
        loadTasks()        

    } ,[]);
    return(
        <div>
             <UserTable users = {users}/>
        </div>
    )
}

