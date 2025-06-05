import { create } from 'zustand';

const useStoreBurgerMenu = create((set)=>({

   isOpen: false,

   toggleMenu: () => set((state) => ({
      isOpen : !state.isOpen
   })),

   openMenu:() => set((state)=> ({
      isOpen:true
   })),

   closeMenu: () => set((state) => ({
      isOpen:false
   }))

}))

export default useStoreBurgerMenu;