
export async function getDatas(url , token = null){

   try {
      
      let req

      if(token){
         req = await fetch(url,{ 
            headers:{
               Authorization: `token ${token}`,
            }
         })
      }
      else {
         req = await fetch(url)
      }

      if(req.ok){
         const res = await req.json()
         return res
      }
      else {
         console.error(`Erreur HTTP: ${req.status} ${req.statusText}`);
         return null
      }
   }
   catch(e){
      console.error('Erreur lors du fetch : '+e)
      return null
   }

}