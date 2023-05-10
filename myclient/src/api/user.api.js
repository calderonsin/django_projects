import axios from 'axios';



//const username = 'prueba2';
//const password = 'titona05+';
const url = 'http://127.0.0.1:8000/pruebatec/api/v0/users/'


export const getAllUsers= (username,password) => {
    
    console.log(username.username)
    //console.log(username,password)
    
    return   axios.get(url,{

        auth:{
            username : username.username,
            password:password.password
        }
            
    })
    .then(response=>{
        
        console.log('respuesta correcta en user.api');
        return response;
        
    })
    .catch(error=>{
        throw error
    })
    

}