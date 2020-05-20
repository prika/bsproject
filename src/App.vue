<template>
  <div id="bstoneproject">

      <Header />
      
      <router-view/>

      <Footer />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'bstoneproject',
  components: {
      Header,
      Footer
  }
}
</script>

<style lang="scss">
 
  @import './assets/styles/_bootstrap';
  //@import './assets/styles/_variables';
  @import './assets/styles/_custom';
  @import './assets/styles/_styles';

</style>