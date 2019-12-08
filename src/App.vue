<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-headerAdmin v-if="path.substr(0,6) === '/admin'"/>
    <router-header v-else/>
    <router-view/>
    <router-footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HeaderAdmin from './components/HeaderAdmin.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'router-header': Header,
    'router-headerAdmin': HeaderAdmin,
    'router-footer': Footer
  },
  data () {
    return {
      path: this.$route.fullPath
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
