<template>
    <transition name="slide">
       
        <nav class="menu menuMobile">
            <ul  itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                <li v-for="item in itensMenu" :key="item.name" itemprop="name">
                    <router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
                </li>
            </ul>
        
            <div class="mobileAdd">
                <a href="/simulador">{{$t('simulator')}}</a>
                
                <SocialButtons />

            </div>
        </nav>
        
    </transition>
</template>

<script>
import SocialButtons from '../ui/socialButtons.vue'

export default {
    components: {
        SocialButtons
    },
    data() {
        return {
            itensMenu: []
        }
    },
    created() {
      this.$eventBus.$on('jsonGlobalLoaded', (response) => {
          this.itensMenu = response.data.menu
      });
    }
}
</script>