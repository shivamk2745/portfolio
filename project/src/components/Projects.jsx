import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaServer, FaRobot } from 'react-icons/fa'
import chatgpt from '../assets/ChatGPT.webp'
import dsa from '../assets/dsa.png'
const Projects = () => {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'backend', name: 'Backend' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Code Compile Collaborate',
      description: 'A platform that students can use to improve their DSA skills, and companies can use to conduct technical interviews.',
      image: dsa,
      category: 'web',
      technologies: ['React.js', 'Node.js', 'WebSocket', 'Piston', 'Tailwind CSS', 'JWT','WebRTC','MongoDB'],
      githubLink: 'https://github.com/shivamk2745',
      liveLink: '#',
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: 'Real-time Code Collaboration',
      description: 'A platform using MERN stack and Socket.IO, enabling simultaneous editing and boosting team productivity.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      category: 'web',
      technologies: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Tailwind CSS'],
      githubLink: 'https://github.com/shivamk2745',
      liveLink: '#',
      icon: <FaLaptopCode />,
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'Developed an AI chatbot using Django, React, PostgreSQL, and GCP, enabling clients to create campaigns and query databases.',
      image: chatgpt,
      category: 'backend',
      technologies: ['Django', 'React', 'PostgreSQL', 'GCP', 'WebSockets'],
      githubLink: 'https://github.com/shivamk2745',
      liveLink: '#',
      icon: <FaRobot />,
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my best work and the projects I've built
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-dark-600 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/shivamk2745" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            See More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
