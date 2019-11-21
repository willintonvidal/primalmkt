import trae from 'trae';

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

api.listarProducto = function(){
    return trae.get('/api/v1/dashboard/producto/listar')
    .then(res => res)
    .catch(err => console.log('[ERROR]',err))
}


export default api