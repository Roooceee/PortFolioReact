function ParseTextWithBreaks({text}){

   return (
         text.split(/(?<=[.!?:])\s+/).map((phrase,index) =>{
            return <span key={index}>{phrase}<br></br><br></br></span>
         })
   )
}

export default ParseTextWithBreaks