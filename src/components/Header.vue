<template>
    <header>
      <div class="containerHeader d-flex">
          <div class="logo d-flex col-lg-2 col-md-1" itemscope itemtype="http://schema.org/Organization">
              <router-link to="/" itemprop="url">
                <slot></slot>
              </router-link>
          </div>
        
         <Menu />

          <keep-alive>
            <MenuMobile :class="{ active: show }" v-if="show" />
          </keep-alive>

          <Language />

          <div class="controls d-flex">
              <button class="buttons searchButton" 
                @click="showModal = true"
                v-bind:aria-label="$t('button-arialabel-open-search')">
                <SearchButton></SearchButton>
              </button>

              <button class="buttons userButton" 
                v-bind:aria-label="$t('button-arialabel-open-login')">
                <UserButton></UserButton>
              </button>

              <button class="buttons cartButton" 
                @click="showCart = true"
                v-bind:aria-label="$t('button-arialabel-open-cart')">
                <CartButton>99</CartButton>
              </button>
          </div>
      </div>

      <transition enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
            <ModalCartResume v-if="showCart" @close="showCart = false"></ModalCartResume>
      </transition>

      <transition enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
            <ModalSearch v-if="showModal" @close="showModal = false"></ModalSearch>
      </transition>

        <button class="closeMenuButton" v-bind:aria-label="$t('button-arialabel-close-menu')" v-if="show" key="on" @click="show = false"></button>
        <button class="openMenuButton"  v-bind:aria-label="$t('button-arialabel-open-menu')" v-else key="off" @click="show = true"></button>
  </header>
    
</template>

<script>
import Menu from './subcomponents/Header_menu.vue'
import MenuMobile from './subcomponents/Header_menu_mobile.vue'

import Language from './subcomponents/Header_language.vue'
import SearchButton from './ui/searchButton'
import CartButton from './ui/cartButton'
import UserButton from './ui/userButton'

import ModalSearch from './subcomponents/ModalSearch.vue'
import ModalCartResume from './subcomponents/ModalCartResume.vue'



export default {
    name: 'Header',
    components: {
        Menu,
        Language,
        MenuMobile,
        ModalSearch,
        ModalCartResume,
        SearchButton,
        UserButton,
        CartButton
    },
    data() {
        return {
            show: false,
            //user: uv.user.name,
            showModal: false,
            showCart: false
        }
    },
}
</script>


<style lang="scss">

 /* .slide-enter-active {
 -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 5s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 5s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}*/
.slide-enter-to, .slide-leave {
   max-height: 100%;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>

