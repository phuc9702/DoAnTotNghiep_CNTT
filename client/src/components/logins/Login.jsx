import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FormInput } from "../forms"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useGoogleLogin } from '@react-oauth/google'

const formSchema = z.object({
    emailOrPhone: z.string().min(1, {message:"Trường này là bắt buộc."}),
    fullname: z.string().min(1, {message:"Trường này là bắt buộc."}),
    password: z.string().min(6, {message:"Mật khẩu tối thiểu 6 kí tự."})
})

const Login = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailOrPhone:"",
            password:"",
            fullname:""
        }
    })
    const [variant, setVariant] = useState("SIGNIN")
    const toggleVariant = () => {
        if(variant === "SIGNIN") setVariant("SIGNUP")
            else setVariant("SIGNIN")
    }
    const handleSignInGoogle = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: orr => console.log(first)
      });
    return(
        <div className="grid grid-cols-10 text-primary">
            <div className="col-span-4 grid place-content-center">
                <img src="/jpg/banner-login.jpg" alt="Login" className="w-full object-contain"></img>
            </div>
            <div className="col-span-6 p-8">
                <p className="font-bold text-base">Xin chào bạn</p>
                <p className="font-bold text-2xl">{variant === 'SIGNIN' ? "Đăng nhập để tiếp tục":"Đăng ký tài khoản mới"}</p>
                <Form {...form}>
                    <form className="my-6 space-y-4">
                        <FormInput placeholder="VD:0373772897 hoặc user@example.com" form={form} name='emailOrPhone' label="Email hoặc số điện thoại"/>
                        <FormInput placeholder="Mật khẩu có tối thiếu 6 ký tự" form={form} name='password' type="password" label="Mật Khẩu"/>
                        {variant ==="SIGNUP" && 
                            <FormInput placeholder="VD:Phạm Ngọc Phục" form={form} name='fullname' label="Tên đầy đủ"/>}
                        {variant ==="SIGNIN" ? (
                            <Button size="default" className="w-full relative top-2">Đăng nhập</Button>
                        ) : (
                            <Button size="default" className="w-full relative top-2">Đăng ký</Button>
                        )}
                    </form>
                </Form>
                <div className="w-full h-6 flex items-center relative mb-4">
                    <div className="w-full h-[1px] bg-stone-200"></div>
                    <div className="absolute inset-0 bg-transparent w-fix">
                        <p className="px-2 w-fit mx-auto bg-white text-sm text-primary">Hoặc</p>
                    </div>
                </div>
                <Button onClick={handleSignInGoogle} size="lg" variant="outline" className="w-full mb-4 " >
                    <img src="/svg/google.svg" alt="Google" className="w-5 h-5 object-cover" />
                    <span>Đăng nhập bằng Google</span>
                </Button>
                <p className="text-center text-sm">
                    {variant === "SIGNIN" ? <span>Bạn chưa là thành viên? </span>: <span>Bạn đã có tài khoản? </span>}
                    <span onClick={toggleVariant} className="text-red-600 font-bold cursor-pointer hover:underline">{variant ==="SIGNIN" ? " Đăng ký":"Đăng nhập"}</span>
                    <span> tại đây</span>
                </p>
            </div>
        </div>
    )
}
export default Login