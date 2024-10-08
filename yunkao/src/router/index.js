import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue'; 
import WareHouse from '../components/WareHouse.vue'; 

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/wareHouse',
      name: 'wareHouse',
      component: wareHouse,
    },
  ],
});