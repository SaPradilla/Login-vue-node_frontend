import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // Ruta protegida
    meta: {requireAuth: true}
  },
  {
    path:'/register',
    name:'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// Validación para las rutas protegidas
router.beforeEach((to, from, next) => {
  //Busca si la la ruta protegida tiene un meta requeriAuth = true y retorna false o true
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);
  // Si la ruta es protegida y si el token en el state es null, querra decir que no existe o sea true
  if(rutaProtegida && store.state.token === null){
      // ruta protegida es true
      // token es nulo true, por ende redirigimos al inicio
      next('/')
  }else{
      // En caso contrario sigue a la ruta protegida
      next()
  }

})

export default router