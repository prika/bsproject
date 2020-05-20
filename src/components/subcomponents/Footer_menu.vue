<template>
<div class="col-8 d-flex justify-content-between align-items-center">
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
    export default {
        data() {
            return {
                itensMenu: [
                    {name: 'Blocos', link: '/listpage'},
                    {name: 'Chapas', link: '/bloco-b'},
                    {name: 'Ladrilhos', link: '/b-explore'},
                    {name: 'Simulador', link: '/b-project'}
                ],
                secundaryMenu: [
                    {name: 'Faqs', link: '/'},
                    {name: 'Política de Privacidade', link: '/bloco-b'}
                ]
            }
        }
    }
</script>
