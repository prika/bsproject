<template>
  <div id="blocobpage" class="pageContainer">

      <Scroll />

      <ProductsList />
      
  </div>
</template>

<script>
import Scroll from '../components/subcomponents/scroll'
import ProductsList from '@/components/ProductsList'
import axios from 'axios'

export default {
  name: 'blocobpage',
  components: {
      Scroll,
      ProductsList
  },
  data(){
    return {
        hasFeaturedProducts: false
    }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}
</script>