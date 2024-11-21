import React from "react";
import { NavMenu, UserBox } from ".";

const UserSidebar = () => {
  return (
    <div className="w-full h-full bg-white">
      <UserBox />
      <NavMenu />
    </div>
  );
};

export default UserSidebar;
