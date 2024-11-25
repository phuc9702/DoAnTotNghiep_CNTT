import useMeStore from "@/zustand/useMeStore";
import React from "react";
import { CustomTooltip, Image } from "../layouts";
import { generateDefaultAvatar } from "@/lib/utils";
import { Info } from "lucide-react";

const UserBox = () => {
  const { me } = useMeStore();
  return (
    <div className="p-4 flex items-center  gap-2">
      <div className="relative">
        <Image
          className="w-16 h-16 object-cover rounded-full border-2 border-slate-200"
          src={me.avatar}
          fallbackSrc={generateDefaultAvatar(me.fullname)}
        />
        <div className="absolute bg-white rounded-full bottom-1 right-1">
          <Image
            src="/svg/badge-stock/dinamond.svg"
            className="w-6 h-6 object-cover border-2 border-slate-200 p-1  rounded-full"
          />
        </div>
      </div>
      <div>
        <p className="font-bold mb-2">{me.fullname}</p>
        <p className="flex items-center gap-2">
          <span>Điểm:</span>
          <span>{me.score}</span>
          <CustomTooltip
            trigger={<Info size={14} />}
            content={
              <>
                <p>
                  <span>Hạng tài khoản:</span>
                  <span>Kim cương</span>
                </p>
                <p>Cần tích lũy 1000 điểm để lên level tiếp theo</p>
              </>
            }
          />
        </p>
        <p className="flex items-center gap-2">
          <span>Số dư TK:</span>
          <span>{me.balance}</span>
        </p>
      </div>
    </div>
  );
};

export default UserBox;
