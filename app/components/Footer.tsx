"use client";

// import picHome2 from '../../assets/home2.webp';
// import logoLinkedIn from '../../assets/logoLinkedin.webp';
// import myCV from '/documents/eCV.pdf';
import './Footer.scss'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


/**
 * Composant Footer
 * 
 * Ce composant affiche le pied de page du site avec un menu basic et des liens
 * 
 */
function Footer() {

    const myCV = "/documents/eCV.pdf";

    //
    // const navigate = useNavigate();

    // Permet l'ouverture du profil linkedin
    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/benoit-lamour/", "_blank", "noopener,noreferrer");
    };

    //Rendu
    return (

        <footer className="divFooter">

            <div className='divFooter1'>

                <div className="w-[100px] h-[100px] relative  md:w-[300px] md:h-[300px]">
                    <Image
                        src="/images/home2.webp"
                        alt="Photo illustration"
                        fill
                        sizes='200px'
                        className="object-cover rounded-full border-4 border-white"
                    />
                </div>

                <div className='flex flex-col gap-0.5 justify-evenly font-bold text-white text-xl  md:text-4xl md:gap-2.5'>
                    <Link href="/" className="hover:text-blue-600">Accueil</Link>
                    <Link href="/projects" className="hover:text-blue-600">Mes réalisations</Link>
                    <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                </div>

                <div className='socialNetwork'>

                    <span>Réseaux sociaux</span>

                    <button className="buttonLinkedIn" onClick={handleClickLinkedIn}>
                        <Image
                            src="/images/logoLinkedin.webp"
                            alt="picHome2"
                            width={240}
                            height={80}
                            className="w-full"
                        />
                    </button>

                    <Link
                        href="/contact"
                        className="w-full text-white text-2xl bg-blue-500 rounded-md transform transition-transform duration-200 hover:scale-110 p-1"
                    >
                        Contactez-moi
                    </Link>


                    <a href={myCV} target="_blank" rel="noopener noreferrer"
                        className="w-full text-white text-2xl bg-blue-500 rounded-md transform transition-transform duration-200 hover:scale-110 p-1">
                        Voir mon CV (PDF)
                    </a>

                </div>
            </div>

            <div className='divFooter2'>
                <span className="divFooter__copyright">© 2025 Portfolio. All rights reserved</span>
            </div>

        </footer>

    )
}

export default Footer