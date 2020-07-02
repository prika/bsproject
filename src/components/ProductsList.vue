<template>
      <section id="productList" class="productsList" :class="(hasFeaturedProducts === false ? 'notFeaturedProducts': '')">
        <div class="container">
                
                 <div class="row">

                    <transition enter-active-class="animated slideInDown">
                        <h1 class="pageTitle" v-if="!hasFeaturedProducts">{{categories[selectedCategory-1].splitName1}}<span>{{categories[selectedCategory-1].splitName2}}</span></h1>
                        <h1 class="pageTitleh2 h2" v-else><slot></slot></h1>
                    </transition>
                    
                   
                    <nav class="filters col-lg-3" v-if="!hasFeaturedProducts">
                        <ul class="categoryMenu" ref="menu" key="filterCategory" >
                            <li v-for="category in categories" :class="(category.id === selectedCategory ? 'filters__item active': 'filters__item')">
                                <a href="javascript:void(0);" @click="filterByCategory(category.id)">{{category.name}}</a>
                            </li>
                        </ul>

                        <ul ref="menu" key="filterCollection" :class="'cat-'+selectedCategory+' collectionMenu'">
                            <li class="filters__item" v-for="collection in collections" :class="(collection.id === selectedCollection ? 'filters__item active': 'filters__item')">
                                <a href="javascript:void(0);" @click="filterByCollection(collection.id)" >{{collection.name}}</a>
                            </li>
                        </ul>

                        <ul class="colorFilters">
                            <li v-for="color in availableColors">
                                <a href="javascript:void(0);" @click="filterByColor(color.id)" :class="(color.id === selectedColors ? 'active': '')">
                                    <span class="color" :style="'background-color:'+color.hexa"></span>
                                    <span class="name">{{color.name}}</span></a>
                            </li>
                        </ul>
                    </nav>

                    <div class="col-12 col-lg-9 productsContainer" :class="(hasFeaturedProducts === true ? 'featuredCenter': '')" itemscope itemtype="http://schema.org/ItemList">
                        <transition-group appear enter-active-class="animated slideInUp delay" tag="div" class="row">
                            <router-link :to="{path: '/bloco-b/'+product.id+'-'+product.name }" 
                                    itemprop="itemListElement" itemscope itemtype="http://schema.org/Product"
                                    class="product col-12 col-lg-4 rellax" 
                                    v-for="(product, index) in products" 
                                    :key="product.id"
                                    :data-rellax-speed="( ( index * 3 ) ? '-2' : '2' )">

                                    <div class="containerImage">
                                        <img :src="product.imgURL" 
                                        class="productImage"
                                        width="300" height="300" 
                                        :alt="product.name" itemprop="image">
                                    </div>
                                    <p class="productName" itemprop="name">
                                        <mark>
                                            <span></span>
                                            {{ product.firstName }} </br> {{ product.secondName }}
                                        </mark>
                                    </p>
                                    <p class="categoryName" v-if="hasFeaturedProducts">{{categories[selectedCategory-1].name}}</p>
                            </router-link>
                        </transition-group>
                    </div> 
          
            </div>           
        </div>
      
      </section>
</template>

<script> 
export default { 
    name: 'Listpage',
    data() {
        return {
            products: [],
            categories: [],
            collections: [],
            availableColors: [],
            rawColors: [],
            rawProducts: [],
            hasFeaturedProducts: false,
            productsPerPage: 12,
            active: '',
            selectedCategory: 0,
            selectedCollection: null,
            selectedColors: []
        }
    },
    
    beforeMount() {
        //var rellax = new Rellax('.rellax');
    },
    mounted() {
        // Preloader
        this.$eventBus.$emit('componentFinishLoad', true);
        this.productsPerPage = this.$parent.productsPerPage
        this.hasFeaturedProducts = this.$parent.hasFeaturedProducts

        //rellax.refresh();
    },
    methods:
    {
        getImgUrl: function (src) {
            return require( '@/assets/images/'+src )
        },
        parseObject: function(source, destination)
        {
            for ( var i = 0 ; i < source.length; i++ ) {
               let obj = source[i]
               let fullPath = this.getImgUrl(obj.imgURL)
               obj.imgURL = fullPath
               destination.push(obj)
               this.rawProducts.push(obj)
            }
        },      
        filterByCategory(id)
        {
            this.selectedCategory = id
            this.selectedCollection = this.collections[0].id // selects the first collection by default
            this.selectedColors = []
            this.applyFilter()
        },     
        filterByCollection(id)
        {
            this.selectedCollection = id
            this.selectedColors = []
            this.applyFilter()
        },
        filterByColor(id) {

            const index = this.selectedColors.indexOf(id)

            // filter already applied, should removed it
            if (index > -1) { 
                this.selectedColors = this.selectedColors.filter(item => item !== id)
            } else {
                this.selectedColors.push(id)
            }

            this.applyFilter()
        },
        applyFilter()
        {
            this.products = []
            var filteredColors = []

            for (var i = 0 ; i < this.rawProducts.length; i++) {
                
                let obj = this.rawProducts[i]
                
                const matchesCategory =  this.selectedCategory == null || obj.category == this.selectedCategory 
                const matchesCollection = this.selectedCollection == null || obj.collection == this.selectedCollection 
                if (!matchesCollection || !matchesCategory) continue
                
                for (var k = 0 ; k < obj.colors.length; k++) 
                {
                    filteredColors.push( obj.colors[k])   
                } 

                if (this.selectedColors.length > 0)
                {
                    for (var j = 0 ; j < obj.colors.length; j++) 
                    {
                        if (this.selectedColors.indexOf(obj.colors[j]) > -1)  // color found !!!! 
                        {
                            this.products.push(obj)
                            break; 
                        }
                    } 
                } else { this.products.push(obj) } // Filter array is empty 

                this.availableColors = this.rawColors.filter(color => filteredColors.indexOf(color.id) > - 1)
            }
        }
    },
    created(){
        this.$http.get('../mocks/products-list-mock.json').then(response => {
            this.collections = response.data.collections
            this.categories = response.data.categories
            this.rawColors = response.data.colors
            console.log(this.rawColors)
            
            this.selectedCategory = this.categories[0].id
            this.selectedCollection = this.collections[0].id
            this.parseObject(response.data.products, this.products)
        })
    }
}
</script>
<style lang="scss">
	.productsList{
        min-height: 100vh;
		padding-top: 50px;
		margin-bottom: 130px;

        &.notFeaturedProducts {
            .productsContainer {margin-top: 300px;}

            h1.pageTitle{
                position: fixed;
                margin-left: 0;
                font-size: 10rem;
            }
        }

        .productsContainer.featuredCenter{ margin: 0 auto; }

        .filters {

            .categoryMenu,
            .collectionMenu,
            .colorFilters{
                list-style: none;
                position: fixed;
                top: 400px;
                margin: 0;
                padding: 0;
            }

            .categoryMenu{
                li {
                    a{
                        display: block;
                        font-family: 'Oswald', sans-serif;
                        font-size: 1.25rem;
                        letter-spacing: 1px;
                        font-weight: 400;
                        color: #333;
                        line-height: 2rem;
                        text-transform: uppercase;
                        margin: 10px 0;
                        -webkit-transition:     all 0.5s ease;
                        -moz-transition:        all 0.5s ease;
                        -o-transition:          all 0.5s ease;
                        transition:             all 0.5s ease;
                    }

                    &.active{
                        a{ margin: 10px 0 110px; color: #B7B7B7;}
                    }
                }
            }

            .collectionMenu{ 
                -webkit-transition:     top 0.5s ease;
                -moz-transition:        top 0.5s ease;
                -o-transition:          top 0.5s ease;
                transition:             top 0.5s ease;

                &.cat-1{top: 450px;}
                &.cat-2{top: 490px;}
                &.cat-3{top: 530px;}

                li {
                    a{
                        display: block;
                        position: relative;
                        font-family: 'Oswald', sans-serif;
                        font-size: 1rem;
                        font-weight: 200;
                        color: #333;
                        line-height: 1.5rem;
                        text-transform: uppercase;
                        margin: 10px 0;
                        padding-left: 60px; 

                        &:before{
                            position: absolute;
                            top: 50%;
                            left: 0;
                            content: '';
                            width: 30px;
                            height: 1px;
                            background: #333;
                        }
                    }

                    &.active a,
                    & > a:hover{
                        
                        color: #C47C5A;

                        &:before{
                            background: #C47C5A;
                            width: 43px;
                        }
                    }
                }
            }

            .colorFilters{ 
                top: 700px;

                a {
                    height: 40px;
                    display: flex;
                    align-items: center;

                    span.name {
                        font-family: 'Oswald', sans-serif;
                        font-size: 18px;
                        font-weight: 200;
                        color: #6A6A6A;
                        padding-left: 15px;
                        position: relative;
                        -webkit-transition:     all 0.5s ease;
                        -moz-transition:        all 0.5s ease;
                        -o-transition:          all 0.5s ease;
                        transition:             all 0.5s ease;

                        &:before{
                            position: absolute;
                            top: 15px;
                            left: 10px;
                            content: '';
                            width: 0;
                            height: 1px;
                            background: #6A6A6A;
                            -webkit-transition:     all 0.5s ease;
                            -moz-transition:        all 0.5s ease;
                            -o-transition:          all 0.5s ease;
                            transition:             all 0.5s ease;
                        }
                    }

                    span.color {
                        width:  22px;
                        height: 22px;
                        display: inline-flex;
                        -webkit-transform: rotate(45deg);
                        -ms-transform: rotate(45deg); 
                        transform: rotate(45deg); 
                        transform-origin: 50% 50%;
                        -webkit-transition:     all 0.5s ease;
                        -moz-transition:        all 0.5s ease;
                        -o-transition:          all 0.5s ease;
                        transition:             all 0.5s ease;
                    }

                    &:hover,
                    &.active{
                        span.name {
                            color: #333;
                            padding-left: 30px;

                            &:before{
                                background: #333;
                                width: 15px;
                            }
                        }

                        span.color{
                            -webkit-transform: rotate(225deg);
                            -ms-transform: rotate(225deg); 
                            transform: rotate(225deg); 
                        }    
                    }
                }
            }
        }
	}

	.product{
		position: relative;
        text-decoration: none;
		transform: translateZ(.25px);

        .containerImage{
			width: 260px;
			height: 373px;
			margin: 0 auto;
			overflow: hidden;
		}
	}

		.product .productImage{
			width: 260px;
			height: 373px;
            overflow: hidden;

			-webkit-transition: all 0.5s ease;
			-moz-transition: all 0.5s ease;
			-o-transition: all 0.5s ease;
			transition: all 0.5s ease;

            img {
                width: 100%;
            }
		}

		.product .productName{
			width: 140px;
			position: absolute;
			right: -20px;
			top: 270px;
			z-index: 2;
            
            font-family: 'Noe Display', serif;
            font-weight: normal;
            font-size: 25px;
            line-height: 30px;
            color: #333;
            text-align: left;
			text-indent: 25px;

			-webkit-transition: all 0.5s ease;
			-moz-transition: all 0.5s ease;
			-o-transition: all 0.5s ease;
			transition: all 0.5s ease;
		}

			.product .productName span{
				border: 3px solid #333;
				width: 32px;
				display: block;
				content: '';
				position: absolute;
				top: 9px;
				left: -10px;
			}

			.product .productName mark {
				background-color: white;
				padding: 2px 5px;
			}

		.product:nth-of-type(3n+2){
			margin-top: 130px;
			transform: translateZ(.7px) scale(1);
		}

		.product:nth-of-type(3n+2) .productName{
			top: 52px;
		}

	.product:hover .productImage{ transform: scale(1.1); }
	.product:hover .productName{top: 170px;}



    .categoryName{
        font-family: "Oswald", sans-serif;
        font-size: 15px;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-align: center;
        margin: 5px;
    }    
</style>