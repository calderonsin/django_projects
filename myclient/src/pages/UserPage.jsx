import { UserList } from "../components/UserList"
import {LogOutButton} from "../components/LogOutButton";
export function UserPage(){

    return (
        <div>
      <h1>Welcome to the User List</h1>
      <UserList />
      <LogOutButton />
    </div>

    );
}