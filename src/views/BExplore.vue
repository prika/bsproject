<template>
  <div id="bexplorepage">
    
      <PortfolioMansory />

      <Address />

      <Contacts />

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PortfolioMansory from '@/components/PortfolioMansory'
import Address from '@/components/Address'
import Contacts from '@/components/Contacts'

export default {
  name: 'bexplorepage',
  components: {
      Header,
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