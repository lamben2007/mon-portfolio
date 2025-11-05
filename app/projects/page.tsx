"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Link from "next/link";

// type Project = {
//     title: string;
//     description: string;
//     url: string;
// };

// const projects: Project[] = [
//     { title: "Portfolio Next.js", description: "Mon site personnel créé avec Next.js et Tailwind CSS.", url: "#" },
//     { title: "Application météo", description: "Une app météo moderne utilisant une API publique.", url: "#" },
// ];

// export default function ProjectsPage_old() {
//     return (
//         <section className="space-y-8">
//             <h2 className="text-3xl font-bold text-center">Mes projets</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//                 {projects.map((project, index) => (
//                     <motion.div
//                         key={index}
//                         className="p-6 bg-white shadow rounded-2xl"
//                         whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                     >
//                         <h3 className="text-xl font-semibold">{project.title}</h3>
//                         <p className="text-gray-600 mt-2">{project.description}</p>
//                         <a
//                             href={project.url}
//                             className="text-blue-600 hover:underline mt-4 inline-block"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Voir le projet →
//                         </a>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }




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