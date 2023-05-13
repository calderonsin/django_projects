import { useEffect,useState } from "react"
import {getAllUsers} from '../api/user.api'
import { UserTable } from "./UserTable";
import { useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export function UserList(){
    const [users,setUsers] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    useEffect(()=>{

        async function loadTasks(){
            setUsers(data.data)
        }
        loadTasks()        

    } ,[]);
    return(
        <div>
             <UserTable users = {users}/>
        </div>
    )
}

