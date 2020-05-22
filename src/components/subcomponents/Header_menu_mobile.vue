<template>
    <transition name="slide">
       
            <nav class="menu menuMobile">
                <ul  itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                    <li v-for="item in itensMenu" :key="item.name" itemprop="name">
                        <router-link :to="item.link" itemprop="url">{{item.name}}</router-link>
                    </li>
                </ul>
            
         
                <div class="mobileAdd">
                    <a href="/simulador">Simulador</a>
                    <div class="social-icons d-flex align-items-center">
                        <a href="https://www.facebook.com/bstone.marble/" class="fb" target="_blank" rel="noreferrer" aria-label="Link to Facebook"></a>
                        <a href="https://www.instagram.com/bstone.marble/" class="in" target="_blank" rel="noreferrer" aria-label="Link to Instagram"></a>
                        <a href="https://www.pinterest.pt/bstone_marble/" class="pi" target="_blank" rel="noreferrer" aria-label="Link to Pinterest"></a>     
                        <a href="https://www.linkedin.com/company/bloco-b/" class="lk" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"></a>
                    </div>
                </div>
          

            </nav>
        
    </transition>
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