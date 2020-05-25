<template>
  <div id="bprojectpage">
    
    <div class="container">
       
        <h1>B Project</h1>
    </div>

  </div>
</template>

<script>

export default {
  name: 'bprojectpage',
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}
</script>
