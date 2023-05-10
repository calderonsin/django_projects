import { Link } from "react-router-dom";

export function  Navigation(){
    return(
        <div>
            <h1> User app</h1>
            <Link to= "/user"> user</Link>
        </div>
    )
}