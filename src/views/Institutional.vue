<template>
  <div id="institutionalpage" class="pageContainer">
      
      <BannerFullsize />

      <ArticleParallax />

      <Scroll />

      <NewsSlider />

      <Address />

      <Contacts />

  </div>
</template>

<script>
import BannerFullsize from '@/components/BannerFullsize'
import ArticleParallax from '@/components/ArticleParallax'
import Scroll from '../components/subcomponents/scroll'
import NewsSlider from '@/components/NewsSlider'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'institutionalpage',
  components: {
      BannerFullsize,
      ArticleParallax,
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