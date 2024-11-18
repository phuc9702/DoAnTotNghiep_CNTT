import slugify from "slugify"


export const postSoldTypes =[
    "Căn hộ chung cư",
    'Nhà mặt phố',
    'Nhà riêng',
    'Nhà phố thương mại',
    'Biệt thự',
    'Đất nền',
    'Bán đất',
    'Trang trại',
    'Khu nghỉ dưỡng',
    'Kho',
    'Nhà xưởng',
    'Khác',
].map((el)=> ({ name:el, pathname: slugify(el)}))

export const postRentTypes =[
    'Căn hộ chung cư',
    'Nhà mặt phố',
    'Nhà riêng',
    'Nhà phố thương mại',
    'Biệt thự',
    'Đất nền',
    'Bán đất',
    'Trang trại',
    'Khu nghỉ dưỡng',
    'Kho',
    'Nhà xưởng',
    'Khác',
].map((el)=> ({ name:el, pathname: slugify(el)}))

export const banner = [
    "/jpg/banner-1.jpg",
    "/jpg/banner-2.jpg",
    "/jpg/banner-3.jpg",
    "/jpg/banner-4.jpg",
    "/jpg/banner-5.jpg",
    "/jpg/banner-6.jpg",
    "/jpg/banner-7.jpg",
    "/jpg/banner-8.jpg",
].map((el, idx) => ({id:idx, imageUrl:el}))
export const provinceTops=[
    {
        id:1,
        imageUrl:'/jpg/hanoi.jpg',
        label:'Hà nội'
    },
    {
        id:2,
        imageUrl:'/jpg/hcm.jpg',
        label:'Hồ Chí Minh'
    },
    {
        id:3,
        imageUrl:'/jpg/danang.jpg',
        label:'Đà Nẵng'
    },
    {
        id:4,
        imageUrl:'/jpg/binhduong.jpg',
        label:'Bình Dương'
    },
    {
        id:5,
        imageUrl:'/jpg/dongnai.jpg',
        label:'Đồng Nai'
    },
    {
        id:6,
        imageUrl:'/jpg/nhatrang.jpg',
        label:'Nha Trang'
    },
]