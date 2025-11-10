import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectClient from "@/app/components/ProjectClient";

type ProjectPageProps = {
    params: { slug: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) return notFound();

    return <ProjectClient project={project} />;
}
