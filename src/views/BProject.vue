<template>
  <div id="bprojectpage">

       <ArticleParallaxSmall>
          <div class="pageContentText col-5 order-md-2">
              <h1>{{bproject.title}}</h1>
              <p>{{bproject.content}}</p>
          </div>
      </ArticleParallaxSmall>

      <CollectionsSmall />

      <PortfolioMansory />

      <Address />

      <Contacts />

  </div>
</template>

<script>
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import PortfolioMansory from '@/components/PortfolioMansory'
import CollectionsSmall from '@/components/CollectionsSmall'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'bprojectpage',
  components: {
      ArticleParallaxSmall,
      PortfolioMansory,
      CollectionsSmall,
      Address,
      Contacts  
  },
  data() {
    return {
         bproject: '',
         gallery1: [],
         gallery2: []
    }
  },
  methods:
    {
        getImgUrl: function (src) {
            return require( '@/assets/images/news/'+src )
        },
        parseObject: function(source, destination)
        {
            for ( var i = 0 ; i < source.length; i++ ) {
               let obj = source[i]
               let fullPath = this.getImgUrl(obj.src)
               obj.src = fullPath
               destination.push(obj)
            }
        }        
    },
    created(){
         this.$http.get('../mocks/b-project-mock.json').then(response => {
            this.bproject = response.data
            this.parseObject(response.data.gallery1, this.gallery1)            
            this.parseObject(response.data.gallery2, this.gallery2)            
         })
    },
    mounted() {
        this.$eventBus.$emit('componentFinishLoad', true);
    }
}
</script>
