<template>
  <v-container>
     <!-- row para generar filas igual que en bootstrap -->
    <v-layout row v-if="arregloPersonajes">
      <!-- Comienzo card -->
      <v-col cols="12" sm="4" md="3" v-for="(ciclo, index) in arregloPersonajes" :key="index">
        <v-card class="mx-auto ma-4" max-width="250">
          <v-img :src="ciclo.image" height="200px"></v-img>

          <v-card-title>
            {{ ciclo.name }}
          </v-card-title>
        </v-card>
      </v-col>
      <!-- Término card -->
    </v-layout>
  </v-container>
</template>
<script>
import{mapState,mapMutations,mapActions} from "vuex";

export default {
  computed: {
...mapState(["arregloPersonajes"])
  },
  methods:{
    ...mapActions(["getData"]),
    ...mapMutations(["agregarData"])
  },
  created(){
    this.getData();
  }
}
</script>
