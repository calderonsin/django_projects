import { React } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import {UserPage} from './pages/UserPage';
import {UserLandingPage} from './pages/UserLandingPage';
import {LoginPage} from './pages/LoginPage';
import { Navigation } from './components/Navigation';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import { UserList } from './components/UserList';

function App() {
  return(
    <BrowserRouter>
    
    <Routes>
      <Route path= "/" element ={<Navigate to= "/login"/>}/>
      <Route path= "/user" element ={<UserPage/>}/>
      <Route path= "/user-landing" element ={<UserLandingPage/>}/>
      <Route path= "/login" element ={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
