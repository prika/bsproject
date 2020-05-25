<template>
  <div id="bstoneproject">
    
      <Preloader :class="{ isLoading }"></Preloader>
    
      <Header />

      <transition 
        enter-active-class="animated rubberBand"
        leave-active-class="animated rollOut">
      <router-view/>
      </transition>

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
          isLoading: Boolean
      }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    // console.log( "created:" + this.isLoading)
    // this.isLoading = false
    this.changeLoadingState()
  },
  watch: {
    // call again the method if the route changes
    //'$route': 'changeLoadingState'
  },
  methods: {
      changeLoadingState(){
          this.isLoading = true
          console.log( "changeLoadingState:" + this.isLoading)
      }
  }

}
</script>

<style lang="scss">
  @import './assets/styles/_bootstrap';
  //@import './assets/styles/_variables';
  @import './assets/styles/_custom';
  @import './assets/styles/_styles';
</style>