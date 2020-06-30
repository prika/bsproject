<template>
    <div class="container">
        
        <slot></slot>

        <div class="wrapper">
            <div class="masonry masonry--v effect">

              <figure class="masonry-brick masonry-brick--v" v-for="image in imageGroupMansory">
                  <img  :src="image.src" 
                        :alt="image.alt" 
                        :width="image.width"  :height="image.height"
                        class="masonry-img">
              </figure>

              <!--  
                <vue-plyr ref="player1">
                  <video poster="../assets/images/explore/explore_5.jpg" src="../assets/media/video_exemplo.mp4" aria-label="Video ....">
                    <source src="../assets/media/video_exemplo.mp4" type="video/mp4" size="720">
                    <source src="../assets/media/video_exemplo.mp4" type="video/mp4" size="1080">
                  </video>
                </vue-plyr>

                <vue-plyr>
                  <div class="plyr__video-embed">
                    <iframe 
                      poster="../assets/images/explore/explore_5.jpg"
                      src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                      allowfullscreen allowtransparency allow="autoplay" controls="false">
                    </iframe>
                  </div>
                </vue-plyr>
                 
                <vue-plyr>
                    <div class="plyr__video-embed">
                      <iframe
                        src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media"
                        allowfullscreen allowtransparency allow="autoplay">
                      </iframe>
                    </div>
                </vue-plyr>
                -->
            
            </div>

            <seeMoreButton>Ver mais</seeMoreButton>
        </div>
    </div>
</template>

<script>
    import seeMoreButton from '@/components/ui/seeMoreButton'

    export default {
        components: {
           seeMoreButton
        },
        data() {
            return {
                imageGroupMansory:[]
            }
        },
        beforeMount() {
            this.imageGroupMansory = this.$parent.mansory
        }
    }
</script>

<style lang="scss">
#bexplorepage{
padding-top: 110px;


    .wrapper { 
      margin: 0 auto 110px; 
      max-width: 1080px;
      text-align: center;
      overflow: hidden;
    }

    img {
      vertical-align: middle;
      max-width: 100%;
    }

    .masonry {
      display: flex;
      max-height: 1500px;
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
  /*counter-reset: brick;*/
}

.masonry-brick {
  overflow: hidden;
  margin: 0 0 8px 8px;  /* Some Gutter */
  color: white;
  position: relative;
  -webkit-transition:     all .3s cubic-bezier(.4,1.03,.83,.56);
  -moz-transition:        all .3s cubic-bezier(.4,1.03,.83,.56);
  -o-transition:          all .3s cubic-bezier(.4,1.03,.83,.56);
  transition:             all .3s cubic-bezier(.4,1.03,.83,.56);
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

@media only screen and (max-width: 1023px) and (min-width: 768px) {

  /* Adjusting vertical masonry height on tablet-sized screen */
  .masonry--v {
    max-height: 2000px;
  }

  /* Vertical masonry bricks on tablet-sized screen */
  .masonry-brick--v {
    width: 50%;
  }
}

// .masonry-video .plyr--stopped.plyr__poster-enabled .plyr__poster{}

.masonry-img,
.masonry-video{
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);

  -webkit-transition:     filter .3s cubic-bezier(.4,1.03,.83,.56);
  -moz-transition:        filter .3s cubic-bezier(.4,1.03,.83,.56);
  -o-transition:          filter .3s cubic-bezier(.4,1.03,.83,.56);
  transition:             filter .3s cubic-bezier(.4,1.03,.83,.56);

  &:hover{
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);
      filter: grayscale(0%);
  }
}




.plyr__poster{ background-size: cover!important; }
.plyr__controls,
.plyr__control--overlaid svg{display: none!important;}

.plyr__control--overlaid.plyr__control{
  border-radius: 0;
  padding: 0;
  width: 60px;
  height: 60px;
  background: transparent;

    &::before,
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
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

    &:hover{
        background: transparent!important;

        &::before{opacity: 0;}
        &::after{opacity: 1;}
    }
}

.plyr--video:hover {
  
    cursor: pointer!important;

    .plyr__control--overlaid.plyr__control{
          &::before{opacity: 0;}
          &::after{opacity: 1;}
    }
}
</style>