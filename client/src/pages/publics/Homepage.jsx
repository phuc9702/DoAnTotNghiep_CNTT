import { BannerSlider } from "@/components/layouts";
import Search from "@/components/searchs/Search";
import React from "react";
const Homepage = () => {
    return (
    <div className="relative">
        <BannerSlider/>
        <div>
            <Search/>
        </div>
    </div>
    )
}

export default Homepage