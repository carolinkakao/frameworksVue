
//state
export const state = ()=>({
arregloPersonajes: []
});
//getters

//mutations
export const mutations={
    agregarData(state,payload){
       state.arregloPersonajes=payload;
    }
    
};
//actions
export const actions={
    
    async getData({commit}){
      const url = "https://rickandmortyapi.com/api/character"
      try{
          const datos= await this.$axios.$get(url)
          const arreglo=datos.results;
          console.log(arreglo);
          commit("agregarData",arreglo);
      }catch(error){
          console.log(error);
      }
     
    }
}

