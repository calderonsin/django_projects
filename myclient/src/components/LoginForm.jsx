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
      const stateData = {
        variable1: response.data,
        variable2: {password},
        variable3:{username}
      };  
      
      if(response.data.length == 1){        
        await Login(response.data[0],{password});
        navigate('/user-landing',{state:stateData});        

      }
      else{
        
        //console.log(response.data)
        
       
        navigate('/user',{state:stateData}); 

      }

      
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