<template>
    <div class="modalSearch">

         <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
          </transition>


        <div class="row" v-bind:class="{hasSearchText}">
          <div class="col-6 clearfix">  
              <input id="search" name="searchInput" v-model="searchText"
                      :placeholder="$t('search-input-placeholder')"
                      type="search"
                      @input="onTextInputChanged">
          </div>
        </div>


        <transition enter-active-class="animated fadeInUpBig faster" leave-active-class="animated fadeOutDownBig faster">
        <div class="resultsList" v-if="hasSearchText" :class="{hasSearchText}">
            <div class="container col-12">    
                <div v-for="section in sections" v-if="section.length > 0" :key="section.id">

                    <p class="numberResults">{{ section.title }} <span></span>{{ section.results }}</p>

                    <ul>
                        <li v-for="itemlist in section.list" :key="itemlist.id">
                          <router-link :to="itemlist.link">
                              <div class="img">
                                <img  width="190px" height="190px"
                                      :src="getImgUrl(itemlist.src)"
                                      :alt="itemlist.name"/>
                              </div>
                              
                              <div class="text">
                                  <h2 v-html="itemlist.name">{{itemlist.name}}</h2>
                                  <p> {{itemlist.stock}} <span class="stock"> {{ $t('in-stock')}}</span></p>
                              </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- SEM RESULTADOS -->
            <div class="container col-12" v-if="hasSearchText && sections.length == 0">
                <p class="text-center" style="font-size: 25px">{{ $t('no-search-result')}}</p>
            </div>
        </div>
      </transition>
    </div>
</template>

<script>

import closeIcon from '@/components/ui/closeIcon.vue'

    export default {
      name: "searchPage",
      components: {
          closeIcon
      },
      data(){
        return {
          sections: [],
          searchText: "",
          hasSearchText: false
        }
      }, 
      mounted() {
        this.$eventBus.$emit('pageFinishLoad', true);

        let query = this.$route.query // Querystring params

        if (!(query && query.term)) return // no value defined

        this.searchText = query.term
        this.hasSearchText = true
        this.search()
      },
      methods: {

          getImgUrl: function (src) {
              return require( '@/assets/images/'+src )
          },
          search: function()
          {
            this.$http.get('./mocks/search-mock.json').then(response => {
                this.sections = response.data.sections
            })
          },
          onTextInputChanged (e) {

            this.hasSearchText = this.searchText != "" && this.searchText.length > 0
            this.search()
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
    z-index: 4;
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
        -webkit-appearance: none;
        appearance: none;

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
    -webkit-overflow-scrolling: touch;
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

      overflow: hidden;
 
      li{
        margin-bottom: 54px;
        opacity: 0;
        -webkit-transform:     translateX(10%);
        -moz-transform:        translateX(10%);
        -o-transform:          translateX(10%);
        transform:             translateX(10%);
        transition: 0.4s;

        a{
            display: flex;
            width: 100%; 
            text-decoration: none;
            -webkit-transition:   transform 0.2s ease;
            -moz-transition:      transform 0.2s ease;
            -o-transition:        transform 0.2s ease;
            transition:           transform 0.2s ease;

            &:hover {
              -webkit-transform:     translateX(1%);
              -moz-transform:        translateX(1%);
              -o-transform:          translateX(1%);
              transform:             translateX(1%);
            }
        }

        .img{
          margin-right: 52px;
          width: 190px;
          height: 190px;
          overflow: hidden;

          img{
            -webkit-transition:   transform 0.2s ease;
            -moz-transition:      transform 0.2s ease;
            -o-transition:        transform 0.2s ease;
            transition:           transform 0.2s ease;
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
              -webkit-transform: scale(1.1);
              -moz-transform:    scale(1.1);
              -o-transform:      scale(1.1);
              transform:         scale(1.1);
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
      -webkit-transform:     translateX(0);
      -moz-transform:        translateX(0);
      -o-transform:          translateX(0);
      transform:             translateX(0);
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

@media (max-width: 812px) {
    .resultsList ul li {
        .img{
          width: 129px;
          height: 129px;
          margin-right: 20px;
        }
        h2{font-size: 16px}
        p{ font-size: 14px}
    }
    
}
</style>
