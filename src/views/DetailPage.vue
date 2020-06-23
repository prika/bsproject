<template>
  <div id="detailPage">
      <div class="detailPageGeneral">
          <transition appear enter-active-class="animated slideInLeft">
            <div class="productDetailLeft col-6">
                <p class="productName" itemprop="name">
                    <mark>
                        <span></span>
                        {{ product.firstName }} </br> {{ product.secondName }}
                    </mark>
                </p>
                <h1 class="pageTitle">{{product.categoryNameSplit1}}<span>{{product.categoryNameSplit2}}</span></h1>
            </div>
          </transition>

          <transition appear enter-active-class="animated slideInRight">
            <div class="productDetailLinks col-7">
                <a href="/">{{product.categoryName}}</a>
                <a href="/">Simulador</a>
            </div>
          </transition>
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
        product: ''    
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

              .productName{
                  width: 270px;
                  position: absolute;
                  top: 200px; right: 0;
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

              &:hover .productImage{ transform: scale(1.1); }

              .pageTitle{ margin: 0 auto; left: 10%; bottom: 40px; }
          }
          
      }

      

      .productDetailLinks{
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        right: 0;
      }
  }



  // .product .productImage{
	// 		width: 260px;
	// 		height: 373px;
  //           overflow: hidden;

	// 		-webkit-transition: all 0.5s ease;
	// 		-moz-transition: all 0.5s ease;
	// 		-o-transition: all 0.5s ease;
	// 		transition: all 0.5s ease;

  //           img {
  //               width: 100%;
  //           }
	// 	}

  
</style>
