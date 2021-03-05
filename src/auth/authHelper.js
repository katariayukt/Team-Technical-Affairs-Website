import {API_URL} from "../config"
import axios from "axios"

export const signup = (user) =>{
    console.log(user)
    return axios.post(API_URL + "user/register",user)
    .then((res) =>{
       return res.data
    })
    .catch((err)=>{
       console.log(err)
    })    
}

export const signin = (user) =>{
   console.log(user)
   return axios.post(API_URL + "user/login",user)
    .then((res) =>{
       return res.data
    })
    .catch((err)=>{
       console.log(err)
    })    
}

export const authenticate = (data, next) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data.token))
        localStorage.setItem('name', JSON.stringify(data.user))
    }
    next();
}

export const isAuthenticated =() => {
    if(typeof window == 'undefined') {
        return false;
    }
    if(localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false;
    }
}

export const signout = (next)=>{
    if(typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
       
    }
}