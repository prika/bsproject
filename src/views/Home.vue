<template>
  <div id="homepage" class="pageContainer">
    
      <ArticleParallaxSmall />

      <NewsSlider />

      <Address />

      <Contacts />

  </div>
</template>


<script>
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import NewsSlider from '@/components/NewsSlider'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'homepage',
  components: {
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
