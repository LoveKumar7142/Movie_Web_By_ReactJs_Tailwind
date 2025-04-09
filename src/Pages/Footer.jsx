import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 🎬 About Project */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">CineCraft</h2>
          <p className="text-sm leading-relaxed">
            CineCraft is a dynamic platform to explore trending, classic, and latest movies. Built with React & Tailwind by Love Kumar — passionate frontend developer.
          </p>
        </div>

        {/* 🔗 Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/movies" className="hover:text-white transition">Movies</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* 📇 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Name:</strong> Love Kumar</li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:lovekumar714283@gmail.com" className="hover:text-white">
                lovekumar714283@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919958029853" className="hover:text-white">
                +91 99580 29853
              </a>
            </li>
            <li>
              <strong>Location:</strong> Ghaziabad, Uttar Pradesh, India
            </li>
          </ul>
        </div>

        {/* 🌐 Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
          <div className="flex flex-col gap-4 text-sm">

            <a
              href="https://github.com/LoveKumar7142"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition"
              rel="noopener noreferrer"
            >
              <span className="text-xl">🐱</span>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-gray-400 text-xs">github.com/LoveKumar7142</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/love-kumar-327299212/"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition"
              rel="noopener noreferrer"
            >
              <span className="text-xl">💼</span>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-gray-400 text-xs">linkedin.com/in/love-kumar-327299212</p>
              </div>
            </a>

            <a
              href="mailto:lovekumar714283@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <span className="text-xl">📧</span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400 text-xs">lovekumar714283@gmail.com</p>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* 🔻 Bottom Line */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} CineMate by Love Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
