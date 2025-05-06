import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Competitive Programming',
      description: 'Achieved strong ratings on multiple competitive programming platforms',
      icon: <FaCode className="text-blue-500" size={24} />,
      details: [
        'LeetCode Rating: 1627',
        'GeeksforGeeks Rating: 1803',
        'CodeForces: 1198',
        'CodeChef: 1626'
      ]
    },
    {
      id: 2,
      title: 'Hackathon Success',
      description: 'Secured 2nd place out of 75+ teams in the Bids-by-Bit Coding Competition',
      icon: <FaTrophy className="text-yellow-500" size={24} />,
      details: [
        'Organized by KJ Somaiya College',
        'Compete in 3 rounds within 24 hours',
        'Solved 5 problems in 3 hours',
        'Acheive 2nd place with a team of 3 members'
      ]
    },
    {
      id: 3,
      title: 'AWS Certification',
      description: 'Successfully completed AWS Cloud Practitioner Essentials certification',
      icon: <FaMedal className="text-orange-500" size={24} />,
      details: [
        'Comprehensive understanding of AWS Cloud concepts',
        'Knowledge of key AWS services and their common use cases',
        'AWS security and compliance concepts',
        'Cloud deployment and operating models'
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle mx-auto">
            Recognition and accomplishments in my journey as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-dark-600 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 dark:bg-dark-700 p-3 rounded-full mr-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {achievement.description}
                </p>
                <ul className="space-y-2">
                  {achievement.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <FaStar className="text-primary dark:text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm continuously working to improve my skills and add more achievements to this list.
            My goal is to make meaningful contributions to the tech community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
