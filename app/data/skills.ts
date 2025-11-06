// Définition du type Skill
export type Skill = {
  urlLogo: string;
  title: string;
};

// Tableau typé des compétences
export const skills: Skill[] = [
  { urlLogo: "/images/css.svg", title: "CSS" },
  { urlLogo: "/images/html.svg", title: "HTML" },
  { urlLogo: "/images/javascript.svg", title: "JS" },
  { urlLogo: "/images/react.svg", title: "REACT" },
  { urlLogo: "/images/redux.svg", title: "REDUX (Toolkit)" },
  { urlLogo: "/images/sass.svg", title: "SASS" },
  { urlLogo: "/images/typescript.svg", title: "TYPESCRIPT" },
  { urlLogo: "/images/node.svg", title: "NODEJS" },
  { urlLogo: "/images/nestjs.svg", title: "NESTJS" },
  { urlLogo: "/images/mongodb.svg", title: "MONGODB" },
  { urlLogo: "/images/php.png", title: "PHP" },
  { urlLogo: "/images/mysql.svg", title: "MySQL" },
  { urlLogo: "/images/nextjs.svg", title: "NEXTJS" },
];
