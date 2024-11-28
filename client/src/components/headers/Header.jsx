import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Fragment, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import navigations from "./navigations";
import { naviItemCn, resetOutline } from "@/lib/className";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Login from "../logins/login";
import useMeStore from "@/zustand/useMeStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import menu from "./menu";
import { LogOut } from "lucide-react";

const Header = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const { me, logout } = useMeStore(); // Truyền vào store để lấy thông tin người dùng

  const onClose = useCallback(() => {
    setIsShowDialog(false);
  }, []);

  return (
    <div className="h-24 p-4 flex shadow items-center justify-between ">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-5xl text-shadow text-red-200  tracking-widest bor font-bold hover-text-glow  "
        >
          pnphucnull
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navigations.map((el) => (
              <Fragment key={el.id}>
                {el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-bold">
                      {el.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 grid grid-cols-2 gap-2 min-w-96">
                      {el.subs.map((sub) => (
                        <NavigationMenuLink
                          className={cn(naviItemCn)}
                          key={sub.pathname}
                        >
                          {sub.name}{" "}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
                {!el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={cn("text-sm font-bold", naviItemCn)}
                    >
                      {el.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-3">
        {!me ? (
          <Dialog onOpenChange={setIsShowDialog} open={isShowDialog}>
            <DialogTrigger asChild>
              <Button
                onClick={() => setIsShowDialog(true)}
                className="bg-transparent text-store-900 hover:bg-transparent hover:underline"
              >
                Đăng nhập / Đăng ký
              </Button>
            </DialogTrigger>
            <DialogContent isHideClose={false} className="min-w-[800px] p-0">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <Login onClose={onClose} />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={resetOutline} variant="transparent">
                {/* Hiển thị thông tin từ CSDL: Tên người dùng */}
                {me.hoTen || me.email || "Người dùng"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {menu.map((el) => (
                <DropdownMenuItem key={el.id}>
                  <Link className="flex items-center" to={el.path}>
                    {el.icon}
                    {el.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem
                onClick={() => logout()} // Đăng xuất người dùng
                className="flex items-center gap-2"
              >
                <LogOut size="14" />
                <span>Đăng xuất</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <Button
          size="lg"
          variant="outline"
          className="text-red-500 border-red-500 hover:bg-red-100 hover:text-red-700"
        >
          Đăng tin
        </Button>
      </div>
    </div>
  );
};

export default Header;
