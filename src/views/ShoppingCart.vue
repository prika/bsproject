<template>
  <div id="shoppingCartPage">
      
      <transition appear enter-active-class="animated slideInUp" leave-active-class="animated slideOutLeft">
      <div class="row justify-content-center" v-if="checkoutStep == 1">
          
          <div class="cartTitle col-12 col-md-8">
              <h1 class="text-center text-md-left">{{$t('checkout-title-step1')}}</h1>
          </div>

          <div class="cartTable col-12 col-md-8">
              
          <!-- Repeater containers -->
            <div class="categoryGroup" v-for="container in categoryContainers">
                
                <div class="row">
                    <p class="col-12 col-md-8 text-center text-md-left"><span class="uppercase">{{container.category}}</span> - <span>{{container.quantity}} {{$tc('checkout-products', container.quantity)}}</span></p>
                    <p class="col-12 col-md-4 text-center"><span class="uppercase">{{$tc('checkout-container', container.containerCount)}}</span> - {{container.containerCount}} - {{container.containerDimensions}}m<sup>2</sup></p>
                </div>

                <div class="row categoryRow" v-for="item in container.containerItems">
                  <p v-if="isMobile()" class="col-12 text-center d-md-none">{{item.name}} - {{item.percentage}}%</p>
                  <!-- repeat -->
                  <div  v-for="product in item.products"
                        class="productCart col-12 col-md-8 d-flex align-items-center">

                      <img src="/img/variant1-4.5af13b48.jpg" 
                            class="col-4"
                            width="150" height="150"/>
                      <div class="productInfo col-7">
                          <h2>{{ product.name }}</h2>
                          <h3>{{ product.variantName}}</h3>
                          <p>{{ product.dimensions}}cm</p>
                      </div>
                      <div class="col-1">
                         <button class="removebutton" @click="$emit('close')"> 
                            <removeIcon />
                        </button>
                      </div>
                  </div>
                  <!-- repeat -->

                  <div class="categoryContainer col-4 text-center d-none d-md-block">
                       <chartContainer :datapercent="item.percentage" :itemname="item.name"></chartContainer>
                  </div>
                </div>
            </div>

        </div>
      </div>
      </transition>




      <transition enter-class="animated slideInRight" leave-active-class="animated slideOutLeft">
        <div class="row justify-content-center" v-if="checkoutStep == 2" >
            
            <div class="col-12 col-md-8">
              <div class="cartTitle2 col-12 col-md-8">
                  <h1>{{$t('checkout-title-step2')}}</h1>
              </div>
            </div>

            <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
               <div class="shippingOptions col-12 col-md-8">
              <div class=" col-12 col-md-8">
                <label class="radioButtonStyle" v-for="option in deliveryOptions">
                    <input type="radio" 
                            :id="option.id" 
                            :value="option.name" 
                            v-model="selectedOs" checked="checked"> 
                    <div class="radioButton"></div>{{option.name}}
                </label>
              </div>
              </div>
            </transition>

            <div class="notes col-12 col-md-8">
              <div class="col-12 col-md-8">
                <h3>{{$t('checkout-notes')}}</h3>
                <div class="input_group">  
                    <input id="notesInput"
                            type="text"
                            name="notes" placeholder=" ">
                    <label>{{$t('checkout-notes-placeholder')}}</label>
                    <span class="bar"></span>
                </div>
              </div>
            </div>

        </div>
      </transition>



      <transition appear enter-active-class="animated slideInUp delay-1s">
          <div class="row pagecontrols">
              <a   v-if="checkoutStep == 2" 
                  @click="checkoutStep = 1" href="javascript:void(0)" 
                  class="backlink col-12 col-md-2"><arrowRightIcon />{{$t('checkout-prev-step')}}</a>
              
              <div class="info" :class="(checkoutStep === 1 ? 'col-12 col-md-9': 'col-12 col-md-6')">
                <p>
                  <span class="textUppercase" style="margin-right: 20px">
                      <b>{{$t('checkout-total')}}</b>
                      <span class="textColor">
                          {{totalProducts.generalquantity}} 
                          {{$tc('checkout-products', totalProducts.generalquantity )}}:</span>
                  </span>  
                  <template v-for="item in totalProducts.categoriesTotal"> 
                      {{item.number}} {{$tc('checkout-products', item.number)}} ({{item.name}}) {{item.dimensions}}m<sup>3</sup>
                  </template>
                </p>
              </div>

              <a  @click="checkoutStep = 2" href="javascript:void(0)" 
                  :class="(checkoutStep === 1 ? 'cartLink col-12 col-md-3': 'cartLink col-12 col-md-4')">
                  <arrowRightIcon />{{$t('checkout-next-step')}}</a>
            
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
import removeIcon from '@/components/ui/removeIcon.vue'
import chartContainer from '@/components/ui/chartContainer.vue'

export default {
  name: 'shoppingCartPage',
  components: {
      removeIcon,
      arrowRightIcon,
      cartIcon,
      shareIcon,
      modalShare,
      modalGallery,
      chartContainer
  }, 
  data() {
    return {
        checkoutStep: 1,
        page: '',
        categoryContainers: [],
        containerItems: [],
        totalProducts: '',
        categoriesTotal: '',
        deliveryOptions: []
    }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  },
  created(){
 
        this.$http.get('../mocks/cart-list-mock.json').then(response => {
            this.categoryContainers = response.data.categoryContainers
            this.containerItems = response.data.categoryContainers.containerItems
            this.totalProducts = response.data.totalProducts
            this.deliveryOptions = response.data.deliveryOptions
        })
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    }
  }
}
</script>

<style lang="scss">
body{margin: 0}

#shoppingCartPage{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 200px;
    margin-bottom: 200px;

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


    .cartTitle h1,
    .cartTitle2 h1{
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
          margin-bottom: 100px;

          .categoryRow{
            position: relative;
            border-bottom: 1px solid #909090;

            & > p {
              padding: 10px;
              margin-bottom: 0;
              background: #FFF;
            }

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
            margin-top: -1px;

            .productInfo{
              height: 150px;

              h2{ margin-bottom: 32px;}
              h3{ margin-bottom: 30px;}
            }

            &:first-child{border-top:0;}
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
          -webkit-transition:     max-width .4s ease, width .4s ease;
          -moz-transition:        max-width .4s ease, width .4s ease;
          -o-transition:          max-width .4s ease, width .4s ease;
          transition:             max-width .4s ease, width .4s ease;
        }
        
        .info{
            background: #1F1F1F;
            color: #FFF;
            white-space: nowrap;
            
            span{
                font-family: 'Oswald', sans-serif;
                font-size: 18px;
                font-weight: 200;
            }

            sup{
              margin-right: 20px;
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
                -webkit-transition:     opacity 0.2s ease, left 0.2s ease;
                -moz-transition:        opacity 0.2s ease, left 0.2s ease;
                -o-transition:          opacity 0.2s ease, left 0.2s ease;
                transition:             opacity 0.2s ease, left 0.2s ease;
                opacity:0;
            }

            .arrowSlimIcon{
                position: absolute;
                top: 44%;
                left: 162px;
                -webkit-transition:     opacity 0.2s ease, left 0.2s ease;
                -moz-transition:        opacity 0.2s ease, left 0.2s ease;
                -o-transition:          opacity 0.2s ease, left 0.2s ease;
                transition:             opacity 0.2s ease, left 0.2s ease;
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
                -webkit-transition:     width 0.2s ease;
                -moz-transition:        width 0.2s ease;
                -o-transition:          width 0.2s ease;
                transition:             width 0.2s ease;
            }

            .arrowSlimIcon{
                transform: rotate(180deg);
                position: absolute;
                top: 44%;
                right: 112px;
                -webkit-transition:     right 0.2s ease;
                -moz-transition:        right 0.2s ease;
                -o-transition:          right 0.2s ease;
                transition:             right 0.2s ease;
            }

            &:hover{
              &:before{width: 70px;}
              .arrowSlimIcon{ right: 132px; }
            }
        }
    }

    .notes{
      margin: 100px 0 200px;

      .input_group{ margin-top: 30px;}
    }
}


@media (max-width: 768px) {
    #shoppingCartPage .cartTitle h1:before, #shoppingCartPage .cartTitle2 h1:before {
        display: none;
    }

    #shoppingCartPage .productCart{
      background: #FFF;
      border-top: 0!important;
      margin-bottom: 2px;
    }
}


@-webkit-keyframes progress {
  0% {
    stroke-dasharray: 0 283;
  }
}

@-moz-keyframes progress {
  0% {
    stroke-dasharray: 0 283;
  }
}

@-ms-keyframes progress {
  0% {
    stroke-dasharray: 0 283;
  }
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 283;
  }
}

</style>
