<template>
  <div id="bprojectpage">

       <ArticleParallaxSmall>
          <div class="pageContentText col-12 col-md-4 order-md-2">
              <h1 v-html="bproject.title">{{bproject.title}}</h1>
              <p v-html="bproject.content">{{bproject.content}}</p>
          </div>
      </ArticleParallaxSmall>

      <Collections />

      <PortfolioMansory>
          <h1 class="pageTitleh2 h2">{{bproject.title1}}<span>{{bproject.title2}}</span></h1>
      </PortfolioMansory>

  </div>
</template>

<script>
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import PortfolioMansory from '@/components/PortfolioMansory'
import Collections from '@/components/Collections'

export default {
  name: 'bprojectpage',
  components: {
      ArticleParallaxSmall,
      PortfolioMansory,
      Collections
  },
  data() {
    return {
         bproject: '',
         gallery1: [],
         gallery2: [],
         mansory: [],
         collections: []
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
    beforeCreate() {
        this.$eventBus.$emit('componentFinishLoad', false);
    },
    created(){
        this.$http.get('../mocks/b-project-mock.json').then(response => {
            this.bproject = response.data
            this.parseObject( response.data.gallery1, this.gallery1 )            
            this.parseObject( response.data.mansory, this.mansory )

            this.$eventBus.$emit('collectionsLoadedEvent', response.data.collections);
        }).then(() => {this.$eventBus.$emit('componentFinishLoad', true)})
                
    }
}
</script>