<template>
  <div id="homepage">
    
    <div class="container">
        <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
          {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
        </h1>
        

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus mattis metus urna, sed auctor venenatis amet. Curabitur at tortor eu eros interdum tempus at ac eros consectetur adipiscing elit phasellus mattis metus urna, sed auctor purus venenatis sit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus mattis metus urna, sed auctor venenatis amet. Curabitur at tortor eu eros interdum tempus at ac eros consectetur adipiscing elit phasellus mattis metus urna, sed auctor purus venenatis sit amit dolores.</p>
        
        
    </div>

  </div>
</template>

<script>
export default {
  name: 'homepage',
  components: {
      // Header,
      // Footer
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}

</script>
