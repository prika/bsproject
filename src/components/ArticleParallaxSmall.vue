<template>
     <section class="parallaxContainer">
        <div class="container">
          
          <div class="row">

            <slot></slot>

            <div class="col-xs-12 col-md-6 parallaxGroup1 order-md-1">
                <img    :src="imageGroup1[0].src" 
                        :alt="imageGroup1[0].alt" 
                        data-rellax-speed="-2"
                        class="imageParallax1 col-9 col-sm-7 img-fluid rellax" >
                <img    :src="imageGroup1[1].src" 
                        :alt="imageGroup1[1].alt"
                        data-rellax-speed="4"
                        class="imageParallax2 col-9 col-sm-7 img-fluid rellax">
            </div>

          </div>
        </div>

        <div class="col-12 parallaxGroup2">
            <img    :src="imageGroup2[0].src" 
                    :alt="imageGroup2[0].alt"  
                    data-rellax-speed="0"
                    class="imageParallax3 col-5 img-fluid rellax">
            <img    :src="imageGroup2[1].src" 
                    :alt="imageGroup2[1].alt" 
                    data-rellax-speed="2"
                    class="imageParallax4 col-4 img-fluid rellax">
            <img    :src="imageGroup2[2].src" 
                    :alt="imageGroup2[2].alt" 
                    data-rellax-speed="-1"
                    class="imageParallax5 col-4 img-fluid rellax" >
            <img    :src="imageGroup2[3].src" 
                    :alt="imageGroup2[3].alt" 
                    data-rellax-speed="-2"
                    class="imageParallax6 col-4 img-fluid rellax" >
            <img    :src="imageGroup2[4].src" 
                    :alt="imageGroup2[4].alt" 
                    data-rellax-speed="4" 
                    class="imageParallax7 col-4 img-fluid rellax" >
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imageGroup1:[],
            imageGroup2:[]
        }
    },
    beforeMount() {
        
        this.imageGroup1 = this.$parent.gallery1
        this.imageGroup2 = this.$parent.gallery2
        var rellax = new Rellax('.rellax');
    },
    mounted() {
        rellax.refresh();
    },
    watch: {
        $route(to , from){
            // Destroy and create again parallax with previous settings
            rellax.refresh();
        }
    }
}
</script>

<style lang="scss">

.parallaxContainer {
    background: url(../assets/images/B_Simbolo_estatico_Corpo.svg) no-repeat 65% 150px fixed;

    -webkit-background-size:  300px;
    -moz-background-size:     300px;
    -o-background-size:       300px;
    background-size:          300px;

    /* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/B_Simbolo_estatico_Corpo.svg', sizingMethod='scale');
    -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/B_Simbolo_estatico_Corpo.svg', sizingMethod='scale')"; */
    position: relative;
    z-index: 0;

    &:after{
        content: '';
        display: block;
        background: linear-gradient(rgba(240, 240, 240, 0) 0%, #f0f0f0 100%);
        height: 130px;
    }
}


.parallaxGroup1{
  .imageParallax1{
      float: right;
      z-index: 1;
      padding-right: 70px;
  }
}

.parallaxGroup2{
  overflow: hidden;
  position: relative;
  height: 2900px;


  & img{
      position: absolute;
  }

  & .imageParallax3{
      top: 400px;
      right: 20%;
      z-index: 0;
  }

  & .imageParallax4{
      top: 790px;
      left: 10%;
      z-index: 1;
  }

  & .imageParallax5{
      top: 980px; 
      right: 0;
      z-index: 1;
  }

  & .imageParallax6{
      top: 1600px; 
      left: 10%;
      z-index: 0;
  }

  & .imageParallax7{
      top: 2230px; 
      left: 0;
      z-index: 1;
  }
}


.pageContentText { 
  z-index: 2;
  margin-top: 110px; 
  padding-top: 110px; 
  background: rgb(240,240,240);
  background: linear-gradient(180deg, rgba(240,240,240,0) 0%, rgba(240,240,240,1) 10%, rgba(240,240,240,1) 90%, rgba(240,240,240,0) 100%);

    & h1{
        font-size: 40px;
        position: relative;

        &:after{
            content: '';
            position: absolute;
            top: 30px;
            left: -200px;
            background: #C47C5A;
            width: 140px;
            height: 2px;
        }
    }

    p{padding-top: 30px;}
    .quote {padding-left: 5%; font-style: italic;}
}

</style>