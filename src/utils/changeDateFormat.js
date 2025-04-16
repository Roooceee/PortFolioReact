

export function changeDateFormat(pDate , pFormatComplet , pshowDate){

   let date = new Date(pDate)
   let dateMonth = date.getMonth()
   let dateDate = date.getDate()

   const monthText = [
      'Janvier',
      'Fevrier',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Aout',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ];

   let dateFormatFR
    
    if(pFormatComplet){
      if(pshowDate){
         dateDate = dateDate === 1 ? dateDate+'er' : dateDate
         dateFormatFR = `${dateDate} ${monthText[dateMonth]} ${date.getFullYear()}`
      }
      else {
         dateFormatFR = `${monthText[dateMonth]} ${date.getFullYear()}`
      }
   }
   else {
      dateMonth+=1
      dateMonth = dateMonth < 10 ? '0'+dateMonth : dateMonth
      dateDate = dateDate < 10 ? '0'+dateDate : dateDate
      dateFormatFR = `${dateDate}/${dateMonth}/${date.getFullYear()}`
   }
   
   return dateFormatFR

}