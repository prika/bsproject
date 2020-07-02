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
export default {
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