<template>
    <section id="bannerFullsize">

        <div class="carouselContainer">

            <ol class="carousel-indicators">
                <li     v-for="(image, index) in imageGroupSliderGallery"  
                        :class="(index === 0 ? 'active': '')" 
                        data-target="#carouselExampleFade" 
                        :data-slide-to="index">
                        
                        <span v-if="index < 9">0</span>{{index+1}}
                </li>
            </ol>


            <template v-for="(image, index) in imageGroupSliderGallery">
                <!-- Image -->
                <div v-if="image.type == 'img'" :class="['slide', (index === 0 ? 'active': '')]"
                    :width="newResizedWidth + 'px'" 
                    :height="newResizedHeight + 'px'"
                    :key="image.id">
                    <img    :src="getImgUrl(image.src)" 
                            :alt="image.alt"
                            v-model="slide"
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :importance="(index === 0 ? 'high': 'low')">
                </div>

                 <!-- Video Mp4 -->
                <vue-plyr v-if="image.type == 'video-uploaded'" :class="['slide', (index === 0 ? 'active': '')]" 
                            :ref="'player'+index"
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :key="image.id">
                    <video  loop poster playsinline autoplay
                            :poster="getImgUrl(image.src)" 
                            :src="getVideoUrl(image.srcvideo)"
                            v-model="slide"
                            :aria-label="image.alt"
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :importance="(index === 0 ? 'high': 'low')">
                        <source :src="getVideoUrl(image.srcvideo)" type="video/mp4" size="720">
                        <source :src="getVideoUrl(image.srcvideo1080)" type="video/mp4" size="1080">
                    </video>
                </vue-plyr>

                <!-- Video Vimeo -->
                <vue-plyr v-if="image.type == 'video-vimeo'" :class="['slide', (index === 0 ? 'active': '')]" :ref="'player'+index" 
                        :width="newResizedWidth + 'px'" 
                        :height="newResizedHeight + 'px'"
                        :key="image.id">

                    <div    class="plyr__video-embed" 
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'" >

                        <iframe v-model="slide"
                                :alt="image.alt"
                                :width="newResizedWidth + 'px'" 
                                :height="newResizedHeight + 'px'"
                                :poster="getImgUrl(image.src)"
                                :src="image.srcvideo"
                                :style="{ width: newResizedWidth, height: newResizedHeight}"
                                :importance="(index === 0 ? 'high': 'low')"
                                allow="autoplay"
                                allowfullscreen allowtransparency>
                        </iframe>
                    </div>
                </vue-plyr>
            </template>

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imageGroupSliderGallery:[
                {   
                    type: String,
                    src: String,
                    alt: String,
                    width: Number,
                    height: Number
                }
            ],
            slide: '',
            slideWidth: 0,
            slideHeight: 0,
            slideAspectRatio: 0,
            windowHeight: 0,
            windowWidth: 0,
            windowRatio: 0,
            resizedWidth: 0,
            resizedHeight: 0,
            newResizedWidth: '',
            newResizedHeight: ''
        }
    },
    created() {

        this.$http.get('../mocks/homepage-mock.json').then(response => {

            this.imageGroupSliderGallery = response.data.slidergallery
            if ( this.imageGroupSliderGallery[0].type !== "img" ) {
                let plyr__video = document.createElement("script")
                plyr__video.setAttribute("type", "text/javascript")
                plyr__video.setAttribute("src", "https://cdn.plyr.io/3.6.2/plyr.polyfilled.js")
                document.head.appendChild(plyr__video)
            }

            this.slideWidth = this.imageGroupSliderGallery[0].width
            this.slideHeight = this.imageGroupSliderGallery[0].height
            this.slideAspectRatio = this.slideWidth / this.slideHeight
            this.resizeContent()
            window.addEventListener('resize', this.resizeContent )
            
        })

    },
    // destroyed() {
    //     window.removeEventListener('resize', this.resizeContent);
    // },
    methods: {
        resizeContent() {
            
            this.windowWidth = window.innerWidth
            this.windowHeight = window.innerHeight
            this.windowRatio = this.windowWidth / this.windowHeight

            if ( this.slideAspectRatio < this.windowRatio ){
                this.resizedWidth = this.windowWidth
                this.resizedHeight =  this.resizedWidth / this.slideAspectRatio
            } else {
                this.resizedHeight = this.windowHeight
                this.resizedWidth = this.resizedHeight * this.slideAspectRatio
            }

            this.newResizedWidth = this.resizedWidth 
            this.newResizedHeight = this.resizedHeight 
        },
        getImgUrl: function (src) {
            return require( '@/assets/images/'+src )
        },
        getVideoUrl: function (src) {
            return require( '@/assets/media/'+src )
        }
    },
    watch: {
        // windowHeight(newHeight, oldHeight) {
        //     console.log(oldHeight)
        //     console.log(newHeight)
        // }
    }
}



//         mode: 'fade',
//         auto: true,
//         speed: 1000,
//         pause: 6000,
//         responsive: false,
//         adaptiveHeight: false,
//         controls: false,
//         onSlideBefore: function() {
//           slider.stopAuto();
//           slider.startAuto();
//         }
//       }); 
</script>