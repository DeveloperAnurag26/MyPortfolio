import { motion } from "framer-motion";
import Pic from "../assets/profile.1.png";


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
                    Hi, I'm ANURAG PANDEY
                </h1>
                <p className="mt-4 font-serif text-xl text-gray-700 dark:text-gray-300">
                   Hi Everyone 👋 I’m Anurag Pandey, a passionate Full Stack Developer who loves building fast, scalable, and visually appealing digital products.

I specialize in frontend development using React.js, JavaScript (ES6+), Next.js, HTML5, CSS3, and TailwindCSS, with a strong eye for clean UI and intuitive UX that keeps users engaged.

Recently, I’ve been expanding my skill set into backend development — learning Node.js, Express, and MongoDB, exploring API integration, authentication, and server-side logic to become a well-rounded developer.
I have also learning Aws Cloud and how CI and CD Pipeline works .

I’m also interested in AI-driven web experiences, integrating intelligent chatbots, personalized recommendations, and automation features into modern web applications.

💡 My goal is to build impactful digital products that solve real-world problems, perform seamlessly, and deliver meaningful user experiences from front to back.

🚀 Always open to collaboration, freelance projects, and full-time opportunities in Frontend or Full Stack roles.
                </p>
       <a href="/Resume.pdf" download>
  <button
    style={{
        
     backgroundColor: 'red',
     color: 'white',
      height: "60px",
      fontSize: "25px",
      width: "140px",
      borderRadius: "15px",
      fontFamily: 'sans-serif',
      fontStyle: 'bold',
      marginTop: "80px",
      

    }}
    
  >
     RESUME
  </button>
</a>

            </motion.div>

            {/* Profile Image */}
    <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
>
  <img
    src={Pic}
    alt="Profile"
    className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gray-500 shadow-lg"
  />
</motion.div>

            
        </section>
    );
}
