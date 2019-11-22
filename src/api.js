import trae from 'trae';
const axios = require('axios');

const tokenAxios = window.localStorage.token;




trae.baseUrl('http://pruebas.primalmkt.com');

trae.before((config) => {
    const token = window.localStorage.token
  
    if (token) {
      config.headers['Authorization'] = 'Bearer '+token
    }
  
    return config
  })

const api = {}

api.authenticate = function(username,password){
    return trae.post('/api/v1/login',{username,password})
    .then(res => res)
    .catch(err => console.log('[ERROR]', err))
}

api.crearProducto = function(formData){
    
  return trae.post('/api/v1/dashboard/producto/crear',formData, {
    headers: {
      'Content-Type': ''
    }
  })
  .then(res => res)
  .catch(err => console.log('[ERROR]', err))
}

api.listarProducto = function(){
    return trae.get('/api/v1/dashboard/producto/listar')
    .then(res => res)
    .catch(err => console.log('[ERROR]',err))
}


//axios
/*
api.axiosListarProductos = function(){
  console.log("Entra a la accion axios");
  return instance.get('/api/v1/dashboard/producto/listar')
  .then(response => {
       response,
       console.log("---"+response.data);
  }).catch(err =>{console.log("error :"+err)}) 
}

*/

const instance = axios.create({
  baseURL: 'http://pruebas.primalmkt.com'
});
instance.defaults.headers.common['Authorization'] ='Bearer '+tokenAxios
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

api.axiosListarProductos = function(){
  console.log("Entra a la accion axios");
  return instance.get('/api/v1/dashboard/producto/listar')
  .then(res => { 
        return JSON.stringify(res.data,null,2)
  }).catch(err =>{console.log("error :"+err)}) 
}

api.axiosCrearProducto = function(formData){
  console.log("Entra a la accion axios");
  return instance.post('/api/v1/dashboard/producto/crear',formData)
  .then(res => { 
        return console.log(res);
  }).catch(err =>{console.log("error :"+err)}) 
}


export default api