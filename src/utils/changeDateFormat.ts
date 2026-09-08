export function changeDateFormat(
  pDate: string | number | Date,
  pFormatComplet: boolean,
  pshowDate: boolean
): string {
  const date = new Date(pDate);
  let dateMonth = date.getMonth();
  let dateDate: string | number = date.getDate();

  const monthText: string[] = [
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
    'Décembre',
  ];

  let dateFormatFR: string;

  if (pFormatComplet) {
    if (pshowDate) {
      dateDate = dateDate === 1 ? dateDate + 'er' : dateDate;
      dateFormatFR = `${dateDate} ${monthText[dateMonth]} ${date.getFullYear()}`;
    } else {
      dateFormatFR = `${monthText[dateMonth]} ${date.getFullYear()}`;
    }
  } else {
    let formattedMonth: number | string = dateMonth + 1;
    formattedMonth = formattedMonth < 10 ? '0' + formattedMonth : formattedMonth;
    
    let formattedDate: number | string = dateDate;
    formattedDate = formattedDate < 10 ? '0' + formattedDate : formattedDate;

    dateFormatFR = `${formattedDate}/${formattedMonth}/${date.getFullYear()}`;
  }

  return dateFormatFR;
}