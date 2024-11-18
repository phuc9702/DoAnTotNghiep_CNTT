import { defaults } from 'autoprefixer'
import axios from 'axios'

const axiosInstance = axios.create({baseURL: import.meta.env.VITE_SERVER_URL})
//---------------------------------------------------------------------------

axiosInstance.interceptors.request.use((config) => {
    const store = window.localStorage.getItem("pnphuc0972/me")
    if(store) {
        const parsedStore = JSON.parse(store)
        if(parsedStore && parsedStore.state?.token){
            config.headers.Authorization = `Bearer ${parsedStore.state?.token}`
        }
    }
    return config
})

axiosInstance.interceptors.response.use((response)=> response)
export default axiosInstance
//-----------------------------------------------------------------------------

export const endpoints = {
    auth:{
        getCredentialFronAccessToken:"https://www.googleapis.com/oauth2/v1/userinfo?access_token=",
        checkNewUser:"/auth/has-user/",
        signInWithGoogle:"/auth/google"
    },
    user: {
        getMe: '/user/me'
    },
    external:{
        getProvince:"https://vietnam-administrative-division-json-server-swart.vercel.app/province",
        getDistrictsFromIdProvince:"https://vietnam-administrative-division-json-server-swart.vercel.app/district/?idProvince=",
        getWardsFromIdDistrict:"https://vietnam-administrative-division-json-server-swart.vercel.app/commune/?idDistrict="
    }
}