<template>
  <div id="productPage" >
      
      <div class="productDetailInfo">
          <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
              <p class="productName" itemprop="name">
                  <mark>
                      <span></span>
                      {{variant.firstName}}</br>{{variant.secondName}} 
                  </mark>
              </p>
          </transition>

          <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideInRight ">
            <div class="moreinfo row">
                  <h2 class="col-12">{{variant.ref}}</h2>
                  <p class="col-12 col-lg-6"><span class="title">medidas</span><br>{{variant.size.width}}x{{variant.size.height}}x{{variant.size.depth}}cm - <span class="color">{{variant.size.total}}</span> Total de m<sup>3</sup></p>
                  <p class="col-12 col-lg-6"><span class="title">peso</span><br><span class="color">{{variant.weight}}</span> toneladas</p>
            </div>
          </transition>
      </div>
     

      <transition appear enter-active-class="animated fadeInUp delay-1s" leave-active-class="animated fadeOutDown">
         <div class="galleryScrollSlider">
              <a @click="showGalleryFunction(index)" href="javascript:void(0)" class="containerImage" v-for="(thumb, index) in thumbs" :key="index">
                   <img :src="thumb.url"
                    class="productImage"
                    :alt="thumb.alt" :width="thumb.width" :height="thumb.height" itemprop="image">
              </a>
         </div>
      </transition>

      <transition appear enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp">
         <div class="row pagecontrols">
              <a @click="$router.go(-1)" href="javascript:void(0)" class="backlink col-3"><arrowRightIcon />voltar</a>
              <a @click="showShareModal = true" class="shareLink col-3"><arrowRightIcon />partilhar<shareIcon/></a>
              <router-link to="/bloco-b" class="cartLink col-6"><arrowRightIcon />encomendar <cartIcon/></router-link>
         </div>
      </transition>

      <modalShare v-if="showShareModal" @close="showShareModal = false" />
      <modalGallery v-if="showGallery" @close="showGallery = false" />

  </div>
</template>

<script>
import arrowRightIcon from '@/components/ui/arrow-slim-right.vue'
import cartIcon from '@/components/ui/cartButton.vue'
import shareIcon from '@/components/ui/shareButton.vue'
import modalShare from '@/components/subcomponents/ShareThisModal.vue'
import modalGallery from '@/components/subcomponents/ModalGallery.vue'

export default {
  name: 'detailPage',
  components: {
      arrowRightIcon,
      cartIcon,
      shareIcon,
      modalShare,
      modalGallery
  }, 
  data() {
    return {
        variant: '',
        thumbs: [],
        largeImages:[],
        showShareModal: false,
        showGallery: false
    }
  },
  methods:{
      getImgUrl: function (src) {
        return require('@/assets/images/'+src)
      },
      parseObject: function(source)
      {
          for ( var i = 0 ; i < source.length; i++) {
              let thumb = source[i].thumb
              let largeImage = source[i].large

              thumb.url = this.getImgUrl(thumb.url) 
              largeImage.url = this.getImgUrl(largeImage.url) 
              
              this.thumbs.push(thumb)
              this.largeImages.push(largeImage)
          }
      },
      showGalleryFunction(index){
          this.showGallery = true
          alert( index );
      }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  },
  created(){
        this.$http.get('../mocks/products-variant-detail-mock.json').then(response => {
          this.variant = response.data.variant
          this.parseObject(response.data.variant.images)
        })

        $('html').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta);
            e.preventDefault();
        });
  },
  destroyed() {
        $('html').mousewheel(function(e, delta) {
          this.scrollLeft == (delta);
          ///e.preventDefault();
        });
  }
}
</script>

<style lang="scss">
body{margin: 0}
footer{display: none;}

#bstoneproject{ height: 100vh; }

#productPage {
    width: 100%;
    height: 100%;

    .productName{
        min-width: 600px;
        font-family: 'Noe Display', serif;
        font-weight: normal;
        font-size: 100px;
        line-height: 110px;
        color: #333;
        text-align: left;
        text-indent: 50px;
        padding: 50px 0 0 150px;

        span{
          border: 3px solid #333;
          width: 200px;
          display: block;
          content: '';
          position: absolute;
          top: 110px;
          left: -10px;
        }

        mark {
          background: transparent;
          padding: 2px 5px;
        }
    }

    .productDetailInfo{
        position: fixed;
        top: 250px;
        left: 0;
        right: 0;
        z-index: 2;
        display: flex;

        .moreinfo{
            margin-left: 100px;
            padding: 5% 5% 5% 0;
            width: 100%;

            h2{
              font-family: 'Oswald', sans-serif;
              font-weight: 500;
              font-size: 30px;
              text-transform: uppercase;
              margin-bottom: 50px;
            }

            p {
              font-family: 'Oswald', sans-serif;
              font-weight: 300;
              font-size: 20px;
              letter-spacing: 1px;
              color: #575757;

              span.title {
                text-transform: uppercase;
                font-size: 15px;
              }

              span.color {
                color: #C47C5A;
                font-weight: 400; 
              }
            }
            
        }
    }

    .galleryScrollSlider{
        position: absolute;
        bottom: 118px;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
          display: none;
        }

        .containerImage{
            height: 170px;
            width: 170px;
            overflow: hidden;
            z-index: 0;
            display: inline-block;

            img {
              filter:brightness(70%);
              width: 100%;
              height: 100%;
              -webkit-transition: all 0.2s ease;
              -moz-transition: all 0.2s ease;
              -o-transition: all 0.2s ease;
              transition: all 0.2s ease;
            }

            &:hover img {
              filter:brightness(100%);
              transform: scale(1.1);
            }
        }
    }

    .pagecontrols{
        height: 124px;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
        margin: 0;
        
        a {
          display: inline-grid;
          align-items: center;
          margin: 0;
          font-family: 'Oswald', sans-serif;
          font-size: 18px;
          font-weight: 200;
          text-decoration: none;
          letter-spacing: 2px;
          padding: 0 50px;
        }
        
        .backlink{
            background: #FFF;
            color: #333;
            position: relative;
            text-align: right;

            &:before{
                position: absolute;
                top: 62px;
                right: 120px;
                content: '';
                width: 50px;
                height: 1px;
                background: #333;
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
            }

            .arrowSlimIcon{
                transform: rotate(180deg);
                position: absolute;
                top: 51px;
                right: 162px;
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
            }

            &:hover{
              &:before{width: 70px;}
              .arrowSlimIcon{ right: 182px; }
            }
        }

        .shareLink{
            background: #333;
            color: #FFF;
            position: relative;
            display: inline-flex;
            justify-content: space-between;

            &:before{
                position: absolute;
                top: 62px;
                left: 100px;
                content: '';
                width: 70px;
                height: 1px;
                background: #FFF;
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
                opacity:0;
            }

            .arrowSlimIcon{
                position: absolute;
                top: 47px;
                left: 162px;
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
                opacity:0;

                svg *{ stroke: #FFF; }
            }

            &:hover{
              background: #1F1F1F;

              &:before{opacity:1; left: 140px;}
              .arrowSlimIcon{ opacity:1; left: 202px; }
            }
            
        }

        .cartLink{
            background: #D19173;
            color: #FFF;
            position: relative;
            display: inline-flex;
            justify-content: space-between;

            .cartIcon {
                * {
                    stroke: #FFF;
                }
            }

            &:before{
                position: absolute;
                top: 62px;
                left: 150px;
                content: '';
                width: 70px;
                height: 1px;
                background: #FFF;
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
                opacity:0;
            }

            .arrowSlimIcon{
                position: absolute;
                top: 47px;
                left: 212px;
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
                opacity:0;

                svg *{ stroke: #FFF; }
            }

            &:hover{
              background: #C47C5A;

              &:before{opacity:1; left: 170px;}
              .arrowSlimIcon{ opacity:1; left: 232px; }
            }
        }
    }
}
</style>
