<template>
  <div id="bexplorepage">

      <PortfolioMansory>
          <h1 class="pageTitleh2 h2">{{bexplore.title1}}<span>{{bexplore.title2}}</span></h1>
      </PortfolioMansory>

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
  data() {
    return {
      bexplore: '',
      mansory: []
    }
  },
  methods:
    {
        getImgUrl: function (src) {
            return require('@/assets/images/'+src)
        },
        parseObject: function(source, destination)
        {
            for ( var i = 0 ; i < source.length; i++ ) {
               let obj = source[i]
               let fullPath = this.getImgUrl(obj.src)
               obj.src = fullPath
               destination.push(obj)
            }
        }        
    },
    created(){
         this.$http.get('../mocks/b-explore-mock.json').then(response => {
            this.bexplore = response.data
            this.parseObject( response.data.mansory, this.mansory )          
         })
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