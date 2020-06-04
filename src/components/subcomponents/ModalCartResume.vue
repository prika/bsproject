<template>
    <div class="modalCart">
        <button class="closeMenuButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="$emit('close')"></button>

    </div>
</template>

<script>
    // export default {
    //   data(){
    //     return {
    //       searchText: "",
    //       hasSearchText: false
    //     }
    //   },
    //   methods: {
        
    //      onTextInputChanged (e) {

    //        this.hasSearchText = this.searchText != "" && this.searchText.length > 0

          
    //        // Search things axios....
    //     }
    //   }
    // }
</script>

<style lang="scss">
.modalCart{
  background: black;
  height: 500px;
  width: 100%;
}
</style>