<template>
    <header>
      <div class="containerHeader d-flex">
          <div class="logo d-flex col-lg-2 col-md-1" itemscope itemtype="http://schema.org/Organization">
              <router-link to="/" itemprop="url">
                <img class="d-none d-md-block" itemprop="logo" 
                    src="../assets/images/logo/logo.svg" 
                    v-bind:alt="$t('logo-aria-label')"
                    v-bind:title="$t('logo-aria-label')"
                    v-bind:aria-label="$t('logo-aria-label')" />
                <img class="d-block d-md-none" itemprop="logo" 
                    src="../assets/images/logo/logo_mobile.svg" 
                    v-bind:alt="$t('logo-aria-label')"
                    v-bind:title="$t('logo-aria-label')"
                    v-bind:aria-label="$t('logo-aria-label')" />
              </router-link>
          </div>
        
         <Menu />

          <keep-alive>
            <MenuMobile :class="{ active: show }" v-if="show" />
          </keep-alive>

          <Language />

          <div class="controls d-flex">
              <button class="buttons searchLink" 
                @click="showModal = true"
                v-bind:aria-label="$t('button-arialabel-open-search')" ></button>

              <a class="buttons accountLink" 
                v-bind:aria-label="$t('button-arialabel-open-login')" 
                href="#"> {{user}} </a>

              <a class="buttons cartLink"
                 v-bind:aria-label="$t('button-arialabel-open-cart')" 
                 href="#"></a>
          </div> 

           
      </div>


      <transition enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
        <ModalSearch v-if="showModal" @close="showModal = false" />
      </transition>

        <button class="closeMenuButton" v-bind:aria-label="$t('button-arialabel-close-menu')" v-if="show" key="on" @click="show = false"></button>
        <button class="openMenuButton"  v-bind:aria-label="$t('button-arialabel-open-menu')" v-else key="off" @click="show = true"></button>
    </header>
    
</template>

<script>
import Menu from './subcomponents/Header_menu.vue'
import MenuMobile from './subcomponents/Header_menu_mobile.vue'
import Language from './subcomponents/Header_language.vue'
import ModalSearch from './subcomponents/ModalSearch.vue'

export default {
    name: 'Header',
    components: {
        Menu,
        Language,
        MenuMobile,
        ModalSearch
    },
    data() {
        return {
            show: false,
            user: uv.user.name,
            showModal: false
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

