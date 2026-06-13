import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/indrajitsingha', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/indrajit-singha-91373a200', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:indrajitdgp19@gmail.com', label: 'Email' }
  ];

  return (
    <footer className={`${theme.bgPrimary} border-t ${theme.border} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>Indrajit Singha</h3>
            <p className={`${theme.textSecondary} text-sm`}>Frontend Developer</p>
            <p className={`${theme.textTertiary} text-sm mt-1`}>Building beautiful digital experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${theme.text} font-semibold mb-4`}>Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`${theme.textTertiary} hover:text-opacity-100 transition-all duration-300 text-sm font-medium relative group`}
                  >
                    {link}
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${theme.accent} group-hover:w-full transition-all duration-300`}></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`${theme.text} font-semibold mb-4`}>Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${theme.bgTertiary} hover:${theme.accentBg} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${theme.shadow}`}
                  aria-label={label}
                >
                  <Icon size={20} className={`${theme.textTertiary} hover:${theme.text}`} />
                </a>
              ))}
            </div>
            <p className={`${theme.textTertiary} text-sm`}>indrajitdgp19@gmail.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${theme.border} pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${theme.textTertiary} text-sm mb-4 md:mb-0`}>
            © {currentYear} Indrajit Singha. All rights reserved.
          </p>
          <p className={`${theme.textTertiary} text-sm flex items-center`}>
            Made by Indrajit Singha <Heart size={14} className="mx-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
