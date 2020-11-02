<template>
  <div id="newsdetailpage" class="pageContainer">
    <h1 class="pageTitle" :aria-label="$t('home-title-page')">
      {{ $t("home-title-page-split1")
      }}
      <span>{{ $t("home-title-page-split2") }}</span>
    </h1>

    <div class="parallaxContainerNews row">
      <div class="col-12 col-md-7 parallaxGroup1 order-1 order-sm-2">
        <img
          v-for="(image, index) in imageGroup1"
          :key="image.id"
          :src="image.src"
          :alt="image.alt"
          :data-rellax-speed="image.speed"
          :class="['rellax', image.addclass, 'imageParallax' + (index + 1)]"
          importance="high"
        />
      </div>

      <div class="pageContentText col-12 col-md-5 order-md-2">
        <h1 v-html="news.title">{{ news.title }}</h1>
        <p v-html="news.content">{{ news.content }}</p>
        <p class="newsDate">{{ news.pubdata }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsdetailpage",
  data() {
    return {
      news: "",
      imageGroup1: [],
      rellax: null
    };
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
    rellaxLoaded: function() {
      this.rellax = new Rellax(".rellax");
      this.$eventBus.$emit("componentFinishLoad", "rellaxLoaded");
    }
  },
  created() {
    let selectedNews = this.$route.params.id;

    this.$http
      .get(
        "https://dev5.incentea-mi.pt/bstone/mocks/news-detail-mock-" + selectedNews + ".json"
      )
      .then(response => {
        this.news = response.data;
        this.parseObject(response.data.gallery1, this.imageGroup1);

        this.$eventBus.$emit("pageFinishLoad", true);
      });

    var tag = document.createElement("script");
    tag.src =
      "https://cdnjs.cloudflare.com/ajax/libs/rellax/1.0.0/rellax.min.js";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.onload = this.rellaxLoaded;
  },
  watch: {
    $route(to, from) {
      this.rellax.refresh();
    }
  }
};
</script>

<style lang="scss">
#newsdetailpage {
  margin-top: 140px;

  h1.pageTitle,
  .h1.pageTitle {
    position: fixed;
  }

  .parallaxContainerNews {
    padding-top: 270px;
    padding-bottom: 270px;

    .parallaxGroup1 {
      padding-right: 11%;

      img {
        position: relative;
        -webkit-filter: grayscale(0%);
        -moz-filter: grayscale(0%);
        filter: grayscale(0%);
        z-index: 0;
        right: 0;
        top: 0;
        margin-bottom: 5px;
      }
    }
  }

  .pageContentText {
    height: calc(100vh - 160px);
    position: -webkit-sticky;
    position: sticky;
    top: 160px;
    right: 5%;
    margin: 0;
    padding: 0;

    .newsDate {
      position: relative;
    }
  }
}
</style>
