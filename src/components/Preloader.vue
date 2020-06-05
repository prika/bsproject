<template>
    <div class="loader">
        
        {{name}}
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
        setTimeout(function(){
           this.name = to.name 
           console.log(this.name)
        }, 2000);
      }
  }
}
</script>