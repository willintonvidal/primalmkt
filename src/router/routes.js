import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const ListarProductos = () => import(/* webpackChunkName: "common" */ "@/pages/ListarProductos.vue");
const CrearProducto = () => import(/* webpackChunkName: "common" */ "@/pages/CrearProducto.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const Login = () => import(/* webpackChunkName: "common" */ "@/pages/Profile/Login.vue");

const routes = [
  {
    path: "/login",
    component: Login,
    name:"login",
    meta:{isPublic:true}
  },{
    path:"/",
    component:Login,
    name:"inicio"
  },
  {
    path: "/dash",
    name: "dash",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile
      },
      {
        path: "/notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "/producto/listar",
        name: "ListarProductos",
        component: ListarProductos
      },
      {
        path: "/producto/crear",
        name: "CrearProducto",
        component: CrearProducto
      },
      {
        path: "/typography",
        name: "typography",
        component: Typography
      },
      {
        path: "/table-list",
        name: "table-list",
        component: TableList
      }
    ]
  }
];



/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
