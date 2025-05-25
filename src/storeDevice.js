import { create } from 'zustand';

const DEVICE_TYPE = ['desktop','tablet','mobile']

const useStoreDevice = create((set , get)=> ({

   device : null,


   handleDevice : () => {

      const width = window.innerWidth

      if(width > 1025){
         set({device : (DEVICE_TYPE[0])})
      }
      else if (width <= 1025 && width >= 768){
         set({device : (DEVICE_TYPE[1])})

      }
      else if (width < 768){
         set({device : (DEVICE_TYPE[2])})

      }

   }

}))


export default useStoreDevice