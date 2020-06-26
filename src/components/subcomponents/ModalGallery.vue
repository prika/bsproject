<template>
    <transition appear enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp">
        <div class="modal-mask">



            <p>{{largeImages.index[1]}}</p>
            <div class="gallerySlider">
                <div class="galleryImage" v-for="(image, index) in largeImages" :key="index">
                    <img :src="image.url"
                        :alt="image.alt" 
                        :width="image.width" 
                        :height="image.height" itemprop="image">
                </div>
            </div>
        
            <slot name="footer">
                <button class="modal-default-button" @click="$emit('close')">Close</button>
            </slot>

        </div>
    </transition>
</template>

<script>
export default {

  data() {
        return {
            largeImages:[]
        }
    },
    beforeMount() {
        this.largeImages = this.$parent.largeImages
    }
}
</script>

<style>
.modal-mask{
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, .8);
}
</style>