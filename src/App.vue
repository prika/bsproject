<template>
  <div id="bstoneproject">
  
      <Preloader :class="{isLoaded}"></Preloader>
      

      <router-view />
     
      <Footer />
      
  </div>
</template>

<script>
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'bstoneproject',
  components: {
      Header,
      Footer,
      Preloader
  },
  data() {
      return {
          isLoaded: false
      }
  },
  created() {
    this.$eventBus.$on('componentFinishLoad', (data) => {
      this.isLoaded = true;
    });
  }
}
</script>

<style lang="scss">
  @import './assets/styles/_bootstrap';
  //@import './assets/styles/_variables';
  @import './assets/styles/_custom';
  @import './assets/styles/_styles';
</style>