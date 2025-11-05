export type Project = {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
};

export const projects: Project[] = [
    {
        slug: "portfolio-nextjs",
        title: "Portfolio Next.js",
        description: "Mon site personnel créé avec Next.js et Tailwind CSS.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
        url: "https://mon-portfolio.vercel.app",
        github: "https://github.com/username/portfolio-nextjs",
    },
    {
        slug: "weather-app",
        title: "Application météo",
        description: "Une app météo moderne utilisant une API publique.",
        technologies: ["React", "TypeScript", "OpenWeather API"],
        url: "#",
        github: "#",
    },
];
