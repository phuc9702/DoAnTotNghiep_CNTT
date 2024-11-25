import React, { Fragment, useEffect, useState } from "react";
import { ConditionRender } from "../layouts";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import menu from "../headers/menu";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavMenu = () => {
  const [userMenu, setUserMenu] = useState(menu);
  const [activeTabs, setActivetabs] = useState([]);
  const location = useLocation();
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
