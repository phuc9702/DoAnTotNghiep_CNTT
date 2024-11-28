import useMeStore from "@/zustand/useMeStore";
import React from "react";
import { CustomTooltip, Image } from "../layouts";
import { generateDefaultAvatar } from "@/lib/utils";
import { Info } from "lucide-react";

const UserBox = () => {
  const { me } = useMeStore(); // Lấy thông tin người dùng từ store

  // Nếu người dùng chưa đăng nhập hoặc không có thông tin, có thể hiển thị thông báo hoặc dùng giá trị mặc định
  if (!me) {
    return <div>Loading...</div>; // Hoặc có thể hiển thị một placeholder cho người dùng chưa đăng nhập
  }

  // Lấy hạng tài khoản và điểm số từ thông tin người dùng (me)
  const rank = me.diem >= 1000 ? "Kim cương" : "Bạc"; // Ví dụ: hạng tài khoản dựa trên điểm

  return (
    <div className="p-4 flex items-center gap-2">
      <div className="relative">
        {/* Hiển thị avatar của người dùng hoặc ảnh mặc định nếu không có */}
        <Image
          className="w-16 h-16 object-cover rounded-full border-2 border-slate-200"
          src={me.anhDaiDien || generateDefaultAvatar(me.hoTen)} // Nếu không có avatar, dùng avatar mặc định
          fallbackSrc={generateDefaultAvatar(me.hoTen)} // Avatar mặc định nếu không có
        />
        <div className="absolute bg-white rounded-full bottom-1 right-1">
          {/* Hiển thị badge (nếu có) */}
          <Image
            src="/svg/badge-stock/diamond.svg" // Sửa đúng tên tệp hình ảnh badge
            className="w-6 h-6 object-cover border-2 border-slate-200 p-1 rounded-full"
          />
        </div>
      </div>
      <div>
        <p className="font-bold mb-2">{me.hoTen}</p>{" "}
        {/* Sử dụng hoTen thay vì fullname */}
        <p className="flex items-center gap-2">
          <span>Điểm:</span>
          <span>{me.diem}</span> {/* Hiển thị điểm từ CSDL (diem) */}
          <CustomTooltip
            trigger={<Info size={14} />}
            content={
              <>
                <p>
                  <span>Hạng tài khoản:</span>
                  <span>{rank}</span> {/* Hiển thị hạng tài khoản */}
                </p>
                <p>Cần tích lũy 1000 điểm để lên level tiếp theo</p>
              </>
            }
          />
        </p>
        <p className="flex items-center gap-2">
          <span>Số dư TK:</span>
          <span>{me.soDu}</span> {/* Hiển thị số dư tài khoản từ CSDL (soDu) */}
        </p>
      </div>
    </div>
  );
};

export default UserBox;
