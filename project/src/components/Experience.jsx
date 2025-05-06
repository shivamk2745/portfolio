import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'Markytics.AI',
      location: 'Mumbai, Maharashtra',
      period: 'Current',
      description: [
        'Developed an AI chatbot using Django, React, PostgreSQL, and GCP, enabling clients to create campaigns and query databases via dynamic SQL generation and Google Cloud Storage for handling files',
        'Implemented real-time communication using Django Channels (WebSocket) to ensure a stable client-server connection',
        'Built a frontend interface to automate data retrieval for a prediction system, replacing hardcoded dates with dynamic inputs for flexible data fetching',
        'Created APIs and a frontend interface for users to input dates and upload CSV files, simplifying data visualization'
      ],
      technologies: ['Django', 'React', 'PostgreSQL', 'GCP', 'WebSockets']
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and the companies I've worked with
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 md:mb-0 flex flex-col ${
                index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2 md:pr-8 md:pl-0 pl-8">
                <div className="mb-10">
                  <div className="bg-white dark:bg-dark-600 p-6 rounded-lg shadow-md relative">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                        <FaBriefcase className="text-primary dark:text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-primary dark:text-primary font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center mr-6 mb-2 md:mb-0">
                        <FaCalendarAlt className="mr-2" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary dark:text-primary rounded-full mt-1.5 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Triangle pointing to timeline */}
                    <div
                      className={`hidden md:block absolute top-1/2 ${
                        index % 2 === 0 ? 'right-[-10px]' : 'left-[-10px] transform rotate-180'
                      } transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${
                        index % 2 === 0
                          ? 'border-l-[10px] border-l-white dark:border-l-dark-600'
                          : 'border-r-[10px] border-r-white dark:border-r-dark-600'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-8 h-8 bg-primary dark:bg-primary rounded-full border-4 border-white dark:border-dark-700 z-10"></div>
              </div>

              {/* Empty column for layout on the other side */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Add a CTA for future experiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-dark-600 p-8 rounded-lg shadow-md text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Looking for New Opportunities</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm currently open to new roles and challenges where I can contribute my skills and continue to grow as a developer.
          </p>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
