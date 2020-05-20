<template>
  <div id="listpage">
    
    <div class="container">
        <h1 class="pageTitle">Blo<span>cos</span></h1>
        <Simulate />


    </div>

  </div>
</template>

<script>
import Simulate from '@/components/subcomponents/scroll.vue'

export default {
  name: 'listpage',
  components: {
      Simulate
      // Footer
  }
}
</script>
