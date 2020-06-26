<template>
  <div id="shoppingCartPage" class="container">
      
      <div class="cartTitle" style="margin-top: 200px;">
          <!--transition appear enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft"></!--transition-->
              <h1>Lista da Encomenda</h1>
      </div>

      <div class="cartTable">
          <div class="col-12">
              
              <div class="categoryGroup"> <!-- este elemento é relativo e tem a dimensão total da tabela de categoria para centrar o contentor-->
                  <div>
                      <p>Blocos - 4 produtos</p>
                      <p>Contentores - 2 - 12m<sup>2</sup></p>
                  </div>

                  <div class="product">
                      <img src="" />
                      <div class="productInfo">
                          <p>Stormy Grey</p>
                          <p>BE1 - 266</p>
                          <p>255x43x53 cm</p>
                      </div>
                      <div>RemoveButton X</div>
                  </div>

                  <div class="categoryContainer"> <!-- elemento position absolute para centrar verticalmente -->
                    Contentor A
                    87%
                  </div>
              </div>
          </div>
      </div>
     
         <!--div class="galleryScrollSlider">
              <a @click="showGalleryFunction(index)" href="javascript:void(0)" class="containerImage" v-for="(thumb, index) in thumbs" :key="index">
                   <img :src="thumb.url"
                    class="productImage" itemprop="image"
                    :alt="thumb.alt" :width="thumb.width" :height="thumb.height">
              </a>
         </div-->
    

      <transition appear enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp">
         <div class="row pagecontrols">
              <div class="info col-9">
                <p><span class="textUppercase"><b>Total </b><span class="textColor">5 Produtos: </span></span>  4 Produtos (blocos) 10m<sup>3</sup> - 1 produto (chapas) 145 m<sup>2</sup></p>
              
              </div>
              <router-link to="/bloco-b" class="cartLink col-3"><arrowRightIcon />continuar</router-link>
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
        selectedIndex: 0
    }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
  // ,
  // created(){
  //       this.$http.get('../mocks/.json').then(response => {
  //         this. = response.data.
  //       })
  // }
}
</script>

<style lang="scss">
body{margin: 0}
footer{display: none;}

#bstoneproject{ height: 100vh; }

#shoppingCartPage {
    width: 100%;
    height: 100%;

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
        
        div, a, p {
          display: inline-grid;
          align-items: center;
          margin: 0;
          font-family: 'Oswald', sans-serif;
          font-size: 18px;
          font-weight: 200;
          text-decoration: none;
          letter-spacing: 1px;
          padding: 0 50px;
        }
        
        .info{
            background: #1F1F1F;
            color: #FFF;
            white-space: nowrap;
            //position: relative;
            //text-align: right;
            
            span{
                font-family: 'Oswald', sans-serif;
                font-size: 18px;
                font-weight: 200;
            }
            .textUppercase{ text-transform: uppercase;}
            .textColor{ color: #C47C5A}

            * {
              display: inline-flex;
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
                top: 44%;
                left: 162px;
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
              .arrowSlimIcon{ opacity:1; left: 182px; }
          }
        }
    }
}
</style>
