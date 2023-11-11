import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function SwitchThemeColor() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="transform rounded-full text-2xl text-white transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <BsFillMoonStarsFill className="transition-transform duration-200" />
      ) : (
        <BsFillSunFill className="transition-transform duration-200" />
      )}
    </button>
  );
}
