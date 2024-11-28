import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { FormInput } from "../forms";
import { Button } from "../ui/button";
import useMeStore from "@/zustand/useMeStore";
import { apiSignInWithGoogle } from "@/apis/auth"; // API đăng nhập với Google
import { toast } from "sonner";
import PropTypes from "prop-types";

const formSchema = z
  .object({
    password: z.string().min(6, { message: "Mật khẩu tối thiểu 6 ký tự" }),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      const { password, confirmPassword } = data;
      return password === confirmPassword;
    },
    { message: "Mật khẩu không trùng khớp.", path: ["confirmPassword"] }
  );

const SetupPassword = ({ onClose }) => {
  const { googleData, setToken } = useMeStore(); // Lấy dữ liệu từ Google
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    if (!googleData) return toast.error("Dữ liệu người dùng không hợp lệ");

    // Tạo payload để gửi lên API
    const payload = {
      email: googleData.email,
      hoTen: googleData.fullname,
      dienThoai: googleData.dienThoai,
      matKhau: data.password, // Lưu mật khẩu đã được xác nhận
    };

    try {
      const response = await apiSignInWithGoogle(payload);

      if (response.data.success) {
        toast.success(response.data.msg); // Hiển thị thông báo thành công
        setToken(response.data.accessToken); // Lưu token để sử dụng
        onClose(); // Đóng modal sau khi thành công
      } else {
        toast.error(response.data.msg); // Hiển thị thông báo lỗi nếu có
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi trong quá trình xử lý.");
    }
  };

  return (
    <div className="col-span-6 p-8">
      <p className="font-bold text-base">Bước cuối cùng</p>
      <p className="font-bold text-2xl">Thiết lập mật khẩu</p>

      <Form {...form}>
        <form className="py-6 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput
            form={form}
            name="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
          />
          <FormInput
            form={form}
            name="confirmPassword"
            label="Nhập lại mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
          />
          <Button className="w-full" type="submit">
            Xác nhận
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SetupPassword;

SetupPassword.propTypes = {
  onClose: PropTypes.func.isRequired,
};
