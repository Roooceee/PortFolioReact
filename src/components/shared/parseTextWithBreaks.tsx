interface ParseTextWithBreaksProps {
  text: string;
}

export const ParseTextWithBreaks = (props: ParseTextWithBreaksProps) => {
  const {text} = props;

  return text.split(/(?<=[.!?:])\s+/).map((phrase, index) => {
    return (
      <span key={index}>
        {phrase}
        <br></br>
        <br></br>
      </span>
    );
  });
};

export default ParseTextWithBreaks;
