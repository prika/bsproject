<template>
    <div class="modalSearch">  <!-- <PORTAL to="search" -->
        <button class="closeMenuButton" 
              v-bind:aria-label="$t('button-arialabel-close-menu')"
              @click="$emit('close')"></button>
             <!-- @click="$router.go(-1)"" -->

      
    </div>
</template>

<script>
import closeIcon from '@/components/ui/closeIcon.vue'
//import prevIcon from '@/components/ui/prevIcon.vue'

export default {
    name: 'modalGallery',
    components:{
        //prevIcon,
        closeIcon
    },
    data() {
        return {
            
            
        }
    },
    beforeMount() {
       // this.largeImages = this.$parent.largeImages
     
    }
}
</script>

<style lang="scss">
.modalSearch{
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #f0f0f0;
    

    .closeMenuButton{
      display: block;
    }
}
</style>