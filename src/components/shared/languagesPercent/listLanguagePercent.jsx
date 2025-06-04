
function ListLanguagePercent({ListLanguagesWithPercent}){

   return (

      <ul className='flex flex-wrap gap-2'>
         {ListLanguagesWithPercent.map((objectLanguage)=> {
            return (
            <li key={objectLanguage.language} 
            className={`bg-[var(--color-bg-fourth)] text-xs text-[var(--color-text)] rounded-xl px-2 py-1 
            flex gap-1 items-center before:content-['●'] before:text-${(objectLanguage.language).toLowerCase()}`}>
               <span>{objectLanguage.language} <span className="numeric">{objectLanguage.percent}</span>%</span>
            </li>
            )
         })}
      </ul>

   )

}

export default ListLanguagePercent