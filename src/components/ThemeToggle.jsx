import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { currentTheme, switchTheme } = useTheme();

  const handleToggle = () => {
    switchTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  const buttonStyle = currentTheme === 'dark' 
    ? 'bg-white/10 border-white/20 hover:border-white/40 text-white hover:bg-white/20' 
    : 'bg-black/10 border-black/20 hover:border-black/40 text-black hover:bg-black/20';

  return (
    <button
      onClick={handleToggle}
      className={`p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center font-medium text-sm border ${buttonStyle} hover:scale-110`}
      title={currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
