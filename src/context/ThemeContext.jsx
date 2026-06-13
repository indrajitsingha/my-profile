import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
  dark: {
    name: 'Dark',
    bg: 'from-gray-950 via-gray-900 to-black',
    bgPrimary: 'bg-gray-950',
    bgSecondary: 'bg-gray-900',
    bgTertiary: 'bg-gray-800',
    text: 'text-white',
    textSecondary: 'text-gray-300',
    textTertiary: 'text-gray-400',
    border: 'border-gray-700',
    accent: 'from-purple-600 to-pink-600',
    accentHover: 'hover:from-purple-700 hover:to-pink-700',
    accentBg: 'bg-purple-600',
    accentBgHover: 'hover:bg-purple-700',
    navbg: 'bg-gray-950/80',
    cardBg: 'bg-gray-800/50',
    shadow: 'shadow-lg shadow-purple-500/10',
  },
  light: {
    name: 'Light',
    bg: 'from-white via-gray-50 to-gray-100',
    bgPrimary: 'bg-white',
    bgSecondary: 'bg-gray-50',
    bgTertiary: 'bg-gray-100',
    text: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textTertiary: 'text-gray-600',
    border: 'border-gray-200',
    accent: 'from-blue-600 to-cyan-600',
    accentHover: 'hover:from-blue-700 hover:to-cyan-700',
    accentBg: 'bg-blue-600',
    accentBgHover: 'hover:bg-blue-700',
    navbg: 'bg-white/80',
    cardBg: 'bg-gray-50/80',
    shadow: 'shadow-lg shadow-blue-500/10',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
    setMounted(true);
  }, []);

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('theme', themeName);
    }
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    switchTheme,
    themes: Object.keys(themes),
    themeNames: Object.values(themes).map(t => t.name),
  };

  return (
    <ThemeContext.Provider value={value}>
      {mounted && children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
