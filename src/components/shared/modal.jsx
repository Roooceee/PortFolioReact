import React from "react";

import ReactDOM from 'react-dom';
import '../../styles/shared/modal.css'
import {X} from 'lucide-react';

function Modal({isOpen,onClose,children,showButtonClose,title=null}){

   if(!isOpen){
      return null
   }


   return ReactDOM.createPortal(
      <div className='modal-outside' onClick={onClose}>
         <div className='modal card-principal' onClick={(e)=>e.stopPropagation()}>
            {title || showButtonClose ? 

               <div className='modal-head'>
                  {title?title:''}
                  {showButtonClose ? 
                        <button href="#" className='modal-close-button' onClick={onClose}><X size={18}/></button>
                        : ''
                     }
               </div>
            :''}
               <div className='modal-content'>
                  {children}
               </div>
         </div>
      </div>,
      document.querySelector('#modal-root')
   )

}

export default Modal