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
  },
  data(){
    return {
        // post: null,
        // error: null
    }
  },
  // created() {
  // console.log(this.$el);
  // },
  // mounted() {
  //   console.log(this.$el);
  // },
  // beforeRouteEnter (to, from, next) {
    
  //   console.log("beforeRouteEnter");
  //   next()
  //   // getPost(to.params.id, (err, post) => {
  //   //    next(vm => vm.setData(err, post))
  //   // })
  // },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  // beforeRouteUpdate (to, from, next) {
  //   console.log("beforeRouteUpdate");
  //   next()
  //   // this.post = null
  //   // getPost(to.params.id, (err, post) => {
  //   //   this.setData(err, post)
  //   //   next()
  //   // })
  // },
  // destroyed() {
  //   console.log('Component has been destroyed!');
  // }
}
</script>

<style>
.pageContainer{
  height: 3000px;
}
</style>
