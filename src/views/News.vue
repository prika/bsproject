<template>
  <div id="newspage" class="pageContainer">
       
      <NewsSlider>
         <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
            {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
         </h1>
      </NewsSlider>

      <Footer />
  </div>
</template>


<script>
import NewsSlider from '@/components/NewsSlider'
import Footer from '@/components/Footer.vue'

export default {
   name: 'newspage',
   components: {
      NewsSlider,
      Footer
   },
   data() {
    return {
      newsAmount: 3,
      hasPaging: true
    }
  }
}

</script>

<style lang="scss">
    #newspage .newsContainer {
         padding-top: 100px;
         .row{padding: 300px 0 0;}
    }
</style>
