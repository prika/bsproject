<template>
  <div class="modal-mask">
    <transition
      appear
      enter-active-class="animated slideInDown faster"
      leave-active-class="animated slideOutUp"
    >
      <button class="closebutton" @click="$emit('close')">
        <closeIcon rectBackgroundColor="#FFFFFF" strokeColor="#3E3E3E" bordercolor="#ccc" />
      </button>
      <!--button class="closeMenuButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="showMobileMenu = false"></button-->
    </transition>

    <transition
      appear
      enter-active-class="animated slideInDown faster"
      leave-active-class="animated slideOutDown faster"
    >
      <nav class="menuMobile">
        <!-- Language /-->

        <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
          <li v-for="item in itensMenu" :key="item.id" itemprop="name">
            <router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
          </li>
        </ul>
      </nav>
    </transition>

    <transition
      appear
      enter-active-class="animated slideInUp faster"
      leave-active-class="animated slideOutUp faster"
    >
      <div class="mobileAdd">
        <!--a href="/simulador" class="simulator">{{ $t("simulator") }}</a-->

        <SocialButtons />
      </div>
    </transition>
  </div>
</template>

<script>
import closeIcon from "@/components/ui/closeIcon.vue";
import Language from "@/components/subcomponents/Header_language.vue";
import SocialButtons from "@/components/ui/socialButtons.vue";

export default {
  name: "MenuMobile",
  components: {
    closeIcon,
    Language,
    SocialButtons
  },
  data() {
    return {
      itensMenu: [],
      showMobileMenu: true
    };
  },
  mounted() {
    this.$http
      .get("https://www.bstone.pt/mocks/global-mock.json")
      .then(response => {
        this.itensMenu = response.data.menu;
      });
  }
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
}

.menuMobile {
  background: #fff;
  padding-top: 150px;
  padding-bottom: 150px;
  //height: 100%;

  & > ul {
    list-style: none;
    width: 100vw;
    padding-left: 0;

    & li {
      width: 100%;
      text-align: center;

      a {
        display: block;
        font-family: "Oswald", sans-serif;
        font-size: 1.4rem;
        line-height: 4rem;
        font-weight: 300;
      }
    }
  }
}

.mobileAdd {
  background-color: #313131;
  position: fixed;
  text-align: center;
  z-index: 2;
  top: 550px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  .social-icons {
    justify-content: center;
  }
}

.openMenuButton {
  display: block;
  position: fixed;
  width: 90px;
  height: 90px;
  bottom: 10%;
  right: 15px;
  border: 0;
  background-size: 30px;
  background: center center no-repeat url(../../assets/images/icons/menu.svg);
}
</style>
