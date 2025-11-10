export type Project = {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    projectObjective: string;
    completedProjects: string;
    previews?: string[];
    url?: string;
    github?: string;
};

export const projects: Project[] = [
    {
        slug: "app-location-immobiliere",
        title: "Application de location immobilière",
        description: "Développement de l'interface utilisateur d'une application immobilière avec React",
        technologies: ["HTML", "SCSS", "Javascript", "React", "Responsive Design"],

        projectObjective: `
        - Créer l'interface utilisateur de l'application de location immobilière en React.
        - Objectif client : Développer une application de type \"single-page\" conforme à une maquette fournie.
        - Implémenter l'ensemble des pages avec des fonctionnalités interactives.
        - Simuler les requêtes API via des fichiers JSON en attendant l'intégration du backend
        `,

        completedProjects: `
            - **Développement** d&apos;une application REACT
            - Création de composants réutilisables : Header, Footer, Host, Banner, Card, Collapse, Logo, Rating.
            - Configuration du routeur pour une navigation fluide entre les pages (accueil, à propos, détail des logements, et page 404)
            - Utilisation de useState et useEffect pour récupérer et gérer les données des logements, d&apos;un logement spécifique et des éléments repliables.
            -Ajout d&apos;animations pour les éléments repliables et le carrousel
        `,

        previews: [
            "images/kasa1_preview.webp",
            "images/kasa2_preview.webp",
            "images/kasa3_preview.webp"
        ],
        url: "https://lamben2007.github.io/Projet5_kasa",
        github: "https://github.com/lamben2007/Projet5_kasa",

    },
];
