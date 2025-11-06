"use client";

import { skills } from "../data/skills";
import './Skills.scss';

//
function Skills() {

    // Rendu
    return (
        <div className='skillsCards'>

            {/* Boucle sur les compétences pour les afficher sous forme de cartes */}
            {skills.map((skill, index) => (
                <div className='skillsCard' key={index}>
                    {/* Affichage du logo de la compétence */}
                    <div className='skillsLogo'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={skill.urlLogo} alt="logo techno" loading="lazy"
                        />
                    </div>

                    {/* Affichage du titre de la compétence */}
                    <div className='skillsTitle'>{skill.title}</div>

                </div>
            ))}

        </div>
    );
}

export default Skills;
