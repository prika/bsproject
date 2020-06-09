<template>
  <div id="homepage" class="pageContainer">
<<<<<<< HEAD

      <Header>
           <img class="d-none d-md-block" itemprop="logo" 
                src="../assets/images/logo/logo_home.svg" 
                v-bind:alt="$t('logo-aria-label')"
                v-bind:title="$t('logo-aria-label')"
                v-bind:aria-label="$t('logo-aria-label')" />
            <img class="d-block d-md-none" itemprop="logo" 
                src="../assets/images/logo/logo_home_mobile.svg" 
                v-bind:alt="$t('logo-aria-label')"
                v-bind:title="$t('logo-aria-label')"
                v-bind:aria-label="$t('logo-aria-label')" />
      </Header>
=======
>>>>>>> parent of 2aeadf0... Logo changes
    
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
