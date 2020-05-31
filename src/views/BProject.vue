<template>
  <div id="bprojectpage">
  
      <ArticleParallaxSmall>
          <div class="pageContentText col-5">
                <h1>B project</h1>
                <p>B project consegue garantir todo o processo do mármore, desde o primeiro corte até sua casa. <br> Formada pela natureza, que lhe oferece tons e características únicas, o mármore é a escolha preferida na Arquitetura e Decoração.</p>
            </div>
      </ArticleParallaxSmall>

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
