<template>
  <div id="homepage" class="pageContainer">
    
      <Scroll />

      <BannerFullsize />

       <ArticleParallaxSmall>
          <div class="pageContentText col-5 order-md-2">
              <h1>Home</h1>
              <p>A versatilidade, robustez e magnificência fazem do mármore o material mais desejado para vários ambientes, do mais clássico ao vanguardista. B innovation promete criar a solução ideal para si, à sua medida.</p>
          </div>
      </ArticleParallaxSmall>

      <NewsSlider />

      <Address />

      <Contacts />

  </div>
</template>


<script>
import Scroll from '../components/subcomponents/scroll'
import BannerFullsize from '../components/BannerFullsize'
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import NewsSlider from '@/components/NewsSlider'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'homepage',
  components: {
      Scroll,
      BannerFullsize,
      ArticleParallaxSmall,
      NewsSlider,
      Address,
      Contacts 
  },
  mounted() {
      // Preloader
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}
</script>
