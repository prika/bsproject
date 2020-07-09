<template>
    <transition appear enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <div class="modal-mask">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$emit('close')"> 
                    <closeIcon rectBackgroundColor="#FFFFFF" strokeColor="#000000"></closeIcon>
                </button>
            </transition>

            <div class="gallerySliderContainer">

                <transition appear enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                    <div class="gallerySlider" :style="'margin-left:' + galleryPosition + 'vw'">
                        <div v-for="(image, index) in largeImages" :key="index"
                            :class="(index === selectedIndex ? 'galleryImage selected': 'galleryImage')">

                            <img :src="image.url"
                                :alt="image.alt" 
                                :width="image.width" 
                                :height="image.height" itemprop="image">
                            
                            <p style="color: #FFF">{{index+1}} / {{largeImages.length}}</p>
                        </div>
                    </div>
                </transition>

                <transition appear enter-active-class="animated slideInLeft faster" leave-active-class="animated slideOutLeft faster">
                    <a class="buttonPrev" v-on:click="prevSlide" :alt="$t('popup-gallery-prev-slide')" v-if="selectedIndex>0">
                        <prevIcon />
                    </a>
                </transition>
                <transition appear enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
                    <a class="buttonNext" v-on:click="nextSlide" :alt="$t('popup-gallery-next-slide')" v-if="largeImages.length > selectedIndex+1">
                        <prevIcon />
                    </a>
                 </transition>
            </div>
        </div>
    </transition>
</template>

<script>
import closeIcon from '@/components/ui/closeIcon.vue'
import prevIcon from '@/components/ui/prevIcon.vue'

export default {
    name: 'modalGallery',
    components:{
        prevIcon,
        closeIcon
    },
    data() {
        return {
            largeImages:[],
            selectedIndex: 0,
            galleryPosition: 0
        }
    },
    beforeMount() {
        this.largeImages = this.$parent.largeImages
        this.selectedIndex = this.$parent.selectedIndex
        this.galleryPosition = 25-(this.selectedIndex * 50);
    },
    methods: {
        prevSlide: function() {
            this.selectedIndex--
            this.galleryPosition = 25-(this.selectedIndex * 50);
        },
        nextSlide: function() {
            this.selectedIndex++
            this.galleryPosition = 25-(this.selectedIndex * 50);
        }  
    }
}
</script>

<style lang="scss">
.modal-mask{
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;

    .gallerySliderContainer {
        height: 100vh;
        width: 100vw;
        overflow: hidden;

        .gallerySlider{
            margin-left: 25vw;
            height: 100%;
            display: inline-flex;
            white-space: nowrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            -webkit-transition:     all 0.2s ease;
            -moz-transition:        all 0.2s ease;
            -o-transition:          all 0.2s ease;
            transition:             all 0.2s ease;
            

            .galleryImage{
                width: 50vw;
                text-align: center;
                max-height: 90%;

                img { 
                    max-width: 40%;
                    height: 100%;
                    filter:         brightness(30%);
                    -webkit-filter: brightness(30%);
                    -moz-filter:    brightness(30%);

                    -webkit-transition:     all 0.2s ease;
                    -moz-transition:        all 0.2s ease;
                    -o-transition:          all 0.2s ease;
                    transition:             all 0.2s ease;
                }

                &.selected img{ 
                    max-width: 65%;
                    filter:         brightness(100%);
                    -webkit-filter: brightness(100%);
                    -moz-filter:    brightness(100%);
                }
            }
        }

        .buttonPrev, .buttonNext {
            cursor: pointer;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 25%;
            color: white;
            user-select: none;
            z-index: 5;

            .prevIcon{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 53px;
                margin-top: -27px;
                margin-left: -27px;
                -webkit-transition:     left 0.2s ease, opacity 0.2s ease;
                -moz-transition:        left 0.2s ease, opacity 0.2s ease;
                -o-transition:          left 0.2s ease, opacity 0.2s ease;
                transition:             left 0.2s ease, opacity 0.2s ease;
            }
        }

        .buttonPrev {
            left: 0;

            &:hover{
                .prevIcon{
                    left: 45%;
                }
                .prevIcon #pathToAnim{
                    opacity: .5;
                }
            }
        }

        .buttonNext {
            right: 0;

            .prevIcon{
                -webkit-transform:     rotate(180deg);
                -moz-transform:        rotate(180deg);
                -o-transform:          rotate(180deg);
                transform:             rotate(180deg);
            }

            &:hover .prevIcon{
                left: 55%;
                
                #pathToAnim{
                    opacity: .5;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .modal-mask .gallerySliderContainer .gallerySlider .galleryImage.selected img {
        max-width: 190%;
        margin-left: -45%;
    }
}
</style>