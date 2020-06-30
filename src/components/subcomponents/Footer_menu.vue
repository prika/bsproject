<template>
    <div class="footerMenu col-12 col-lg-8 order-2 order-lg-1 d-flex justify-content-between">
        <nav class="col-12 col-md-4">
            <router-link    v-for="item in itensMenu1" 
                            :to="item.link" 
                            :key="item.name" 
                            itemprop="url">{{item.name}}</router-link>
        </nav>
        
        <nav class="col-12 col-md-4 mobileHided">
            <router-link    v-for="item in itensMenu2" 
                            :to="item.link" 
                            :key="item.name" 
                            itemprop="url">{{item.name}}</router-link>
        </nav>

        <nav class="col-12 col-md-4 mobileHided secondaryLinks">
            <router-link    v-for="item in itensMenu3" 
                            :to="item.link" 
                            :key="item.name" 
                            itemprop="url">{{item.name}}</router-link>
        </nav>
    </div>
</template>

<script>
import i18n from '@/i18n'

export default {
    data() {
        return {
            itensMenu1: [
                {name: 'Bloco B', link: '/bloco-b'},
                {name: 'B Explore', link: '/b-explore'},
                {name: 'B Project', link: '/b-project'},
                {name: 'B Innovation', link: '/b-innovation'}
            ],
            itensMenu2: [
                {name: i18n.t('simulator'), link: '/simulator'},
                {name: i18n.t('product-type-blocos'), link: '/listagem'},
                {name: i18n.t('product-type-ladrilhos'), link: '/listagem'},
                {name: i18n.t('product-type-chapas'), link: '/listagem'}
            ],
            itensMenu3: [
                {name: 'News', link: '/news'},
                {name: i18n.t('secundary-menu-faqs'), link: '/'},
                {name: i18n.t('secundary-menu-ppolicy'), link: '/'}
            ]
        }
    }
}
</script>

