"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Link from "next/link";


export default function ProjectsPage() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-center">Mes projets</h2>
            {/* <div className="flex flex-col justify-end bg-red-300 gap-3"> */}
            <div className="flex  flex-col  items-center">

                    {projects.map(project => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="p-2"
                        >
                            <motion.div
                                className="shadow rounded-2xl p-3 bg-[#adc6eb]"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <div className="flex flex-row gap-2.5 flex-wrap">{
                                    project.technologies.map((techno, index) => {
                                        return <div key={index} className=" border-black rounded-sm px-2 py-sm text-white bg-blue-500">
                                            {techno}
                                        </div>
                                    })}
                                </div>
                            </motion.div>
                        </Link>
                    ))}

            </div>
        </section>
    );
}