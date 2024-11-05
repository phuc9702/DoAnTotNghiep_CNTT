import axios, { endpoints } from './axios'

export const apiCheckNewUser = (email) => 
    axios ({
    method:"get",
    url: endpoints.auth.checkNewUser + email,
})

export const apiSignInWithGoogle = (data) => 
    axios ({
    method:"post",
    url: endpoints.auth.signInWithGoogle,
    data,
})