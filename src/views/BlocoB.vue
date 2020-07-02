<template>
  <div id="blocobpage" class="pageContainer">

      <Scroll />

      <ProductsList />
      
      <Address />

      <Contacts />

      <Footer />

  </div>
</template>

<script>
import Scroll from '../components/subcomponents/scroll'
import ProductsList from '@/components/ProductsList'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'
import axios from 'axios'
import Footer from '@/components/Footer.vue'

export default {
  name: 'blocobpage',
  components: {
      Scroll,
      ProductsList,
      Address,
      Contacts,
      Footer 
  },
  data(){
    return {
        hasFeaturedProducts: false,
        productsPerPage: 12
    }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}
</script>