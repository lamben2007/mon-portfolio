"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// const images = [
//     "/images/kasa1_test.webp",
//     "/images/kasa2_preview.webp",
//     "/images/kasa3_preview.webp",
// ];

type CarouselProps = {
    images: string[]
}

export default function Carousel({ images }: CarouselProps) {



    //
    const autoplay = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    );

    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    return (
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
                {images.map((src, index) => (
                    <div key={index} className="flex-[0_0_100%] relative">
                        <Image
                            src={src}
                            alt={`Aperçu ${index + 1}`}
                            width={800}
                            height={500}
                            className="w-full h-[300px] md:h-[200px] object-cover"
                            style={{ height: "auto" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
