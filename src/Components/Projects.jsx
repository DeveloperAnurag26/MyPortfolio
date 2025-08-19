// src/components/Projects.jsx
import Ecommerce from "../assets/Ecommerce.png";
import project2 from "../assets/project2.png";
import Food_App from "../assets/Food_App.png";



export default function Projects() {
  const projects = [
    {
      title: "Traveling Website",
      desc: "Travel Website Where You Can Explore different things.",
      img: project2,
      link: "https://bookanything.netlify.app/",
    },
    {
      title: "E-commerce App",
      desc: "E-Commerece WebSite where you can check Electronics Accessories and different thing .",
      img: Ecommerce,
      link: "https://starmartecommerce.netlify.app/",
    },
    {
      title: "Tic-Tac-Toe Game",
      desc: "Creating a tic-tac-toe where you can play and check result.",
      img: Food_App,
      link: "https://food-website-in-reactjs.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold dark:text-white">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
