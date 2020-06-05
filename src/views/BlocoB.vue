<template>
  <div id="blocobpage" class="pageContainer">
     <Header>
           <img class="d-none d-md-block" itemprop="logo" 
                src="../assets/images/logo/logo_bloco.svg" 
                v-bind:alt="$t('logo-aria-label')"
                v-bind:title="$t('logo-aria-label')"
                v-bind:aria-label="$t('logo-aria-label')" />
            <img class="d-block d-md-none" itemprop="logo" 
                src="../assets/images/logo/logo_home_mobile.svg" 
                v-bind:alt="$t('logo-aria-label')"
                v-bind:title="$t('logo-aria-label')"
                v-bind:aria-label="$t('logo-aria-label')" />
      </Header>

    <BannerFullsize />

    <Scroll />

    <div class="container">
        <h1 class="pageTitleh2 h2">produtos em<span>destaque</span></h1>
        
        <!--ProductsList /-->

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Scroll from '../components/subcomponents/scroll'
import BannerFullsize from '../components/BannerFullsize'
import ProductsList from '../components/ProductsList'
import axios from 'axios'

export default {
  name: 'blocobpage',
  components: {
      Header,
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
  
      // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .then(response => (this.info = response))
  }
}
</script>

<style lang="scss">
.pageContainer{
  height: 3000px;
}
</style>
