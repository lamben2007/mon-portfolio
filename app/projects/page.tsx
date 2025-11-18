"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Link from "next/link";
import Image from "next/image";


export default function ProjectsPage() {
    return (
        <section>
            <h1 className="text-3xl font-bold text-center">Mes projets</h1>
            <div className="flex  flex-col  items-center">

                {projects.map(project => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="p-2 md:w-[60%]"
                    >
                        <motion.div
                            className="relative flex flex-col items-center gap-2.5 shadow rounded-2xl p-3 bg-blue-50 "
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >

                            {/* Flottants décoratifs au premier plan, mais sous le contenu */}
                            <div className="absolute inset-0 z-0 pointer-events-none">

                                {/* Carré arrondi */}
                                <div className="absolute top-[80%] left-[1%] w-10 h-10 bg-green-400/30 rounded-xl shape-float
                                                md:top-[50%] md:left-[20%] md:w-20 md:h-20 "/>

                                {/* Rond */}
                                <div className="absolute top-[80%] right-[10%] w-10 h-10 bg-pink-400/40 rounded-full shape-float
                                                md:top-[50%] md:right-[20%] md:w-20 md:h-20"/>

                            </div>


                            {/* Le contenu normal en z-10 */}
                            <div className="relative z-10 w-full flex flex-col items-center">

                                <h2 className="text-xl font-semibold p-2.5 text-center h2-projects-custom">{project.title}</h2>

                                <div className="flex flex-row gap-2.5 flex-wrap">{
                                    project.technologies.map((techno, index) => {
                                        return <div key={index} className=" border-black rounded-sm px-2 py-sm text-white bg-blue-500">
                                            {techno}
                                        </div>
                                    })}
                                </div>

                                <div>
                                    <Image
                                        src={project.previews?.[0] ? project.previews[0] : "/images/p2.webp"}
                                        alt="picProject"
                                        width={250}
                                        height={250}
                                        className="w-full h-24 md:h-[250px] object-cover"
                                    />
                                </div>

                            </div>
                        </motion.div>
                    </Link>
                ))}

            </div>
        </section>
    );
}