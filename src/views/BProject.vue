<template>
  <div id="bprojectpage">
    
      <div class="container">
          <h1>B Project</h1>
      </div>

      <ArticleParallaxSmall />

      <CollectionsSmall />

      <PortfolioMansory />

      <Address />

      <Contacts />

  </div>
</template>

<script>
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import PortfolioMansory from '@/components/PortfolioMansory'
import CollectionsSmall from '@/components/CollectionsSmall'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'bprojectpage',
  components: {
      ArticleParallaxSmall,
      PortfolioMansory,
      CollectionsSmall,
      Address,
      Contacts  
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}
</script>
