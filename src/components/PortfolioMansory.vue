<template>
    <div class="container">
        
        <slot></slot>

        <div class="wrapper">
            <div class="masonry masonry--v effect">

              <figure v-for="(image, index) in thumbs" :key="image.id"
                      @click="showGalleryFunction(index)" 
                      :class=" image.type == 'video' ? 'video masonry-brick masonry-brick--v' : 'masonry-brick masonry-brick--v' "
                      class="">

                  <img  :src="image.src" 
                        :alt="image.alt" 
                        :width="image.width+'px'"  
                        :height="image.height+'px'"
                        class="masonry-img">
              </figure>
            
            </div>

            <seeMoreButton> {{ $t('seemoreLink') }} </seeMoreButton>
        </div>

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
            largeImages:[],
            showGallery: false,
            selectedIndex: 0
        }
    },
    methods: {
      getImgUrl: function (src) {
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
      showGalleryFunction(index){

          this.showGallery = true
          this.selectedIndex = index

      }
    },
    mounted() {
        this.$eventBus.$on('mansoryFinishLoad', (data) => {

            this.parseObject( data )
            this.$eventBus.$emit('componentFinishLoad', 'mansoryLoaded')

        })
    }, 
    beforeDestroy() {
        this.$eventBus.$off('mansoryFinishLoad')
    }
}
</script>

<style lang="scss">
#bexplorepage{
padding-top: 110px;
}

  .wrapper { 
    margin: 0 auto 110px; 
    max-width: 1080px;
    text-align: center;
    overflow: hidden;

      .masonry {
        display: flex;
        max-height: 1500px;

         img {
            vertical-align: middle;
            max-width: 100%;
          }
      }
  }


// .masonry .effect{
//   perspective: 1300px;

//   figure{
//       transform-style: preserve-3d;

//       &.animate{
//           transform: translateZ(400px) translateY(300px) rotateX(-90deg);
// 	        animation: fallPerspective .8s ease-in-out forwards;
//       }
//   }

// }

// @keyframes fallPerspective {
// 	100% { transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }
// }

.masonry--v {
  flex-flow: column wrap;
  max-height: 1080px;
  margin-left: -8px;
  // counter-reset: brick;
}

.masonry-brick {
  overflow: hidden;
  margin: 0 0 8px 8px;
  color: white;
  position: relative;
  -webkit-transition:     all .3s cubic-bezier(.4,1.03,.83,.56);
  -moz-transition:        all .3s cubic-bezier(.4,1.03,.83,.56);
  -o-transition:          all .3s cubic-bezier(.4,1.03,.83,.56);
  transition:             all .3s cubic-bezier(.4,1.03,.83,.56);

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
}


@media only screen and (min-width: 1024px) {

  /* Adjusting vertical masonry height on desktop-sized screen */
  .masonry--v {
    max-height: 1350px;
  }

  /* Vertical masonry bricks on desktop-sized screen */
  .masonry-brick--v {
    width: 33.33333%;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 812px) {

  /* Adjusting vertical masonry height on tablet-sized screen */
  .masonry--v {
    max-height: 2000px;
  }

  .masonry-brick--v {
    width: 50%;
  }
}

.masonry-img,
.masonry-video{
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


// .plyr__poster{ background-size: cover!important; }
// .plyr__controls,
// .plyr__control--overlaid svg{display: none!important;}

// .plyr__control--overlaid.plyr__control{
//   border-radius: 0;
//   padding: 0;
//   width: 60px;
//   height: 60px;
//   background: transparent;

//     &::before,
//     &::after{
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 60px;
//       height: 60px;
//       -webkit-transition:   opacity 0.3s cubic-bezier(0, .5, 0, 1);
//       -moz-transition:      opacity 0.3s cubic-bezier(0, .5, 0, 1);
//       -o-transition:        opacity 0.3s cubic-bezier(0, .5, 0, 1);
//       transition:           opacity 0.3s cubic-bezier(0, .5, 0, 1);
//       background: url(../assets/images/icons/play.svg) no-repeat center center;
//     }

//     &::after{
//       background: url(../assets/images/icons/play-hover.svg) no-repeat center center;
//       opacity: 0;
//     }

//     &:hover{
//         background: transparent!important;

//         &::before{opacity: 0;}
//         &::after{opacity: 1;}
//     }
// }

// .plyr--video:hover {
  
//     cursor: pointer!important;

//     .plyr__control--overlaid.plyr__control{
//           &::before{opacity: 0;}
//           &::after{opacity: 1;}
//     }
// }
</style>