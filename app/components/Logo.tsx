import Image from 'next/image';
import React from 'react'

// Définition du type Skill
type Logos = {
    name: string;
    urlLogo: string;
    title: string;
};


const Logo = ({ name }: { name: string }) => {

    //
    const logos: Logos[] = [
        { name: "css", urlLogo: "/images/css.svg", title: "CSS" },
        { name: "html", urlLogo: "/images/html.svg", title: "HTML" },
        { name: "javascript", urlLogo: "/images/javascript.svg", title: "JAVASCRIPT" },
        { name: "react", urlLogo: "/images/react.svg", title: "REACT" },
        { name: "redux", urlLogo: "/images/redux.svg", title: "REDUX (Toolkit)" },
        { name: "scss", urlLogo: "/images/scss.svg", title: "SCSS" },
        { name: "tailwindcss", urlLogo: "/images/tailwindcss.svg", title: "TAILWINDCSS" },
        { name: "typescript", urlLogo: "/images/typescript.svg", title: "TYPESCRIPT" },
        { name: "nodejs", urlLogo: "/images/node.svg", title: "NODEJS" },
        { name: "nestjs", urlLogo: "/images/nestjs.svg", title: "NESTJS" },
        { name: "mongodb", urlLogo: "/images/mongodb.svg", title: "MONGODB" },
        { name: "php", urlLogo: "/images/php.png", title: "PHP" },
        { name: "mysql", urlLogo: "/images/mysql.svg", title: "MySQL" },
        { name: "nextjs", urlLogo: "/images/nextjs.svg", title: "NEXTJS" },
        { name: "seo", urlLogo: "/images/seo.png", title: "SEO" },
        { name: "socketio", urlLogo: "/images/socketio.svg", title: "SOCKET.IO" },
        { name: "bootstrap", urlLogo: "/images/reactBootstrap.svg", title: "REACT-BOOTSTRAP" },
    ];

    //
    const myLogo = logos.find(l => l.name === name);


    //
    return (
        <div className=''>
            {myLogo ? (
                <div className='flex flex-col justify-center items-center gap-5'>
                    <Image
                        className='custom-drop-shadow h-20 w-20'
                        src={myLogo.urlLogo}
                        alt={`logo ${myLogo.name}`}
                        width={80}
                        height={80}
                    />
                    <div className='text-center'>{myLogo.title}</div>
                </div>
            ) : (
                <div className='custom-drop-shadow   flex justify-center items-center p-2 bg-blue-300 rounded-2xl text-center'>
                    {name}
                </div>
            )}

        </div>
    )
}

export default Logo