import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',

    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/coordinador',
    name: 'Coordinador',
    component: () => import(/* webpackChunkName: "coordinador" */ '../views/Coordinador.vue'),
    meta: {
      requireAuth: true /*metadata indicada para proteger rutas*/
    }
  },
  {
    path: '/subadmin1',
    name: 'SubAdmin1',
    component: () => import(/* webpackChunkName: "subadmin1" */ '../views/SubAdmin1.vue'),
    meta: {
      requireAuth: true /*metadata indicada para proteger rutas*/
    }
  },
  {
    path: '/subadmin2',
    name: 'SubAdmin2',
    component: () => import(/* webpackChunkName: "subadmin2" */ '../views/SubAdmin2.vue'),
    meta: {
      requireAuth: true /*metadata indicada para proteger rutas*/
    }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// esta funcion se ejecuta antes del obj router para hacer validaciones
router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta => ruta.meta.requireAuth)) {
    const user = firebase.auth().currentUser; //usuario actual SI EXISTE
    if (user) {
      next();
    } else {
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
});

export default router
