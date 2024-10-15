import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FormInput } from "../forms"
import { Form } from "@/components/ui/form"

const formSchema = z.object({
    emailOrPhone: z.string().min(1, {message:"Trường này là bắt buộc."}),
    password: z.string().min(6, {message:"Mật khẩu tối thiểu 6 kí tự."})
})

const Login = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailOrPhone:"",
            password:""
        }
    })
    return(
        <div className="grid grid-cols-10 text-primary">
            <div className="col-span-4">
                <img src="/jpg/banner-login.jpg" alt="Login" className="w-full object-contain"></img>
            </div>
            <div className="col-span-6 p-8">
                <p className="font-bold text-base">Xin chào bạn</p>
                <p className="font-bold text-2xl">Đăng nhập để tiếp tục</p>
                <Form {...form}>
                    <form className="my-6 space-y-4">
                        <FormInput placeholder="VD:0373772897 hoặc user@example.com" form={form} name='emailOrPhone' label="Email hoặc số điện thoại"/>
                        <FormInput placeholder="Mật khẩu có tối thiếu 6 ký tự" form={form} name='password' type="password" label="Mật Khẩu"/>
                    </form>
                </Form>
            </div>
        </div>
    )
}
export default Login