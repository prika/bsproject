<template>
  <div id="blocobpage" class="pageContainer">

      <Scroll />

      <ProductsList />
      
      <Address />

      <Contacts />

  </div>
</template>

<script>
import Scroll from '../components/subcomponents/scroll'
import ProductsList from '@/components/ProductsList'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'
import axios from 'axios'

export default {
  name: 'blocobpage',
  components: {
      Scroll,
      ProductsList,
      Address,
      Contacts  
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