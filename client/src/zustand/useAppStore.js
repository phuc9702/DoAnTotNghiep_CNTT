import { apiGetProvinces } from '@/apis/external'
import {create} from 'zustand'
const useAppStore = create((set) => ({
    provinces:[],
    getProvinces: async () => {
        const response = await apiGetProvinces()
            if (response.status=== 200){
                return set(() => ({provinces: response.data}))
                }else{
                    return set(() => ({provinces: [] }))
                } 
        },
        logout : () => set(() => ({token: null, me:null })),
}));
export default useAppStore