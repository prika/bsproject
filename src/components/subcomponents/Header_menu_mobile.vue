<template>
    <nav class="modal-mask menuMobile">
        <button class="closeMenuButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="showMobileMenu = false"></button>

        <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutDown">
        <ul  itemscope itemtype="http://www.schema.org/SiteNavigationElement">
            <li v-for="item in itensMenu" :key="item.id" itemprop="name">
                <router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
            </li>
        </ul>
        </transition>
       
        <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutDown">
        <div class="mobileAdd">
            <a href="/simulador">{{$t('simulator')}}</a>
            
            <SocialButtons />
        </div>
         </transition>
        
    </nav>
</template>

<script>
import SocialButtons from '../ui/socialButtons.vue'

export default {
    name: 'MenuMobile',
    components: {
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