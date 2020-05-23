<template>
  <div id="blocobpage" class="pageContainer">
    
    <div class="container">
        <h1 class="h2">produtos em <span>destaque</span></h1>
        <h1>Listagem dos Produtos</h1>
      
        <Scroll />
    </div>
  </div>
</template>

<script>
import Scroll from '../components/subcomponents/scroll.vue'

export default {
  name: 'blocobpage',
  components: {
      Scroll
      // Footer
  }
}
</script>

<style>
.pageContainer{
  height: 3000px;
}
</style>
