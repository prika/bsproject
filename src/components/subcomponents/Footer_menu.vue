<template>
    <div class="footerMenu col-12 col-lg-8 order-2 order-lg-1 d-flex justify-content-between">
        

        <nav class="col-12 col-md-4">
            <router-link    v-for="item in itemsMenu1" 
                            :to="item.link" 
                            :key="item.name" 
                            itemprop="url">{{item.name}}</router-link>
        </nav>
        
        <nav class="col-12 col-md-4 mobileHided">
            <router-link    v-for="item in itemsMenu2" 
                            :to="item.link" 
                            :key="item.name" 
                            itemprop="url">{{item.name}}</router-link>
        </nav>

        <nav class="col-12 col-md-4 mobileHided secondaryLinks">
            <router-link    v-for="item in itemsMenu3" 
                            :to="item.link" 
                            :key="item.name" 
                            itemprop="url">{{item.name}}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemsMenu1: [],
            itemsMenu2: [],
            itemsMenu3: []
        }
    },
   created() {
    this.$eventBus.$on('jsonFooterLoaded', (response) => {
        this.itemsMenu1 = response.data.menu
        this.itemsMenu2 = response.data.footer.menuFooter
        this.itemsMenu3 = response.data.footer.menuFooter2
    });    
  }
    
}
</script>

