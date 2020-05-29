<template>
  <div id="blocobpage" class="pageContainer">

    <BannerFullsize />

    <Scroll />

    <div class="container">
        <h1 class="pageTitleh2 h2">produtos em<span>destaque</span></h1>
        
        <!--ProductsList /-->

    </div>
  </div>
</template>

<script>
import Scroll from '../components/subcomponents/scroll'
import BannerFullsize from '../components/BannerFullsize'
import ProductsList from '../components/ProductsList'
import axios from 'axios'

export default {
  name: 'blocobpage',
  components: {
      BannerFullsize,
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
  
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>

<style lang="scss">
.pageContainer{
  height: 3000px;
}
</style>
