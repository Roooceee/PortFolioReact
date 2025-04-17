import '../styles/apropos.css'
import React, { forwardRef } from "react";

function APropos({id},ref) {
      
      return (
         <section id='apropos'>      
            <div>
                  <img src="/img/image_profil_SL.webp" alt="image de profil" />
               <div>
                  <h2 ref={ref} className='title-section'>A Propos</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem corrupti eos voluptatibus eum fugit nam possimus adipisci sed eaque exercitationem et, fugiat excepturi expedita dicta aperiam delectus doloribus earum.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem corrupti eos voluptatibus eum fugit nam possimus adipisci sed eaque exercitationem et, fugiat excepturi expedita dicta aperiam delectus doloribus earum.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem corrupti eos voluptatibus eum fugit nam possimus adipisci sed eaque exercitationem et, fugiat excepturi expedita dicta aperiam delectus doloribus earum.</p>
               </div>
            </div>
         </section>
    )

}

 
 export default forwardRef(APropos)