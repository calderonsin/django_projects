import { React } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import {UserPage} from './pages/UserPage';
import {UserFormPage} from './pages/UserFormPage';
import { Navigation } from './components/Navigation';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return(
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path= "/" element ={<Navigate to= "/user"/>}/>
      <Route path= "/user" element ={<UserPage/>}/>
      <Route path= "/user-create" element ={<UserFormPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App
