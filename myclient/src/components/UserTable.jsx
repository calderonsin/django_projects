export function UserTable({users}){
    return (

        <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Login time</th>
          <th>Button1</th>
          <th>Button2</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.logintime}</td>
            <td>{user.button1}</td>
            <td>{user.button2}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}