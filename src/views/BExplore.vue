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
        mansoryLoaded: false,
        hasJsonData: false
      }
    },
    methods: {
        notifyFinishLoad()
        {
            if (!(this.mansoryLoaded && this.hasJsonData)) return
            this.$eventBus.$emit('pageFinishLoad', true) 
        }  
    },
    mounted() {
        
        this.$eventBus.$on('componentFinishLoad', (data) => { 

            if (data == 'mansoryLoaded') 
            { 
                this.mansoryLoaded = true 
                this.notifyFinishLoad()
                return
            }
        })

        this.$http.get('../mocks/b-explore-mock.json').then(response => {
            this.bexplore = response.data  
            this.$eventBus.$emit('mansoryFinishLoad', response.data.mansory)
            this.hasJsonData = true
            this.notifyFinishLoad()
        })
    }, 
    beforeDestroy() {
        this.$eventBus.$off('componentFinishLoad')
    }
}
</script>