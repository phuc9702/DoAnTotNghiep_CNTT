import slugify from "slugify"
import { late } from "zod"


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
export const prices =[
    {
        id:-1,
        label:'tất cả các mức giá',
        value: 'ALl'
    },
    {
        id: 1,
        label: 'Dưới 500 triệu',
        value: JSON.stringify([0,0.5 * Math.pow(10.9)]),
    },
    {
        id: 2,
        label: 'Từ 500 triệu đến 800 triệu',
        value: JSON.stringify([0.5 * Math.pow(10.9), 0.8 * Math.pow(10,9)]),
    },
    {
        id: 3,
        label: 'Trên 800 triệu đến 1 tỷ',
        value: JSON.stringify([0.8 * Math.pow(10.9), 1 * Math.pow(10,9)]),
    },
    {
        id: 4,
        label: 'Trên 1 tỷ đến 2 tỷ',
        value: JSON.stringify([1 * Math.pow(10.9), 2 * Math.pow(10,9)]),
    },
    {
        id: 5,
        label: 'Trên 2 tỷ đến 3 tỷ',
        value: JSON.stringify([2 * Math.pow(10.9), 3 * Math.pow(10,9)]),
    },
    {
        id: 6,
        label: 'Trên 3 tỷ đến 5 tỷ',
        value: JSON.stringify([3 * Math.pow(10.9), 5 * Math.pow(10,9)]),
    },
    {
        id: 7,
        label: 'Trên 5 tỷ đến 7 tỷ',
        value: JSON.stringify([5 * Math.pow(10.9), 7 * Math.pow(10,9)]),
    },
    {
        id: 8,
        label: 'Trên 7 tỷ đến 10 tỷ ',
        value: JSON.stringify([7 * Math.pow(10.9), 10 * Math.pow(10,9)]),
    },
    {
        id: 50,
        label: 'Trên 10 tỷ',
        value: JSON.stringify(['gte',10 * Math.pow(10.9)]),
    },
    
]
export const sizes = [
    {
        id: -1,
        label: "Tất cả diện tích",
        value:"All"
    },
    {
        id: 1,
        label: 'Dưới 30 m²',
        value: JSON.stringify([0,30]),
    },
    {
        id: 2,
        label: 'Từ 30 m² đến 50 m²',
        value: JSON.stringify([30, 50]),
    },
    {
        id: 2.5,
        label: 'Trên 50 m² đến 80 m²',
        value: JSON.stringify([50, 80]),
    },
    {
        id: 3,
        label: 'Trên 80 m² đến 100 m²',
        value: JSON.stringify([80, 100]),
    },
    {
        id: 4,
        label: 'Trên 100 m² đến 150 m²',
        value: JSON.stringify([100, 150]),
    },
    {
        id: 5,
        label: 'Trên 150 m² đến 200 m²',
        value: JSON.stringify([150, 200]),
    },
    {
        id: 6,
        label: 'Trên 200 m² đến 250 m²',
        value: JSON.stringify([200, 250]),
    },
    {
        id: 7,
        label: 'Trên 250 m² đến 300 m²',
        value: JSON.stringify([250, 300]),
    },
    {
        id: 8,
        label: 'Trên 300 m² đến 500 m²',
        value: JSON.stringify([300, 500]),
    },
    {
        id: 50,
        label: 'Trên 500 m²',
        value: JSON.stringify(['gte', 500]),
    },
]