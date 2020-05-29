<template>
      <section id="productList" class="productsList">
        <div class="container">
                <div class="row">
                      <!-- Filters 
                    <nav class="filters nav col-md-3">
                        <menu v-for="(options, filter) in filters" class="filters" tag="ul"
                        v-show="menus[filter]" ref="menu" :key="filter">
                        
                                <li v-for="(active, option) in options" class="filters__item"
                                :class="{ 'filters__item--active': active }"
                                @click="setFilter(filter, option)">
                                    {{ option }}
                                </li>
                               
                        </menu>
                    </nav>-->

                   <!--transition name="product" tag="div" class="col-md-9 content__list"> </transition
                   <div class="col-md-9">
                            <a class="product col-md-4 col-sm-4" v-for="product in products">
                                <div class="productImage">
                                    <img v-bind:src="product.imgURL" width="300" height="300" v-bind:alt="product.name">
                                </div>
                                <p class="productName">
                                    <span>{{ product.firstName }}</span>
                                    <span>{{ product.secondName }}</span>
                                </p>
                            </a>
                    </div> -->
                </div>           
        </div>
      
      </section>
</template>

<script> 


// beforeMount() {
//                         fetch('assets/mocks/list-products-mock.json')
//                         .then(response => response.json())
//                         .then(product => {


export default { 
    name: 'Listpage',
    data() {
        return {
            products: [],
             info: null
        }
    },
    // mounted: function() {
    //      axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
    // }
                // computed: {
                //     activeMenu() {
                //         return Object.keys(this.menus).reduce(($$, set, i) => (this.menus[set]) ? i : $$, -1)
                //     },
                //     list() {
                //         let { collection, categories } = this.activeFilters

                //         return this.products.filter(({ category, collection, color }) => {
                            
                //             if (categories.length && !~categories.indexOf(category)) return false
                //             return !collection.length || collection.every(cat => ~keywords.indexOf(cat))
                //         })
                //     },
                //     activeFilters() {
                //         let { collections, categories } = this.filters

                //         return {
                //             collections: Object.keys(collections).filter(c => collections[c]),
                //             categories: Object.keys(categories).filter(c => categories[c])
                //             //,
                //             //rating: (this.filters.rating > this.rating.min) ? [this.filters.rating] : []
                //         }
                //         }
                // },
                // methods: {
                //         setFilter(filter, option) {
                //             console.log(option);

                //             if (filter === 'category') {
                //             this.filters[filter][option] = !this.filters[filter][option]
                //             } else {
                //                 setTimeout(() => {
                //                     this.clearFilter(filter, option, this.filters[filter][option])
                //                 }, 100)
                //             }
                //         },

                //         clearFilter(filter, except, active) {
                           
                //             Object.keys(this.filters[filter]).forEach(option => {
                //                 this.filters[filter][option] = except === option && !active
                //             })
                            
                //         },

                //         clearAllFilters() {
                //           Object.keys(this.filters).forEach(this.clearFilter)
                //         },

                //         setMenu(menu, active) {
                //             Object.keys(this.menus).forEach(tab => {
                //             this.menus[tab] = !active && tab === menu
                //             })
                //         }
                //     },
                //      beforeMount() {
                //         fetch('assets/mocks/list-products-mock.json')
                //         .then(response => response.json())
                //         .then(product => {
                //             this.products = product

                //             product.forEach(({ category, color, collection }) => {
                //                 this.$set(this.filters.category, category, false)

                //                 this.$set(this.filters.collection, collection, false)

                //                 // if (this.rating.max < rating) this.rating.max = rating
                //                 // if (this.rating.min > rating) {
                //                 //     this.rating.min = rating
                //                 //     this.filters.rating = rating
                //                 // }

                              

                //                 color.forEach(color => {
                //                     this.$set(this.filters.color, color, true)
                //                 })
                               
                //             })
                //         })
                //     }
}       

   
        //   $(document).ready(function() {


        //     $('.scrollButton').click(function(){
        //         $('html, body').animate({ scrollTop: 0 }, 500 );
        //     });

        //     var rellax = new Rellax('.rellax');
        //   });


        //   $(window).scroll(function(){
        //     animationLoading();
        //   });

        //   function animationLoading(){

        //         if( $(window).scrollTop() == 0 ){
        //           $('#bannerFullsize').addClass('showAnimation').removeClass('hideAnimation');
        //         }else{
        //           $('#bannerFullsize').removeClass('showAnimation').addClass('hideAnimation');
        //         } 

        //   }
    </script>

<style lang="scss">

</style>