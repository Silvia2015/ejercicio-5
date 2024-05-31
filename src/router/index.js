import Vue from 'vue'
import Router from 'vue-router'
import Portada from '../components/Portada.vue'
import SobreMi from '../components/SobreMi.vue'
import Contacto from '../components/Contacto.vue'
import UltimoPost from '../components/Ultimopost.vue'
import RutasInexistentes from '../components/RutasInexistentes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Portada',
      component: Portada
    },
    {
      path: '/sobre-mi',
      name: 'SobreMi',
      component: SobreMi
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/ultimo-post',
      name: 'UltimoPost',
      component: UltimoPost
    },
    {
      path: '*',
      name: 'RutasInexistentes',
      component: RutasInexistentes
    }
  ]
})