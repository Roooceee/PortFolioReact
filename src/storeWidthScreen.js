import { create } from 'zustand';

const useStoreWidthScreen = create((set , get)=> ({

   widthScreen : null ,

   handleWidthScreen : () => {
      
      const width = window.innerWidth
      set({widthScreen: width})

   }

}))


export default useStoreWidthScreen