<template>
  <div id="binnovationpage">
  
      <ArticleParallaxSmall />

      <PortfolioMansory />

      <Address />

      <Contacts />

  </div>
</template>

<script>

import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import PortfolioMansory from '@/components/PortfolioMansory'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'binnovationpage',
  components: {
      ArticleParallaxSmall,
      PortfolioMansory,
      Address,
      Contacts  
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}
</script>
