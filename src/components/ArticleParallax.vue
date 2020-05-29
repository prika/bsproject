<template>
     <section>
        <div class="container">
          <div class="row">
            <div class="col-6 parallaxGroup1">
                <img src="../assets/images/shared/institucional_2.jpg" class="imageParallax1 col-7 img-fluid rellax" data-rellax-speed="-7" alt="">
                <img src="../assets/images/shared/institucional_1.jpg" class="imageParallax2 col-7 img-fluid rellax" data-rellax-speed="3" alt="">
            </div>

            <div class="pageContentText col-5">
              <!-- insert server side -->
              <h1>Bgroup comprehends 4 diferent, yet complimentary companies and activities</h1>
              <p>Quarrying with <a href="/b-explore">Bexplore</a>; Transformation and distribution with <a href="/bloco-b">BlocoB</a>, Cut to size projects with <a href="/b-project">Bproject</a> and 3D special projects with <a href="/b-innovation">Binnovation</a>.</p>
              <p>With all of this growth and evolution, we share with you an all inclusive brand that represents the quality, the advanced processing systems, the creativity the design and all the hard work all of us puts into every single square meter of marble that leaves our factory.</p>
              <div class="quote">From Portugal to the world, Bstone sells quality natural stones like marbles limestones and granites.</div>
              <p>Strengthen ties with different cultures is the path of Bstone which, throughout its history, created and consolidated a wide network of international contacts, reinforcing the partnership and proximity Today, Bstone exports natural stone to over 15 countries on 4 continents through a vast network of major distributors. The experience gained throughout our expertise in the international market, through contact with various cultures, brought firmness and security, making Bstone a solid company, always ready to meet the demands of each project.</p>
              <p>Our extensive knowledge of the product and of the market as well as contact with different cultures, has boosted the quality of the product and service allowing to meet the expectations of each customer.</p>
              <p>The company offers an outdoor park with 10.000 m2 a production area and stone gallery of 4.100 m2 The extensive park keeps stock of all kinds of marble in blocks, slabs or tiles, enabling in time delivery of any article.</p>
              <p>Formed by nature, which afford it unique shades and characteristics, marble is the preferred choice in Architecture and Decoration It’s versatility, robustness and magnificence make of it the most wanted material for various environments, from classical to avant garde.</p>
              <!-- insert server side -->
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
            // Start Rellax
            var rellax = new Rellax('.rellax', {
                center: true
            });
            // Destroy and create again parallax with previous settings
            rellax.refresh();
        }
    }
</script>

<style lang="scss">

.pageContainer {
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