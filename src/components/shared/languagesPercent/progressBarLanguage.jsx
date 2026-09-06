function ProgressBarLanguage({ListLanguagesWithPercent}){

   return (
      <span className="rounded-[5px] flex h-2 overflow-hidden my-5">
         {ListLanguagesWithPercent.map((objectLanguage)=> {
            return <span key={objectLanguage.language} className={`bg-${(objectLanguage.language).toLowerCase()}`} style={{ width: objectLanguage.percent+'%'}}></span>
         })}
      </span>
   )

}

export default ProgressBarLanguage