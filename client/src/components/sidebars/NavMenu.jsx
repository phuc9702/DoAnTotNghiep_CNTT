import React, { Fragment, useEffect, useState } from "react";
import { ConditionRender } from "../layouts";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import useMeStore from "@/zustand/useMeStore"; // Import store người dùng
import menu from "../headers/menu";

const NavMenu = () => {
  const { me } = useMeStore(); // Lấy thông tin người dùng từ store
  const [userMenu, setUserMenu] = useState([]);
  const [activeTabs, setActivetabs] = useState([]);
  const location = useLocation();

  // Lọc menu dựa trên quyền của người dùng
  useEffect(() => {
    if (me) {
      // Giả sử userMenu được tạo từ quyền của người dùng (me.role hoặc quyền)
      const filteredMenu = menu.filter((item) => {
        if (item.requiredRole) {
          return item.requiredRole === me.role; // Kiểm tra quyền
        }
        return true; // Hiển thị menu nếu không yêu cầu quyền
      });
      setUserMenu(filteredMenu);
    }
  }, [me]); // Cập nhật menu khi thông tin người dùng thay đổi

  const handleTabsActive = (idTab) => {
    const hasTab = activeTabs.some((el) => el === idTab);
    if (hasTab) {
      setActivetabs((prev) => prev.filter((el) => el !== idTab));
    } else {
      setActivetabs((prev) => [...prev, idTab]);
    }
  };

  useEffect(() => {
    const activeTabs = userMenu.find((el) =>
      el.subs?.some((item) => item.path === location.pathname)
    );
    if (activeTabs) {
      setActivetabs((prev) => [
        ...prev.filter((el) => el !== activeTabs.id),
        activeTabs.id,
      ]);
    }
  }, [location.pathname, userMenu]);

  return (
    <div>
      {userMenu.map((el) => (
        <Fragment key={el.id}>
          <ConditionRender show={el.hasSub}>
            <Collapsible open={activeTabs.some((id) => id === el.id)}>
              <CollapsibleTrigger
                onClick={() => handleTabsActive(el.id)}
                className={cn(
                  "flex items-center justify-between px-4 py-2 w-full ",
                  activeTabs.some((e) => e === el.id) && "text-blue-500"
                )}
              >
                <p className="flex items-center gap-2">
                  {el.icon}
                  {el.label}
                </p>

                {activeTabs.some((id) => id === el.id) ? (
                  <ChevronRight size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                {el.subs?.map((item) => (
                  <NavLink
                    key={item.id}
                    className={({ isActive }) =>
                      cn(
                        "px-4 pl-8 py-2 flex items-center hover:bg-slate-200 gap-2 ",
                        isActive && "bg-slate-200"
                      )
                    }
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </ConditionRender>
          <ConditionRender show={!el.hasSub}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 flex items-center hover:bg-slate-200 gap-2 ",
                  isActive && "bg-slate-200"
                )
              }
              to={el.path}
            >
              {el.icon} {el.label}
            </NavLink>
          </ConditionRender>
        </Fragment>
      ))}
    </div>
  );
};

export default NavMenu;
