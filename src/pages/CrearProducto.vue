<template>



<form-wizard @on-complete="onComplete" error-color="#ff4949">
     <tab-content title="Datos del producto" icon="tim-icons icon-single-02">
       <div class="form-row">
         <ValidationProvider name="nombre" rules="required" class="col-md-12">
              <div slot-scope="{ errors }">
                  <base-input  type="text" label="Nombre del producto" placeholder="Nombre del producto" v-model="nombre"/>
                  <p>{{ errors[0] }}</p>
              </div>
        </ValidationProvider>
      </div>
      <div class="form-row">
        <base-input class="col-md-4" label="Titulo de la descripción" placeholder="Titulo de la descripción" v-model="descripcion_titulo"/>
        <base-input class="col-md-4" label="Descripción contenido" placeholder="Descripción contenido" v-model="descripcion_contenido"/>
        <base-input class="col-md-4" label="Ubicación" placeholder="Ubicación" v-model="descripcion_ubicacion"/>
      </div>
      <div class="form-row">
          <base-input class="col-md-6" label="Contenido" placeholder="Contenido" v-model="contenido"/>
          <base-input class="col-md-6" label="Ingredientes" placeholder="Ingredientes" v-model="ingredientes"/>
      </div>
     </tab-content>

     <tab-content title="Precios.." icon="tim-icons icon-pin">
        <div class="form-row">
              <base-input class="col-md-4" type="number" label="Cantidad de unid disponibles" placeholder="Cantidad de unidades disponibles" v-model="stock"/>
              <base-input class="col-md-4" type="number" label="Precio de venta al público" placeholder="Precio de venta al público" v-model="precio_publico"/>
              <base-input class="col-md-4" type="number" label="Precio que fue adquirido" placeholder="Precio que fue adquirido" v-model="precio_base"/>
        </div>
        <div class="form-row">
              <base-input class="col-md-4" type="number" label="Marca Id" placeholder="Marca Id" v-model="marca_id"/>
              <base-input class="col-md-4" type="number" label="Id del proveedor" placeholder="Id del proveedor" v-model="proveedor_id"/>
              <base-input class="col-md-4" type="number" label="Id de la categoria" placeholder="Id de la categoria" v-model="categoria_id"/>
        </div>
        <div class="form-row">
            <base-input class="col-md-12" type="text" label="Tags" placeholder="Tags" v-model="tags"/>
            <base-input class="col-md-12" type="text" label="Sub Categorias" placeholder="Sub Categorias" v-model="sub_categorias"/>
        </div>
      
     </tab-content>
     <tab-content title="Sección imagenes" icon="tim-icons icon-world">
      
           <h3>Las primera imagen que selecciones sera la imagen principal del producto</h3>
           <input class="form-control" type="file" @change="obtenerImagenPrincipal" multiple="multiple"/>
           <div class="form-row">
              <div v-for="(img,i) in this.arrayImage" class="col-md-3">       
                      
                      <img style="max-width:100%" alt="Foto del producto" :src="img" class="img-thumbnail col-md-2"/>
              </div>
          </div>
      
     </tab-content>

 </form-wizard>


</template>
<script>
import api from "@/api";
import toastr from "toastr";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Este campo es requerido..'
});

export default {
    components: {
  FormWizard,
  TabContent,
  ValidationProvider
},
props:{
  subtitle: {
        type: String,
        default: 'Agregando un producto a la plataforma'
      }
},
    data(){
        return{

                nombre:"",
                descripcion_titulo:"",
                descripcion_contenido:"",
                descripcion_ubicacion:"",
                contenido:"",
                ingredientes:"",
                stock:0,
                precio_publico:0,
                precio_base:0,
                marca_id:0,
                proveedor_id:0,
                categoria_id:0,
                tags:"",
                sub_categorias:0,
            imagenMiniatura:'',
            imagenes:null,
            imagen_principal:null,
            arrayImage:[]       
        }
        
    },
    methods: {
          onComplete: function(){
          
          let formData = new FormData();
          formData.append('nombre',this.nombre);
          formData.append('descripcion[0][titulo]',this.descripcion_titulo);
          formData.append('descripcion[0][ubicacion]',this.descripcion_ubicacion);
          formData.append('descripcion[0][contenido]',this.descripcion_contenido);
          formData.append('contenido',this.contenido);
          formData.append('ingredientes',this.ingredientes);
          formData.append('stock',this.stock);
          formData.append('precio_publico',this.precio_publico);
          formData.append('precio_base',this.precio_base);
          formData.append('marca_id',this.marca_id);
          formData.append('proveedor_id',this.proveedor_id);
          formData.append('categoria_id',this.categoria_id);
          formData.append('tags[0]',this.tags);
          formData.append('sub_categorias[1]',this.sub_categorias);
          
          formData.append('imagen_principal',this.imagen_principal);

          for(var i =1;i<this.imagenes.length;i++){
              formData.append(`imagenes[${i-1}]` ,this.imagenes[i]);   
          }

          api.axiosCrearProducto(formData).then(res =>{
                toastr.success("Se creo correctamente el producto!");
                console.log(res);
            }).catch(err =>{
            })
       },
       obtenerImagenPrincipal(e){
         let file = e.target.files
         this.imagenes = file;
         this.imagen_principal = file[0]; 
         this.cargarImagenPrincipal(file);
       },
       cargarImagenPrincipal(file){

         for(var i=0;i<file.length;i++){
              let reader = new FileReader();
              reader.onload = (e) =>{
                  this.imagenMiniatura = e.target.result
                  this.arrayImage.push(e.target.result);
                  
              }
              reader.readAsDataURL(file[i]);
         }
       },
       prueba(){
         console.log(this.arrayImage);
       }
  
    },
    computed:{
      imagen(){
        
        return this.imagenMiniatura;
      }
    },
    created(){
        
    }
};
</script>
<style>
</style>
