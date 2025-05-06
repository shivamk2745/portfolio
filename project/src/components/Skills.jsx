import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaPython, FaJava, FaNodeJs, FaDatabase,
  FaCode, FaGitAlt, FaServer, FaMobile, FaTools
} from 'react-icons/fa'
import { SiCplusplus, SiJavascript, SiDjango, SiTailwindcss, SiMongodb, SiJquery, SiPostgresql, SiGooglecloud } from 'react-icons/si'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks & Libraries' },
    { id: 'tools', name: 'Tools & Platforms' },
  ]

  const skillsData = [
    { 
      id: 1, 
      name: 'JavaScript', 
      icon: <SiJavascript className="text-yellow-400" size={36} />,
      category: 'languages',
      proficiency: 90,
    },
    { 
      id: 2, 
      name: 'C++', 
      icon: <SiCplusplus className="text-blue-600" size={36} />,
      category: 'languages',
      proficiency: 85,
    },
    { 
      id: 3, 
      name: 'Python', 
      icon: <FaPython className="text-green-500" size={36} />,
      category: 'languages',
      proficiency: 80,
    },
    { 
      id: 4, 
      name: 'Java', 
      icon: <FaJava className="text-red-500" size={36} />,
      category: 'languages',
      proficiency: 75,
    },
    { 
      id: 5, 
      name: 'React', 
      icon: <FaReact className="text-blue-400" size={36} />,
      category: 'frameworks',
      proficiency: 90,
    },
    { 
      id: 6, 
      name: 'Django', 
      icon: <SiDjango className="text-green-700" size={36} />,
      category: 'frameworks',
      proficiency: 85,
    },
    { 
      id: 7, 
      name: 'Node.js', 
      icon: <FaNodeJs className="text-green-600" size={36} />,
      category: 'frameworks',
      proficiency: 80,
    },
    { 
      id: 8, 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss className="text-teal-500" size={36} />,
      category: 'frameworks',
      proficiency: 90,
    },
    { 
      id: 9, 
      name: 'Git & GitHub', 
      icon: <FaGitAlt className="text-orange-600" size={36} />,
      category: 'tools',
      proficiency: 85,
    },
    { 
      id: 10, 
      name: 'MongoDB', 
      icon: <SiMongodb className="text-green-500" size={36} />,
      category: 'tools',
      proficiency: 80,
    },
    { 
      id: 11, 
      name: 'PostgreSQL', 
      icon: <SiPostgresql className="text-blue-600" size={36} />,
      category: 'tools',
      proficiency: 85,
    },
    { 
      id: 12, 
      name: 'JQuery', 
      icon: <SiJquery className="text-blue-500" size={36} />,
      category: 'frameworks',
      proficiency: 75,
    },
  ]

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab)

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            My technical toolkit and areas of expertise in software development
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-dark-600 rounded-lg p-6 shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                
                <div className="w-full bg-gray-200 dark:bg-dark-500 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.proficiency}% Proficiency
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-6 bg-gray-100 dark:bg-dark-800 rounded-xl shadow-inner"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Socket.IO', 'Operating Systems', 'Database Management', 'Computer Networks', 
              'Artificial Intelligence', 'Cloud Computing', 'RESTful APIs', 'Algorithms & Data Structures', 
              'CSS', 'HTML', 'Problem Solving', 'Agile Development'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-dark-600 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
