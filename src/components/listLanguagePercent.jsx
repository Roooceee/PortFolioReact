
import '../styles/listLanguage.css'

function ListLanguagePercent({listLanguagesPercent}){

   return (

      <ul>
         {listLanguagesPercent.map((language)=> {
            return (
            <li key={language.language} className={language.language+'_before '+'badge'}>
               <span>{language.language} <span className="numeric">{language.percentLanguage}</span>%</span>
            </li>
            )
         })}
      </ul>

   )

}

export default ListLanguagePercent