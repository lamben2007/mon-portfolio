import HomeIntro from "./HomeIntro";
// import { motion } from "framer-motion";
import Image from "next/image";

//
export function HomeSection2() {
    //
    return (
        <>
            {/* Section 2 */}
            < section className="flex flex-col gap-2.5 items-center" >

                <h2 className="h2-custom">Passionné par l’Informatique et le Développement</h2>

                <div className="flex flex-row items-center gap-[50px] mx-2.5 md:px-[250px]">

                    <div className="h-[640px] hidden md:block">
                        <Image
                            src="/images/p2.webp"
                            alt="picHome2"
                            width={520}
                            height={640}
                            className="object-cover mask-blob"
                        />
                    </div>


                    {/* Figures géométriques animées */}

                    <div className="relative w-full flex flex-col gap-5 overflow-hidden">

                        <div className="absolute inset-0 -z-10 pointer-events-none">

                            {/* Carré arrondi */}
                            <div
                                className="absolute top-10 left-5 w-24 h-24 bg-blue-400/30 rounded-xl shape-float"
                            />

                            {/* Rond */}
                            <div
                                className="absolute bottom-16 right-20 w-20 h-20 bg-pink-400/40 rounded-full shape-float"
                                style={{ animationDelay: "2s" }}
                            />

                            {/* Triangle */}
                            <div
                                className="absolute top-1/2 right-1/3 w-0 h-0
                                        border-l-40 border-l-transparent
                                        border-r-40 border-r-transparent
                                        border-b-70 border-b-purple-400/40
                                        shape-float"
                                style={{ animationDelay: "4s" }}
                            />
                        </div>

                        <HomeIntro />
                    </div>

                </div>

            </section >

        </>
    )

}