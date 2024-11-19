import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import SelectProvince from "./SelectProvince";
import { cn } from "@/lib/utils";
import PopoverRange from "./PopoverRange";
import { prices, sizes } from "@/lib/constants";

const postTypes = ["Cho thuê", "Bán"].map((el, idx) => ({
  id: idx,
  label: el,
  value: el,
}));
const Search = () => {
  const [activedTab, setActivedTab] = useState("Cho thuê");
  const [isShowSelectProvince, setIsShowSelectProvince] = useState(false);

  return (
    <div className=" absolute top-0 bottom-0 left-10 text-slate-50 flex items-center justify-center right-10">
      <div className="w-[945px] max-w-[90%]">
        <Tabs
          className="space-y-0"
          onValueChange={(value) => setActivedTab(value)}
          value={activedTab}
        >
          <TabsList className="rounded-b-none bg-transparent p-0">
            {postTypes.map((el) => (
              <TabsTrigger
                className="data-[state=active]:bg-black/60 min-w-[81px] first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-slate-50 h-full bg-slate-50 text-slate-950"
                value={el.value}
                key={el.id}
              >
                {el.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {postTypes.map((el) => (
            <TabsContent
              className="bg-black/60 h-40 rounded-md rounded-tl-none p-4 space-y-4 text-sm"
              value={el.value}
              key={el.id}
            >
              <div
                onClick={() => setIsShowSelectProvince(true)}
                className={cn(
                  "flex relative  items-center justify-between bg-slate-50 rounded-md px-[60px] py-2",
                  isShowSelectProvince && "rounded-b-none"
                )}
              >
                <p className="  text-sm flex items-center gap-2 font-semibold text-slate-900 ">
                  <SearchIcon size={20} color="#222222" />
                  <span>Trên toàn quốc</span>
                </p>
                <Button>Tìm kiếm</Button>
                {isShowSelectProvince && (
                  <SelectProvince
                    onClose={() => setIsShowSelectProvince(false)}
                  />
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <PopoverRange
                  name="price"
                  _name="_price"
                  options={prices}
                  label="Mức Giá"
                />
                <PopoverRange
                  name="size"
                  _name="_size"
                  options={sizes}
                  label="Diện tích"
                />
                <div>Property Types</div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Search;
