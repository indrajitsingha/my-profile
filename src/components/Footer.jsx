import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/indrajitsingha', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/indrajit-singha-91373a200', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:indrajitdgp19@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Indrajit Singha</h3>
            <p className="text-gray-400 text-sm">Frontend Developer</p>
            <p className="text-gray-500 text-sm mt-1">Building digital experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={label}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-black" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">indrajitdgp19@gmail.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Indrajit Singha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
             Made by Indrajit Singha <Heart size={14} className="mx-1 text-red-500" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
