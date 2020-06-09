<template>
  <div id="bexplorepage">
       <Header>
           <img class="d-none d-md-block" itemprop="logo" 
                    src="../assets/images/logo/logo_explore.svg" 
                    v-bind:alt="$t('logo-aria-label')"
                    v-bind:title="$t('logo-aria-label')"
                    v-bind:aria-label="$t('logo-aria-label')" />
                <img class="d-block d-md-none" itemprop="logo" 
                    src="../assets/images/logo/logo_home_mobile.svg" 
                    v-bind:alt="$t('logo-aria-label')"
                    v-bind:title="$t('logo-aria-label')"
                    v-bind:aria-label="$t('logo-aria-label')" />
      </Header>
      
      <PortfolioMansory />

      <Address />

      <Contacts />

  </div>
</template>

<script>
import PortfolioMansory from '@/components/PortfolioMansory'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'bexplorepage',
  components: {
      PortfolioMansory,
      Address,
      Contacts  
  },
  // computed: {
  //   player () {
  //     //return this.$refs.player1.player;
  //     //document.getElementsByClassName("plyr__poster").style.filter = "grayscale(100%)";
  //   }
  // },
  mounted() {
    //console.log( document.getElementsByClassName("plyr__poster") );
    //console.log(this.player)
    this.$eventBus.$emit('componentFinishLoad', true);
  }

}
</script>