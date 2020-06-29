<template>
  <div id="shoppingCartPage" class="container">
      
      <div class="row">  <!-- justify-content-center-->
      <div class="cartTitle col-12 col-md-8">
          <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideInRight">
              <h1>Lista da Encomenda</h1>
          </transition>
      </div>

      <div class="cartTable col-12 col-md-8">
           
       <!-- Repeater containers -->
        <div class="categoryGroup">
            <div class="row">
                <p class="col-8"><span class="uppercase">Blocos</span> - <span>4 produtos</span></p>
                <p class="col-4 text-center"><span class="uppercase">Contentores</span> - 2 - 12m<sup>2</sup></p>
            </div>

            <div class="row categoryRow">

              <!-- repeat -->
              <div class="productCart col-8 d-flex align-items-center">
                  <img src="/img/variant1-4.5af13b48.jpg" 
                        class="col-4"
                        width="150" height="150"/>
                  <div class="productInfo col-7">
                      <h2>Stormy Grey</h2>
                      <h3>BE1 - 266</h3>
                      <p>255x43x53 cm</p>
                  </div>
                  <div class="col-1">X</div>
              </div>
              <!-- repeat -->

               <!-- repeat -->
              <div class="productCart col-8 d-flex align-items-center">
                  <img src="/img/variant1-4.5af13b48.jpg" 
                        class="col-4"
                        width="150" height="150"/>
                  <div class="productInfo col-7">
                      <h2>Stormy Grey</h2>
                      <h3>BE1 - 266</h3>
                      <p>255x43x53 cm</p>
                  </div>
                  <div class="col-1">X</div>
              </div>
              <!-- repeat -->

               <!-- repeat -->
              <div class="productCart col-8 d-flex align-items-center">
                  <img src="/img/variant1-4.5af13b48.jpg" 
                        class="col-4"
                        width="150" height="150"/>
                  <div class="productInfo col-7">
                      <h2>Stormy Grey</h2>
                      <h3>BE1 - 266</h3>
                      <p>255x43x53 cm</p>
                  </div>
                  <div class="col-1">X</div>
              </div>
              <!-- repeat -->

              <div class="categoryContainer col-4 text-center">
                    <p class="uppercase">Contentor - A</p>
                    <figure class="chart" data-percent="50">
                        <svg width="89.926" height="89.923" viewBox="0 0 89.926 89.923">
                            <text id="text" transform="translate(47 50.793)" fill="#333" font-size="15" font-family="Oswald-Medium, Oswald" font-weight="500" letter-spacing="0.03em"><tspan x="-11.401" y="0">25</tspan><tspan y="0" font-size="8.75" baseline-shift="4.999500156940817">%</tspan></text>
                            <path d="M-19498.4,3474.4l35.063,35.062-35.062,35.062-35.062-35.062Z" transform="translate(19543.959 -3463.896)" fill="none" stroke="#FFF" stroke-width="14"/>
                            <path class="containerFull" d="M-19498.4,3474.4l35.063,35.062-35.062,35.062-35.062-35.062Z" transform="translate(19543.959 -3463.896)" fill="none" stroke-width="14" stroke-dasharray="50, 283"/>
                        </svg>
                    </figure>
              </div>
            </div>
        </div>

        <!-- Repeater containers -->

         <div class="categoryGroup">
            <div class="row">
                <p class="col-8"><span class="uppercase">Blocos</span> - <span>4 produtos</span></p>
                <p class="col-4 text-center"><span class="uppercase">Contentores</span> - 2 - 12m<sup>2</sup></p>
            </div>

            <div class="row categoryRow">

              <!-- repeat -->
              <div class="productCart col-8 d-flex align-items-center">
                  <img src="/img/variant1-4.5af13b48.jpg" 
                        class="col-4"
                        width="150" height="150"/>
                  <div class="productInfo col-7">
                      <h2>Stormy Grey</h2>
                      <h3>BE1 - 266</h3>
                      <p>255x43x53 cm</p>
                  </div>
                  <div class="col-1">X</div>
              </div>
              <!-- repeat -->

              <div class="categoryContainer col-4 text-center">
                    <p class="uppercase">Contentor - A</p>
                    <figure class="chart" data-percent="50">
                        <svg width="89.926" height="89.923" viewBox="0 0 89.926 89.923">
                            <text id="text" transform="translate(47 50.793)" fill="#333" font-size="15" font-family="Oswald-Medium, Oswald" font-weight="500" letter-spacing="0.03em"><tspan x="-11.401" y="0">50</tspan><tspan y="0" font-size="8.75" baseline-shift="4.999500156940817">%</tspan></text>
                            <path d="M-19498.4,3474.4l35.063,35.062-35.062,35.062-35.062-35.062Z" transform="translate(19543.959 -3463.896)" fill="none" stroke="#FFF" stroke-width="14"/>
                            <path class="containerFull" d="M-19498.4,3474.4l35.063,35.062-35.062,35.062-35.062-35.062Z" transform="translate(19543.959 -3463.896)" fill="none" stroke-width="14" stroke-dasharray="100, 283"/> <!-- stroke-dasharray o primeiro valor é o dobro da percentagem   -->
                        </svg>
                    </figure>
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
    
      </div>


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
#shoppingCartPage{ margin-bottom: 200px; }


h1, h2, h3, p {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
}

h2{
  text-transform: uppercase;
  font-size: 28px;
}

h3{
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 300;
}

p{
  font-size: 18px;
  font-weight: 300;
}
.uppercase{text-transform: uppercase;font-weight: 400;}




.cartTable{
    margin-top: 400px;
    background: #F0F0F0;

    .categoryGroup{
      width: 100%;

      .categoryRow{
        position: relative;

        .categoryContainer{
            position: absolute;
            top: calc( 50% - 70px );
            right: 0;
        }
      }

      .productCart{
        padding: 0;
        height: 190px;
        border-top: 1px solid #909090;

        .productInfo{
          height: 150px;

          h2{ margin-bottom: 32px;}
          h3{ margin-bottom: 30px;}
        }

        //&:first-child{border-top:0;}
      }
    }
}


.containerFull {
  fill: none;   
  stroke: #333;
  stroke-width: 14;
  stroke-linecap: square;
  animation: progress .5s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 283;
  }
}




.cartTitle {
    position: fixed;
    margin-top: 200px;
    margin-bottom: 150px;
    //margin-left: 30px;

    h1{
      font-size: 22px;
      position: relative;
      text-transform: uppercase;
      letter-spacing: 1px;
     

      &:before{
        content: '';
        display: block;
        position: absolute;
        top: 13px;
        left: 230px;
        background: #B7B7B7;
        width: 50%;
        height: 1px;
      }

      &:after{
        content: '';
        display: block;
        position: fixed;
        top: 213px;
        right: 0;
        background: #B7B7B7;
        width: 50vw;
        height: 1px;
      }
    }
}

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
