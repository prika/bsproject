<template>
  <div id="newsdetailpage" class="pageContainer container">
      
      <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
         {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
      </h1>
     
      <ArticleParallaxSmall>
          <div class="pageContentText col-5 order-md-2">
              <h1>{{news.title}}</h1>
              <p>{{news.content}}</p>
          </div>
      </ArticleParallaxSmall>
             
  </div>
</template>


<script>
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'

export default {
   name: 'newsdetailpage',
   components: {
      ArticleParallaxSmall
   },
   data() {
    return {
         news: '',
         gallery1: [],
         gallery2: []
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
         this.$http.get('../mocks/news-detail-mock.json').then(response => {
            this.news = response.data
            this.parseObject(response.data.gallery1, this.gallery1)            
            this.parseObject(response.data.gallery2, this.gallery2)            
         })
    }
}

</script>

<style lang="scss">
    #newsdetailpage .newsContainer {
         padding-top: 100px;
         .row{padding: 300px 0 0;}
    }
</style>
