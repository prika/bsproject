<template>
  <div id="blocobpage" class="pageContainer">

    <Scroll />

    <div class="container">
        <h1 class="pageTitleh2 h2">produtos em<span>destaque</span></h1>
        
        <!--ProductsList /-->

    </div>
  </div>
</template>

<script>
import Scroll from '../components/subcomponents/scroll'
import ProductsList from '../components/ProductsList'
import axios from 'axios'

export default {
  name: 'blocobpage',
  components: {
      Scroll,
      ProductsList
  },
  data(){
    return {
        products: [],
        info: null
    }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  
  }
}
</script>

<style lang="scss">
.pageContainer{
  height: 3000px;
}
</style>
