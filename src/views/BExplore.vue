<template>
  <div id="bexplorepage">
    
    <div class="container">
       
        <h1 class="h2">Port<br/>folio</h1>

        <div class="wrapper">
          <div class="masonry masonry--v">
            <figure class="masonry-brick masonry-brick--v">
                <img src="../assets/images/explore/explore_1.jpg" class="masonry-img" alt="Masonry Brick #5">
            </figure>
            <figure class="masonry-brick masonry-brick--v">
                <img src="../assets/images/explore/explore_2.jpg" class="masonry-img" alt="Masonry Brick #2">
            </figure>
            <figure class="masonry-brick masonry-brick--v"> 
                <img src="../assets/images/explore/explore_3.jpg" class="masonry-img" alt="Masonry Brick #2">
            </figure>
           <figure class="masonry-brick masonry-brick--v">
                <img src="../assets/images/explore/explore_4.jpg" class="masonry-img" alt="Masonry Brick #4">
            </figure>


            <figure class="masonry-brick masonry-brick--v">

                <!-- file option -->
                <vue-plyr>
                  <video poster="../assets/images/explore/explore_5.jpg" src="../assets/media/video_exemplo.mp4">
                    <source src="../assets/media/video_exemplo.mp4" type="video/mp4" size="720">
                    <source src="../assets/media/video_exemplo.mp4" type="video/mp4" size="1080">
                    <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
                  </video>
                </vue-plyr>


                <!-- youtube option with progressive enhancement-->
                <!-- 
                <vue-plyr>
                  <div class="plyr__video-embed">
                    <iframe 
                      poster="../assets/images/explore/explore_5.jpg"
                      src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                      allowfullscreen allowtransparency allow="autoplay" controls="false">
                    </iframe>
                  </div>
                </vue-plyr>
                 -->


                <!-- vimeo iframe with progressive enhancement -->
                <!-- 
                <vue-plyr>
                    <div class="plyr__video-embed">
                      <iframe
                        src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media"
                        allowfullscreen allowtransparency allow="autoplay">
                      </iframe>
                    </div>
                </vue-plyr>
                -->
                
            </figure>
            
            <figure class="masonry-brick masonry-brick--v">
                <img src="../assets/images/explore/explore_6.jpg" class="masonry-img" alt="Masonry Brick #3">
            </figure>
            <figure class="masonry-brick masonry-brick--v">
                <img src="../assets/images/explore/explore_7.jpg" class="masonry-img" alt="Masonry Brick #3">
            </figure>
             <figure class="masonry-brick masonry-brick--v">
                <img src="../assets/images/explore/explore_8.jpg" class="masonry-img" alt="Masonry Brick #3">
            </figure>
             <figure class="masonry-brick masonry-brick--v">
                <img src="../assets/images/explore/explore_9.jpg" class="masonry-img" alt="Masonry Brick #3">
            </figure>
            
          </div>
        </div>

    </div>

  </div>
</template>


<script>




export default {
  name: 'bexplorepage',
  // components: {
  // }
  mounted() {
    
    this.$eventBus.$emit('componentFinishLoad', true);
  }
}



</script>

<style lang="scss">
  h1{
    text-align: center;
  }
.wrapper {
  margin: 2em auto;
  max-width: 1080px;
}

img {
  vertical-align: middle;
  max-width: 100%;
}

.masonry {
  display: flex;
  max-height: 1000px;
}

.masonry--h {
  flex-flow: row wrap;
}

.masonry--v {
  flex-flow: column wrap;
  max-height: 1080px;
}

.masonry--h,
.masonry--v {
  margin-left: -8px; /* Adjustment for the gutter */
  /*counter-reset: brick;*/
}

.masonry-brick {
  overflow: hidden;
  margin: 0 0 8px 8px;  /* Some Gutter */
  color: white;
  position: relative;
}

/*.masonry-brick:after {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5000;
  transform: translate(-50%, -50%);
  counter-increment: brick;
  content: counter(brick);
  transition: font-size .25s, opacity .25s ease-in-out;
  font-weight: 700;
  opacity: .5;
  font-size: 1.25em;
}

.masonry-brick:hover:after {
  font-size: 2.25em;
  opacity: 1;
}

.masonry-brick--h {
  flex: auto;
  height: 250px;
  min-width: 150px;
}*/

@media only screen and (min-width: 1024px) {
  /* Horizontal masonry bricks on desktop-sized screen 
  .masonry-brick--h:nth-child(4n+1) {
    width: 250px;
  }
  .masonry-brick--h:nth-child(4n+2) {
    width: 325px;
  }
  .masonry-brick--h:nth-child(4n+3) {
    width: 180px;
  }
  .masonry-brick--h:nth-child(4n+4) {
    width: 380px;
  }*/

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
  /* Horizontal masonry bricks on tabled-sized screen 
  .masonry-brick--h:nth-child(4n+1) {
    width: 200px;
  }
  .masonry-brick--h:nth-child(4n+2) {
    width: 250px;
  }
  .masonry-brick--h:nth-child(4n+3) {
    width: 120px;
  }
  .masonry-brick--h:nth-child(4n+4) {
    width: 280px;
  }*/

  /* Adjusting vertical masonry height on tablet-sized screen */
  .masonry--v {
    max-height: 2000px;
  }

  /* Vertical masonry bricks on tablet-sized screen */
  .masonry-brick--v {
    width: 50%;
  }
}

.masonry-img,
.masonry-video,
.masonry-video .plyr--stopped.plyr__poster-enabled .plyr__poster{
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-filter: grayscale(1)!important;
  //filter: url(../files/filters.svg#grayscale); /* Firefox 3.5+ */
  filter: grayscale(100%)!important;
  -webkit-transition: all 0.2s cubic-bezier(0, .5, 0, 1);
	-moz-transition: all 0.2s cubic-bezier(0, .5, 0, 1);
	-o-transition: all 0.2s cubic-bezier(0, .5, 0, 1);
	transition: all 0.2s cubic-bezier(0, .5, 0, 1);

  &:hover{
      -webkit-filter: grayscale(0);
      //filter: url(../files/filters.svg#grayscale); /* Firefox 3.5+ */
      filter: grayscale(0);
  }
}

.plyr__poster{
  background-size: cover!important;
}

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