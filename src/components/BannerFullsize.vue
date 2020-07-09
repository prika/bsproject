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

                <template v-for="(image, index) in imageGroupSliderGallery">
                    <!-- Image -->
                    <div v-if="image.type == 'img'" :class="['carousel-item', (index === 0 ? 'active': '')]">
                        <img :src="image.src" 
                            :alt="image.alt" class="d-block w-100">
                    </div>

                    <!-- Video Mp4 -->
                    <vue-plyr v-if="image.type == 'video-uploaded'" :class="['carousel-item', (index === 0 ? 'active': '')]" ref="player1">
                        <video :poster="image.src" :src="image.srcvideo" :aria-label="image.alt">
                            <source :src="image.srcvideo" type="video/mp4" size="720">
                            <source :src="image.srcvideo1080" type="video/mp4" size="1080">
                        </video>
                    </vue-plyr>

                    <!-- Video Youtube -->
                    <vue-plyr v-if="image.type == 'video-youtube'" :class="['carousel-item', (index === 0 ? 'active': '')]" ref="player1">
                        <div class="plyr__video-embed">
                            <iframe     :alt="image.alt"
                                        :poster="image.src"
                                        :src="image.srcvideo"
                                        allow="autoplay"
                                        allowfullscreen allowtransparency  controls="false">
                            </iframe>
                        </div>
                    </vue-plyr>
                 
                    <!-- Video Vimeo -->
                    <vue-plyr v-if="image.type == 'video-vimeo'" :class="['carousel-item', (index === 0 ? 'active': '')]" ref="player1">
                        <div class="plyr__video-embed">
                            <iframe :alt="image.alt"
                                    :poster="image.src"
                                    :src="image.srcvideo"
                                    allow="autoplay"
                                    allowfullscreen allowtransparency>
                            </iframe>
                        </div>
                    </vue-plyr>

                </template>

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
    created() {
        this.imageGroupSliderGallery = this.$parent.slidergallery
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



#bannerFullsize{
	margin: 0; padding: 0;
	position: relative;
    z-index: 2;
    overflow: hidden;

    img, video{
        width: auto;
        max-height: calc( 100vh - 124px );
        max-height: calc( var(--vh, 1vh) * 100 - 124px );
    }
   
    &::before{
                    
        content: '';
        position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        z-index: 3;

        width: 100%;
        height: 100%;

        opacity: 0;
        
        background-image: url(../assets/images/logo/intro_home.svg);
        background-repeat: no-repeat; 
        background-position: center center;
        background-attachment: fixed; 

        -webkit-background-size:    510px;
        -moz-background-size:       510px;
        -o-background-size:         510px;
        background-size:            510px;

        -webkit-clip-path:  polygon(0px 0px, 100% 0px, 100% 55.61%, 65.58% 55.93%, 34.29% 99.70%, 0px 100%);
        -o-clip-path:       polygon(0px 0px, 100% 0px, 100% 55.61%, 65.58% 55.93%, 34.29% 99.70%, 0px 100%);
        -ms-clip-path:      polygon(0px 0px, 100% 0px, 100% 55.61%, 65.58% 55.93%, 34.29% 99.70%, 0px 100%);
        clip-path:          polygon(0px 0px, 100% 0px, 100% 55.61%, 65.58% 55.93%, 34.29% 99.70%, 0px 100%);

        -webkit-animation:  changeLogos2 .3s cubic-bezier(0, .5, 0, 1)  forwards;
        -moz-animation:     changeLogos2 .3s cubic-bezier(0, .5, 0, 1)  forwards;
        -o-animation:       changeLogos2 .3s cubic-bezier(0, .5, 0, 1)  forwards;
        animation:          changeLogos2 .3s cubic-bezier(0, .5, 0, 1)  forwards;
    }
}

// @include media-breakpoint-up(md) {
//     #bannerFullsize{
//         height: calc(100vh - 90px);
//         height: calc(var(--vh, 1vh) * 100 - 90px);
//     }
// }

// @include media-breakpoint-up(xl) {
//     #bannerFullsize{
//         height: calc(100vh - 124px);
//         height: calc(var(--vh, 1vh) * 100 - 124px);
//     }
// }


    
#bannerImage{
    // -webkit-animation:          changeLogos2 2s cubic-bezier(0, .5, 0, 1) forwards;
    // -moz-animation:             changeLogos2 2s cubic-bezier(0, .5, 0, 1) forwards;
    // -o-animation:               changeLogos2 2s cubic-bezier(0, .5, 0, 1) forwards;
    // animation:                  changeLogos2 2s cubic-bezier(0, .5, 0, 1) forwards;
    
    // width: 100vw;
    // height: 100vh; 
    // height: calc(var(--vh, 1vh) * 100);

    // position: absolute;
    // z-index: 2;
    // background: none;

    
    // background: url(./assets/images/banners/BlocoB-7234_Banner.jpg) no-repeat; 

    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    // background-size: cover;

    // background-position: center center;

    //opacity: 0;


    // &::before{
    //     -webkit-animation:  changeLogos2 .3s cubic-bezier(0, .5, 0, 1) forwards;
    //     -moz-animation:     changeLogos2 .3s cubic-bezier(0, .5, 0, 1) forwards;
    //     -o-animation:       changeLogos2 .3s cubic-bezier(0, .5, 0, 1) forwards;
    //     animation:          changeLogos2 .3s cubic-bezier(0, .5, 0, 1) forwards;
        
    //     display: block;
    //     content: '';
    //     position: absolute;
    //         top: 0;
    //         bottom: 0;
    //         left: 0;
    //         right: 0;
    //     z-index: 3;
        
    //     width: 100%;
    //     height: 100%;

    //     background: rgba(0, 0, 0, 0.15);
    //     opacity: 0;
    // }

    

}
        
    
            
.line{
    position: absolute;
    background: rgba(240, 240, 240, 0.3);
    z-index: 4;
    display: block;
    opacity: 0;
}

    .horizontalLine{
        top: 0;
        left:0;
        right: 0;

        width: 100%;
        height: 1px;
        
        -webkit-animation: horizontalLineAnim 2s ease-in-out 7s forwards;
        -moz-animation: horizontalLineAnim 2s ease-in-out 7s forwards;
        -o-animation: horizontalLineAnim 2s ease-in-out 7s forwards;
        animation: horizontalLineAnim 2s ease-in-out 7s forwards;
    }
    .verticalLeftLine{
        top:0;
        bottom: 0;
        left: 0;
        
        width: 1px;
        height: 100vh;

        -webkit-animation: verticalLineAnim 2s ease-in-out 7s forwards;
        -moz-animation: verticalLineAnim 2s ease-in-out 7s forwards;
        -o-animation: verticalLineAnim 2s ease-in-out 7s forwards;
        animation: verticalLineAnim 2s ease-in-out 7s forwards;
    }
    .verticalRightLine{
        top:0;
        bottom: 0;
        right: 0;
        
        width: 1px;
        height: 100vh;

        -webkit-animation: verticalLineAnim2 2s ease-in-out 6s forwards;
        -moz-animation: verticalLineAnim2 2s ease-in-out 6s forwards;
        -o-animation: verticalLineAnim2 2s ease-in-out 6s forwards;
        animation: verticalLineAnim2 2s ease-in-out 6s forwards;
    }
                
        
        @media (max-width: 767px){
                
            // #bannerImage::after{
            //     background-size: 300px;
            //     clip-path: polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%);
            // }
        
            #animatedlogo{ 
                width: 300px;
                margin-left: -150px;
                margin-top: -8px;
            }
        }
        
        @media only screen and (device-width: 768px) {
        
            // #bannerImage::after{
            //     background-size: 300px;
            //     background-attachment: initial;
            // }
        
            #animatedlogo{ 
                width: 300px;
                margin-left: -150px;
                margin-top: -8px;
            }
            
        }
        
        
    /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
    /* Portrait and Landscape */
    // @media only screen 
    // and (min-device-width: 320px) 
    // and (max-device-width: 568px)
    // and (-webkit-min-device-pixel-ratio: 2) {
    //     #bannerImage::after{background-attachment: initial;}
    // }
    
    /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
    /* Portrait and Landscape */
    // @media only screen 
    //   and (min-device-width: 375px) 
    //   and (max-device-width: 667px) 
    //   and (-webkit-min-device-pixel-ratio: 2) { 
    //     #bannerImage::after{background-attachment: initial;}
    // }
    
    /* ----------- iPhone 6+, 7+ and 8+ ----------- */
    /* Portrait and Landscape */
    // @media only screen 
    //   and (min-device-width: 414px) 
    //   and (max-device-width: 736px) 
    //   and (-webkit-min-device-pixel-ratio: 3) { 
    //     #bannerImage::after{background-attachment: initial;}
    // }
    
    /* ----------- iPhone X ----------- */
    /* Portrait and Landscape */
    // @media only screen 
    //   and (min-device-width: 375px) 
    //   and (max-device-width: 812px) 
    //   and (-webkit-min-device-pixel-ratio: 3) { 
    //     #bannerImage::after{background-attachment: initial;}
    // }
</style>
