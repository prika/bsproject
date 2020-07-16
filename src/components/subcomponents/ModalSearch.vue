<template>
    <div class="modalSearch">  <!-- <PORTAL to="search" -->

        <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
            <button class="closebutton" @click="$emit('close')"> 
                <closeIcon />
            </button>
        </transition>

       

        <div class="row" v-bind:class="{hasSearchText}">
          <div class="col-6 clearfix">  
              <input id="search"
                      placeholder="Pesquisar"
                      type="search"
                      name="searchInput"
                      v-model="searchText"
                      @input="onTextInputChanged">
          </div>
        </div>

        <transition enter-active-class="animated fadeInUpBig faster" leave-active-class="animated fadeOutDownBig faster">
        <div class="resultsList" v-if="hasSearchText" v-bind:class="{hasSearchText}">
            
            <!-- RESULTADOS -->
            <div class="container col-12">
                
                <div v-for="item in sections" v-if="item.results > 0">
                    <p  class="numberResults">
                      {{ item.title }} <span></span>{{item.results}}</p>

                    <ul>
                        <li v-for="itemlist in item.list" :key="item.id" :href="itemlist.link">
                            <div class="img">
                              <img  width="190px" height="190px"
                                    :src="itemlist.src" 
                                    :alt="itemlist.name"/>
                            </div>
                            
                            <div class="text">
                                <h2 v-html="itemlist.name">{{itemlist.name}}</h2>
                                <p> {{itemlist.stock}} <span class="stock">em stock</span></p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!--div v-for="item in sections">
                    <p class="numberResults" v-if="searchedNews.length > 0">
                      {{ item.title }} <span></span>{{searchedNews.length}}</p>
                    <ul v-if="searchedNews.length > 0">
                        <li v-for="item in searchedNews">
                          <div class="img">
                                <img width="190px" height="190px" 
                                    :src="item.src" :alt="item.name"/>
                          </div>
                          
                          <div class="text">
                              <h2 v-html="item.name">{{item.name}}</h2>
                              <p v-html="item.content">{{item.content}}</p>
                          </div>
                        </li>
                    </ul>
                </div -->

            </div>
            <!-- FIM RESULTADOS -->

            <!-- SEM RESULTADOS -->
            <!--div class="container col-12" v-if="searchedProducts.length == 0 && searchedNews.length == 0">
              <p class="text-center" style="font-size: 25px">[nenhum resultado encontrado]</p>
            </div-->
            <!-- FIM SEM RESULTADOS -->

        </div>
      </transition>
    </div>
</template>

<script>

import closeIcon from '@/components/ui/closeIcon.vue'

    export default {
      components: {
          closeIcon
      },
      data(){
        return {
          sections: [],
          searchText: "",
          hasSearchText: false
          //searchedProducts: [],
          //searchedNews: []
        }
      },
      methods: {

          getImgUrl: function (src) {
              return require( '@/assets/images/'+src )
          },

          parseObject: function(source, destination)
          {
              destination = []

              for ( var i = 0 ; i < source.length; i++ ) {
                let obj = source[i]
                let fullPath = this.getImgUrl(obj.src)
                obj.src = fullPath
                destination.push(obj)
              }
          },  
         onTextInputChanged (e) {

           this.hasSearchText = this.searchText != "" && this.searchText.length > 0

           //q = this.$route.query.q

           this.$http.get('./mocks/search-mock.json').then(response => {
              this.sections = response.data.sections

              // this.searchedProducts = response.data.products
              // this.parseObject(response.data.products, this.searchedProducts)

              // this.searchedNews = response.data.news
              // this.parseObject(response.data.news, this.searchedNews)
                        
          })
        }
      }
    }
</script>

<style lang="scss">
.modalSearch{
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    overflow: hidden;
    background: #f0f0f0;

    .row{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      -webkit-transition:   height 0.7s ease;
      -moz-transition:      height 0.7s ease;
      -o-transition:        height 0.7s ease;
      transition:           height 0.7s ease;

      &.hasSearchText{
          height: 320px;
      }
    }

    input#search{
        font-family: 'Oswald', sans-serif;
        font-weight: 500;
        font-size: 35px;
        text-align: center;
        text-transform: uppercase;
        
        width: 100%;
        height: 70px;
        margin-top: 50px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #BABABA;
        
        outline: none;

        &::-webkit-input-placeholder,
        &:-ms-input-placeholder,
        &::placeholder {
            font-weight: 300;
            color: #212121;
            letter-spacing: 7px;
        }
    }
}


.resultsList{
    width: 100%;
    height: 100%;
    overflow: scroll;
    position: relative;
    padding: 0;
    padding-top: 65px;
    padding-bottom: 200px;
    margin: 0;
    background-attachment: scroll;
    background: #FFF url(../../assets/images/shared/bg_search.svg) no-repeat -200px top;
    

    .container{
      display: block;
      //overflow: scroll;
      position: relative;
      padding-bottom: 200px;
    }

    .numberResults{
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 18px;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 0.2s;

        span{
          background: #707070;
          display: inline-block;
          margin: 6px 20px;
          width: 45px;
          height: 2px;
        }
    }

    ul{ 
      padding: 0;
      list-style: none;
      margin-top: 65px;
 
      li{
        display: flex;
        margin-bottom: 54px;
        cursor: pointer;
        
        opacity: 0;
        transform: translateX(10%);
        transition: 0.4s;


        .img{
          margin-right: 52px;
          width: 190px;
          height: 190px;
          overflow: hidden;

          img{
            -webkit-transition: all 0.2s ease;
            -moz-transition: all 0.2s ease;
            -o-transition: all 0.2s ease;
            transition: all 0.2s ease;
          }
        }

        mark{
          background: #F0F0F0;
        }

        h2{
          font-family: 'Oswald', sans-serif;
          font-weight: 400;
          font-size: 28px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        p{
           font-family: 'Oswald', sans-serif;
           font-weight: 300;
           font-size: 24px;
           letter-spacing: 1px;
           color: #575757;

           .stock{
             color: #333;
           }
        }
        
        &:hover{
            .img img{
                transform: scale(1.1);
            }
        }

      }
    }

    

}

.resultsList:not(.animated) {

  .numberResults{
    opacity: 1;
  }

  ul li {
    transform: translateX(0);
    opacity: 1;

    &:nth-child(1){ transition-delay: 0.0s; }
    &:nth-child(2){ transition-delay: 0.1s; }
    &:nth-child(3){ transition-delay: 0.2s; }
    &:nth-child(4){ transition-delay: 0.3s; }
    &:nth-child(5){ transition-delay: 0.4s; }
    &:nth-child(6){ transition-delay: 0.5s; }
    &:nth-child(7){ transition-delay: 0.6s; }
  }
}

</style>