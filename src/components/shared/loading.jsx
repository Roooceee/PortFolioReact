import { useEffect, useState } from 'react'
import '../../styles/shared/loading.css'

function Loading({textLoading}){

   const [loadingDots,setLoadingDots] = useState('')

   useEffect(()=>{

      setTimeout(()=>{

         if(loadingDots.length<3){
            setLoadingDots(loadingDots+'.')
         }
         else {
            setLoadingDots('')
         }
      
      },500)


   },[loadingDots])

   return (
      <div className="loading">
         <span className="loader"></span>
         {textLoading ? 
            <p>{textLoading}<span className='loading-dots'>{loadingDots}</span></p>
         : ''}
      </div>
   )
}

export default Loading