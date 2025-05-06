import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Get to know more about who I am, my background, and what drives me
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white dark:bg-dark-600 p-1 rounded-lg shadow-lg">
              <div className="w-full h-full p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-dark-700">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 text-xl font-semibold">01</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Passionate Developer</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I have a deep passion for writing clean, efficient code and creating intuitive user experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 text-xl font-semibold">02</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Continuous Learner</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I am constantly learning new technologies and frameworks to stay at the forefront of development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 text-xl font-semibold">03</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Problem Solver</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        With 700+ LeetCode problems solved, I thrive on tackling complex challenges and finding elegant solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 text-xl font-semibold">04</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Team Player</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I value collaboration and communication, working effectively with cross-functional teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Who I Am</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a software engineer with a strong foundation in multiple programming languages and frameworks including JavaScript, C++, Python, Java, React, and Django. My journey in software development has been driven by a passion for creating efficient, scalable, and user-friendly applications.
              </p>
              <p>
                I specialize in both frontend and backend development, with a particular focus on creating responsive web applications that deliver exceptional user experiences. My expertise extends to database design, API integration, and performance optimization.
              </p>
              <p>
                Problem-solving is at the core of my professional identity. I've solved over 700 problems on LeetCode, which has honed my algorithmic thinking and ability to tackle complex technical challenges. This practice has significantly strengthened my coding skills and approach to software development.
              </p>
              <p>
                I'm constantly learning and staying updated with the latest technologies and best practices in the field. I'm particularly excited about opportunities where I can apply my skills to create innovative solutions that make a positive impact.
              </p>
            </div>

            <div className="mt-8 text-center md:text-left">
              <a 
                href="https://drive.google.com/file/d/1IIHyfiBaZ-hAC-aKEvP9x8bLs8D2HUhg/view?usp=drive_link" 
                className="btn btn-primary inline-flex items-center"
              >
                Download Resume
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About