<template>
    <header>
      <div class="containerHeader d-flex">
          <div class="logo d-flex col-lg-2 col-md-1" itemscope itemtype="http://schema.org/Organization">
              <a href="/" itemprop="url">
                <img class="d-none d-md-block" itemprop="logo" 
                    src="../assets/images/logo/logo_home.svg" 
                    v-bind:alt="$t('logo-aria-label')"
                    v-bind:title="$t('logo-aria-label')"
                    v-bind:aria-label="$t('logo-aria-label')" />
                <img class="d-block d-md-none" itemprop="logo" 
                    src="../assets/images/logo/logo_home_mobile.svg" 
                    v-bind:alt="$t('logo-aria-label')"
                    v-bind:title="$t('logo-aria-label')"
                    v-bind:aria-label="$t('logo-aria-label')" />
              </a>
          </div>
        
          <Menu />
          <MenuMobile v-if="showMobileMenu == true" @close="showMobileMenu = false" />
        

          <Language />

          <div class="controls d-flex">
                <!--router-link to="/search" itemprop="url" class="buttons searchButton" -->
                    <button itemprop="url" class="buttons searchButton" 
                        @click="showModal = true"
                        v-bind:aria-label="$t('button-arialabel-open-search')">
                        <SearchButton></SearchButton>
                    </button>
               <!--/router-link-->

              <button class="buttons userButton" 
                @click="showLoginForm = true"
                v-bind:aria-label="$t('button-arialabel-open-login')">
                <UserButton></UserButton>
              </button>

              <router-link to="/shoppingcart" tag="button" class="buttons cartButton"
                v-bind:aria-label="$t('button-arialabel-open-cart')">
                <CartButton>99</CartButton>
              </router-link>
          </div>
      </div>

      <transition enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
          <ModalLogin v-if="showLoginForm" @close="showLoginForm = false"></ModalLogin>
      </transition>

      <transition enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
          <ModalSearch v-if="showModal" @close="showModal = false"></ModalSearch>
      </transition>

      
      <button class="openMenuButton"  
        v-bind:aria-label="$t('button-arialabel-open-menu')"  
        @click="showMobileMenu = true"></button>

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
import ModalLogin from './subcomponents/ModalLogin'

export default {
    name: 'Header',
    components: {
        Menu,
        Language,
        MenuMobile,
        ModalSearch,
        ModalLogin,
        SearchButton,
        UserButton,
        CartButton
    },
    data() {
        return {
            showMobileMenu: false,
            //user: uv.user.name,
            showModal: false,
            showLoginForm: false
        }
    }
}
</script>

<style lang="scss">
header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  width: 100%;
  background: #FFF;
  white-space: nowrap;

  .containerHeader {
    height: 68px;
    display: flex;
    flex-direction: row;
  }

  .logo{
    align-items: center;
    justify-content: center;
  }

   nav.menu {
      display: none;
      //bottom: 0;
      //align-items: center;
      justify-content: center;
      padding: 200px 0;
      //height:0;
      overflow:hidden;
      
      &.active{display:block;}

        & ul {
            display: flex;
            flex-direction: column;
            
            align-items: center;
            justify-content: center;
            margin: 0;
            padding-left: 0;
            list-style: none;

            & li {
                //margin-right: 18px;
                position: relative;

                &:not(:last-child):after {
                    display: none;
                    content: "";
                    background-color: #a7a7a7;
                    width: 18px;
                    height: 1px;
                    position: absolute;
                    top: 50%;
                    right: -15px;
                }

                a {
                    font-size: 1.5rem; //22px
                    padding: 10px 17px;
                    font-weight: 300;
                }
            }
        }
    }
}
</style>
