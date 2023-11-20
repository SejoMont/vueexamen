import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CubosMarca from "./components/CubosMarca.vue"
import ComentariosCubo from "./components/ComentariosCubo.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"
import PerfilComponent from "./components/PerfilComponent.vue"
import ComprasComponent from "./components/ComprasComponent.vue"

const myRoutes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/marca/:marca",
    component: CubosMarca,
  },
  {
    path: "/comentarios/:idcubo",
    component: ComentariosCubo,
  },
  {
    path: "/login",
    component: LoginComponent,
  },
  {
    path: "/register",
    component: RegisterComponent,
  },
  {
    path: "/perfil",
    component: PerfilComponent,
  },
  {
    path: "/compras",
    component: ComprasComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
