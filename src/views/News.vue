<template>
  <div id="newspage" class="pageContainer">
       
      <NewsSlider>
         <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
            {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
         </h1>
      </NewsSlider>

  </div>
</template>


<script>
import NewsSlider from '@/components/NewsSlider'

export default {
   name: 'newspage',
   components: {
      NewsSlider
   },
   props:{
      selectedNews: {
         type: String,
         default: null
      }
   },
   data() {
    return {
      newsAmount: 3,
      hasPaging: true
    }
  },
  mounted() {
     this.$eventBus.$on('componentFinishLoad', () => { 
         this.$eventBus.$emit('pageFinishLoad', true)
     })
  }
}

</script>

<style lang="scss">
#newspage .newsContainer {
   padding-top: 140px;
   .row{padding: 300px 0 0;}
}
</style>
