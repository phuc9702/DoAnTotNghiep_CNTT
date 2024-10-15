import {create} from 'zustand'

const useStore = create((set) => ({
    token: null,
    me: null,
    setToken: (token) => set(() => ({token:token})),
    setMe: (me) => set(() => ({me})),
   // getMe: 
  }))

  export default useMeStore
  