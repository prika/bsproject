<template>
    <div class="loader">
        <h1> {{name}} </h1>
    </div>
</template>

<script>
   export default {
  name: 'prealoader',
  data() {
      return {
          name: ""
      }
  },
  watch: {
    // call again the method if the route changes
      $route (to, from){
        this.name = to.name
        //console.log(to)
    }
  }
}
</script>