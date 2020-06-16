<template>
    <section id="bannerFullsize">
        <div id="bannerImage"></div>

        <div class="line horizontalLine"></div>
        <div class="line verticalLeftLine"></div>
        <div class="line verticalRightLine"></div>

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <li     v-for="(image, index) in imageGroupSliderGallery"  
                        :class="(index === 0 ? 'active': '')" 
                        data-target="#carouselExampleFade" 
                        data-slide-to="0">
                        <span v-if="index < 9">0</span>{{index+1}}
                </li>
            </ol>

            <div class="carousel-inner">

                <div v-for="(image, index) in imageGroupSliderGallery"  :class="['carousel-item', (index === 0 ? 'active': '')]">
                     <img :src="image.src" 
                        :alt="image.alt" class="d-block w-100">
                </div>

                <div class="carousel-item">
                     <vue-plyr ref="player1">
                        <video poster="../assets/images/explore/explore_5.jpg" src="../assets/media/video_exemplo.mp4" aria-label="Video ....">
                            <source src="../assets/media/video_exemplo.mp4" type="video/mp4" size="720">
                            <source src="../assets/media/video_exemplo.mp4" type="video/mp4" size="1080">
                        </video>
                    </vue-plyr>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            imageGroupSliderGallery:[]
        }
    },
    beforeMount() {
        this.imageGroupSliderGallery = this.$parent.slidergallery
    },
    mounted() {
        //jQuery('carousel').carousel()
    }
}
</script>


<style lang="scss">

.carousel-item {
    display: block!important;
    -webkit-transition:     opacity .8s cubic-bezier(0, .5, 0, 1);
    -moz-transition:        opacity .8s cubic-bezier(0, .5, 0, 1);
    -o-transition:          opacity .8s cubic-bezier(0, .5, 0, 1);
    transition:             opacity .8s cubic-bezier(0, .5, 0, 1);
}

.carousel-indicators {
    align-items: baseline;

  li {
    flex: 0 1 auto;
    width: 100px;
    height: 40px;
    text-indent: 0;
    justify-items: center;
    color: #FFF;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    background: none;
    -webkit-transition:     opacity 2s cubic-bezier(0, .5, 0, 1);
    -moz-transition:        opacity 2s cubic-bezier(0, .5, 0, 1);
    -o-transition:          opacity 2s cubic-bezier(0, .5, 0, 1);
    transition:             opacity 2s cubic-bezier(0, .5, 0, 1);
    position: relative;
    opacity: 1;

    &:before{
        content: '';
        position: absolute;
        background: #FFF;
        height: 2px;
        width: 45px;
        bottom: 20px;
        left: -24px;
    }
    
    &:first-child:before{
        display:none;
    }
  }

  .active {
    line-height: 28px;
    font-size: 28px;
  }
}
</style>
