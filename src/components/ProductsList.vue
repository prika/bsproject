<template>
      <section id="productList" class="productsList" :class="(hasFeaturedProducts === false ? 'notFeaturedProducts': '')">
        <div class="container">
                <div class="row">
                    <slot></slot>
                </div>
                 <div class="row">
                   
                    <nav class="filters col-lg-3" v-if="!hasFeaturedProducts">
                        <ul class="categoryMenu" ref="menu" key="filterCategory">
                            <li class="filters__item" v-for="category in categories">
                                <a href="javascript:void(0);" @click="filterByCategory(category.id)" :class="{ 'filters__item--active': active }">{{category.name}}</a>
                            </li>
                        </ul>

                        <ul class="collectionMenu" ref="menu" key="filterCollection">
                            <li class="filters__item" v-for="collection in collections">
                                <a href="javascript:void(0);" @click="filterByCollection(collection.id)" :class="{ 'filters__item--active': active }">{{collection.name}}</a>
                            </li>
                        </ul>

                        <ul class="colorFilters">
                            <li v-for="color in colors">
                                <a href="javascript:void(0);" @click="filterByColor(color.id)" :class="{ 'filters__item--active': active }">{{color.name}}</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="col-12 col-lg-9 productsContainer" :class="(hasFeaturedProducts === true ? 'featuredCenter': '')">
                        <div class="row">
                            <a  href="/" 
                                class="product col-12 col-lg-4 rellax" 
                                v-for="(product, index) in products" 
                                :key="product.id"
                                :data-rellax-speed="( ( index * 3 ) ? '-2' : '2' )">

                                <div class="containerImage">
                                    <img :src="product.imgURL" 
                                    class="productImage"
                                    width="300" height="300" 
                                    :alt="product.name">

                                </div>
                                <p class="productName">
                                    <mark>
                                        <span></span>
                                        {{ product.firstName }} </br> {{ product.secondName }}
                                    </mark>
                                </p>
                            </a>
                        </div>
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
            colors: [],
            rawProducts: [],
            hasFeaturedProducts: false,
            productsPerPage: 12,
            active: '',
            selectedCategory: null,
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

            for (var i = 0 ; i < this.rawProducts.length; i++) {
                
                let obj = this.rawProducts[i]
                
                const matchesCategory =  this.selectedCategory == null || obj.category == this.selectedCategory 
                const matchesCollection = this.selectedCollection == null || obj.collection == this.selectedCollection 
                if (!matchesCollection || !matchesCategory) continue
                
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
            }
        }
    },
    created(){
        this.$http.get('../mocks/products-list-mock.json').then(response => {
            this.collections = response.data.collections
            this.categories = response.data.categories
            this.colors = response.data.colors
            this.parseObject(response.data.products, this.products)
        })
    }
}
</script>
<style lang="scss">
	.productsList{
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

            .collectionMenu{ top: 500px; }
            .colorFilters{ top: 700px; }
        }

	}

	.product{
		position: relative;
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
	    
</style>