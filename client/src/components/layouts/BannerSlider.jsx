import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { banner } from "@/lib/constants";
const BannerSlider = () => {
  const intervalRef = useRef();
  const [api, setApi] = useState(null);
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else if (api.canScrollPrev) api.scrollPrev();
    }, 3000);
  };

  useEffect(() => {
    if (!api) return;
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {banner.map((el) => (
            <CarouselItem key={el.id}>
              <img
                src={el.imageUrl}
                alt="Banner"
                className="w-full aspect-[3/1] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hover:bg-white/50 bg-transparent" />
        <CarouselNext className="right-2  hover:bg-white/50 bg-transparent" />
      </Carousel>
    </div>
  );
};

export default BannerSlider;
