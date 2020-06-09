<template>
    <nav class="menu">
        <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
            <li v-for="item in itensMenu" :key="item.name" itemprop="name">
                <router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>


<script>
import i18n from '@/i18n';

export default {
    data() {
        return {
            itensMenu: [
                //{name: i18n.t('menu-institutional'), link: '/institutional'},
                {name: i18n.t('menu-blocob'), link: '/bloco-b'},
                {name: i18n.t('menu-bexplore'), link: '/b-explore'},
                {name: i18n.t('menu-bproject'), link: '/b-project'},
                {name: i18n.t('menu-binnovation'), link: '/b-innovation'}
            ]
        }
    }
}
</script>