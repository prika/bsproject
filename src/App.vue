<template>
  <div id="bstoneproject"> <!--:class="$route.name"-->
  
      <Preloader :class="{isLoaded}"></Preloader>
      
      <Header />

      <router-view />

      <Address v-show="!(['news', 'newsdetail', 'product', 'productdetail', 'shoppingcart'].indexOf($route.name) > -1)" />

      <Contacts v-show="!(['news', 'newsdetail', 'product', 'productdetail', 'shoppingcart'].indexOf($route.name) > -1)" />

      <Footer v-show="!(['product', 'productdetail', 'shoppingcart'].indexOf($route.name) > -1)" />
  </div>
</template>

<script>
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer.vue'

export default {
  name: 'bstoneproject',
  components: {
      Header,
      Preloader,
      Address,
      Contacts,
      Footer
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