<template>
    <header>
      <div class="containerHeader d-flex">
          <div class="logo d-flex col-lg-2 col-md-1" itemscope itemtype="http://schema.org/Organization">
              <a href="https://www.bstone.pt" itemprop="url">
                <img class="d-none d-md-block" src="../assets/images/logo/logo.svg" itemprop="logo" alt="B Stone" title="Homepage B Stone" aria-label="Homepage B Stone" />
                <img class="d-block d-md-none" src="../assets/images/logo/logo_mobile.svg" itemprop="logo" alt="B Stone" title="Homepage B Stone" aria-label="Homepage B Stone" />
              </a>
          </div>
        
         <Menu />

          <transition name="slide">
            <MenuMobile v-bind:class="{ active: show }" v-if="show" />
          </transition>

          <Language />

          <div class="controls d-flex">
              <a class="buttons searchLink" href="#"></a>
              <a class="buttons accountLink" href="#"> {{user}} </a>
              <a class="buttons cartLink" href="#"></a>
          </div> 
      </div>

        <button class="closeMenuButton" v-if="show" key="on" @click="show = false"></button>
        <button class="openMenuButton"  v-else key="off" @click="show = true"></button>
    </header>
</template>

<script>
import Menu from './subcomponents/Header_menu.vue'
import MenuMobile from './subcomponents/Header_menu_mobile.vue'
import Language from './subcomponents/Header_language.vue'

export default {
    name: 'Header',
    components: {
        Menu,
        Language,
        MenuMobile
    },
    data() {
        return {
            show: false,
            user: uv.user.name
        }
    },
}
</script>


<style>

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

