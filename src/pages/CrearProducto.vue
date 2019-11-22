<template>



<form-wizard @on-complete="onComplete">
     <tab-content title="Datos del producto" icon="tim-icons icon-single-02">
       <div class="form-row">
        <base-input class="col-md-12" type="text" label="Nombre del producto" placeholder="Nombre del producto" v-model="nombre"/>
        
      </div>
      <div class="form-row">
        <base-input class="col-md-4" label="Titulo de la descripción" placeholder="Titulo de la descripción" v-model="descripcion_titulo"/>
        <base-input class="col-md-4" label="Contenido" placeholder="Contenido" v-model="descripcion_contenido"/>
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
      <div class="form-row">
        <div class="col-md-12">
           <label>Seleccionar imagen principal</label>
           <input class="form-control" type="file" @change="obtenerImagenPrincipal"/>
           <img width="200" height="200" alt="Foto del producto" :src="imagen"/>
        </div>
        <div class="col-md-12">
           <label>Seleccionar imagen </label>
           <input class="form-control" type="file" @change="obtenerImagenes"/>
        </div>
      </div>
     </tab-content>
 </form-wizard>


</template>
<script>
import api from "@/api";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


export default {
    components: {
  FormWizard,
  TabContent
},
props:{
  subtitle: {
        type: String,
        default: 'Agregando un producto a la plataforma'
      }
},
    data(){
        return{
            imagenMiniatura:'',
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
            imagenes:null,
            imagen_principal:null,            
        }
        
    },
    methods: {
          onComplete: function(){
          alert('Yay. Done!');
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
          formData.append('imagenes[1]',this.imagen_principal);
          formData.append('imagen_principal',this.imagen_principal);

          api.axiosCrearProducto(formData).then(res =>{
                console.log(res);
                
            }).catch(err =>{
            })
       },
       obtenerImagenPrincipal(e){
         let file = e.target.files[0]
         this.imagen_principal = file;
         
         this.cargarImagenPrincipal(file);
       },
       obtenerImagenes(e){
         let file = e.target.files
         console.log(file);
         this.imagenes = file;
       },
       cargarImagenPrincipal(file){
         let reader = new FileReader();
         reader.onload = (e) =>{
            this.imagenMiniatura = e.target.result
         }
         reader.readAsDataURL(file);
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
