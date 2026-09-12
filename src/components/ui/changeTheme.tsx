import {Moon, Sun} from 'lucide-react';
import {useEffect, useState} from 'react';
import {boolean} from 'zod';

interface ChangeThemeProps {
  isBurgerMenuOpen: boolean;
}

export const ChangeTheme = (props: ChangeThemeProps) => {
  const {isBurgerMenuOpen} = props;
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="change-theme flex flex-col text-center items-center gap-2.5">
      {isBurgerMenuOpen && <p>Changer de thème :</p>}
      <a
        className={`max-w-fit margin-auto hover:blue-secondary text-[var(--color-text)] hover:text-blue-secondary`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleTheme();
        }}>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </a>
    </div>
  );
};
