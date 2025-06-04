import ReactDOM from 'react-dom';
import {X} from 'lucide-react';

function Modal({isOpen,onClose,children,showButtonClose,title=null}){

   if(!isOpen){
      return null
   }


   return ReactDOM.createPortal(
      <div className='fixed inset-0 bg-[var(--background-semi-transparent)] flex justify-center items-center z-50' onClick={onClose}>
         <div className='card-principal relative flex flex-col gap-8 max-h-[90svh] overflow-y-auto min-w-[200px] max-w-[75%] p-4 rounded-md' onClick={(e)=>e.stopPropagation()}>
            {title || showButtonClose ? 

               <div className='flex items-start justify-between'>
                  {title?title:''}
                  {showButtonClose ? 
                        <button href="#" className='text-[var(--color-text)] p-0 max-w-fit max-h-fit border-none' onClick={onClose}><X size={18}/></button>
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