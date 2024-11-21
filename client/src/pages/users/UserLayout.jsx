import { Header } from "@/components/headers";
import { UserSidebar } from "@/components/sidebars";
import useMeStore from "@/zustand/useMeStore";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const UserLayout = () => {
  const { me } = useMeStore();
  if (!me) {
    toast.info("Vui lòng đăng nhập.");
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Header />
      <div className=" flex">
        <div className="w-[256px] flex-none">
          <UserSidebar />
        </div>
        <div className="flex-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
