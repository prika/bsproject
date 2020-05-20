<template>
   <nav class="menu d-flex">
        <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
            <li v-for="item in itensMenu" :key="item.name" itemprop="name">
                <router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                itensMenu: [
                    {name: 'Institucional', link: '/'},
                    {name: 'Bloco B', link: '/bloco-b'},
                    {name: 'B Explore', link: '/b-explore'},
                    {name: 'B Project', link: '/b-project'},
                    {name: 'B Innovation', link: '/b-innovation'}
                ]
            }
        }
    }
</script>
