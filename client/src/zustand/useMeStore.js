import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

const useMeStore = create(
    persist(
        (set) => ({
            token: null,
            me: null,
            googleData: null,
            setToken: (token) => set(() => ({token:token})),
            setMe: (me) => set(() => ({me})),
            setGoogleData: (data) => set(() => ({googleData:data})),
            // getMe: 
        }),
        {
            name: 'pnphuc0972/me',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) =>
                Object.fromEntries(Object.entries(state).filter(el =>el[0] === 'token' || el[0] || 'me'))
            }
        )
    )

  export default useMeStore
  