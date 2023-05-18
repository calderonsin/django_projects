import { useNavigate} from 'react-router-dom';
import { Logout} from '../api/user.api';
import { useLocation } from 'react-router-dom';
export function LogOutButton () {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    
  
    const handleLogout = async () => {
      // Perform any necessary logout actions here, such as clearing user session or tokens
      await Logout(data);

  
      // Redirect to the desired route after logout (e.g., login page)
      navigate('/login');
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  };
  
  export default LogOutButton;