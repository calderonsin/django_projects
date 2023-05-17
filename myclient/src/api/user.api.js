import axios from 'axios';



//const user = 'prueba2';
//const pass = 'titona05+';
var url = '';


export const getAllUsers = (username,password) => {
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/users/';
    //console.log(url)
    console.log(username.username)
    console.log(password.password)    
    return axios.get(url,{
        auth:{
        username: username.username,
        password: password.password
    }})
    .then(response=>{
        
        console.log('respuesta correcta en user.api');
        return response;
        
    })
    .catch(error=>{
        throw error
    })
    

}

export const Login= (data,password) => {    
    console.log(password.password)
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/users/' + data.id + '/';
    console.log(url)
    const fields ={
        
    }   
    return   axios.patch(url,fields,{auth:{
        username:data.username,
        password:password.password
    }})
    .then(response=>{
        
        console.log('respuesta correcta en login.user.api');
        return response;
        
    })
    .catch(error=>{
        throw error
    })
    

}

export const UpdateButton1 = (data)=>{
    console.log(data)
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/button1/';
    const fields ={id:data[0][0].id}
    return   axios.patch(url,fields,{auth:{
        username:data[0][0].username,
        password:data[1].password

    }})
    .then(response=>{
        
        console.log('button1 increment on user with pk '+ data[0][0].id);
        return response;
        
    })
    .catch(error=>{
        throw error
    })



}

export const UpdateButton2 = (data)=>{
    url = 'http://127.0.0.1:8000/pruebatec/api/v0/button2/';
    const fields ={id:data[0][0].id}
    return   axios.patch(url,fields,{auth:{
        username:data[0][0].username,
        password:data[1].password
    }})
    .then(response=>{
        
        console.log('button2 increment on user with pk '+ data[0][0].id);
        return response;
        
    })
    .catch(error=>{
        throw error
    })



}