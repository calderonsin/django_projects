import { useState } from 'react';
import { getAllUsers,Login } from '../api/user.api';
import { useNavigate} from 'react-router-dom';
export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const response = await getAllUsers({ username}, {password});
      const data = {data:response.data}
      console.log(data.length)
      if(response.data.length == 1){
        navigate('/user-landing',{state:data});        

      }
      else{navigate('/user',{state:data}); }

      
      // Redirect to a success page or perform any other logic here
    } catch (error) {       
      if (error.response && error.response.status === 401) {
        //console.log('Unauthorized access');
        // Display an error message or perform any other logic here
      } else {
        console.log('An error occurred:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}