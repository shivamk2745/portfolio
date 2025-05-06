import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaCode } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'BE in Computer Science',
      institution: 'Atharva College Of Engineering(ACE)',
      location: 'Mumbai, Maharashtra',
      period: 'Sept 2021 - June 2025',
      details: 'Pursuing a Bachelor\'s degree in Computer Science with a CGPA of 9.62.',
      achievements: [
        'Secured 2nd place out of 75+ teams in the Bids-by-Bit Coding Competition organized by KJ Somaiya College'
      ]
    },
    {
      id: 2,
      degree: 'Class XII',
      institution: 'Shri Vile Parle Kelavani Mandal (SVKM)',
      location: 'Mumbai, Maharashtra',
      period: 'Aug 2018 - Feb 2020',
      details: 'Completed higher secondary education with a percentage of 86.1.',
      achievements: []
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      icon: <FaCode className="text-yellow-500" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-primary dark:text-primary" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {educationData.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  className="bg-white dark:bg-dark-600 rounded-lg p-6 shadow-md"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <p className="text-primary dark:text-primary font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <FaCalendarAlt className="mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{item.details}</p>

                  {item.achievements.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-primary dark:bg-primary rounded-full mt-1.5 mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h5 className="font-semibold mb-2">Location:</h5>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-gray-500 dark:text-gray-400" />
                      <p className="text-gray-700 dark:text-gray-300">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaAward className="mr-3 text-primary dark:text-primary" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-dark-600 rounded-lg p-5 shadow-md flex items-center"
                >
                  <div className="bg-gray-100 dark:bg-dark-700 p-3 rounded-full mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{cert.title}</h4>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 bg-primary-100 dark:bg-primary-900/20 p-6 rounded-lg"
            >
              <h4 className="font-bold text-lg mb-3">Competitive Programming</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I regularly participate in coding competitions and practice problem-solving on various platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://leetcode.com/shivamk2745/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 bg-white dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors"
                >
                  LeetCode Rating: 1627
                </a>
                <a 
                  href="https://www.geeksforgeeks.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 bg-white dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors"
                >
                  GeeksforGeeks Rating: 1803
                </a>
                <a 
                  href="https://codeforces.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 bg-white dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors"
                >
                  CodeForces: 1198
                </a>
                <a 
                  href="https://www.codechef.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 bg-white dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors"
                >
                  CodeChef: 1626
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
