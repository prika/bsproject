<template>
  <div id="shoppingCartPage" class="container">
      

      <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <div class="row justify-content-center" v-if="checkoutStep == 1">
          
          <div class="cartTitle col-12 col-md-8">
              <h1>Lista da Encomenda</h1>
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
      </div>
      </transition>




      <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
        <div class="row justify-content-center" v-if="checkoutStep == 2" >
            
            <div class="cartTitle2 col-12 col-md-8">
                <h1>Condições de Entrega</h1>
            </div>

            <div class="shippingOptions col-12 col-md-8">

              <label class="radioButtonStyle">
                <input type="radio" id="" value="EXW (Ex Works)" v-model="selectedOs" checked="checked"> 
                <div class="radioButton"></div>EXW (Ex Works)
              </label>

               <label class="radioButtonStyle">
                <input type="radio" id="" value="FOB (Free on Board)" v-model="selectedOs" :checked="checked"> 
                <div class="radioButton"></div>FOB (Free on Board)
              </label>

               <label class="radioButtonStyle">
                <input type="radio" id="" value="C&F (Cost and Freigh)" v-model="selectedOs" :checked="checked"> 
                <div class="radioButton"></div>C&F (Cost and Freigh)
              </label>
            </div>

            <div class="notes col-12 col-md-8">
              <h3>Notas</h3>
              <div class="input_group col-md-9">  
                  <input id=""
                          type="text"
                          name="notes" placeholder=" ">
                  <label>deixe uma nota na sua encomenda</label>
                  <span class="bar"></span>
              </div>

            </div>

        </div>
      </transition>





      <transition appear enter-active-class="animated slideInUp delay-1s">
          <div class="row pagecontrols">
              <a v-if="checkoutStep == 2" @click="checkoutStep = 1" href="javascript:void(0)" class="backlink col-2"><arrowRightIcon />voltar</a>
              <div class="info" :class="(checkoutStep === 1 ? 'col-9': 'col-6')">
                <p><span class="textUppercase"><b>Total </b><span class="textColor">5 Produtos: </span></span>  4 Produtos (blocos) 10m<sup>3</sup> - 1 produto (chapas) 145 m<sup>2</sup></p>
              </div>

              <a @click="checkoutStep = 2" href="javascript:void(0)" 
                :class="(checkoutStep === 1 ? 'cartLink col-3': 'cartLink col-4')"><arrowRightIcon />continuar</a>
            
          </div>
      </transition>
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
        checkoutStep: 1
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




.cartTitle,
.cartTitle2 {

  h1{
      font-size: 22px;
      position: relative;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding-bottom: 100px;

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
  }
}

.cartTitle h1 {
    &:after{
      content: '';
      display: block;
      position: absolute;
      top: 13px;
      right: -30vw;
      background: #B7B7B7;
      width: 50vw;
      height: 1px;
    } 
}

.cartTitle2 h1:before{
    left: -30vw;
    width: 28vw;
}





.cartTable{
    background: #F0F0F0;

    .categoryGroup{
      width: 100%;

      .categoryRow{
        position: relative;
        border-bottom: 1px solid #909090;
        margin-bottom: 100px;

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

        &:first-child{border-top:0;}
      }
    }
}

#shoppingCartPage {
    width: 100%;
    height: 100%;
    padding-top: 200px;

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
          -webkit-transition:     all 0.2s ease;
          -moz-transition:        all 0.2s ease;
          -o-transition:          all 0.2s ease;
          transition:             all 0.2s ease;
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
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
            }

            .arrowSlimIcon{
                transform: rotate(180deg);
                position: absolute;
                top: 44%;
                right: 112px;
                -webkit-transition:     all 0.2s ease;
                -moz-transition:        all 0.2s ease;
                -o-transition:          all 0.2s ease;
                transition:             all 0.2s ease;
            }

            &:hover{
              &:before{width: 70px;}
              .arrowSlimIcon{ right: 132px; }
            }
        }
    }
}

.notes{
  margin: 100px 0 200px;

  .input_group{ margin-top: 30px;}
}
</style>
