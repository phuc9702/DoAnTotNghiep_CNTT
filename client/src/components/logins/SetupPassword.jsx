import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from '../ui/form'
import { FormInput } from '../forms'
import { Button } from '../ui/button'
import useMeStore from '@/zustand/useMeStore'
import { apiSignInWithGoogle } from '@/apis/auth'
import { toast } from 'sonner'
import PropTypes from 'prop-types'



const formSchema = z.object({
  password: z.string().min(6,{message:"Mật khẩu tối thiểu 6 ký tự"}),
  confirmPassword : z.string()
}).refine(data => {
  const {password, confirmPassword} = data
  return password === confirmPassword
}, {message:"Mật khẩu không trùng khớp.", path:["confirmPassword"]})

const SetupPassword = ({onClose}) => {
  const {googleData, setToken} = useMeStore()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
      password:"",
      confirmPassword:""
    },
    mode:"onChange"
  })
  const onSubmit = async (data) => {
    if(!googleData) return alert("Toast lỗi")
    const payload = {
    ...googleData,
    password: data.password,
    }
    const response = await apiSignInWithGoogle(payload)
    if(response.data.success) {
      toast.success(response.data.msg),
      setToken(response.data.accessToken)
      onClose()
    } else toast.error(response.data.msg) 
  }
  return (
    <div className="col-span-6 p-8">
        <p className="font-bold text-base">Bước cuối cùng</p>
        <p className="font-bold text-2xl">Thiết lập mật khẩu</p>

        <Form {...form}>
          <form className='py-6 space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput form={form} name='password' label='Mật khẩu' placeholder='Nhập mật khẩu của bạn' />
            <FormInput form={form} name='confirmPassword' label='Nhập lại mật khẩu' placeholder='Nhập mật khẩu của bạn' />
            <Button  className="w-full" type="submit">Xác nhận</Button>
          </form>
        </Form>
    </div>
  )
}

export default SetupPassword
SetupPassword.propTypes = {
  onClose: PropTypes.func.isRequired
}
