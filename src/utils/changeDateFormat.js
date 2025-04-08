

export function changeDateFormat(pDate){

   let date = new Date(pDate)
   let dateMonth = date.getMonth()+1
   let dateDate = date.getDate()

   dateMonth = dateMonth >= 10 ? dateMonth : '0'+dateMonth
   dateDate = dateDate >= 10 ? dateDate : '0'+dateDate

   let dateFormatFR = `${dateDate}/${dateMonth}/${date.getFullYear()}`

   return dateFormatFR

}