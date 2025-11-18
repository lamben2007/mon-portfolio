"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Skills from "./components/Skills";
import { HomeSection2 } from "./components/HomeSection2";


//
export default function HomePage() {

  return (
    <motion.section
      className="text-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="flex flex-col gap-2.5">

        {/* Section 1 */}
        <section className="relative">

          <Image
            src="/images/p3.webp"
            alt="picHome2"
            width={400}
            height={300}
            className="w-full h-36 md:h-[500px] object-cover"
          />

          <motion.h1
            className="absolute bottom-5 right-5 flex items-center justify-center
               text-black text-sm md:text-4xl bg-white/80 font-bold drop-shadow-lg, p-2.5"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Bonjour, Je suis Benoît Développeur FRONT-END
          </motion.h1>

        </section>


        {/* Section 2 */}
        <HomeSection2 />


        {/* Section 3 */}
        <section>
          <Image
            src="/images/p4.webp"
            alt="picHome2"
            width={400}
            height={300}
            className="w-full h-36 md:h-[500px] object-cover"
          />
        </section>


        {/* Section 4 */}
        <section className='skills'>
          <h2 className="h2-custom">COMPETENCES</h2>
          <Skills />
        </section>


        {/* Section 5 */}
        <section className='flex flex-col items-center'>

          <h2 className="h2-custom">FORMATIONS</h2>

          <div className="flex flex-col  md:flex-row items-center justify-evenly w-full gap-8">

            <div className='flex flex-col items-center gap-1 border-4 rounded-2xl p-1.5  w-full md:text-2xl'>
              <span className="font-bold">DEVELOPPEUR Web</span>
              <div className='bg-blue-500 rounded-2xl p-1.5 font-bold'>📅 09/2024 - 03/2025</div>
              <span> 🏫 OpenClassrooms (Paris à distance)</span>
              <span>📍Paris à distance</span>
              <span>🎓Niveau 5 (Bac+2)</span>
            </div>

            <div className='flex flex-col items-center gap-1 border-4 rounded-2xl p-1.5 w-full md:text-2xl'>
              <span className='font-bold'>Génie Electrique et Informatique Industrielle</span>
              <div className='bg-blue-500 rounded-2xl p-1.5 font-bold'>📅 09/1997 - 03/1998</div>
              <span> 🏫 Institut Universitaire Professionalisé</span>
              <span>📍Valenciennes</span>
              <span>🎓(Bac+4)</span>
            </div>

          </div>

        </section>

      </div>

    </motion.section>
  );
}