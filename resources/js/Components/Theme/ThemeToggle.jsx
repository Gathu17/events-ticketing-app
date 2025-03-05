import React, { useEffect, useRef } from 'react'

function ThemeToggle({ propsClass }) {
  const darkModeToggle = useRef(null);
  const lightModeToggle = useRef(null);

  function applyDarkMode() {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    lightModeToggle.current.classList.remove('hidden');
    darkModeToggle.current.classList.add('hidden');
  }

  function applyLightMode() {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
    lightModeToggle.current.classList.add('hidden');
    darkModeToggle.current.classList.remove('hidden');
  }

  function switchTheme() {
    if (localStorage.getItem('theme') === 'light') {
      applyDarkMode();
    } else if(localStorage.getItem('theme') === 'dark') {
      applyLightMode();
    } else {
      applySystemTheme();
    }
  }

  function applySystemTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  }

  function applyLocalTheme() {
    if (localStorage.getItem('theme') === 'light') {
      applyLightMode();
    } else {
      applyDarkMode();
    }
  }

  function checkCurrentTheme() {
    if (!('theme' in localStorage)) {
      applySystemTheme();
    } else {
      applyLocalTheme();
    }
  }

  useEffect(() => {
    lightModeToggle.current.value = lightModeToggle.current.id;
    darkModeToggle.current.value = darkModeToggle.current.id;
    checkCurrentTheme();
  }, []);

  return (
    <button 
      id="theme-toggle-button" 
      type="button" 
      className={propsClass ? propsClass : ' text-gray-500 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5'}
      onClick={switchTheme}
    >
      <img ref={darkModeToggle} title="Switch to Dark mode" src="/assets/dark.svg" alt="" id="light-theme-toggle" className="w-5 h-5"/>
      <img ref={lightModeToggle} title="Switch to Light mode" src="/assets/light.svg" alt="" id="dark-theme-toggle" className="w-5 h-5"/>
    </button>
  )
}

export default ThemeToggle