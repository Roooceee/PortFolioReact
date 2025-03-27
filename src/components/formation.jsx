import '../styles/formation.css'

function Formation({intitule , option , etablissement , debut , fin , obtention , competences} ){


   return(

      <div className='formation card'>
         <div className='head_formation'>
            <h3>{intitule}</h3>
            <p>{debut} à {fin}</p>
         </div>
         <p>{option}</p>
         <p>{etablissement}</p>
         {obtention != null ? <p>Diplome obtenue</p> : ''}
         {competences != null ? 
            <ul>
               {competences.map(element => {
                  return <li key={element}>{element}</li>
               })}
            </ul>
         : ''}
      </div>

   )

}

export default Formation