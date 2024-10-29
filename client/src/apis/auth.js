import axios, { endpoints } from './axios'

export const apiCheckNewUser = (email) => 
    axios ({
    method:"get",
    url: endpoints.auth.checkNewUser + email,
})