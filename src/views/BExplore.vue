<template>
  <div id="bexplorepage">
    
    <div class="container">
       
        <h1>Port<br/>folio</h1>
        <!--p>https://www.vuescript.com/masonry-layout-ssr-lazy-load/</p-->

        <div class="wrapper">
          <div class="masonry masonry--v">
            <figure class="masonry-brick masonry-brick--v"> <img src="../assets/images/explore/exemplo_1.jpg" class="masonry-img" alt="Masonry Brick #2"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="../assets/images/explore/exemplo_2.jpg" class="masonry-img" alt="Masonry Brick #2"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/600?image=3" class="masonry-img" alt="Masonry Brick #3"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/1024?image=4" class="masonry-img" alt="Masonry Brick #4"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/450?image=5" class="masonry-img" alt="Masonry Brick #5"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/600?image=6" class="masonry-img" alt="Masonry Brick #6"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/550?image=18" class="masonry-img" alt="Masonry Brick #7"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/800?image=8" class="masonry-img" alt="Masonry Brick #8"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/600?image=19" class="masonry-img" alt="Masonry Brick #9"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/500?image=10" class="masonry-img" alt="Masonry Brick #10"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/450?image=11" class="masonry-img" alt="Masonry Brick #11"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/550?image=12" class="masonry-img" alt="Masonry Brick #12"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/650?image=13" class="masonry-img" alt="Masonry Brick #13"></figure>
            <figure class="masonry-brick masonry-brick--v"><img src="https://unsplash.it/700/450?image=14" class="masonry-img" alt="Masonry Brick #14"></figure>
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
  //     Header,
  //     Footer
  // }
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', true);
  }
}


/**
 * Set appropriate spanning to any masonry item
 *
 * Get different properties we already set for the masonry, calculate 
 * height or spanning for any cell of the masonry grid based on its 
 * content-wrapper's height, the (row) gap of the grid, and the size 
 * of the implicit row tracks.
 *
 * @param item Object A brick/tile/cell inside the masonry
 * @link https://w3bits.com/css-grid-masonry/
 */
// function resizeMasonryItem(item){
//   /* Get the grid object, its row-gap, and the size of its implicit rows */
//   var grid = document.getElementsByClassName('masonry')[0];
//   if( grid ) {
//     var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
//         rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
//         gridImagesAsContent = item.querySelector('img.masonry-content');

//     /*
//      * Spanning for any brick = S
//      * Grid's row-gap = G
//      * Size of grid's implicitly create row-track = R
//      * Height of item content = H
//      * Net height of the item = H1 = H + G
//      * Net height of the implicit row-track = T = G + R
//      * S = H1 / T
//      */
//     var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

//     /* Set the spanning as calculated above (S) */
//     item.style.gridRowEnd = 'span '+rowSpan;
//     if(gridImagesAsContent) {
//       item.querySelector('img.masonry-content').style.height = item.getBoundingClientRect().height + "px";
//     }
//   }
// }

/**
 * Apply spanning to all the masonry items
 *
 * Loop through all the items and apply the spanning to them using 
 * `resizeMasonryItem()` function.
 *
 * @uses resizeMasonryItem
 * @link https://w3bits.com/css-grid-masonry/
//  */
// function resizeAllMasonryItems(){
//   // Get all item class objects in one list
//   var allItems = document.querySelectorAll('.masonry-item');

//   /*
//    * Loop through the above list and execute the spanning function to
//    * each list-item (i.e. each masonry item)
//    */
//   if( allItems ) {
//     for(var i=0;i>allItems.length;i++){
//       resizeMasonryItem(allItems[i]);
//     }
//   }
// }

 /**
 * Resize the items when all the images inside the masonry grid 
 * finish loading. This will ensure that all the content inside our
 * masonry items is visible.
 *
 * @uses ImagesLoaded
 * @uses resizeMasonryItem
 * @link https://w3bits.com/css-grid-masonry/
//  */
// function waitForImages() {
//   //var grid = document.getElementById("masonry");
//   var allItems = document.querySelectorAll('.masonry-item');
//   if( allItems ) {
//     for(var i=0;i<allItems.length;i++){
//       imagesLoaded( allItems[i], function(instance) {
//         var item = instance.elements[0];
//         resizeMasonryItem(item);
//         console.log("Waiting for Images");
//       } );
//     }
//   }
// }

// /* Resize all the grid items on the load and resize events */
// var masonryEvents = ['load', 'resize'];
// masonryEvents.forEach( function(event) {
//   window.addEventListener(event, resizeAllMasonryItems);
// } );

// /* Do a resize once more when all the images finish loading */
// waitForImages();  
</script>

  <style>
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
  counter-reset: brick;
}

.masonry-brick {
  overflow: hidden;
  border-radius: 5px;
  margin: 0 0 8px 8px;  /* Some Gutter */
  background-color: #333;
  color: white;
  position: relative;
}

.masonry-brick:after {
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
}

@media only screen and (min-width: 1024px) {
  /* Horizontal masonry bricks on desktop-sized screen */
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
  }

  /* Adjusting vertical masonry height on desktop-sized screen */
  .masonry--v {
    max-height: 1600px;
  }

  /* Vertical masonry bricks on desktop-sized screen */
  .masonry-brick--v {
    width: 33.33333%;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  /* Horizontal masonry bricks on tabled-sized screen */
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
  }

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
  filter: brightness(50%);
}


/* Page assets */

.labs-pagination {
  margin-bottom: 1.5rem;
  font-size: 12px;
}

.labs-page {
  text-transform: uppercase;
  display: inline-block;
  padding: .5em .75em;
  border: 2px solid #333;
}

.labs-page:hover,
.labs-page--current {
  background-color: #333;
  color: rgba(255, 255, 255, .75);
}
  </style>