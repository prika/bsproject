<template>
  <div id="bstoneproject" :class="$route.name">
  
      <transition leave-active-class="animated slideOutUp faster">
          <Preloader v-if=" isLoaded === false " class="loader"></Preloader>
      </transition>
      
      <keep-alive>
      <Header v-if="!(['faqs', 'privacy-policy'].indexOf($route.name) > -1)">
            <div class="logo d-flex col-lg-2 col-md-2" itemscope itemtype="http://schema.org/Organization">
                <router-link to="/" itemprop="url" :alt="'Link to ' + $t('logo-aria-label')">
                    <!-- Desktop -->
                    <img v-if="!isMobile()" class="d-none d-md-block" itemprop="logo" 
                        src="./assets/images/logo/logo_home.svg" 
                        :alt="$t('logo-aria-label')"
                        :title="$t('logo-aria-label')"
                        :aria-label="$t('logo-aria-label')" />
                    <!-- Desktop and Mobile -->
                    <img class="d-block d-md-none" itemprop="logo" 
                        src="./assets/images/logo/logo_home_mobile.svg" 
                        :alt="$t('logo-aria-label')"
                        :title="$t('logo-aria-label')"
                        :aria-label="$t('logo-aria-label')" />
                </router-link>
            </div>

            
            <Menu v-if="!isMobile()" />
            <MenuMobile v-else-if="isMobile() && showMobileMenu == true" @close="showMobileMenu = false" />
            
            <button class="openMenuButton"  
                    v-bind:aria-label="$t('button-arialabel-open-menu')"  
                    v-if="isMobile()"
                    @click="showMobileMenu = true"></button>
      </Header>
      </keep-alive>
      
      <router-view />

      <Scroll v-if="!isMobile() && (['Home', 'bloco-b'].indexOf($route.name) > -1)" />

      <keep-alive>
      <Address v-if="!(['faqs', 'privacy-policy', 'news', 'newsdetail', 'product', 'productdetail', 'shoppingcart'].indexOf($route.name) > -1)" />
      </keep-alive>

      <keep-alive>
      <Contacts v-if="!(['faqs', 'privacy-policy','news', 'newsdetail', 'product', 'productdetail', 'shoppingcart'].indexOf($route.name) > -1)" />
      </keep-alive>

      <keep-alive>
      <Footer v-if="!(['faqs', 'privacy-policy','product', 'productdetail', 'shoppingcart'].indexOf($route.name) > -1)" />
      </keep-alive>
  </div>
</template>

<script>
import Preloader from './components/Preloader.vue'
import Menu from '@/components/subcomponents/Header_menu.vue'
import MenuMobile from '@/components/subcomponents/Header_menu_mobile.vue'
import Scroll from '@/components/subcomponents/scroll'
import Header from './components/Header.vue'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer.vue'

export default {
  name: 'bstoneproject',
  components: {
      Preloader,
      Header,
      Menu,
      MenuMobile,
      Scroll,
      Address,
      Contacts,
      Footer
  },
  data() {
      return {
          isLoaded: false,
          showMobileMenu: false
      }
  },
  beforeCreate() {
      this.isLoaded = false
     // debugger
  },
  created() {
    this.$http.get('../mocks/global-mock.json').then(response => {
        this.$eventBus.$emit('jsonGlobalLoaded', response);

       // debugger
    })
    // .then(
    //     this.isLoaded = true
    // )
  },
  mounted() {

    this.$eventBus.$on('componentFinishLoad', (data) => {
       // debugger
        this.isLoaded = true;
      })
  },
  // beforeUpdate() {
  //     //this.isLoaded = false;
  //     console.log('before update')
  // },
  // updated() {
  //     //this.isLoaded = true;
  //     console.log('updated')
  // },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    }
  },
  watch: {
    isLoaded: function(newVal, oldVal) 
    { 
        console.log('mudou de'+oldVal+" para "+newVal)
    }
  }
}
</script>

<style lang="scss">
  @import './assets/styles/_bootstrap';
  //@import './assets/styles/_variables';
  @import './assets/styles/_custom';
  @import './assets/styles/_styles';
</style>