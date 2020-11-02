<template>
  <section id="bannerFullsize">
    <div class="line horizontalLine"></div>
    <div class="line verticalLeftLine"></div>
    <div class="line verticalRightLine"></div>

    <div class="carousel-indicators">
      <a
        v-for="(image, index) in imageGroupSliderGallery"
        :key="image.id + index"
        :class="index === activeSlide ? 'active' : ''"
        :data-slide-to="index"
        href="javascript:void(0)"
        @click="selectSlide(index)"
      >
        <span v-if="index < 9">0</span>
        {{ index + 1 }}
      </a>
    </div>

    <div class="carouselContainer">
      <template v-for="(image, index) in imageGroupSliderGallery">
        <div
          v-if="image.type == 'img'"
          :class="['slide', index === activeSlide ? 'active' : '']"
          :width="resizedWidth[index] + 'px'"
          :height="resizedHeight[index] + 'px'"
          :key="image.id">
          
          <img
            :src="getImgUrl(image.src)"
            :alt="image.alt"
            :width="resizedWidth[index] + 'px'"
            :height="resizedHeight[index] + 'px'"
            :importance="index === 0 ? 'high' : 'low'"
          />
        </div>

        <div
          v-if="image.type == 'video-uploaded'"
          :class="['slide', index === activeSlide ? 'active' : '']"
          :ref="'player' + index"
          :width="resizedWidth[index] + 'px'"
          :height="resizedHeight[index] + 'px'"
          :key="image.id"
        >
          <video
            crossorigin="anonymous"
            playsinline
            :id="'video' + index"
            :poster="getImgUrl(image.src)"
            :src="getVideoUrl(image.srcvideo)"
            :aria-label="image.alt"
            :width="resizedWidth[index] + 'px'"
            :height="resizedHeight[index] + 'px'"
            :importance="index === 0 ? 'high' : 'low'"
            muted="muted"
          >
            <source :src="getVideoUrl(image.srcvideo)" type="video/mp4" size="720" />
            <source :src="getVideoUrl(image.srcvideo1080)" type="video/mp4" size="1080" />
          </video>
        </div>

        <div
          v-if="image.type == 'video-youtube'"
          :key="image.id"
          :class="['slide', index === activeSlide ? 'active' : '']"
          :id="'videoContainer' + index"
        >
          <div
            :id="'youtube_video_' + index"
            :width="resizedWidth[index] + 'px'"
            :height="resizedHeight[index] + 'px'"
          ></div>
        </div>

        <div
          v-if="image.type == 'video-vimeo'"
          :class="['slide', index === activeSlide ? 'active' : '']"
          :ref="'player' + index"
          :width="resizedWidth[index] + 'px'"
          :height="resizedHeight[index] + 'px'"
          :key="image.id"
          :poster="getImgUrl(image.src)"
        >
          <div
            :id="'vimeo_video_' + index"
            :alt="image.alt"
            :importance="index === 0 ? 'high' : 'low'"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "bannerFullsize",
  data() {
    return {
      imageGroupSliderGallery: [
        {
          type: String,
          src: String,
          alt: String,
          width: Number,
          height: Number
        }
      ],
      activeSlide: 0,
      slideWidth: [],
      slideHeight: [],
      slideAspectRatio: [],
      resizedWidth: [],
      resizedHeight: [],
      timer: null,
      youtubePlayers: {},
      vimeoPlayers: {}
    };
  },
  created() {
    this.$http
      .get("https://dev5.incentea-mi.pt/bstone/mocks/homepage-mock.json")
      .then(response => {
        this.imageGroupSliderGallery = response.data.slidergallery;
        var hasYoutubeVideoPlayerScript = false;
        var hasVimeoVideoPlayerScript = false;

        for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {
          if (this.imageGroupSliderGallery[i].type === "img") continue;

          if (
            this.imageGroupSliderGallery[i].type === "video-youtube" &&
            !hasYoutubeVideoPlayerScript
          ) {
            this.appendYoutubePlayerJS();
            hasYoutubeVideoPlayerScript = true;
          }

          if (
            this.imageGroupSliderGallery[i].type === "video-vimeo" &&
            !hasVimeoVideoPlayerScript
          ) {
            this.appendVimeoPlayerJS();
            hasVimeoVideoPlayerScript = true;
          }
        }

        this.resizeContent();
        window.addEventListener("resize", this.resizeContent);
        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
        this.startSlide();

        this.$eventBus.$emit("componentFinishLoad", "bannerLoaded");
      });
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeContent);
  },
  methods: {
    appendYoutubePlayerJS: function() {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },
    appendVimeoPlayerJS: function() {
      var tag = document.createElement("script");
      tag.src = "https://player.vimeo.com/api/player.js";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      tag.onload = this.onVimeoIframeAPIReady;
    },
    onYouTubeIframeAPIReady: function() {
      for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {
        if (this.imageGroupSliderGallery[i].type != "video-youtube") continue;

        var player = new YT.Player("youtube_video_" + i, {
          videoId: this.imageGroupSliderGallery[i].srcvideo,
          playerVars: { autoplay: 0, controls: 0 },
          width: this.resizedWidth[i],
          height: this.resizedHeight[i],
          showinfo: 0,
          modestbranding: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
          controls: 0,
          events: {
            onStateChange: this.endedMedia
          }
        });

        this.youtubePlayers[i] = player;
      }
    },
    onVimeoIframeAPIReady: function() {
      for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {
        if (this.imageGroupSliderGallery[i].type != "video-vimeo") continue;

        let options = {
          id: this.imageGroupSliderGallery[i].srcvideo,
          width: this.resizedWidth[i],
          height: this.resizedHeight[i],
          controls: false,
          muted: true,
          title: false
        };

        var vimeoPlayer = new Vimeo.Player("vimeo_video_" + i, options);
        vimeoPlayer.on("ended", this.next);
        this.vimeoPlayers[i] = vimeoPlayer;
      }
    },
    resizeContent: function() {
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      let windowRatio = windowWidth / windowHeight;

      for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {
        this.slideWidth[i] = this.imageGroupSliderGallery[i].width;
        this.slideHeight[i] = this.imageGroupSliderGallery[i].height;
        this.slideAspectRatio[i] = this.slideWidth[i] / this.slideHeight[i];

        if (this.slideAspectRatio[i] < windowRatio) {
          this.resizedWidth[i] = windowWidth;
          this.resizedHeight[i] =
            this.resizedWidth[i] / this.slideAspectRatio[i];
        } else {
          this.resizedHeight[i] = windowHeight;
          this.resizedWidth[i] =
            this.resizedHeight[i] * this.slideAspectRatio[i];
        }
      }
    },
    getImgUrl: function(src) {
      return require("@/assets/images/" + src);
    },
    getVideoUrl: function(src) {
      return require("@/assets/media/" + src);
    },
    startSlide: function() {
      this.selectSlide(0);
    },
    selectSlide: function(slideNumber) {
      this.pauseMedia(this.activeSlide);
      this.activeSlide = slideNumber;
      this.playMedia(this.activeSlide);
    },
    next: function() {
      this.pauseMedia(this.activeSlide);
      this.activeSlide =
        this.activeSlide + 1 == this.imageGroupSliderGallery.length
          ? 0
          : this.activeSlide + 1;
      this.playMedia(this.activeSlide);
    },
    prev: function() {
      this.pauseMedia(this.activeSlide);
      this.activeSlide =
        this.activeSlide - 1 == 0
          ? this.imageGroupSliderGallery.length
          : this.activeSlide - 1;
      this.playMedia(this.activeSlide);
    },
    playMedia: function() {
      let videoType = this.imageGroupSliderGallery[this.activeSlide].type;

      if (videoType == "img") {
        this.timer = setInterval(this.next, 5000);
        return;
      }

      if (videoType == "video-uploaded") {
        let playElement = document.getElementById("video" + this.activeSlide);
        playElement.addEventListener("ended", this.next);
        playElement.play();
        return;
      }

      if (videoType == "video-youtube") {
        this.youtubePlayers[this.activeSlide].playVideo().mute();
        return;
      }

      if (videoType == "video-vimeo") {
        this.vimeoPlayers[this.activeSlide].play();
        return;
      }
    },
    pauseMedia: function() {
      let videoType = this.imageGroupSliderGallery[this.activeSlide].type;

      if (videoType == "img") {
        clearInterval(this.timer);
        return;
      }

      if (videoType == "video-uploaded") {
        document.getElementById("video" + this.activeSlide).pause();
      }
      if (videoType == "video-youtube") {
        this.youtubePlayers[this.activeSlide].pauseVideo();
      }
      if (videoType == "video-vimeo") {
        this.vimeoPlayers[this.activeSlide].pause();
      }
    },
    endedMedia: function(event) {
      if (
        this.imageGroupSliderGallery[this.activeSlide].type ==
          "video-youtube" &&
        event.data == 0
      )
        this.next();
    }
  }
};
</script>

<style lang="scss">
#bannerFullsize {
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  //height: calc(var(--vh,1vh) * 100);

  .carouselContainer {
    width: 100vw;
    height: 100vh;
    position: relative;

    .slide {
      position: absolute;
      float: left;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transform: translateY(-100vh);
      z-index: 1;
      will-change: transform;
      -webkit-transition: transform 0.6s cubic-bezier(0, 0.5, 0, 1);
      -moz-transition: transform 0.6s cubic-bezier(0, 0.5, 0, 1);
      -o-transition: transform 0.6s cubic-bezier(0, 0.5, 0, 1);
      transition: transform 0.6s cubic-bezier(0, 0.5, 0, 1);

      &.active {
        z-index: 2;
        transform: translateY(0);

        //IMAGE
        &::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 0;

          width: 100%;
          height: 100%;

          background-image: url(../assets/images/shared/intro_home.svg);
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: fixed;

          -webkit-background-size: 510px;
          -moz-background-size: 510px;
          -o-background-size: 510px;
          background-size: 510px;

          -webkit-clip-path: polygon(
            0px 0px,
            100% 0px,
            100% 55.61%,
            65.58% 55.93%,
            34.29% 99.7%,
            0px 100%
          );
          -o-clip-path: polygon(
            0px 0px,
            100% 0px,
            100% 55.61%,
            65.58% 55.93%,
            34.29% 99.7%,
            0px 100%
          );
          -ms-clip-path: polygon(
            0px 0px,
            100% 0px,
            100% 55.61%,
            65.58% 55.93%,
            34.29% 99.7%,
            0px 100%
          );
          clip-path: polygon(
            0px 0px,
            100% 0px,
            100% 55.61%,
            65.58% 55.93%,
            34.29% 99.7%,
            0px 100%
          );

          -webkit-animation: changeLogos2 0.3s cubic-bezier(0, 0.5, 0, 1)
            forwards;
          -moz-animation: changeLogos2 0.3s cubic-bezier(0, 0.5, 0, 1) forwards;
          -o-animation: changeLogos2 0.3s cubic-bezier(0, 0.5, 0, 1) forwards;
          animation: changeLogos2 0.3s cubic-bezier(0, 0.5, 0, 1) forwards;
        }
      }
    }
  }

  .carousel-indicators {
    // position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;

    align-items: baseline;
    position: absolute;
    bottom: 25px;
    z-index: 4;

    a {
      flex: 0 1 auto;
      width: 100px;
      height: 40px;
      text-indent: 0;
      justify-items: center;
      color: #fff;
      font-family: "Oswald", sans-serif;
      text-decoration: none;
      font-weight: 300;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
      background: none;
      will-change: opacity;
      -webkit-transition: opacity 2s cubic-bezier(0, 0.5, 0, 1);
      -moz-transition: opacity 2s cubic-bezier(0, 0.5, 0, 1);
      -o-transition: opacity 2s cubic-bezier(0, 0.5, 0, 1);
      transition: opacity 2s cubic-bezier(0, 0.5, 0, 1);
      position: relative;
      opacity: 1;

      &:before {
        content: "";
        position: absolute;
        background: #fff;
        height: 2px;
        width: 45px;
        bottom: 20px;
        left: -24px;
      }

      &:first-child:before {
        display: none;
      }
    }

    .active {
      line-height: 28px;
      font-size: 28px;
    }
  }
}

// @include media-breakpoint-up(md) {
//     #bannerFullsize{
//         height: calc(100vh - 90px);
//         height: calc(var(--vh, 1vh) * 100 - 90px);
//     }
// }

// @include media-breakpoint-up(xl) {
//     #bannerFullsize{
//         height: calc(100vh - 124px);
//         height: calc(var(--vh, 1vh) * 100 - 124px);
//     }
// }

.line {
  position: absolute;
  background: rgba(240, 240, 240, 0.3);
  z-index: 4;
  display: block;
  opacity: 0;

  &.horizontalLine {
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 1px;

    -webkit-animation: horizontalLineAnim 2s ease-in-out 7s forwards;
    -moz-animation: horizontalLineAnim 2s ease-in-out 7s forwards;
    -o-animation: horizontalLineAnim 2s ease-in-out 7s forwards;
    animation: horizontalLineAnim 2s ease-in-out 7s forwards;
  }
  &.verticalLeftLine {
    top: 0;
    bottom: 0;
    left: 0;

    width: 1px;
    height: 100vh;

    -webkit-animation: verticalLineAnim 2s ease-in-out 7s forwards;
    -moz-animation: verticalLineAnim 2s ease-in-out 7s forwards;
    -o-animation: verticalLineAnim 2s ease-in-out 7s forwards;
    animation: verticalLineAnim 2s ease-in-out 7s forwards;
  }
  &.verticalRightLine {
    top: 0;
    bottom: 0;
    right: 0;

    width: 1px;
    height: 100vh;

    -webkit-animation: verticalLineAnim2 2s ease-in-out 6s forwards;
    -moz-animation: verticalLineAnim2 2s ease-in-out 6s forwards;
    -o-animation: verticalLineAnim2 2s ease-in-out 6s forwards;
    animation: verticalLineAnim2 2s ease-in-out 6s forwards;
  }
}

@media (max-width: 812px) {
  #bannerFullsize .carouselContainer .slide.active::after {
    background-size: 370px;
  }
}
</style>
