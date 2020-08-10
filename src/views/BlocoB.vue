<template>
  <div id="blocobpage" class="pageContainer">

      <ProductsList />
      
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList'

export default {
  name: 'blocobpage',
  components: {
      ProductsList
  },
  data(){
    return {
        hasFeaturedProducts: false
    }
  }
}
</script>