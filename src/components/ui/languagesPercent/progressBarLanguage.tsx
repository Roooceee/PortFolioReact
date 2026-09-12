interface ListLanguagePercentProps {
  listLanguagesWithPercent: {language: string; percent: number}[];
}

const ProgressBarLanguage = (props: ListLanguagePercentProps) => {
  const {listLanguagesWithPercent} = props;

  return (
    <span className="rounded-[5px] flex h-2 overflow-hidden my-5">
      {listLanguagesWithPercent.map((objectLanguage) => {
        return (
          <span
            key={objectLanguage.language}
            className={`bg-${objectLanguage.language.toLowerCase()}`}
            style={{width: objectLanguage.percent + '%'}}></span>
        );
      })}
    </span>
  );
};

export default ProgressBarLanguage;
