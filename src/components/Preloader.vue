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
        console.log(to)
    }
  }
}
</script>

<style lang="scss">

.loader{
    background: #DEDEDE;
    position: fixed;
    z-index: 4;
    top: 0; bottom: 0; left: 0; right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;

    h1{
      color: #FFF;
      font-size: 218px;
    }
}
.isLoaded { 
    //display: none;

    opacity: 0;
    z-index: -3;
    transition: opacity 1s ease-in;
}


</style>