

export function calculPercentLanguages(listLanguages){

   let totalLanguages = 0;
   let ListLanguagesPercent = []
   
   Object.values(listLanguages).forEach((languageValue) => {
      totalLanguages += languageValue;
   });

   Object.keys(listLanguages).forEach((language , index)=> {
      const percentLanguage = Math.round(Object.values(listLanguages)[index]/totalLanguages*100)
      ListLanguagesPercent.push({language,percentLanguage})
   })
   
   return ListLanguagesPercent

}