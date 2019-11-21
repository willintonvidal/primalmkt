import VueRouter from "vue-router";
import routes from "./routes";


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});




const isAuthenticated = function(){
  return window.localStorage.token
}


router.beforeEach((to, from, next) => {


  if (to.name === 'login' && isAuthenticated()) {
    console.log("Ya estas autenticado");
    return next({ name: 'dash' })
  }

  if(to.name === 'dash'  && !isAuthenticated()){
    console.log("No tienes acceso");
    return next({ name: 'login' })
  }

  if(to.name === 'ListarProductos'  && !isAuthenticated()){
    console.log("No tienes acceso");
    return next({ name: 'login' })
  }

  if(to.name === 'CrearProducto'  && !isAuthenticated()){
    console.log("No tienes acceso");
    return next({ name: 'login' })
  }

  if(to.name === 'inicio'  && isAuthenticated()){
    console.log("Ya estas autenticado!");
    return next({ name: 'dash' })
  }

  return next();
});


export default router;
