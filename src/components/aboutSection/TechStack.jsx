import { FaFigma, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaWordpress, FaShopify } from "react-icons/fa";
import { SiMongodb, SiExpress, SiAdobephotoshop, SiAdobexd, SiTypescript, SiMiro } from "react-icons/si";

// Example: Using react-icons for popular tech icons
const iconColor = "#292F5D";
const techStack = [
    {
        name: "Figma",
        icon: <FaFigma color={iconColor} size={36} />,
        category: "UX/UI Design",
    },
    {
        name: "Adobe XD",
        icon: <SiAdobexd color={iconColor} size={36} />,
        category: "UX/UI Design",
    },
    {
        name: "Photoshop",
        icon: <SiAdobephotoshop color={iconColor} size={36} />,
        category: "UX/UI Design",
    },
    {
        name: "React",
        icon: <FaReact color={iconColor} size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "Node.js",
        icon: <FaNodeJs color={iconColor} size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "Express.js",
        icon: <SiExpress color={iconColor} size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "MongoDB",
        icon: <SiMongodb color={iconColor} size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "HTML5",
        icon: <FaHtml5 color={iconColor}size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "CSS3",
        icon: <FaCss3Alt color={iconColor} size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "JavaScript",
        icon: <FaJs color={iconColor} size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript color={iconColor}size={36} />,
        category: "Full Stack Development",
    },
    {
        name: "Git",
        icon: <FaGitAlt color={iconColor}size={36} />,
        category: "Full Stack Development",
    },

    {
        name: "Shopify",
        icon: <FaShopify color={iconColor} size={36} />,
        category: "E-commerce",
    },    
    {
        name: "WordPress",
        icon: <FaWordpress color={iconColor} size={36} />,
        category: "Web Platforms",
    },
        {
        name: "Miro",
        icon: <SiMiro color={iconColor} size={36} />,
        category: "UX/UI Design",
    },
    
];

const groupedStack = techStack.reduce((acc, tech) => {
    acc[tech.category] = acc[tech.category] || [];
    acc[tech.category].push(tech);
    return acc;
}, {});

// const TechStack = () => (
//     <section className="tech-stack">
//         <h2>Tech Stack</h2>
//         {Object.entries(groupedStack).map(([category, items]) => (
//             <div key={category} style={{ marginBottom: "2rem" }} >
//                 <p style={{ fontWeight: "bold" , width: "fitcontent"}} className="tag">{category}</p>
//                 <div className="tech-icons">
//                     {items.map((tech) => (
//                         <div key={tech.name} className="tech-icon">
//                             {tech.icon}
//                             <div style={{ marginTop: 8 }}>{tech.name}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         ))}
//     </section>
// );

const TechStack = () => (
    <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
            {techStack.map((tech) => (
                <div key={tech.name} className="tech-icon">
                    {tech.icon}
                    <div style={{ marginTop: 8 }}>{tech.name}</div>
                </div>
            ))}
        </div>
    </section>
);


export default TechStack;