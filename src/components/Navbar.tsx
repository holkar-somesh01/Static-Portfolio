import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { NavLink } from '../types';


const navLinks: NavLink[] = [
  { id: '1', title: 'Home', href: '#home' },
  { id: '2', title: 'About', href: '#about' },
  { id: '3', title: 'Projects', href: '#projects' },
  { id: '4', title: 'Services', href: '#services' },
  { id: '5', title: 'Testimonials', href: '#testimonials' },
  { id: '6', title: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, } = useTheme();

  return (
    <nav className="fixed w-full  bg-transparent backdrop-blur-sm dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <a href="#home" className="flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 bg-blue-500 text-white font-bold text-xl rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  SH
                </div>
                <span className="hidden sm:block font-semibold text-gray-800 dark:text-white text-lg group-hover:text-blue-500 transition-colors duration-300">
                  Someshwar
                </span>
              </a>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.title}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar