"use client";

import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Project } from "@/app/data/projects";
import MotionSection from "./MotionSection";
import ProjectCarousel from "./ProjectCarousel";
import Image from "next/image";
import Logo from "./Logo";

//
type ProjectClientProps = {
    project: Project;
};

//
export default function ProjectClient({ project }: ProjectClientProps) {

    //
    function formatMarkdown(text: string): string {
        return text
            .trim()
            .split("\n")
            .map(line => line.trim())
            .join("\n");
    }

    //
    return (
        <section className="relative max-w-3xl mx-auto space-y-6 p-5">

            {/* Images latérales - visibles uniquement sur desktop */}
            <div className="hidden lg:block fixed left-[30%] top-[10%] h-[800px] w-[800px] opacity-10 pointer-events-none -z-10" aria-hidden="true">
                <Image
                    src="/images/p2.webp"
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                    priority={false}
                    sizes="200px"
                />
            </div>


            <div className="hidden lg:block fixed left-[50px] top-60 h-[400px] w-[400px] opacity-30 pointer-events-none -z-10" aria-hidden="true">
                <Image
                    src="/images/p2.webp"
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                    priority={false}
                    sizes="200px"
                    loading="eager"
                />
            </div>


            <div className="hidden lg:block fixed right-5 top-60 h-[400px] w-[400px] opacity-30 pointer-events-none -z-10" aria-hidden="true">
                <Image
                    src="/images/p2.webp"
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                    priority={false}
                    sizes="180px"
                />
            </div>



            {/* Formes flottantes */}
            <div className="absolute inset-0 -z-10 pointer-events-none">

                {/* Carré arrondi */}
                <div
                    className="absolute top-[400px] left-[-10%] w-20 h-20 bg-green-400/30 rounded-xl shape-float"
                />

                {/* Rond */}
                <div
                    className="absolute bottom-16 right-[50%] w-20 h-20 bg-pink-400/40 rounded-full shape-float"
                    style={{ animationDelay: "2s" }}
                />

                {/* Triangle */}
                <div
                    className="absolute top-[500px] right-[-10%] w-0 h-0
                                        border-l-40 border-l-transparent
                                        border-r-40 border-r-transparent
                                        border-b-70 border-b-purple-400/40
                                        shape-float"
                    style={{ animationDelay: "4s" }}
                />
            </div>


            {/* Titre */}
            <h1 className="text-4xl font-bold text-center">{project.title}</h1>


            {/* Description */}
            <p className="text-gray-600">{project.description}</p>


            {/* Objectif du projet */}
            <MotionSection delay={1} className="text-gray-700 dark:text-gray-300">
                <h2 className="h2-projects-custom">Objectif du projet</h2>
                <ReactMarkdown
                    components={{
                        ul: ({ children }) => (
                            <ul className="list-disc pl-6 space-y-2">{children}</ul>
                        ),
                    }}
                >
                    {formatMarkdown(project.projectObjective)}
                </ReactMarkdown>
            </MotionSection>


            {/* Réalisation effectuées */}
            <MotionSection delay={2}>
                <h2 className="h2-projects-custom">Réalisations effectuées</h2>
                <ReactMarkdown
                    components={{
                        ul: ({ children }) => (
                            <ul className="list-disc pl-6 space-y-2">{children}</ul>
                        ),
                    }}
                >
                    {formatMarkdown(project.completedProjects)}
                </ReactMarkdown>
            </MotionSection>


            {/* Technologies utilisées */}
            <MotionSection delay={3}>
                <h2 className="h2-projects-custom">Technologies utilisées</h2>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    {project.technologies.map((tech, index) => (

                        <Logo key={index} name={tech} />


                        // <span
                        //     key={index}
                        //     className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                        // >
                        //     {tech}
                        // </span>
                    ))}
                </div>
            </MotionSection>


            {/* Aperçus des interfaces */}
            <MotionSection delay={4}>
                <h2 className="h2-projects-custom">Aperçus des interfaces</h2>

                <ProjectCarousel images={project.previews || []} />

            </MotionSection>


            {/* Liens */}
            <MotionSection delay={5} className="">

                <h2 className="h2-projects-custom">Liens</h2>

                <div className="flex gap-4 justify-center mt-4">
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Voir le projet
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </MotionSection>


            {/* Retour */}
            <Link
                href="/projects"
                className="mt-11 text-center w-full inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition"
            >
                Voir mes autres projets
            </Link>

        </section>
    );
}

