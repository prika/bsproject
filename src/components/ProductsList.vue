<template>
  <section
    id="productList"
    class="productsList"
    :class="hasFeaturedProducts === false ? 'notFeaturedProducts' : ''"
  >
    <div class="container">
      <div class="row">
        <transition
          appear
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutDown"
        >
          <h1 class="pageTitleh2 h2" v-if="hasFeaturedProducts">
            <slot></slot>
          </h1>
          <h1 class="pageTitle" v-if="!hasFeaturedProducts">
            {{ categoryName1 }}<span>{{ categoryName2 }}</span>
          </h1>
        </transition>

        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <nav class="filters col-lg-3" v-if="!hasFeaturedProducts">
            <ul class="categoryMenu" ref="menu" key="filterCategory">
              <li
                v-for="category in categories"
                :key="category.id"
                :class="
                  category.id == selectedCategory
                    ? 'filters__item active'
                    : 'filters__item'
                "
              >
                <a
                  href="javascript:void(0);"
                  @click="filterByCategory(category.id)"
                  >{{ category.name }}</a
                >
              </li>
            </ul>

            <ul
              ref="menu"
              key="filterCollection"
              :class="'cat-' + selectedCategory + ' collectionMenu'"
            >
              <li
                class="filters__item"
                v-for="collection in collections"
                :key="collection.id"
                :class="
                  collection.id == selectedCollection
                    ? 'filters__item active'
                    : 'filters__item'
                "
              >
                <a
                  href="javascript:void(0);"
                  @click="filterByCollection(collection.id)"
                  >{{ collection.name }}</a
                >
              </li>
            </ul>

            <ul class="colorFilters">
              <li v-for="color in availableColors" :key="color.id">
                <a
                  href="javascript:void(0);"
                  @click="filterByColor(color.id)"
                  :class="getColorStatus(color.id)"
                >
                  <span
                    class="color"
                    :style="'background-color:' + color.hexa"
                  ></span>
                  <span class="name">{{ color.name }}</span>
                </a>
              </li>
            </ul>
          </nav>
        </transition>

        <div
          class="col-12 col-lg-11 productsContainer"
          :class="hasFeaturedProducts === true ? 'featuredCenter' : ''"
          itemscope
          itemtype="http://schema.org/ItemList"
        >
          <link
            itemprop="url"
            :href="
              '/bloco-b/category/' +
                selectedCategory +
                '/collection/' +
                selectedCollection
            "
          />
          <span
            v-if="hasFeaturedProducts"
            itemprop="numberOfItems"
            class="d-none"
            >{{ productsPerPage }}</span
          >

          <transition-group
            appear
            enter-active-class="animated slideInUp delay"
            tag="div"
            class="row"
          >
            <router-link
              class="rellaxProduct product col-12 col-lg-6 col-xl-4"
              itemprop="itemListElement"
              itemscope
              itemtype="http://schema.org/Product"
              v-for="(product, index) in products"
              :to="{
                path:
                  '/bloco-b/category/' +
                  product.category +
                  '/collection/' +
                  product.collection +
                  '/id/' +
                  product.id +
                  '/name/' +
                  product.firstName +
                  '-' +
                  product.secondName,
              }"
              :key="product.id"
              :data-rellax-speed="getDataSpeed(index)"
            >
              <meta itemprop="position" :content="index" />
              <a
                :href="
                  '/bloco-b/category/' +
                    product.category +
                    '/collection/' +
                    product.collection +
                    '/id/' +
                    product.id +
                    '/name/' +
                    product.firstName +
                    '-' +
                    product.secondName
                "
                itemprop="url"
              ></a>
              <meta itemprop="sku" :content="product.id" />

              <div
                itemprop="offers"
                itemtype="https://schema.org/Offer"
                itemscope
              >
                <span itemprop="priceCurrency" content="EUR"></span>
                <link
                  itemprop="availability"
                  href="https://schema.org/InStock"
                />
              </div>

              <div class="containerImage">
                <img
                  :src="product.imgURL"
                  class="productImage"
                  width="300"
                  height="300"
                  :alt="product.name"
                  itemprop="image"
                />
              </div>
              <p class="productName" itemprop="name">
                <mark>
                  <span></span> {{ product.firstName }} <br />
                  {{ product.secondName }}
                </mark>
              </p>
              <p class="categoryName" v-if="hasFeaturedProducts">
                {{ getCategory(product).name }}
              </p>
            </router-link>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Listpage",
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
      active: "",
      selectedCategory: null,
      selectedCollection: null,
      selectedColors: [],
      categoryName1: "",
      categoryName2: "",
      rellax: null,
      rellaxJSLoaded: false,
    };
  },
  beforeMount() {
    if (this.$route.params) {
      this.selectedCategory = this.$route.params.category;
      this.selectedCollection = this.$route.params.collection;
    }
  },
  created() {
    var tag = document.createElement("script");
    tag.src =
      "https://cdnjs.cloudflare.com/ajax/libs/rellax/1.0.0/rellax.min.js";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.onload = this.rellaxLoaded;
  },
  mounted() {
    this.$http
      .get("http://localhost:8080/mocks/products-list-mock.json")
      .then((response) => {
        this.collections = response.data.collections;
        this.categories = response.data.categories;
        this.rawColors = response.data.colors;

        this.productsPerPage = this.$parent.productsPerPage;
        this.hasFeaturedProducts = this.$parent.hasFeaturedProducts;

        if (this.hasFeaturedProducts) {
          this.parseObject(
            response.data.products,
            this.products,
            this.hasFeaturedProducts
          );
          return;
        }

        if (!this.$route.params) {
          this.selectedCategory = this.categories[0].id;
          this.selectedCollection = this.collections[0].id;
        }

        this.parseObject(
          response.data.products,
          this.products,
          this.hasFeaturedProducts
        ); //linha em cima igual
        this.applyFilter();
        this.pageLoaded();
      });
  },
  watch: {
    categories: function(newVal, oldVal) {
      if (this.hasFeaturedProducts) return "";
      this.categoryName1 = this.categories[this.selectedCategory].splitName1;
      this.categoryName2 = this.categories[this.selectedCategory].splitName2;
    },
  },
  methods: {
    pageLoaded: function() {
      if (!(this.rellaxJSLoaded && this.rawProducts.length > 0)) return;
      this.$eventBus.$emit("pageFinishLoad", true);
    },
    rellaxLoaded: function() {
      this.rellax = new Rellax(".rellaxProduct");
      this.rellaxJSLoaded = true;
      this.pageLoaded();
    },
    getImgUrl: function(src) {
      return require("@/assets/images/" + src);
    },
    getCategory(product) {
      return this.categories.filter((item) => item.id == product.category)[0];
    },
    getDataSpeed(index) {
      if (this.hasFeaturedProducts) return 0;
      return index % 3 == 1 ? 2 : -2;
    },
    getColorStatus(id) {
      return this.selectedColors.filter((item) => item == id).length > 0
        ? "active"
        : "inactive";
    },
    parseObject: function(source, destination, featuredOnly) {
      for (var i = 0; i < source.length; i++) {
        let obj = source[i];
        let fullPath = this.getImgUrl(obj.imgURL);
        obj.imgURL = fullPath;
        if (featuredOnly && !obj.featured) continue;
        destination.push(obj);
        this.rawProducts.push(obj);
      }
    },
    filterByCategory(
      id // <- this is a line
    ) {
      this.selectedCategory = id;
      this.selectedCollection = this.collections[0].id; // selects the first collection by default
      this.selectedColors = [];
      this.applyFilter();
    },
    filterByCollection(id) {
      this.selectedCollection = id;
      this.selectedColors = [];
      this.applyFilter();
    },
    filterByColor(id) {
      const index = this.selectedColors.indexOf(id);

      if (index > -1) {
        this.selectedColors = this.selectedColors.filter((item) => item !== id);
      } else {
        this.selectedColors.push(id);
      }

      this.applyFilter();
    },
    applyFilter() {
      this.categoryName1 = this.categories[this.selectedCategory].splitName1;
      this.categoryName2 = this.categories[this.selectedCategory].splitName2;

      this.products = [];
      var filteredColors = [];

      for (var i = 0; i < this.rawProducts.length; i++) {
        let obj = this.rawProducts[i];

        const matchesCategory =
          this.selectedCategory == null ||
          obj.category == this.selectedCategory;
        const matchesCollection =
          this.selectedCollection == null ||
          obj.collection == this.selectedCollection;
        if (!matchesCollection || !matchesCategory) continue;

        for (var k = 0; k < obj.colors.length; k++) {
          filteredColors.push(obj.colors[k]);
        }

        if (this.selectedColors.length > 0) {
          for (var j = 0; j < obj.colors.length; j++) {
            if (this.selectedColors.indexOf(obj.colors[j]) > -1) {
              // color found !!!!
              this.products.push(obj);
              break;
            }
          }
        } else {
          this.products.push(obj);
        } // Filter array is empty

        this.availableColors = this.rawColors.filter(
          (color) => filteredColors.indexOf(color.id) > -1
        );
      }
    },
  },
};
</script>
<style lang="scss">
.productsList {
  min-height: 100vh;
  padding-top: 50px;
  margin-bottom: 430px;

  &.notFeaturedProducts {
    padding-top: 145px;

    .productsContainer {
      margin-top: 300px;
      padding-left: 25%;
      z-index: 0;
    }

    h1.pageTitle {
      position: fixed;
      margin-left: 0;
      font-size: 10rem;
      //z-index: 2;
    }
  }

  .productsContainer.featuredCenter {
    margin: 0 auto;
    max-width: 1100px;
  }

  .filters {
    position: relative;
    z-index: 1;

    .categoryMenu,
    .collectionMenu,
    .colorFilters {
      list-style: none;
      position: fixed;
      top: 450px;
      margin: 0;
      padding: 0;
    }

    .categoryMenu {
      li {
        a {
          display: block;
          font-family: "Oswald", sans-serif;
          font-size: 1.25rem;
          letter-spacing: 1px;
          font-weight: 400;
          color: #333;
          line-height: 2rem;
          text-transform: uppercase;
          margin: 10px 0;
          will-change: color, margin;
          -webkit-transition: color 0.5s ease, margin 0.5s ease;
          -moz-transition: color 0.5s ease, margin 0.5s ease;
          -o-transition: color 0.5s ease, margin 0.5s ease;
          transition: color 0.5s ease, margin 0.5s ease;
        }

        &:hover {
          a {
            color: #b7b7b7;
          }
        }

        &.active {
          a {
            margin: 10px 0 110px;
            color: #b7b7b7;
          }
        }
      }
    }

    .collectionMenu {
      will-change: top;
      -webkit-transition: top 0.5s ease;
      -moz-transition: top 0.5s ease;
      -o-transition: top 0.5s ease;
      transition: top 0.5s ease;

      &.cat-0 {
        top: 500px;
      }
      &.cat-1 {
        top: 540px;
      }
      &.cat-2 {
        top: 580px;
      }

      li {
        a {
          display: block;
          position: relative;
          font-family: "Oswald", sans-serif;
          font-size: 1rem;
          font-weight: 200;
          color: #333;
          line-height: 1.5rem;
          text-transform: uppercase;
          margin: 10px 0;
          padding-left: 60px;

          &:before {
            position: absolute;
            top: 50%;
            left: 0;
            content: "";
            width: 30px;
            height: 1px;
            background-color: #333;
            will-change: width, background-color;
            -webkit-transition: width 0.5s ease, background-color 0.3s ease;
            -moz-transition: width 0.5s ease, background-color 0.3s ease;
            -o-transition: width 0.5s ease, background-color 0.3s ease;
            transition: width 0.5s ease, background-color 0.3s ease;
          }
        }

        &.active a,
        & > a:hover {
          color: #c47c5a;

          &:before {
            background-color: #c47c5a;
            width: 43px;
          }
        }
      }
    }

    .colorFilters {
      top: 750px;

      a {
        height: 40px;
        display: flex;
        align-items: center;

        span.name {
          font-family: "Oswald", sans-serif;
          font-size: 18px;
          font-weight: 200;
          color: #6a6a6a;
          padding-left: 15px;
          position: relative;
          will-change: padding, color;
          -webkit-transition: color 0.3s ease, padding 0.5s ease;
          -moz-transition: color 0.3s ease, padding 0.5s ease;
          -o-transition: color 0.3s ease, padding 0.5s ease;
          transition: color 0.3s ease, padding 0.5s ease;

          &:before {
            position: absolute;
            top: 15px;
            left: 10px;
            content: "";
            width: 0;
            height: 1px;
            background-color: #6a6a6a;
            will-change: width, background-color;
            -webkit-transition: width 0.5s ease, background-color 0.3s ease;
            -moz-transition: width 0.5s ease, background-color 0.3s ease;
            -o-transition: width 0.5s ease, background-color 0.3s ease;
            transition: width 0.5s ease, background-color 0.3s ease;
          }
        }

        span.color {
          width: 22px;
          height: 22px;
          display: inline-flex;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          transform-origin: 50% 50%;
          will-change: transform, background-color;
          -webkit-transition: transform 0.5s ease, background-color 0.3s ease;
          -moz-transition: transform 0.5s ease, background-color 0.3s ease;
          -o-transition: transform 0.5s ease, background-color 0.3s ease;
          transition: transform 0.5s ease, background-color 0.3s ease;
        }

        &:hover,
        &.active {
          span.name {
            color: #333;
            padding-left: 30px;

            &:before {
              background-color: #333;
              width: 15px;
            }
          }

          span.color {
            -webkit-transform: rotate(225deg);
            -ms-transform: rotate(225deg);
            transform: rotate(225deg);
          }
        }
      }
    }
  }

  .product {
    position: relative;
    text-decoration: none;
    // -webkit-transform:  translateZ(.25px);
    // -ms-transform:      translateZ(.25px);
    // transform:          translateZ(.25px);

    .containerImage {
      width: 260px;
      height: 373px;
      margin: 0 auto;
      overflow: hidden;
    }

    .productImage {
      width: 260px;
      height: 373px;
      overflow: hidden;
      will-change: transform;
      -webkit-transition: transform 0.5s ease;
      -moz-transition: transform 0.5s ease;
      -o-transition: transform 0.5s ease;
      transition: transform 0.5s ease;

      img {
        width: 100%;
      }
    }

    .productName {
      width: 140px;
      position: absolute;
      right: -20px;
      top: 270px;
      z-index: 2;

      font-family: "Noe Display", serif;
      font-weight: normal;
      font-size: 25px;
      line-height: 30px;
      color: #333;
      text-align: left;
      text-indent: 25px;
      will-change: top;
      -webkit-transition: top 0.5s ease;
      -moz-transition: top 0.5s ease;
      -o-transition: top 0.5s ease;
      transition: top 0.5s ease;

      span {
        border: 3px solid #333;
        width: 32px;
        display: block;
        content: "";
        position: absolute;
        top: 9px;
        left: -10px;
      }

      mark {
        background-color: white;
        padding: 2px 5px;
      }
    }

    .categoryName {
      font-family: "Oswald", sans-serif;
      font-size: 15px;
      color: #333;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      text-align: center;
      margin: 5px;
    }

    &:nth-of-type(3n + 2) {
      margin-top: 130px;
      -webkit-transform: translateZ(0.7px) scale(1);
      -ms-transform: translateZ(0.7px) scale(1);
      transform: translateZ(0.7px) scale(1);
    }

    &:nth-of-type(3n + 2) .productName {
      top: 52px;
    }

    &:hover .productImage {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
    &:hover .productName {
      top: 170px;
    }
  }
}

@media (max-width: 812px) {
  .productsList {
    &.notFeaturedProducts {
      h1.pageTitle {
        font-size: 100px;
        line-height: 6rem;
        padding-left: 15px;
      }
      .filters {
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 3;
        background: red;
        display: none;
      }
      .productsContainer {
        padding: 0;
      }
    }

    .product {
      transform: none !important;
      margin-bottom: 90px !important;
      margin-top: 0 !important;

      .containerImage {
        width: 327px !important;
        height: 470px !important;

        .productImage {
          width: 327px !important;
          height: 470px !important;
        }
      }
    }
  }
}

@media (max-width: 1400px) {
  .productsList {
    margin-bottom: 0;

    .product {
      margin-bottom: 130px;

      .productName {
        right: calc(50% - 70px);
        top: -30px !important;
        text-indent: 0;
        text-align: center;

        span {
          display: none;
        }
      }
    }
  }
}

@media (min-width: 10244px) {
  #bstoneproject.Home {
    .product:nth-of-type(3n + 2) {
      margin-top: 230px;
    }
  }
}

@media (min-width: 1400px) {
  .productsList .product:nth-of-type(3n + 2) {
    margin-top: 130px;
  }
}
</style>
