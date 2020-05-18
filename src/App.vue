<template>
  <div id="app">
    
    <Header />
    
    <div class="container">
        <h1 class="pageTitle">Notí<span>cias</span></h1>
        <h1>Welcome to Your Vue.js App</h1>
        <h2>Welcome to Your Vue.js App</h2>
        <h3>Welcome to Your Vue.js App</h3>

        <p>Welcome to Your Vue.js App</p>

        <p class="h1">Welcome to Your Vue.js App</p>
        <p class="h2">Welcome to Your Vue.js App</p>
        <p class="h3">Welcome to Your Vue.js App</p>

        <h1 class="display-1">Welcome to Your Vue.js App</h1>
        <h1 class="display-2">Welcome to Your Vue.js App</h1>
        <h1 class="display-3">Welcome to Your Vue.js App</h1>
    </div>
    
    <Footer />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
      Header,
      Footer
  }
}
</script>

<style lang="scss">
@import './assets/styles/_custom';
@import './assets/styles/_variables';

body{
  background-color: #F0F0F0;
  margin-top: 180px;
}
</style>