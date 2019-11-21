<template>
      <div class="container">
        <div class="row">
          <div v-for="p in productos"  class="col">
              <Producto :producto="p"></Producto>
          </div>
        </div>
      </div>
    
</template>
<script>
import api from "@/api";
import Producto from '../components/Producto/Producto.vue'

export default {
  name:'ListarProductos',
  components:{Producto},
  data(){
    return{
      productos:[]
    }
  },
    methods: {
        listaProductos(){
            api.listarProducto().then(res =>{
                console.log(res.data.data);
                this.productos = res.data.data;
            }).catch(err =>{

            })
        }       
    },
    created(){
        this.listaProductos();
    }
};
</script>
<style>
</style>
