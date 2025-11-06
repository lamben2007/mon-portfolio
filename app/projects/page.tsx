"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Link from "next/link";


export default function ProjectsPage() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Mes projets</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block" // permet au Link de prendre toute la largeur
                    >
                        <motion.div
                            className="shadow rounded-2xl p-6"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}