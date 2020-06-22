<template>
  <div id="blocobpage" class="pageContainer">

    <Scroll />

    <ProductsList>
          <h1 class="pageTitle"> 
            {{blocob.product_type1.split1}}<span>{{blocob.product_type1.split2}}</span>
         </h1>
    </ProductsList>

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
        blocob: '',
        hasFeaturedProducts: false,
        productsPerPage: 12
    }
  },
  beforeCreate(){
         this.$http.get('../mocks/blocob-mock.json').then(response => {
            this.blocob = response.data
         })
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
