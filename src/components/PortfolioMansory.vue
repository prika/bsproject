<template>
    <div class="container">
        
        <slot></slot>

        <transition appear enter-active-class="animated slideInUp delay-1s">
        <div class="wrapper">
            
            
            <div class="masonry effect" :page="currentPage">
              
              
              <figure v-for="(image, index) in selectedThumbs" :key="image.id+index"
                      @click="showGalleryFunction(index)" 
                      :class=" image.type == 'video' ? 'video masonry-brick' : 'masonry-brick' ">

                  <transition appear enter-active-class="animated fadeInUp">
                  <img  :src="image.src"
                        :alt="image.alt" 
                        :width="image.width+'px'"  
                        :height="image.height+'px'"
                        class="masonry-img">
                  </transition>
              </figure>
              
              
            </div>
            

            <a @click="loadMoreClick" v-if="currentPage < this.thumbs.length / this.itemsPerComponent"
            style="display: block; text-align: center; margin: 50px 0 200px;">
              <seeMoreButton>{{ $t('seemoreLink') }}</seeMoreButton></a>
            
        </div>
        </transition>

        <modalGallery v-if="showGallery" @close="showGallery = false" />
    </div>
</template>

<script>
import seeMoreButton from '@/components/ui/seeMoreButton'
import modalGallery from '@/components/subcomponents/ModalGallery.vue'

export default {
    components: {
        seeMoreButton,
        modalGallery
    },
    data() {
        return {
            thumbs: [],
            selectedThumbs: [],
            largeImages:[],
            showGallery: false,
            selectedIndex: 0,
            currentPage: 1,
            itemsPerComponent: 7,
            hasLink: false
        }
    },
    methods: 
    {
      getImgUrl: function (src) 
      {
        return require('@/assets/images/'+src)
      },
      parseObject: function(source)
      {
          this.thumbs = []
          this.largeImages = []

          for ( var i = 0 ; i < source.length; i++) {

              let thumb = source[i].thumb
              let largeImage = source[i].large

              thumb.src = this.getImgUrl(thumb.src) 
              largeImage.src = this.getImgUrl(largeImage.src) 
              
              this.thumbs.push(thumb)
              this.largeImages.push(largeImage)
          }
      },
      showGalleryFunction(index)
      {

          this.showGallery = true
          this.selectedIndex = index

      },
      loadMoreClick()
      {
          let slice = this.thumbs.slice( this.currentPage * this.itemsPerComponent, ( this.currentPage + 1 ) * this.itemsPerComponent)
          this.selectedThumbs = this.selectedThumbs.concat(slice)
          this.currentPage++
      }
    },
    mounted() {
        this.$eventBus.$on('mansoryFinishLoad', (data) => {

            this.parseObject( data )
            this.selectedThumbs = this.thumbs.slice(0, this.itemsPerComponent)
            this.$eventBus.$emit('componentFinishLoad', 'mansoryLoaded')

        })
    }, 
    beforeDestroy() {
        this.$eventBus.$off('mansoryFinishLoad')
    }
}
</script>

<style lang="scss">

.wrapper { 
  margin: 0 auto 110px; 
  max-width: 1080px;
  text-align: center;
  overflow: hidden;

  .masonry {
    display: flex;
    flex-flow: column wrap;
    max-height: 1080px;
    margin-left: -8px;
    // counter-reset: brick;

    &[page="1"]{ max-height: 1000px }
    &[page="2"]{ max-height: 1500px }
    &[page="3"]{ max-height: 2000px }
    &[page="4"]{ max-height: 2500px }

    .masonry-brick {
      vertical-align: middle;
      max-width: 100%;
      overflow: hidden;
      margin: 0 0 8px 8px;
      color: white;
      position: relative;

      &.video{

        &::before,
        &::after{
          content: '';
          position: absolute;
          top: calc( 50% - 30px );
          left: calc( 50% - 30px );
          width: 60px;
          height: 60px;
          z-index: 2;
          will-change: opacity;
          -webkit-transition:   opacity 0.3s cubic-bezier(0, .5, 0, 1);
          -moz-transition:      opacity 0.3s cubic-bezier(0, .5, 0, 1);
          -o-transition:        opacity 0.3s cubic-bezier(0, .5, 0, 1);
          transition:           opacity 0.3s cubic-bezier(0, .5, 0, 1);
          background: url(../assets/images/icons/play.svg) no-repeat center center;
        }

        &::after{
          background: url(../assets/images/icons/play-hover.svg) no-repeat center center;
          opacity: 0;
        }

        &:hover {
          &::before{  opacity: 0}
          &::after{   opacity: 1}
        }
      }

      .masonry-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        cursor: pointer;
        -webkit-filter: grayscale(100%);
        -moz-filter:    grayscale(100%);
        filter:         grayscale(100%);
        -webkit-transition:     all .3s cubic-bezier(.4,1.03,.83,.56);
        -moz-transition:        all .3s cubic-bezier(.4,1.03,.83,.56);
        -o-transition:          all .3s cubic-bezier(.4,1.03,.83,.56);
        transition:             all .3s cubic-bezier(.4,1.03,.83,.56);


        &:hover{
            -webkit-filter:   grayscale(0%);
            -moz-filter:      grayscale(0%);
            filter:           grayscale(0%);
        }
      }
    }
  }
}


@media only screen and (min-width: 1024px) {

  .masonry {
    max-height: 1350px;
  }

  .masonry-brick {
    width: 33.33333%;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 812px) {

  .masonry {
    max-height: 2000px;
  }

  .masonry-brick {
    width: 50%;
  }
}
</style>