// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ toggleTheme, darkMode }) {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Skills", link: "/#skills" },
    { id: 3, name: "Projects", link: "/#projects" },
    { id: 4, name: "Social", link: "/#social" },
    { id: 5, name: "Contact", link: "/#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold dark:text-white">Anurag Pandey</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map(({ id, name, link }) => (
          <li key={id}>
            <a href={link} className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition">{name}</a>
          </li>
        ))}
        <button onClick={toggleTheme} className="ml-4 text-xl">
          {darkMode ? <MdLightMode className="text-yellow-400" /> : <MdOutlineDarkMode />}
        </button>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={toggleTheme} className="text-xl">
          {darkMode ? <MdLightMode className="text-yellow-400" /> : <MdOutlineDarkMode />}
        </button>
        <button onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes size={22} className="dark:text-white"/> : <FaBars size={22} className="dark:text-white"/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center py-6 gap-4 md:hidden">
          {navLinks.map(({ id, name, link }) => (
            <a key={id} href={link} className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500" onClick={() => setNavOpen(false)}>
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
