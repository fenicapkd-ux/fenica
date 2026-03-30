"use client";

import * as React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

type CarouselWithProgressProp = {
 images: Array<string>;
}
export default function CarouselWithProgress({images}: CarouselWithProgressProp) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const progress = (current * 100) / count;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-7xl">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image}>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden">
                <Image
                  alt="Dự án Fenica Image"
                  className="object-cover"
                  src={image}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-[calc(100%+0.5rem)] left-0 translate-y-0" />
        <CarouselNext className="top-[calc(100%+0.5rem)] left-2 translate-x-full translate-y-0" />
      </Carousel>
      <Progress className="mt-5 ml-auto w-24" value={progress} />
    </div>
  );
}
