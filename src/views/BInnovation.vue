<template>
  <div id="binnovationpage">

       <ArticleParallaxSmall>
          <div class="pageContentText col-5 order-md-2">
              <h1>B innovation</h1>
              <p>A versatilidade, robustez e magnificência fazem do mármore o material mais desejado para vários ambientes, do mais clássico ao vanguardista. B innovation promete criar a solução ideal para si, à sua medida.</p>
          </div>
      </ArticleParallaxSmall>

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
