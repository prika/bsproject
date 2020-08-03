<template>
  <div id="bprojectpage">

       <ArticleParallaxSmall>
          <div class="pageContentText col-12 col-md-5 order-md-2">
              <h1>{{bproject.title}}</h1>
              <p>{{bproject.content}}</p>
          </div>
      </ArticleParallaxSmall>

      <CollectionsSmall />

      <PortfolioMansory>
          <h1 class="pageTitleh2 h2">{{bproject.title1}}<span>{{bproject.title2}}</span></h1>
      </PortfolioMansory>

  </div>
</template>

<script>
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import PortfolioMansory from '@/components/PortfolioMansory'
import CollectionsSmall from '@/components/CollectionsSmall'

export default {
  name: 'bprojectpage',
  components: {
      ArticleParallaxSmall,
      PortfolioMansory,
      CollectionsSmall
  },
  data() {
    return {
         bproject: '',
         gallery1: [],
         gallery2: [],
         mansory: []
    }
  },
  methods:
    {
        getImgUrl: function (src) {
            return require( '@/assets/images/'+src )
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
            this.parseObject( response.data.mansory, this.mansory )           
         })
    },
    mounted() {
        this.$eventBus.$emit('componentFinishLoad', true);
    }
}
</script>