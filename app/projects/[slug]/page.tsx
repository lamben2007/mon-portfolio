import { notFound } from "next/navigation";
import { projects, Project } from "../../data/projects";
import Link from "next/link";

type ProjectPageProps = {
    params: { slug: string };
};

//
export default async function ProjectPage({ params }: ProjectPageProps) {

    //
    const { slug } = await params;
    const project: Project | undefined = projects.find(p => p.slug === slug);

    //
    if (!project) return notFound();

    //
    return (
        <section className="max-w-3xl mx-auto space-y-6 border p-5">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-gray-600">{project.description}</p>

            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 mt-4">
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

            <Link
                href="/projects"
                className="mt-11  text-center  w-full  inline-block bg-pink-600 sm:bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition"
            >
                Voir mes projets
            </Link>

        </section>
    );
}
