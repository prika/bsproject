<template>

  <div id="institutionalpage" class="pageContainer">
    
        <div class="container">
            <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
              {{ $t('home-title-page-split1') }}<span>{{ $t('home-title-page-split2') }}</span>
            </h1>
            
            <div class="pageContentText col-5" style="margin-left:50%">
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
</template>

<script>

export default {
  name: 'institutionalpage',
  data(){
    return {
        //isLoading
    }
  },
  mounted() {
      this.$eventBus.$emit('componentFinishLoad', null);
  }
}
</script>

<style>
  .pageContentText { 
    padding-top: 130px; 
  }
  .pageContentText h1{
    font-size: 40px;
    position: relative;
  }
  .pageContentText h1:after{
    content: '';
    position: absolute;
    top: 30px;
    left: -200px;
    background: #C47C5A;
    width: 140px;
    height: 2px;
  }
  .pageContentText p{padding-top: 30px;}
  .pageContentText .quote {padding-left: 5%; font-style: italic;}

</style>