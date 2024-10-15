import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Fragment } from "react"
import {Link} from "react-router-dom"
import navigations from "./navigations"
import { naviItemCn } from "@/lib/className"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Login from "../logins/login"

const Header = () => {
    return (
    <div className="h-24 p-4 flex shadow items-center justify-between ">
        <div className="flex items-center gap-6">
        <Link to="/" className="text-5xl text-shadow text-red-200  tracking-widest bor font-bold  " >pnphuc0972
        </Link>     
        <NavigationMenu>
            <NavigationMenuList>
                {navigations.map((el) => (
                    <Fragment key={el.id} >
                        {el.hasSub &&(
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-sm font-bold">{el.name}</NavigationMenuTrigger>
                                <NavigationMenuContent className="p-4 grid grid-cols-2 gap-2 min-w-96">
                                    {el.subs.map((sub) => (
                                        <NavigationMenuLink className = {cn(naviItemCn)} key = {sub.pathname}>{sub.name}  </NavigationMenuLink>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem> 
                        )}
                        {!el.hasSub && (
                            <NavigationMenuItem>
                                <NavigationMenuLink className={cn("text-sm font-bold", naviItemCn )}>
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
            <Dialog>
                <DialogTrigger asChild>
                <Button className="bg-transparent text-store-900 hover:bg-transparent hover:underline">Đăng nhập / Đăng ký</Button>
                </DialogTrigger>
                <DialogContent isHideClose={true} className="min-w-[700px] p-0">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <Login/>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline">Đăng tin</Button>
        </div>
    </div>
    )
}

export default Header