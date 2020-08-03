<template>
  <div id="homepage" class="pageContainer">

      <BannerFullsize />

      <ArticleParallaxSmall>
          <div class="pageContentText col-12 col-md-5 order-md-2">
              <h1>{{home.title}}</h1>
              <p>{{home.content}}</p>
          </div>
      </ArticleParallaxSmall>

      <ProductsList>
          {{home.featured_text1}}<span>{{home.featured_text2}}</span>
      </ProductsList>


      <NewsSlider>
        <h1 class="pageTitleh2 h2">notícias</h1>
      </NewsSlider>
  </div>
</template>


<script>
import BannerFullsize from '../components/BannerFullsize'
import ArticleParallaxSmall from '@/components/ArticleParallaxSmall'
import ProductsList from '@/components/ProductsList'
import NewsSlider from '@/components/NewsSlider'

export default {
  name: 'homepage',
  components: {
      BannerFullsize,
      ArticleParallaxSmall,
      ProductsList,
      NewsSlider
  },
  data() {
    return {
      newsAmount: 3,
      hasPaging: false,
      hasLink: true,
      home: '',
      gallery1: [],
      gallery2: [],
      slidergallery: [],
      hasFeaturedProducts: true,
      productsPerPage: 6
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
      
         this.$http.get('../mocks/homepage-mock.json').then(response => {
            this.home = response.data
            this.parseObject(response.data.gallery1, this.gallery1)
            this.parseObject(response.data.gallery2, this.gallery2)

            this.parseObject(response.data.slidergallery, this.slidergallery)            
         })
    },
    mounted() {
        this.$eventBus.$emit('componentFinishLoad', true);
    }
}
</script>