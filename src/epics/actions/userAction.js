import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from "./types.js"

export function registerUser(dataToSubmit){
    const request = axios.post(`https://coinhuntcoderatory.herokuapp.com/signup` ,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,                
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`https://coinhuntcoderatory.herokuapp.com/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`https://coinhuntcoderatory.herokuapp.com/me`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(``)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

