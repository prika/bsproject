<template>
    <transition appear enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        
        <div class="modal-mask">
            <transition appear enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
                <button class="closebutton" @click="$emit('close')"> 
                    <closeIcon rectBackgroundColor="#FFFFFF" strokeColor="#3E3E3E" borderColor="#ccc"/>
                </button>
                <!--button class="closeMenuButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="showMobileMenu = false"></button-->
            </transition>

            <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutDown">
                <nav class="menuMobile">
                    <Language />

                    <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                        <li v-for="item in itensMenu" :key="item.id" itemprop="name">
                            <router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
                        </li>
                    </ul>
                </nav>
            </transition>

            <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutDown">
                <div class="mobileAdd">
                    <a href="/simulador">{{$t('simulator')}}</a>
                    
                    <SocialButtons />
                </div>
            </transition>

            <!--transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                    
                <nav class="col-12 col-md-4 blocoBSelectCategory">
                    <ul class="categoryMenu" ref="filterCategory" key="filterCategory" >
                        <li v-for="category in categories">
                            
                            <a  href="javascript:void(0);"
                                @click="filterByCategory(category.id)">{{category.name}}</a>

                            <ul :class="'cat-'+selectedCategory+' collectionMenu'" ref="filterCollection" key="filterCollection">
                                <li class="filters__item" v-for="collection in collections" :class="(collection.id === selectedCollection ? 'filters__item active': 'filters__item')">
                                    <a  href="javascript:void(0);" 
                                        @click="filterByCollection(collection.id)">{{collection.name}}</a>
                                </li>
                            </ul>

                        </li>
                    </ul>

                    <router-link to="/simulator" class="simulatorLink">Simulador</router-link>
                </nav>
            </transition-->
        </div>
    </transition>
</template>

<script>
import closeIcon from '@/components/ui/closeIcon.vue'
import Language from '@/components/subcomponents/Header_language.vue'
import SocialButtons from '@/components/ui/socialButtons.vue'

export default {
    name: 'MenuMobile',
    components: {
        closeIcon,
        Language,
        SocialButtons
    },
    data() {
        return {
            itensMenu: [],
            showMobileMenu: true
        }
    },
    created() {
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.itensMenu = response.data.menu
        })
    }
}
</script>

<style lang="scss">

.modal-mask{ 
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFF;
    overflow-y: scroll;
}

.menuMobile {
    padding-top: 150px;
    padding-bottom: 50px;

    & > ul{
        list-style: none;
        width: 100vw;
        padding-left: 0;

        & li {
            width: 100%;
            text-align: center;

            a{
                display: block;
                font-family: 'Oswald', sans-serif;
                font-size: 1.4rem;
                line-height: 4rem;
                font-weight: 300;
            }
        }
    }
}


  .mobileAdd{
        background-color: #313131;
        //height: 240px;
        //position: fixed;
        text-align: center;
        z-index: 2;
        //bottom: -240px;
        //left: 0; right: 0;
        //overflow: hidden;
    
        .social-icons{
            justify-content: center;
        }
    } 
  
    //   &.active{
    //     top: 0;
  
    //     & .mobileAdd{ 
    //       bottom: 0!important;
    //     }
    //   }
  

  .controls .buttons{
      border: none;
      border-left: 1px solid #E8E8E8;
      width: 90px; 
      outline: none!important;
  }

  .openMenuButton{
    display:    block;
    position:   fixed;
    width:      90px;
    height:     90px;
    top:        20%;
    right:      40px;
    border:     0;
    background-size:  30px;
    background:       center center no-repeat url(../../assets/images/icons/menu.svg);
  }

</style>