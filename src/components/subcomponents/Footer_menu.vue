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
//import i18n from '@/i18n'

export default {
    data() {
        return {
            itensMenu1: [],
            itensMenu2: [],
            itensMenu3: []
        }
    },
    beforeMount() {
        this.itensMenu1 = this.$parent.menuFooter
        // this.itensMenu2 = this.$parent.menuFooter
        // this.itensMenu3 = this.$parent.secMenuFooter
    
    }
}
</script>

