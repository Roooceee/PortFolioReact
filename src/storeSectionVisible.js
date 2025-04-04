import {create} from 'zustand';

const useStoreSectionVisible = create ((set)=> ({

   activeSection : null ,
   setActiveSection : (id) => set ({activeSection : id}), // Fonction permettant de changer la section active,

}));

export default useStoreSectionVisible