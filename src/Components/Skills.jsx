// src/components/Skills.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit , FaGithub, FaBootstrap,  } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs , SiPostman } from "react-icons/si";
export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Version Control", icon: <FaGit className="text-[#F05032]" /> },
     { name: "Github", icon: <FaGithub className="text-[#181717]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-sky-500" /> },
        { name: "TailwindCss", icon: <SiTailwindcss className="text-sky-500" /> },
         { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
         { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
         { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
        
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-10">SKILLS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold dark:text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
