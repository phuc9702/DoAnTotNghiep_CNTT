import axios, { endpoints } from './axios'

export const apiGetMe = () => 
    axios({
        method: "get",
        url: endpoints.user.getMe,

    })
