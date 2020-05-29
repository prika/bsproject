<template>
     <section class="parallaxContainer">
        <div class="container">
            <!--h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
                {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
            </h1-->

          <div class="row">
            <div class="col-6 parallaxGroup1">
                <img src="../assets/images/shared/institucional_2.jpg" class="imageParallax1 col-7 img-fluid rellax" data-rellax-speed="-7" alt="">
                <img src="../assets/images/shared/institucional_1.jpg" class="imageParallax2 col-7 img-fluid rellax" data-rellax-speed="3" alt="">
            </div>

            <div class="pageContentText col-5">
                <!-- insert server side -->
                <h1>B group comprehends 4 diferent, yet complimentary companies and activities</h1>
                <p>With all of this growth and evolution, we share with you an all inclusive brand that represents the quality, the advanced processing systems, the creativity the design and all the hard work all of us puts into every single square meter of marble that leaves our factory.</p>
                <a>Ler mais >>> </a>


                <h1>B innovation</h1>
                <p>A versatilidade, robustez e magnificência fazem do mármore o material mais desejado para vários ambientes, do mais clássico ao vanguardista. B innovation promete criar a solução ideal para si, à sua medida.</p>

                <h1>B project</h1>
                <p>B project consegue garantir todo o processo do mármore, desde o primeiro corte até sua casa. <br> Formada pela natureza, que lhe oferece tons e características únicas, o mármore é a escolha preferida na Arquitetura e Decoração.</p>

                <!-- insert server side -->
            </div>
          </div>
        </div>

        <!--div class="col-12 parallaxGroup2">
            <img src="../assets/images/shared/exemplo_1.jpg" class="imageParallax3 col-5 img-fluid rellax" data-rellax-speed="0" alt="">
            <img src="../assets/images/shared/exemplo_2.jpg" class="imageParallax4 col-4 img-fluid rellax" data-rellax-speed="2" alt="">
            <img src="../assets/images/shared/exemplo_3.jpg" class="imageParallax5 col-4 img-fluid rellax" data-rellax-speed="-1"  alt="">
            <img src="../assets/images/shared/exemplo_4.jpg" class="imageParallax6 col-4 img-fluid rellax" data-rellax-speed="-2"  alt="">
            <img src="../assets/images/shared/exemplo_5.jpg" class="imageParallax7 col-4 img-fluid rellax" data-rellax-speed="4"  alt="">
        </div-->
    </section>
</template>


<script>
    export default {
        mounted() {
            // Start Rellax
            var rellax = new Rellax('.rellax', {
                center: true
            });
            // Destroy and create again parallax with previous settings
            //rellax.refresh();
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

    padding-top: 100px;
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