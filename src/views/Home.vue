<template>
  <div id="homepage" class="pageContainer">
    
      <ArticleParallax />

      <NewsSlider />

      <Address />

      <Contacts />

  </div>
</template>


<script>
import ArticleParallax from '@/components/ArticleParallax'
import NewsSlider from '@/components/NewsSlider'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'homepage',
  components: {
      ArticleParallax,
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
