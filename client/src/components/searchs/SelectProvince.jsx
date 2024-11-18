import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import { provinceTops } from "@/lib/constants";
import useAppStore from "@/zustand/useAppStore";

const SelectProvince = ({ onClose }) => {
  const { provinces } = useAppStore();
  return (
    <div className="absolute top-full left-0 right-0  max-h-[500px] overflow-auto rounded-md rounded-t-none bg-slate-50 text-slate-900">
      <div className="flex items-center px-6 py-4 border-b border-input justify-between">
        <p className="font-bold text-sm text-slate-900">
          {" "}
          Bạn muốn tìm bất động sản ở tỉnh thành nào?{" "}
        </p>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          variant="transparent"
        >
          <X size={16} />
        </Button>{" "}
      </div>
      <div className=" text-sm px-6 py-4 text-slate-900">
        <div className="space-y-4">
          <p className="font-bold text-slate-400">Các tỉnh thành nổi bật</p>
          <div className="flex items-center justify-around gap-4">
            {provinceTops.map((el) => (
              <div
                key={el.id}
                className="aspect-[3/2] group relative flex-1 rounded-md overflow-hidden"
              >
                <img
                  src={el.imageUrl}
                  alt="Province"
                  className="  h-full w-full group-hover:animate-scale-up-center rounded-md "
                />
                <div className=" absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <p className=" absolute left-0 right-0 bottom-1 text-center font-medium text-slate-50">
                  {el.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" text-sm px-6 py-4 text-slate-900">
        <div className="space-y-4">
          <p className="font-bold text-slate-400">Tất cả tỉnh thành</p>
          <div className="grid grid-cols-5 gap-4">
            {provinces.map((el) => (
              <p
                className="cursor-pointer hover:underline hover:text-primary"
                key={el.idProvince}
              >
                {el.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProvince;
SelectProvince.prototype = {
  onclose: PropTypes.func.isRequired,
};
