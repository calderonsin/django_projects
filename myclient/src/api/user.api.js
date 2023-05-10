import axios from 'axios'

const username = 'prueba2';
const password = 'titona05+';
const url = 'http://127.0.0.1:8000/pruebatec/api/v0/users/'


export const getAllUsers= () => {
    return  axios.get(url,{
        auth:{
            username : username,
            password:password
        }
    })

}