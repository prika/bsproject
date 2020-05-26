<template>
  <div id="bexplorepage">
    
    <div class="container">
       
        <h1>Port<br/>folio</h1>
        <!--p>https://www.vuescript.com/masonry-layout-ssr-lazy-load/</p-->

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
                <img src="../assets/images/explore/explore_5.jpg" class="masonry-img" alt="Masonry Brick #3">
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


<script src="//unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
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

.masonry-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-filter: grayscale(1);
  //filter: url(../files/filters.svg#grayscale); /* Firefox 3.5+ */
  filter: grayscale(100%);
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


</style>