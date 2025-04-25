import '../../../styles/shared/languagesPercent/progressBarLanguage.css'

function ProgressBarLanguage({ListLanguagesPercent}){


   return (
      <span className="progress-bar">
         {ListLanguagesPercent.map((language)=> {
            return (
               <span key={language.language} className={language.language+'_progress'} style={{ width: language.percentLanguage+'%'}}></span>
            )
         })}
      </span>
   )

}

export default ProgressBarLanguage