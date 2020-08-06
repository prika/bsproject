<template>
  <div id="bexplorepage">

      <PortfolioMansory>
          <h1 class="pageTitleh2 h2">{{bexplore.title1}}<span>{{bexplore.title2}}</span></h1>
      </PortfolioMansory>

  </div>
</template>

<script>
import PortfolioMansory from '@/components/PortfolioMansory'

export default {
    name: 'bexplorepage',
    components: {
        PortfolioMansory
    },
    data() {
      return {
        bexplore: '',
        mansory: []
      }
    },
    created(){
        this.$http.get('../mocks/b-explore-mock.json').then(response => {

          this.bexplore = response.data
          this.mansory = this.bexplore.mansory
          
        })
    },
    mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
    }
}
</script>