<template>
  <div id="app">
    <Login />
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Login

  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}
</style>