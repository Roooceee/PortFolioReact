import { useEffect, useState } from 'react'
import '../loading/loading.css'

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
      <div className="flex flex-col justify-center gap-4 max-h-[90px]">
         <span className="loader"></span>
         {textLoading ? 
            <p className='text-center relative'>{textLoading}<span className='loading-dots absolute -top-[15px] font-numeric text-2xl text-blue-primary'>{loadingDots}</span></p>
         : ''}
      </div>
   )
}

export default Loading