

export function calculPercentLanguages(listLanguages){

   let totalLanguages = 0;
   let ListLanguagesWithPercent = []
   
   Object.values(listLanguages).forEach((languageValue) => {
      totalLanguages += languageValue;
   });

   Object.keys(listLanguages).forEach((language , index)=> {
      const percent = Math.round(Object.values(listLanguages)[index]/totalLanguages*100)
      ListLanguagesWithPercent.push({language,percent})
   })
   
   return ListLanguagesWithPercent

}