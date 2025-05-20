import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import '../../styles/shared/changeTheme.css'
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
      <div className="change-theme">
         {isOpen && (
            <p>Changement de thème :</p>
         )}
         <a className={`change-theme-button ${theme}`} href="#" onClick={(e) => toggleTheme(e)}>{theme==='dark' ? <Moon/> : <Sun/>}</a>
      </div>
   )
}

export default ChangeTheme