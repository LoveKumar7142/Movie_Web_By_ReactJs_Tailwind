import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/movies', label: 'Movies' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-[1000]">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-red-600 z-50">
          CineCraft 🎬
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? 'text-red-600' : 'text-gray-700'
                  } hover:text-red-500 transition`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Expanding Curved Sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 transition-all duration-700 ease-in-out
        ${open ? 'w-full h-[92vh] opacity-100' : 'w-0 h-0 opacity-0'} 
        bg-white shadow-2xl rounded-bl-[160px] md:rounded-bl-[250px] overflow-hidden`}
      >
        <div
          className={`flex flex-col items-center pt-24 space-y-6 transition-opacity duration-500 ${
            open ? 'opacity-100 delay-300' : 'opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? 'text-red-600' : 'text-gray-800'
                } hover:text-red-500 transition`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
