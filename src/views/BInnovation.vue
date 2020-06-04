<template>
  <div id="binnovationpage">
       <Header>
           <img class="d-none d-md-block" itemprop="logo" 
                    src="../assets/images/logo/logo_innovation.svg" 
                    v-bind:alt="$t('logo-aria-label')"
                    v-bind:title="$t('logo-aria-label')"
                    v-bind:aria-label="$t('logo-aria-label')" />
            <img class="d-block d-md-none" itemprop="logo" 
                src="../assets/images/logo/logo_home_mobile.svg" 
                v-bind:alt="$t('logo-aria-label')"
                v-bind:title="$t('logo-aria-label')"
                v-bind:aria-label="$t('logo-aria-label')" />
      </Header>

       <ArticleParallaxSmall>
          <div class="pageContentText col-5">
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
import Header from '@/components/Header.vue'
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import PortfolioMansory from '@/components/PortfolioMansory'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'binnovationpage',
  components: {
      Header,
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
