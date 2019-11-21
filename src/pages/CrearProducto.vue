<template>
   <div> <h1>Producto</h1>
    <form>
      <div class="form-row">
        <base-input class="col-md-6" type="text" label="Nombre del producto" placeholder="Nombre del producto" v-model="nombre_producto"/>
        <base-input class="col-md-6" type="number" label="Precio que fue adquirido" placeholder="Precio que fue adquirido" v-model="precio_adquirido"/>
      </div>
      <base-input type="number" label="Precio de venta al público" placeholder="Precio de venta al público" v-model="precio_venta_publico"/>
      <base-input type="number" label="Cantidad de unidades disponibles" placeholder="Cantidad de unidades disponibles" v-model="cantidad_unidades_disponibles"/>
      <div class="form-row">
        <base-input class="col-md-6" label="Breve descripción del contenido del producto" placeholder="Breve descripción del contenido del producto" v-model="breve_descripcion_contenido"/>
        <base-input class="col-md-2" label="Ingredientes" placeholder="Ingredientes" v-model="ingredientes"/>
      </div>
      <div class="form">
        <h3>Titulo</h3>
        <base-input class="col-md-6" label="Titulo de la descripción" placeholder="Titulo de la descripción" v-model="titulo_descripcion"/>
        <base-input class="col-md-6" label="Contenido" placeholder="Contenido" v-model="contenido"/>
        <base-input class="col-md-6" label="Ubicación" placeholder="Ubicación" v-model="ubicacion"/>
      </div>
      <base-input type="text" label="Descripción del producto" placeholder="Descripción del producto" v-model="descripcion_producto"/>
      <base-input type="text" label="Tags" placeholder="Tags" v-model="tags"/>

      <div class="form-row">
        <base-input class="col-md-6" type="number" label="Id del proveedor" placeholder="Id del proveedor" v-model="id_proveedor"/>
        <base-input class="col-md-6" type="number" label="Id de la marca que pertenece el producto" placeholder="Id de la marca que pertenece el producto" v-model="id_marca_producto"/>
        <base-input class="col-md-6" type="number" label="Categoria a la que pertenece el producto" placeholder="Categoria a la que pertenece el producto" v-model="categoria_producto"/>
      </div>

      <base-button type="primary" native-type="Submit">Agregar Producto</base-button>
    </form>
  </div>
</template>
<script>
import api from "@/api";

export default {
    data(){
        return{
            nombre_producto:"",
            precio_adquirido:"",
            precio_venta_publico:"",
            cantidad_unidades_disponibles:"",
            breve_descripcion_contenido:"",
            ingredientes:"",

            titulo_descripcion:"",
            contenido:"",
            ubicacion:"",
            descripcion_producto:"",
            tags:[],
            id_proveedor:"",
            id_marca_producto:"",
            categoria_producto:""
        }
    },
    methods: {
               
    },
    created(){
        
    }
};
</script>
<style>
</style>
