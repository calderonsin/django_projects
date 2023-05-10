export function UserCard({user}){
    return (
        <div>                    
                <h1>{user.username}</h1>
                <p>{user.logintime}</p>
                <p>{user.button1}</p>
                <p>{user.button2}</p>
                <hr />
        </div>
    )
}