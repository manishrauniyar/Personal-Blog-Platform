import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-white to-primary/5 mt-20">

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-gray-200 text-gray-500">

        {/* Logo & About */}
        <div className="max-w-md">
          <div className="flex flex-col">
            <h1 className="text-4xl font-extrabold tracking-tight">
              <span className="text-primary">Stack </span>
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>

            <span className="text-sm text-gray-500 mt-1">
              AI Powered Blogging Platform
            </span>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600 max-w-[410px]">
            StackStories is a modern blogging platform where developers
            share coding experiences, tutorials, AI insights, web
            development guides, and technology trends to help others
            learn and grow.
          </p>

          {/* Social Icons (Instagram, Facebook, LinkedIn) */}


          <div className="flex items-center gap-4 mt-6">

            <a className="w-13 h-13 rounded-full  flex items-center justify-center hover:-translate-y-1 transition-all duration-300">
              <img src={assets.facebook_icon} className="w-full h-full" />
            </a>

            <a className="w-13 h-13 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-300">
              <img src={assets.twitter_icon} className="w-full h-full" />
            </a>
            {/*  <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.googleplus_icon} alt="" />
             */}

            <a className="w-13 h-13 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-300">
              <img src={assets.googleplus_icon} className="w-full h-full" />
            </a>

          </div>


        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-8">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 text-base mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-primary transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>© 2026 StackStories. All rights reserved.</p>
        <p>Built with ❤️ using React, Node.js & MongoDB</p>
      </div>

    </footer>
  )
}

export default Footer