<template>
  <div id="bstoneproject">
  
      <Preloader :class="{isLoaded}"></Preloader>
      
      <Header />

      <router-view />
     
  </div>
</template>

<script>
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'

export default {
  name: 'bstoneproject',
  components: {
      Header,
      Preloader
  },
  data() {
      return {
          isLoaded: false
      }
  },
  beforeMount(){
      this.$http.get('../mocks/global-mock.json').then(response => {
          this.$eventBus.$emit('jsonGlobalLoaded', response);
      })
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