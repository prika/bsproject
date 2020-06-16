<template>
  <div id="homepage" class="pageContainer">
    
      <Scroll />

      <BannerFullsize />

      <ArticleParallaxSmall>
          <div class="pageContentText col-5 order-md-2">
              <h1>{{homepage.title}}</h1>
              <p>{{homepage.content}}</p>
          </div>

           <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
                {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
           </h1>
      </ArticleParallaxSmall>

      <NewsSlider>
        <h1 class="pageTitleh2 h2">notícias</h1>
      </NewsSlider>

      <Address />

      <Contacts />

  </div>
</template>


<script>
import Scroll from '../components/subcomponents/scroll'
import BannerFullsize from '../components/BannerFullsize'
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import NewsSlider from '@/components/NewsSlider'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'homepage',
  components: {
      Scroll,
      BannerFullsize,
      ArticleParallaxSmall,
      NewsSlider,
      Address,
      Contacts 
  },
  data() {
    return {
      newsAmount: 3,
      hasPaging: false,
      hasLink: true,
      homepage: '',
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
         this.$http.get('../mocks/homepage-mock.json').then(response => {
            this.homepage = response.data
            this.parseObject(response.data.gallery1, this.gallery1)            
            this.parseObject(response.data.gallery2, this.gallery2)            
         })
    },
    mounted() {
        this.$eventBus.$emit('componentFinishLoad', true);
    }
}
</script>
