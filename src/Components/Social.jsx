// src/components/Social.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Social() {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/DeveloperAnurag26" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anuragpandey26/" },
    { icon: <FaTwitter />, link: "https://x.com/ayushpandey6666" },
  ];

  return (
    <section id="social" className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold dark:text-white mb-6">Connect With Me</h2>
      <div className="flex justify-center gap-6">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
