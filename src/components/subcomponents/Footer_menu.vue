<template>
<div class="col-12 col-lg-8 order-2 order-lg-1 d-flex justify-content-between align-items-center">
   <nav class="col-7 d-flex justify-content-between">
        <router-link    v-for="item in itensMenu" 
                        :to="item.link" 
                        :key="item.name" 
                        itemprop="url">{{item.name}}</router-link>
    </nav>

    <div class="col-4 secondaryLinks d-flex justify-content-between align-itemns-end">
        <router-link    v-for="secitem in secundaryMenu" 
                        :to="secitem.link" 
                        :key="secitem.name" 
                        itemprop="url"
                        class="small">{{secitem.name}}</router-link>
    </div>
</div>
</template>

<script>
import i18n from '@/i18n'

export default {
    data() {
        return {
            itensMenu: [
                {name: i18n.t('product-type-blocos'), link: '/bloco-b'},
                {name: i18n.t('product-type-ladrilhos'), link: '/bloco-b'},
                {name: i18n.t('product-type-chapas'), link: '/bloco-b'},
                {name: i18n.t('simulator'), link: '/simulator'}
            ],
            secundaryMenu: [
                {name: i18n.t('secundary-menu-faqs'), link: '/'},
                {name: i18n.t('secundary-menu-ppolicy'), link: '/'}
            ]
        }
    }
}
</script>
