<template>
  <div id="institutionalpage" class="pageContainer">
      
      <BannerFullsize />

       <ArticleParallaxSmall>
          <div class="pageContentText col-5">
                <h1>B group comprehends 4 diferent, yet complimentary companies and activities</h1>
                <p>With all of this growth and evolution, we share with you an all inclusive brand that represents the quality, the advanced processing systems, the creativity the design and all the hard work all of us puts into every single square meter of marble that leaves our factory.</p>
                <a>Ler mais >>> </a>
            </div>
      </ArticleParallaxSmall>

      <Scroll />

      <NewsSlider />

      <Address />

      <Contacts />

  </div>
</template>

<script>
import BannerFullsize from '@/components/BannerFullsize'
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import Scroll from '../components/subcomponents/scroll'
import NewsSlider from '@/components/NewsSlider'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'institutionalpage',
  components: {
      BannerFullsize,
      ArticleParallaxSmall,
      Scroll,
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