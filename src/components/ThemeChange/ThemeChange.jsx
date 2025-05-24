import React, { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { themeChange } from 'theme-change';

const ThemeChange = () => {
  const [currentTheme, setCurrentTheme] = useState('GardenTheme');

  useEffect(() => {
    if (document.documentElement.hasAttribute('data-theme')) {
      setCurrentTheme(document.documentElement.getAttribute('data-theme'));
    }
    themeChange(false);
  }, []);

  const toggleTheme = (themeName) => {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    setCurrentTheme(themeName);
  };

  return (
    <div>
      {
        currentTheme === 'GardenTheme' ? (
          <button
            onClick={() => toggleTheme('GardenThemeLight')}
            className="btn btn-ghost btn-circle mr-2"
          >
            <BiSun className='text-2xl'></BiSun>
          </button>
        ) : (
          <button
            onClick={() => toggleTheme('GardenTheme')}
            className="btn btn-ghost btn-circle mr-2"
          >
            <BiMoon className='text-2xl'></BiMoon>
          </button>
        )
      }
    </div>
  );
};


export default ThemeChange;