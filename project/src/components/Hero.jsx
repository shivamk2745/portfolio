import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaFileAlt, FaArrowDown } from 'react-icons/fa'
import hero from '../assets/hero.webp'
const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-24 md:pt-32 md:pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <TypeAnimation
                sequence={[
                  'a Software Engineer',
                  2000,
                  'a Problem Solver',
                  2000,
                  'a Frontend Developer',
                  2000,
                  'a Backend Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              Passionate software engineer with expertise in multiple programming languages and frameworks.
              Solved 700+ problems on LeetCode. Building elegant solutions to complex problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary"
              >
                Hire Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline"
              >
                See My Work
              </Link>
            </div>

            <div className="flex mt-8 gap-5 justify-center md:justify-start">
              <a
                href="https://github.com/shivamk2745"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-kashyap-a398022ab/ "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://drive.google.com/file/d/1IIHyfiBaZ-hAC-aKEvP9x8bLs8D2HUhg/view?usp=drive_link"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                aria-label="Resume"
              >
                <FaFileAlt size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-400/30 dark:bg-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-secondary-400/30 dark:bg-secondary-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
              
              {/* Hero image */}
              <div className="relative">
                <div className="w-full h-full rounded-2xl p-2 bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg">
                  <img
                    src={hero}
                    alt="Software Developer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
            <FaArrowDown className="text-primary-600 dark:text-primary-400 animate-bounce-slow" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero