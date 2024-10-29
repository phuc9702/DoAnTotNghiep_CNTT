import axios from 'axios'
import { endpoints } from './axios'

export const apiGetCredentialsFromAccessToken = (accsessToken) => 
    axios({
        method:"get",
        url: endpoints.auth.getCredentialFronAccessToken + accsessToken,
    })