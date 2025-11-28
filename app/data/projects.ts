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
        technologies: ["html", "scss", "javascript", "react"],

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
            "/images/kasa1_preview.webp",
            "/images/kasa2_preview.webp",
            "/images/kasa3_preview.webp"
        ],
        url: "https://lamben2007.github.io/Projet5_kasa",
        github: "https://github.com/lamben2007/Projet5_kasa",

    },

    {
        slug: "app-notation-livre",
        title: "Application de notation de livres",
        description: "Développement et mise en place du backend de l&apos;application avec une attention particulière à la sécurité des données.",
        technologies: ["javascript", "nodejs", "mongodb"],
        projectObjective: "Concevoir les API permettant d&apos;interagir avec la base de données pour effectuer des opérations CRUD (création, modification, suppression, consultation) sur les livres et gérer les notes des utilisateurs, tout en garantissant un haut niveau de sécurité.",
        completedProjects: `
        - Développement des routes API en concevant et implémentant des endpoints pour la gestion des livres, des utilisateurs et des notes.
        - Validation et contrôle des entrées utilisateur afin de prévenir les injections et d’assurer l’intégrité des données stockées en base.
        - Création de middlewares pour la gestion des autorisations, la validation des données, la gestion des erreurs et l’optimisation des images.
        - Sécurisation de l’application par l’intégration de mécanismes d’authentification et de contrôle d’accès afin de garantir la confidentialité et la protection des données
        `,
        previews: ["/images/api1_preview.webp"],
        github: "https://github.com/lamben2007/Projet6"


    },

    {
        slug: "app-portfolio-photographe",
        title: "Portfolio d'une Photographe",
        description: "Analyse des performances et optimisation SEO d'un portfolio pour une photographe professionnelle.",
        technologies: ["seo", "html", "javascript"],
        projectObjective: `
        - Obtenir un site avec les nouvelles fonctionnalités, conforme à la maquette, et des appels API pleinement fonctionnels.
        - Développer la galerie d'images, intégrer les filtres de projets par catégories, créer la page de connexion, le mode Édition ainsi que la modale de mise à jour. Implémenter les requêtes C.R.U.D vers l'API.
        `,
        completedProjects: `
        - Réduction du poids des images et adaptation des formats (ordinateur, tablette, mobile) pour améliorer la vitesse de chargement.",
        - Structuration du code HTML en utilisant des balises sémantiques pour améliorer la lisibilité et le référencement.",
        - Résolution des problèmes de navigation dans la galerie d'images via jQuery.",
        - Intégration des microdonnées (services, localisation, contacts, etc.) pour améliorer la visibilité dans les moteurs de recherche.",
        - Analyse du site afin de repérer les opportunités d'optimisation.",
        - Configuration des balises de partage pour optimiser l’affichage sur les réseaux sociaux.",
        - Création d’un rapport résumant les actions effectuées et les résultats obtenus."
        `,
        previews: ["/images/seo1_preview.webp", "/images/seo2_preview.webp"],
        url: "https://lamben2007.github.io/Projet4/",
        github: "https://github.com/lamben2007/Projet4"
    },

    {
        slug: "app-portfolio-architecte",
        title: "Portfolio - Architecte d'intérieur",
        description: "Un portfolio interactif pour une architecte d'intérieur, offrant aux visiteurs la possibilité de trier les projets par catégorie et permettant à l'architecte de gérer aisément sa galerie en ajoutant, classant ou supprimant des projets",
        technologies: ["javascript", "html", "scss"],
        projectObjective: `
        - Avoir Un site fonctionnel intégrant les nouvelles fonctionnalités conformément à la maquette, avec des appels API pleinement opérationnels.
        - Développer la galerie d’images, le système de filtrage des projets par catégorie, la page de connexion, le mode 'Édition' ainsi que la fenêtre modale de mise à jour. Implémenter les requêtes C.R.U.D à l’API.
        `,
        completedProjects: `
        - Récupération des données sur tous les projets (GET)
        - Page de connexion et récupération de l'utilisateur (GET)
        - Suppression d'un projet avec mise à jour instantanée de la galerie (DELETE)
        - Création du mode édition
        - Ajout d'un nouveau projet (POST)
        - Création de la modale de mise à jour
        `,
        previews: ["/images/architecte1_preview.webp"],
        github: "https://github.com/lamben2007/Projet3"
    }




];
