"use client";

import Logo from "./Logo";
import './Skills.scss';

//
function Skills() {

    //
    const skills = [
        "html",
        "scss",
        "tailwindcss",
        "javascript",
        "react",
        "typescript",
        "nextjs",
        "socketio",
        "redux",
        "nodejs",
        "mongodb",
        "mysql",
        "php",
        "nestjs",
    ]

    // Rendu
    return (
        <div className='skillsCards'>

            {/* Boucle sur les compétences pour les afficher sous forme de cartes */}
            {skills.map((skill, index) => (
                <Logo key={index} name={skill} />
            ))}

        </div>
    );
}

export default Skills;
