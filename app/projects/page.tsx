type Project = {
    title: string;
    description: string;
    url: string;
};

const projects: Project[] = [
    {
        title: "Portfolio Next.js",
        description: "Mon site personnel créé avec Next.js et Tailwind CSS.",
        url: "#",
    },
    {
        title: "Application météo",
        description: "Une app météo moderne utilisant une API publique.",
        url: "#",
    },
];

export default function ProjectsPage() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Mes projets</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <a
                            href={project.url}
                            className="text-blue-600 hover:underline mt-4 inline-block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Voir le projet →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
