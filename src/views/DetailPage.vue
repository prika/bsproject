<template>
  <div id="detailPage">
      
      <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
          <div :class="(showDetail === true ? 'productDetailLeft col-2 showDetail': 'productDetailLeft col-5')">
              <p class="productName" itemprop="name">
                  <mark>
                      <span></span>
                      {{ product.firstName }} </br> {{ product.secondName }}
                  </mark>
              </p>
              <h1 class="pageTitle" v-show="!showDetail">{{product.categoryNameSplit1}}<span>{{product.categoryNameSplit2}}</span></h1>
              
              <a  class="backLink" href="javascript:void(0)" 
                  @click="showDetail = !showDetail" 
                  v-if="simulator == true"
                  v-show="showDetail" ><arrowLeftIcon /> {{$t('backlink')}}</a>
              
              <div class="containerImage">
                  <img :src="getImgUrl(product.imgURL)"
                  class="productImage"
                  :alt="product.name" itemprop="image">
              </div>
          </div>
      </transition>

      <transition enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
          <div class="productDetailLinks col-8" key="1" v-if="!showDetail">
              <a href="javascript:void(0)" @click="showDetail = !showDetail">{{product.categoryName}} <sup class="variantsquantity">({{product.variants.length}})</sup></a>
              <router-link to="/simulator">{{$t('simulator')}}</router-link>
          </div>
      </transition>
      
      <transition tag="div" enter-active-class="animated fade" leave-active-class="animated fade">
          <div class="productVariationList col-12 col-md-10 col-lg-9" key="2" v-if="showDetail">
                <div class="filters col-12 col-lg-8 col-xl-6">
                    <div class="order">

                        <a @click="customFilter( filter.id, 'asc')"
                          href="javascript:void(0)"
                           v-for="filter in product.filters" 
                           :key="filter.id">
                           {{filter.name}}</a>
                    </div>
                    <div class="pagination">
                        <p><span class="active">[[01]]</span>/[[02]]</p>
                        <a href="/" class="arrowRight"> <arrowRightIcon /></a>
                    </div>
                </div>
            </div>
      </transition>
        
      <transition tag="div" enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
          <div class="productVariationList col-12 col-md-10 col-lg-9" key="3" v-if="showDetail">
              <div class="col-12 col-lg-10 col-xl-8">

                <div class="tableScroll">
                  <ul class="variantTable">
                        <router-link to="/productpage/:id" tag="li"  class="variantItem" 
                                  v-for="variant in orderedVariants" :key="variant.name">
                     
                              <div class="img">
                                <img :src="variant.img" :alt="variant.alt" />
                              </div>
                              <div class="info row">
                                  <h2 class="col-12 col-md-4">{{variant.ref}}</h2>
                                  
                                  <div class="col-12 col-md-4">
                                    <p><span>{{product.titleSize}}</span><br>{{variant.size.width}}x{{variant.size.height}}x{{variant.size.depth}} {{$t('units_cm')}}</p>
                                  </div>

                                  <div class="col-12 col-md-4">
                                      <p><span>{{product.titleWeight}}</span><br>{{variant.weight}} {{$t('units_ton_abrev')}}</p>
                                  </div>
                              </div>
                      
                        </router-link>
                  </ul>
                </div>
                
              </div>
          </div>
      </transition>
  </div>
</template>

<script>
import Simulate from '@/components/subcomponents/scroll.vue'
import arrowLeftIcon from '@/components/ui/arrow-bold-left.vue'
import arrowRightIcon from '@/components/ui/arrow-slim-right.vue'

export default {
  name: 'detailPage',
  components: {
      Simulate,
      arrowRightIcon,
      arrowLeftIcon
  }, 
  data() {
    return {
        product: '',
        variants: [],
        showDetail:'',
        simulator:''    
      }
  },
  computed: {
    orderedVariants: function () {
      return _.orderBy( this.product.variants, 'ref', this.sortDirection)
    }
  },
  methods:{
      getImgUrl: function (src) {
          return require('@/assets/images/'+src)
      },
      parseObject: function(source, destination)
      {
          for ( var i = 0 ; i < source.length; i++ ) {
              let obj = source[i]
              let fullPath = this.getImgUrl(obj.img)
              obj.img = fullPath
              destination.push(obj)
              this.variants.push(obj)
          }
      },
      customFilter( sortProperty , sortDirection){

        console.log( sortProperty , sortDirection )

        // function orderedVariants () {
        //   return _.orderBy( this.product.variants, this.sortProperty, this.sortDirection)
        // }

        // ev.preventDefault()
        
        // if (this.sortDirection == 'asc' && this.sortProperty == property ) {
        //     this.sortDirection = 'desc'
        // } else {
        //     this.sortDirection = 'asc'
        // }
        // this.sortProperty = property
      }
  },
  created(){
      this.$http.get('../mocks/products-detail-mock.json').then(response => {
          
          this.product = response.data.product
          this.simulator = response.data.product.simulator
          
          if( this.simulator == false) { this.showDetail = true }

          this.parseObject(response.data.product.variants, this.product.variants)

          this.$eventBus.$emit('pageFinishLoad', true)
      })
  }
}
</script>

<style lang="scss">
body{margin: 0}

#detailPage {
    height: 100vh;
    
    .productDetailLeft{
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 2;
      padding: 0;
      -webkit-transition:   all 0.5s ease .2s;
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

            -webkit-transition:   all 0.5s ease;
            -moz-transition:      all 0.5s ease;
            -o-transition:        all 0.5s ease;
            transition:           all 0.5s ease;

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
            -webkit-transition:   all 0.2s ease;
            -moz-transition:      all 0.2s ease;
            -o-transition:        all 0.2s ease;
            transition:           all 0.2s ease;
          }
        }

        &:hover .containerImage img,
        & .productName:hover > .containerImage img,
        & .pageTitle:hover > .containerImage img{ 
          cursor: pointer;
          
          -webkit-transform:     scale(1.2);
          -moz-transform:        scale(1.2);
          -o-transform:          scale(1.2);
          transform:             scale(1.2);
        }

        .pageTitle{ 
          z-index: 2; margin: 0 auto; left: 10%; bottom: 40px;
        }

        .backLink { 
          position: fixed;
          bottom: 70px;
          right: 90%;
          width: 105px;
          z-index: 2;
          display: block;
          text-align: right;
          font-family: 'Oswald', sans-serif;
          font-size: 18px;
          font-weight: 200;
          color: #FFF;
          text-decoration: none;
          letter-spacing: 2px;

          &:before{
                position: absolute;
                top: 13px;
                right: 54px;
                content: '';
                width: 30px;
                height: 2px;
                background: #FFF;
                -webkit-transition:     width 0.2s ease;
                -moz-transition:        width 0.2s ease;
                -o-transition:          width 0.2s ease;
                transition:             width 0.2s ease;
          }

          .arrowBoldIcon{
              transform: rotate(180deg);
              position: absolute;
              top: 3px;
              left: 20px;
              -webkit-transition:     left 0.2s ease;
              -moz-transition:        left 0.2s ease;
              -o-transition:          left 0.2s ease;
              transition:             left 0.2s ease;
          }

          &:hover{
            &:before{width: 50px;}
            .arrowBoldIcon{left: 0px;}
          }
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
            -webkit-transition:     color 0.2s ease;
            -moz-transition:        color 0.2s ease;
            -o-transition:          color 0.2s ease;
            transition:             color 0.2s ease;

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

    .variantsquantity{
      font-weight: 300;
      font-size: 15px;
      letter-spacing: 1px;
      color: #575757;
    }

    .productVariationList {
        position: absolute;
        top: 230px;
        right: 0;

        .filters{
            background: #F0F0F0;
            height: 150px;
            position: fixed;
            padding: 90px 20px;
            top: 124px;
            left: 25%;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            transition: all 0.1s ease;

            .order a,
            .pagination p {
                font-family: "Oswald", sans-serif;
                color: #333;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                font-size: 15px;
                font-weight: 400;
                white-space: nowrap;
                margin: 0;
                position: relative;
            }

            .order a {
              padding: 0 20px;

              &::before{
                content: '';
                position: absolute;
                display: block;
                left: 20%;
                top: 11px;
                height: 1px;
                width: 0;
                background: #b7b7b7;
                -webkit-transition:     width 0.2s ease;
                -moz-transition:        width 0.2s ease;
                -o-transition:          width 0.2s ease;
                transition:             width 0.2s ease;
              }

              &::after { 
                content: '';
                position: absolute;
                display: block;
                left: 0;
                top: 5px;
                height: 12px;
                width: 1px;
                background: #333;
              }

              &:first-child::after { display: none; }
            
              &:hover,
              &.active {
                 color: #b7b7b7;

                 &::before{width: 65%;}
              }
            }

            .pagination p {
              font-size: 20px;
              font-weight: 300;
              cursor: pointer;
              
                span.active{
                  font-size: 24px;
                  font-weight: 500;
                }
            }

            .pagination {
                .arrowRight {
                    width: 70px;
                    height: 15px;
                    display: block;
                    position: relative;
                    margin-top: 6px;

                    .arrowSlimIcon{
                      float: right;
                    }

                    &::before{
                        position: absolute;
                        top: 13px;
                        right: 0;
                        content: '';
                        width: 40px;
                        height: 1px;
                        background: #333;
                        -webkit-transition:     width 0.2s ease;
                        -moz-transition:        width 0.2s ease;
                        -o-transition:          width 0.2s ease;
                        transition:             width 0.2s ease;
                    }
                }

                &:hover {
                  span.active {color: #C47C5A;}

                  .arrowRight::before{
                      width: 60px;
                  }
                }
            }
        }
        
        ul.variantTable {
            padding: 0;
            list-style: none;
            margin: 85px 0;

            li{
                width: 100%;
                height: 180px;
                margin-bottom: 1px;
                background: #FFF;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                .img{
                  width: 190px;
                  height: 160px;
                  margin-left: 10px;
                  overflow: hidden;
                  
                
                  img{
                    min-height: 100%;
                    width: 100%;
                    -webkit-transition:   transform 0.2s ease;
                    -moz-transition:      transform 0.2s ease;
                    -o-transition:        transform 0.2s ease;
                    transition:           transform 0.2s ease;
                  }
                }

                &:hover{
                    overflow: none;

                    h2{ color: #C47C5A}

                    img{
                        -webkit-transform:     scale(1.1);
                        -moz-transform:        scale(1.1);
                        -o-transform:          scale(1.1);
                        transform:             scale(1.1);
                    }
                }

                .info {
                  height: 70px;
                  width: 100%;
                  display: flex;
                  //justify-content: stretch;
                  align-items: center;
                  text-align: center;


                  h2{
                    font-family: 'Oswald', sans-serif;
                    font-weight: 400;
                    font-size: 28px;
                    text-transform: uppercase;
                  }

                  div {
                    height: 70px;
                    border-left: 1px solid #B7B7B7;
                    //display: flex;

                    p {
                      font-family: 'Oswald', sans-serif;
                      font-weight: 300;
                      font-size: 21px;
                      letter-spacing: 1px;
                      color: #575757;

                      span {
                        text-transform: uppercase;
                        font-size: 15px;
                      }
                    }
                  }
                }
            }
        }
    }
}

@media (max-width: 768px) {

    #detailPage {
      
      .productDetailLeft {

        &.showDetail{ 
            width: 0; 

            .productName {
                text-indent: 0;
                top: 67px;
                padding: 40px 0 30px;
                font-size: 38px;
                line-height: 43px;
                background-color: #F0F0F0;
                text-align: center;

                mark{background-color: transparent;}
                span{ display: none}
            }
        }

        .productName{
          position: fixed;
          width: 100%;
          text-align: center;
          right: 0;
        }

        .pageTitle{display: none;}
      }

      .productDetailLinks{
          padding: 100% 0 0;
          left: 25%;

           a {
              padding-left: 130px;

              &:before{
                width: 100px;
              }
           }
      }

      .productVariationList ul.variantTable li{
          display: table;
          height: auto;
          width: auto;
          margin: 20px auto;
          padding: 30px;

          .img{
            margin: 0 auto;
            width: auto;
            height: auto;
          }
          .info{
              height: auto;
              width: auto;

              h2{ margin: 30px auto; }
              div { margin: 5px auto; border: 0; }
          }
      }

      .productVariationList {
          top: 170px;

          .filters{display: none;}
      }
    }
   
}

@media (max-width: 1024px) {
  .productVariationList .filters{left: 155px;}
}
</style>
