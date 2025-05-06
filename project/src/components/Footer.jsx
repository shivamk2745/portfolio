import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-primary-400">{'<'}</span>
              <span>Shivam</span>
              <span className="text-primary-400">{'/>'}</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Passionate software engineer creating elegant solutions to complex problems through clean, efficient code.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/shivamk2745"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shivam-kashyap-a398022ab/ "
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <FaTwitter className="mr-2" /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:shivamkashyap0126@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <FaEnvelope className="mr-2" /> Email
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to receive updates on new projects and blog posts.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-400 w-full"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} All Rights Reserved | Designed & Built with ❤️
          </p>
          <div className="flex items-center">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer