<template>
  <div id="binnovationpage">

      <ArticleParallaxSmall>
          <div class="pageContentText col-5 order-md-2">
              <h1>{{binnovation.title}}</h1>
              <p>{{binnovation.content}}</p>
          </div>
      </ArticleParallaxSmall>

      <PortfolioMansory>
          <h1 class="pageTitleh2 h2">{{binnovation.title1}}<span>{{binnovation.title2}}</span></h1>
      </PortfolioMansory>

      <Address />

      <Contacts />

  </div>
</template>

<script>

import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import PortfolioMansory from '@/components/PortfolioMansory'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'binnovationpage',
  components: {
      ArticleParallaxSmall,
      PortfolioMansory,
      Address,
      Contacts  
  },
  data() {
    return {
         binnovation: '',
         gallery1: [],
         gallery2: [],
         mansory: []
    }
  },
  methods:
    {
        getImgUrl: function (src) 
        {
            return require("@/assets/images/"+src)
        },
        parseObject: function(source, destination)
        {
            for ( var i = 0 ; i < source.length; i++ ) {
               let obj = source[i]
               let fullPath = this.getImgUrl(obj.src)
               obj.src = fullPath
               destination.push(obj)
            }
        },
    },
    created(){
         this.$http.get('../mocks/b-innovation-mock.json').then(response => {
            this.binnovation = response.data
            
            this.parseObject(response.data.gallery1, this.gallery1)            
            this.parseObject(response.data.gallery2, this.gallery2)
            this.parseObject(response.data.mansory, this.mansory)
         })

    },
    mounted() {
        this.$eventBus.$emit('componentFinishLoad', true);
    }
}
</script>
