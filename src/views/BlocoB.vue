<template>
  <div id="blocobpage" class="pageContainer">

    <BannerFullsize />
    <Scroll />

    <div class="container">
        <h1 class="pageTitleh2 h2">produtos em<span>destaque</span></h1>
        
        <ProductsList />
        
    </div>
  </div>
</template>

<script>
import Scroll from '../components/subcomponents/scroll.vue'
import BannerFullsize from '../components/BannerFullsize.vue'
import ProductsList from '../components/ProductsList.vue'

export default {
  name: 'blocobpage',
  components: {
      BannerFullsize,
      Scroll,
      ProductsList
  },
  data(){
    return {
    }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}
</script>

<style>
.pageContainer{
  height: 3000px;
}
</style>
