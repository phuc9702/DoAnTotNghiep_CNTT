import { postRentTypes, postSoldTypes } from "@/lib/constants"
import { pathnames } from "@/lib/pathname"


const navigations = [
    {
        id:1, 
        name:"nhà đất bán",
        pathname: pathnames.publics.soldProperty,
        hasSub: true,
        subs:postSoldTypes
    },
    {
        id:2, 
        name:"nhà đất cho thuê",
        pathname: pathnames.publics.rentPropety,
        hasSub: true,
        subs: postRentTypes,
    },
    {
        id:3, 
        name:"tin tức",
        pathname: pathnames.publics.soldProperty,
        hasSub: false,
        
    },
]
export default navigations