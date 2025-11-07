"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Skills from "./components/Skills";
import HomeIntro from "./components/HomeIntro";
import ParagraphWithShapes from "./components/ParagraphWithShapes";



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

        <section className="relative">

          <Image
            src="/images/home2.webp"
            alt="picHome2"
            width={400}
            height={300}
            className="w-full h-36 md:h-[500px] object-cover"
          />

          <motion.h1
            className="absolute top-5 right-5 flex items-center justify-center
               text-black text-sm md:text-4xl bg-white/70 font-bold drop-shadow-lg, p-2.5"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Bonjour, Je suis Benoît Développeur FRONT-END
          </motion.h1>

        </section>

        <section className="flex flex-col gap-2.5 items-center">

          <h2 className="h2-custom">Passionné par l’Informatique et le Développement</h2>

          <div className="flex flex-row items-center gap-[50px] mx-2.5 md:px-[250px]">

            <div className="h-[400px] hidden md:block">
              <Image
                src="/images/home2.webp"
                alt="picHome2"
                width={300}
                height={300}
                className=" object-cover"
              />
            </div>

            <div className="w-full text-[14px] flex flex-col gap-5   md:text-[20px] md:text-justify">
              {/* <ParagraphWithShapes text={"Depuis toujours, le développement informatique est une véritable passion pour moi. Mon parcours a commencé très jeune, avec la programmation en Basic sur un ordinateur familial MSX, où je créais mes premiers petits jeux. Cette curiosité m'a naturellement conduit à explorer différentes technologies telles que Turbo Pascal, C et Visual Basic 6."} /> */}

              <HomeIntro />
            </div>

          </div>

        </section>


        <section>
          <Image
            src="/images/home.webp"
            alt="picHome2"
            width={400}
            height={300}
            className="w-full h-36 md:h-[500px] object-cover"
          />
        </section>

        <section className='skills'>
          <h2 className="h2-custom">COMPETENCES</h2>
          <Skills />
        </section>

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
