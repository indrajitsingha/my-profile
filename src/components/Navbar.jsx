import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, currentTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? `${theme.navbg} backdrop-blur-md border-b ${theme.border}` : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-xl font-bold ${theme.text} hover:opacity-80 transition-all duration-200 relative group`}
          >
            IS
            <div className={`absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r ${theme.accent} group-hover:w-full transition-all duration-300`}></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`${theme.textSecondary} hover:${theme.text} transition-colors text-sm font-medium relative group`}
              >
                {link.name}
                <div className={`absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r ${theme.accent} group-hover:w-full transition-all duration-300`}></div>
              </button>
            ))}
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className={`${theme.accentBg} ${theme.accentBgHover} ${theme.text} font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg`}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className={`${theme.text}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${theme.bgTertiary} backdrop-blur-lg border-t ${theme.border}`}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left ${theme.textSecondary} hover:${theme.text} transition-colors py-2 font-medium`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className={`w-full ${theme.accentBg} ${theme.accentBgHover} ${theme.text} font-medium py-2 rounded-lg transition-all duration-300`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
