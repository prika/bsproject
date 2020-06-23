<template>
  <div id="detailPage">
      <div class="detailPageGeneral">
          <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
            <div :class="(showDetail === true ? 'productDetailLeft col-2 showDetail': 'productDetailLeft col-5')">
                <p class="productName" itemprop="name">
                    <mark>
                        <span></span>
                        {{ product.firstName }} </br> {{ product.secondName }}
                    </mark>
                </p>
                <h1 class="pageTitle" v-show="!showDetail">{{product.categoryNameSplit1}}<span>{{product.categoryNameSplit2}}</span></h1>
                
                <a class="backLink" href="javascript:void(0)" @click="showDetail = !showDetail" v-show="showDetail">Voltar</a>
                
                <div class="containerImage">
                    <img :src="getImgUrl(product.imgURL)"
                    class="productImage"
                    :alt="product.name" itemprop="image">
                </div>
            </div>
          </transition>

          <transition-group enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
              <div class="productDetailLinks col-8" key="1" v-if="!showDetail">
                  <a href="javascript:void(0)" @click="showDetail = !showDetail">{{product.categoryName}}</a>
                  <router-link to="/simulator">Simulador</router-link>
              </div>
          
              <div class="productDetailLinks col-9" key="2" v-else>
                  <table>
                    <tr>
                        <td>image</td>
                        <td>BE1-266</td>
                        <td>Medidas</td>
                        <td>Peso</td>
                    </tr>
                     <tr>
                        <td>image</td>
                        <td>BE1-266</td>
                        <td>Medidas</td>
                        <td>Peso</td>
                    </tr>
                     <tr>
                        <td>image</td>
                        <td>BE1-266</td>
                        <td>Medidas</td>
                        <td>Peso</td>
                    </tr>
                  </table>
              </div>
          </transition-group>
      </div>

  </div>
</template>

<script>
import Simulate from '@/components/subcomponents/scroll.vue'

export default {
  name: 'detailPage',
  components: {
      Simulate
      // Footer
  }, 
  data() {
    return {
        product: '',
        showDetail: false  
    }
  },
  methods:{
      getImgUrl: function (src) {
          return require('@/assets/images/'+src)
      }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  },
  created(){
        this.$http.get('../mocks/products-detail-mock.json').then(response => {
            
            this.product = response.data.product
            //this.parseObject(response.data.products, this.products)
        })
    }
}
</script>

<style lang="scss">

body{margin: 0}
footer{display:none}

#bstoneproject{ height: 100vh; }

  #detailPage{
      height: 100%;

      .detailPageGeneral{
          height: 100%;
          position: relative;

          .productDetailLeft{
             width: 100%;
             height: 100%;
             position: relative;
             padding: 0;
             -webkit-transition:  all 0.5s ease .2s;
            -moz-transition:      all 0.5s ease .2s;
            -o-transition:        all 0.5s ease .2s;
            transition:           all 0.5s ease .2s;

              .productName{
                  width: 270px;
                  position: absolute;
                  top: 200px; right: -20%;
                  z-index: 2;
                        
                  font-family: 'Noe Display', serif;
                  font-weight: normal;
                  font-size: 60px;
                  line-height: 70px;
                  color: #333;
                  text-align: left;
                  text-indent: 25px;

                  -webkit-transition: all 0.5s ease;
                  -moz-transition: all 0.5s ease;
                  -o-transition: all 0.5s ease;
                  transition: all 0.5s ease;

                  span{
                    border: 3px solid #333;
                    width: 32px;
                    display: block;
                    content: '';
                    position: absolute;
                    top: 29px;
                    left: -10px;
                  }

                  mark {
                    background-color: white;
                    padding: 2px 5px;
                  }
              }


              .containerImage{
                height: 100%;
                overflow: hidden;
                z-index: 0;

                img {
                  min-width: 100%;
                  min-height: 100%;
                  -webkit-transition: all 0.2s ease;
                  -moz-transition: all 0.2s ease;
                  -o-transition: all 0.2s ease;
                  transition: all 0.2s ease;
                }
              }

              &:hover .containerImage img,
              & .productName:hover > .containerImage img,
              & .pageTitle:hover > .containerImage img{ 
                cursor: pointer;
                transform: scale(1.2); 
              }

              .pageTitle{ 
                z-index: 2; margin: 0 auto; left: 10%; bottom: 40px;
              }

              .backLink { 
                position: absolute;
                bottom: 10%;
                left: 10%;
                z-index: 2;
              }
          }

          .productDetailLinks{
              height: 100%;
              padding: 35% 0 0;
              z-index: 2;
              position: absolute;
              display: block;
              top: 0;
              bottom: 0;
              right: 0;

              a {
                  display: block;
                  float: left;
                  clear: left;
                  padding-bottom: 20px;

                  font-family: 'Oswald', sans-serif;
                  font-size: 25px;
                  font-weight: 500;
                  color: #333;
                  text-decoration: none;
                  text-transform: uppercase;
                  letter-spacing: 4px;
                  padding-left: 220px;
                  position: relative;
                  -webkit-transition:     all 0.2s ease;
                  -moz-transition:        all 0.2s ease;
                  -o-transition:          all 0.2s ease;
                  transition:             all 0.2s ease;

                  &:before{
                      position: absolute;
                      top: 20px;
                      left: 10px;
                      content: '';
                      width: 190px;
                      height: 1px;
                      background: #6A6A6A;
                  }

                  &:hover{ color: #C47C5A }
              }
          }
      }
  }
  
</style>
