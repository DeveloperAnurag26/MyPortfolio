import { motion } from "framer-motion";
import profilePic from "../assets/Profile_picture.jpg";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-20 
                 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            {/* Text */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="md:w-1/2"
            >
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Hi, I'm <span style={{color: 'red'}}>ANURAG PANDEY</span>
                </h1>
                <p className="mt-4 font-serif text-xl text-gray-700 dark:text-gray-300">
                    Hi Everyone I am a frontend developer with a strong eye for design and detail, I specialize in building responsive, user-friendly web interfaces using modern technologies like HTML5, CSS3, JavaScript (ES6+), React.js, and TailwindCSS. My focus has always been on delivering clean, maintainable code and intuitive UI/UX that drive real user engagement.

                    Recently, I've been expanding my skill set into backend development—learning Node.js, Express, MongoDB, and exploring API integration and server-side logic—to grow into a well-rounded full-stack developer.
                    I'm also actively exploring how to integrate AI into frontend applications—from enhancing user interaction with AI-driven components (like chatbots and intelligent search) to leveraging APIs from platforms like OpenAI for real-time content generation, personalization, and automation.

                    I enjoy solving real-world problems with efficient code and collaborating in cross-functional teams, and staying current with evolving web trends and technologies. My goal is to build scalable, performance, and impactful digital products from front to back.
                </p>
            </motion.div>

            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
               <img
  src={profilePic}
  alt="Profile"
  className="w-90 md:w-72 lg:w-80 h-auto object-cover rounded-full border-4 border-gray-500 shadow-lg"
/>
            </motion.div>
        </section>
    );
}
