<template>
  <div id="newsdetailpage" class="pageContainer container">
      
      <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
         {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
      </h1>
     
      <ArticleParallaxSmall>
          <div class="pageContentText col-12 col-md-4 order-md-2">
              <h1 v-html="news.title">{{news.title}}</h1>
              <p v-html="news.content">{{news.content}}</p>
              <p class="newsDate">{{news.pubdata}}</p>
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

        let selectedNews = this.$route.params.id
        console.log( selectedNews )

        this.$http.get('http://localhost:8081/mocks/news-detail-mock.json').then(response => {
            this.news = response.data
            this.parseObject(response.data.gallery1, this.gallery1)            
            this.parseObject(response.data.gallery2, this.gallery2)
            
            this.$eventBus.$emit('pageFinishLoad', true);
        })
    }
}

</script>

<style lang="scss">
#newsdetailpage {
    margin-top: 140px;

    .parallaxContainer{
        padding-top: 0;

        .parallaxGroup1 .imageParallax1{top: 30%;}
        .pageContentText{margin-top: 250px;}
    }

    .newsContainer .row{padding: 100px 0 0;}
    .newsDate{position: inherit;}
}
</style>
