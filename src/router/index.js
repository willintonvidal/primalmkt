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


/*
const router = new Router({routes});

const isAuthenticated = function(){
  return window.localStorage.token
}


router.beforeEach((to, from, next) => {


  if (to.name === '/login' && isAuthenticated()) {
    console.log("Ya estas autenticado");
    return next({ name: 'dash' })
  }

  if(to.name === '/dash'  && !isAuthenticated()){
    console.log("No tienes acceso");
    return next({ name: 'login' })
  }


  return next();
});

*/
export default router;
