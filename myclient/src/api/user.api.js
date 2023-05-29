import axios from 'axios';



//const user = 'prueba2';
//const pass = 'titona05+';
var url = '';


export const getAllUsers = (token) => {
    const config = {
        headers: { Authorization: `Token ${token}` }
    };
    //console.log(config)

    url = 'http://127.0.0.1:8000/pruebatec/api/v0/users/';
    //console.log(url)
      
    return axios.get(url,config)
    .then(response=>{
        
        //console.log('respuesta correcta en user.api');
        return response;
        
    })
    .catch(error=>{
        throw error
    })
    

}

export const Login= (username,password) => {    
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/token/';
    //console.log(url)
    const fields ={
        username:username.username,
        password:password.password
        
    }   
    return   axios.post(url,fields)
    .then(response=>{
        
        //console.log(response);
        return response;
        
    })
    .catch(error=>{
        throw error
    })
    

}

export const UpdateButton1 = (data)=>{
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/button1/';
    const token = data.variable2;
    const config = {
        headers: { Authorization: `Token ${token}` }
    };
    const fields ={id:data.variable1[0].id}
    return   axios.patch(url,fields,config)
    .then(response=>{
        
        //console.log('button1 increment on user with pk '+ data.variable1[0].id);
        return response;
        
    })
    .catch(error=>{
        throw error
    })



}

export const UpdateButton2 = (data)=>{
    const token = data.variable2;
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/button2/';
    const config = {
        headers: { Authorization: `Token ${token}` }
    };
    const fields ={id:data.variable1[0].id};
    return   axios.patch(url,fields,config)
    .then(response=>{
        
        //console.log('button2 increment on user with pk '+ data.variable1[0].id);
        return response;
        
    })
    .catch(error=>{
        throw error
    })



}

export const Logout= (data) => { 
    const token = data.variable2;
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/logout/';
    const config = {
        headers: { Authorization: `Token ${token}` }
    };
    //console.log(url)
    const fields ={
        id: data.variable1[0].id
        
    }   
    return   axios.patch(url,fields,config)
    .then(response=>{
        
        //console.log('respuesta correcta en logout.user.api');
        return response;
        
    })
    .catch(error=>{
        throw error
    })
    

}