<template>
  <div id="notFoundPage" class="pageContainer container">
    <h1 class="pageTitle">
      Página não encontrada
    </h1>

    <ArticleParallax>
      <div class="pageContentText col-12 col-md-4 order-md-2">
        <h1>Procure na <router-link to="/">Página Inicial</router-link></h1>
      </div>
    </ArticleParallax>
  </div>
</template>

<script>
import ArticleParallax from "@/components/ArticleParallax";

export default {
  name: "notFoundPage",
  components: {
    ArticleParallax,
  },
  methods: {
    getImgUrl: function(src) {
      return require("@/assets/images/" + src);
    },
    parseObject: function(source, destination) {
      for (var i = 0; i < source.length; i++) {
        let obj = source[i];
        let fullPath = this.getImgUrl(obj.src);
        obj.src = fullPath;
        destination.push(obj);
      }
    },
  },
  created() {
    let selectedNews = this.$route.params.id;
    console.log(selectedNews);

    this.$http
      .get("http://localhost:8080/mocks/news-detail-mock.json")
      .then((response) => {
        this.news = response.data;
        this.parseObject(response.data.gallery1, this.gallery1);
        this.parseObject(response.data.gallery2, this.gallery2);

        this.$eventBus.$emit("pageFinishLoad", true);
      });
  },
};
</script>

<style lang="scss">
#notFoundPage {
  margin-top: 140px;

  .parallaxContainer {
    padding-top: 0;

    .parallaxGroup1 .imageParallax1 {
      top: 30%;
    }
    .pageContentText {
      margin-top: 250px;
    }
  }

  .newsContainer .row {
    padding: 100px 0 0;
  }
  .newsDate {
    position: inherit;
  }
}
</style>
