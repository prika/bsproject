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
                    <div class="social-icons d-flex align-items-center">
                        <a href="https://www.facebook.com/bstone.marble/" class="fb" target="_blank" rel="noreferrer" 
                            :aria-label="$t('social-arialabel-facebook')"></a>
                        <a href="https://www.instagram.com/bstone.marble/" class="in" target="_blank" rel="noreferrer" 
                            :aria-label="$t('social-arialabel-instagram')"></a>
                        <a href="https://www.pinterest.pt/bstone_marble/" class="pi" target="_blank" rel="noreferrer" 
                            :aria-label="$t('social-arialabel-pinterest')"></a>     
                        <a href="https://www.linkedin.com/company/bloco-b/" class="lk" target="_blank" rel="noreferrer" 
                            :aria-label="$t('social-arialabel-linkedin')"></a>
                    </div>
                </div>
          

            </nav>
        
    </transition>
</template>


<script>

import i18n from '@/i18n';

export default {
    data() {
        return {
            itensMenu: [
                {name: i18n.t('menu-home'), link: '/'},
                {name: i18n.t('menu-blocob'), link: '/bloco-b'},
                {name: i18n.t('menu-bexplore'), link: '/b-explore'},
                {name: i18n.t('menu-bproject'), link: '/b-project'},
                {name: i18n.t('menu-binnovation'), link: '/b-innovation'}
            ]
        }
    }
}
</script>