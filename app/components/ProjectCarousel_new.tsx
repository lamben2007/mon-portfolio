"use client";

import React, { useEffect, useState, useRef } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/assets/project1.webp",
    "/assets/project2.webp",
    "/assets/project3.webp",
];

export default function Carousel() {
    const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        setSelectedIndex(emblaApi.selectedScrollSnap());

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);

        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);
    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div key={index} className="flex-[0_0_100%] relative">
                            <Image
                                src={src}
                                alt={`Aperçu ${index + 1}`}
                                width={800}
                                height={500}
                                className="w-full h-[300px] sm:h-[500px] object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Boutons */}
            <button
                onClick={scrollPrev}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                aria-label="Précédent"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                aria-label="Suivant"
            >
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Pagination */}
            <div className="flex justify-center mt-4 gap-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition ${index === selectedIndex ? "bg-pink-600" : "bg-gray-300"
                            }`}
                        aria-label={`Aller à l’image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
