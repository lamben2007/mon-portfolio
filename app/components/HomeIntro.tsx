"use client";

import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
// import ParagraphWithShapes from "./ParagraphWithShapes";


export default function HomeIntro() {

    //
    const paragraphs = [

        `Depuis toujours, le développement informatique est une véritable passion pour moi. Mon parcours a commencé très jeune, avec la programmation en Basic sur un ordinateur familial MSX,
         où je créais mes premiers petits jeux. Cette curiosité m&apos;a naturellement conduit à explorer différentes technologies telles que Turbo Pascal,
         C et Visual Basic 6.`,

        `Après un **BTS Électrotechnique**, j’ai souhaité allier mes compétences techniques et mon intérêt pour le développement, 
         ce qui m’a amené à travailler dans le domaine de l’**informatique industrielle**. Pendant une dizaine d’années,
         j’ai développé des solutions en **SQL Server, VB6, VB.NET et ASP.NET**.`,

        `Par la suite, j’ai occupé divers postes en **support IT, achats et services généraux**. Toutefois, le développement est resté une constante dans
         mon parcours : en parallèle de mon activité professionnelle, j’ai continué à coder en **autodidacte**,
         travaillant sur plusieurs projets personnels.`,

        `En **2023**, j'ai décidé de revenir à mon premier domaine de prédilection : le développement web.
         D’abord orienté vers le **front-end**, mon objectif est d’évoluer également vers le **back-end** afin de devenir un développeur full-stack.`,

        `En **2024**, j’ai concrétisé cette transition professionnelle en intégrant une formation intensive de **6 mois chez OpenClassrooms** 
         pour actualiser et approfondir mes compétences en développement web.`,

        `Toujours en veille technologique, curieux et déterminé, je suis prêt à relever de nouveaux défis et à contribuer à des projets innovants.`

    ];

    //
    return (
        <section className={`flex flex-col gap-4`}>
            {paragraphs.map((text, i) => {
                const direction = i % 2 === 0 ? -50 : 50;

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: direction }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.2,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="text-gray-700 dark:text-gray-300"
                    >
                        <div className="flex flex-col items-center gap-2.5 relative">

                            {/* Carré animé */}
                            <motion.div
                                initial={{ rotate: 0, scale: 0, opacity: 0 }}
                                whileInView={{
                                    rotate: 765,
                                    scale: 1,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut",
                                    delay: i * 0.2,
                                }}
                                viewport={{ once: true }}
                                className="w-5 h-5 bg-blue-500 mt-1 rounded-md shrink-0 shadow-lg shadow-gray-400/80 drop-shadow-md"
                            />

                            <ReactMarkdown>{text}</ReactMarkdown>
                        </div>


                    </motion.div >
                );
            })}
        </section >
    );
}
