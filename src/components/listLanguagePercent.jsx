
import '../styles/listLanguage.css'

function ListLanguagePercent({listLanguagesPercent}){

   return (

      <ul>
         {listLanguagesPercent.map((language)=> {
            return (
            <li key={language.language} className={language.language+'_before '+' list-style-none'}>
               <span>{language.language}</span> <span className="percent">{language.percentLanguage}%</span>
            </li>
            )
         })}
      </ul>

   )

}

export default ListLanguagePercent