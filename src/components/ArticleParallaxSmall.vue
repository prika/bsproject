<template>
     <section class="parallaxContainer">
        <div class="container">
            <!--h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
                {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
            </h1-->

          <div class="row">

            <slot></slot>

            <div class="col-xs-12 col-md-6 parallaxGroup1 order-md-1">
                <img src="../assets/images/shared/institucional_2.jpg" class="imageParallax1 col-9 col-sm-7 img-fluid rellax" data-rellax-speed="-2" alt="">
                <img src="../assets/images/shared/institucional_1.jpg" class="imageParallax2 col-9 col-sm-7 img-fluid rellax" data-rellax-speed="4" alt="">
            </div>

          </div>
        </div>

        <div class="col-12 parallaxGroup2">
            <img src="../assets/images/shared/exemplo_1.jpg" class="imageParallax3 col-5 img-fluid rellax" data-rellax-speed="0" alt="">
            <img src="../assets/images/shared/exemplo_2.jpg" class="imageParallax4 col-4 img-fluid rellax" data-rellax-speed="2" alt="">
            <img src="../assets/images/shared/exemplo_3.jpg" class="imageParallax5 col-4 img-fluid rellax" data-rellax-speed="-1"  alt="">
            <img src="../assets/images/shared/exemplo_4.jpg" class="imageParallax6 col-4 img-fluid rellax" data-rellax-speed="-2"  alt="">
            <img src="../assets/images/shared/exemplo_5.jpg" class="imageParallax7 col-4 img-fluid rellax" data-rellax-speed="4"  alt="">
        </div>
    </section>
</template>


<script>
    export default {
        mounted() {
            const rellax = new Rellax('.rellax');
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

    //padding-top: 100px;
    margin-bottom: 130px;

    &::before {
        content: "";
        display: block;
        background: linear-gradient(to bottom, rgba(240, 240, 240, 0), #F0F0F0);
        width: 100%;
        height: 200px;
    }
}


.parallaxGroup1{
  .imageParallax1{
      float: right;
      z-index: 2;
      padding-right: 70px;
  }
}

.parallaxGroup2{
  overflow: hidden;
  position: relative;
  margin-top: 400px;
  background: #F0F0F0;
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
  padding-top: 110px; 
  background: #F0F0F0;

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