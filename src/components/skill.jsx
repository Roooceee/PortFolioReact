import '../styles/skill.css'

function Skill({title,list}){

   return (

      <article className='skill'>
         <h3>{title}</h3>
         <ul>
            {list.map(element => {
            return <li key={element}>{element}</li> 
            })}
         </ul>
      </article>

   )

}

export default Skill