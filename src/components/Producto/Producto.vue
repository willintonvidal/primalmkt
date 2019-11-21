<template>
  <div class="col">
      <card style="width: 13rem;">
        <img slot="image" class="card-img-top" :src="producto.imagen_principal.ruta" alt="Card image cap"/>
        <h3 class="card-title">{{producto.nombre}}</h3>
        <h4 class="card-title">{{producto.estado}}</h4>
        <p class="card-text">Productos existentes: {{producto.stock}}</p>
        <a href="#" class="btn btn-primary">{{producto.precio_base}}</a>
      </card>
  </div>
</template>
<script>
  import { FadeTransition } from 'vue2-transitions';

  export default {
    name: 'Producto',
    components: {
      FadeTransition
    },
    props: {
        producto:{type:Object,required:true}
    },
    data() {
      return {
        visible: true
      }
    },
    methods: {
      
    }
  }
</script>
