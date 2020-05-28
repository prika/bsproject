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
        //setTimeout(function(){
           this.name = to.name 
        //}, 2000);
      }
  }
}
</script>