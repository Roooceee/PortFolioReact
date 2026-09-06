import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import useStoreBurgerMenu from '../../storeBurgerMenu'

function ChangeTheme(){

   const {isOpen} = useStoreBurgerMenu()

   const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

   function toggleTheme(e){
      e.preventDefault()
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme',newTheme)
   }

   useEffect(()=>{
      document.documentElement.setAttribute("data-theme", theme);
   },[theme])

   return (
      <div className="change-theme flex flex-col text-center items-center gap-2.5">
         {isOpen &&(
            <p>Changer de thème :</p>
         )}
         <a className={`max-w-fit margin-auto hover:blue-secondary text-[var(--color-text)] hover:text-blue-secondary`} href="#" onClick={(e) => toggleTheme(e)}>{theme==='dark' ? <Moon/> : <Sun/>}</a>
      </div>
   )
}

export default ChangeTheme