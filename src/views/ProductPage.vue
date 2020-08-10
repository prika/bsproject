<template>
  <div id="productPage" >
      
      <div class="productDetailInfo">
          <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
              <p class="productName" itemprop="name" :aria-label="variant.firstName+' '+variant.secondName">
                  <mark>
                      <span></span>
                      {{variant.firstName}}</br>{{variant.secondName}} 
                  </mark>
              </p>
          </transition>

          <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideInRight ">
            <div class="moreinfo row">
                  <h2 class="col-12">{{variant.ref}}</h2>
                  <p class="col-12 col-lg-6"><span class="title">{{$t('units_measures')}}</span><br>{{variant.size.width}}x{{variant.size.height}}x{{variant.size.depth}} {{$t('units_cm')}} - <span class="color">{{variant.size.total}}</span> {{$t('units_total_m3')}} m<sup>3</sup></p>
                  <p class="col-12 col-lg-6"><span class="title">{{$t('units_weight')}}</span><br><span class="color">{{variant.weight}}</span> {{$t('units_ton')}}</p>
            </div>
          </transition>
      </div>
     

      <transition appear enter-active-class="animated fadeInUp delay-1s" leave-active-class="animated fadeOutDown">
         <div class="galleryScrollSlider">
              <a @click="showGalleryFunction(index)" href="javascript:void(0)" class="containerImage" v-for="(thumb, index) in thumbs" :key="thumb.id">
                   <img :src="thumb.url"
                    class="productImage" itemprop="image"
                    :alt="thumb.alt" :width="thumb.width" :height="thumb.height">
              </a>
         </div>
      </transition>

      <transition appear enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp">
         <div class="row pagecontrols">
              <a @click="$router.go(-1)" href="javascript:void(0)" class="backlink col-3"><arrowRightIcon />{{$t('actions_back')}}</a>
              <a @click="showShareModal = true" class="shareLink col-3" href="javascript:void(0)"><arrowRightIcon />{{$t('actions_share')}}<shareIcon/></a>

              <a @click="addToCart" v-if="!productAdded" href="javascript:void(0)" class="cartLink col-6"><arrowRightIcon />{{$t('actions_addtocart')}} <cartIcon/></a>
              <a @click="goToCart" v-else href="javascript:void(0)" class="cartLink removeProduct col-6"><arrowRightIcon />{{$t('actions_removefromcart')}} <cartIcon/></a>
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
        showGallery: false,
        selectedIndex: 0,
        productAdded: false
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
          this.selectedIndex = index
          console.log("selected:"+this.selectedIndex)
      },
      addToCart(){
          this.productAdded = true
          addProductToCart( this.variant.ref )
      }
  },
  beforeCreate() {
      console.log("productpage - entra no mousewheel")

      let themejs = document.createElement("script")
      themejs.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js")
      document.head.appendChild(themejs)
      
      
      this.$http.get('../mocks/products-variant-detail-mock.json').then(response => {
        this.variant = response.data.variant
        this.parseObject(response.data.variant.images)
        
        console.log("productpage - terminou parse de imagens")
        $('html, body').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta);
            e.preventDefault();
        });
      })
  },
  created(){
      $('html, body').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta);
            e.preventDefault();
        });

      this.$eventBus.$emit('pageFinishLoad', true)
  }
  // ,
  // destroyed() {
  //     $('html').mousewheel(function(e, delta) {
  //       this.scrollLeft == (delta);
  //       //e.preventDefault();
  //     });
  // }
}
</script>

<style lang="scss">
body{margin: 0}
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
        top: 20%;
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
        bottom: 12vh;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        z-index: 2;

        &::-webkit-scrollbar {
          display: none;
        }

        .containerImage{
            height: 20vh;
            width: 20vh;
            overflow: hidden;
            z-index: 0;
            display: inline-block;

            img {
              filter: brightness(70%);
              -webkit-filter: brightness(70%);
              -moz-filter: brightness(70%);
              width: 100%;
              height: 100%;
              -webkit-transition:   filter 0.2s ease, transform 0.2s ease;
              -moz-transition:      filter 0.2s ease, transform 0.2s ease;
              -o-transition:        filter 0.2s ease, transform 0.2s ease;
              transition:           filter 0.2s ease, transform 0.2s ease;
            }

            &:hover img {
              filter: brightness(100%);
              -webkit-filter: brightness(100%);
              -moz-filter: brightness(100%);

              -webkit-transform:     scale(1.1);
              -moz-transform:        scale(1.1);
              -o-transform:          scale(1.1);
              transform:             scale(1.1);
            }
        }
    }

    .pagecontrols{
        height: 13vh;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
        margin: 0;
        z-index: 3;
        
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
                top: 50%;
                right: 120px;
                content: '';
                width: 50px;
                height: 1px;
                background: #333;
                -webkit-transition:     width 0.2s ease;
                -moz-transition:        width 0.2s ease;
                -o-transition:          width 0.2s ease;
                transition:             width 0.2s ease;
            }

            .arrowSlimIcon{
                transform: rotate(180deg);
                position: absolute;
                top: 40%;
                right: 162px;
                -webkit-transition:     right 0.2s ease;
                -moz-transition:        right 0.2s ease;
                -o-transition:          right 0.2s ease;
                transition:             right 0.2s ease;
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
                top: 50%;
                left: 100px;
                content: '';
                width: 70px;
                height: 1px;
                background: #FFF;
                -webkit-transition:     opacity 0.2s ease, left 0.2s ease;
                -moz-transition:        opacity 0.2s ease, left 0.2s ease;
                -o-transition:          opacity 0.2s ease, left 0.2s ease;
                transition:             opacity 0.2s ease, left 0.2s ease;
                opacity:0;
            }

            .arrowSlimIcon{
                position: absolute;
                top: 36%;
                left: 162px;
                -webkit-transition:     opacity 0.2s ease, left 0.2s ease;
                -moz-transition:        opacity 0.2s ease, left 0.2s ease;
                -o-transition:          opacity 0.2s ease, left 0.2s ease;
                transition:             opacity 0.2s ease, left 0.2s ease;
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
                top: 50%;
                left: 170px;
                content: '';
                width: 70px;
                height: 1px;
                background: #FFF;
                -webkit-transition:     opacity 0.2s ease, left 0.2s ease;
                -moz-transition:        opacity 0.2s ease, left 0.2s ease;
                -o-transition:          opacity 0.2s ease, left 0.2s ease;
                transition:             opacity 0.2s ease, left 0.2s ease;
                opacity:0;
            }

            .arrowSlimIcon{
                position: absolute;
                top: 36%;
                left: 232px;
                -webkit-transition:     opacity 0.2s ease, left 0.2s ease;
                -moz-transition:        opacity 0.2s ease, left 0.2s ease;
                -o-transition:          opacity 0.2s ease, left 0.2s ease;
                transition:             opacity 0.2s ease, left 0.2s ease;
                opacity:0;

                svg *{ stroke: #FFF; }
            }

            &:hover{
              background: #C47C5A;

              &:before{opacity:1; left: 190px;}
              .arrowSlimIcon{ opacity:1; left: 252px; }
            }


            &.removeProduct {
               background: #000;
               color: #FA0B4C;

               &:hover {
                  background: #FA0B4C;
                  color: #FFF;
               }
            }
        }
    }
}

@media (max-width: 768px) {
    #productPage {
        .productName{
            text-indent: 0;
            top: 0;
            padding: 50px 0 40px;
            font-size: 38px;
            line-height: 43px;
            display: block;
            width: 100%;
            min-width: auto;
            text-align: center;

            span{ display: none}
        }

        .productDetailInfo {
            top: 68px;
            display: block;
            z-index: 0;
            
            .moreinfo{
              width: 100%;
              margin-left: 0;
              padding-right: 0;
              text-align: center;
            }
        }

        .galleryScrollSlider{
            position: initial;
            overflow-x: auto;
            overflow-y: auto;
            white-space: initial;
            margin-top: 570px;

            .containerImage{
              display: block;
              width: 100%;
              height: 100%;
              padding: 5px 30px;
              overflow: auto;
            }
        }

        .pagecontrols{
          .backlink,
          .shareLink{
            display: none;
          }
          .cartLink{
            min-width: 100%!important;
            width: 100%!important;}
        }
    }
}
</style>
