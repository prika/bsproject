<template>
    <section id="bannerFullsize">
        <div class="line horizontalLine"></div>
        <div class="line verticalLeftLine"></div>
        <div class="line verticalRightLine"></div>

            <div class="carousel-indicators">
                <a  v-for="(image, index) in imageGroupSliderGallery"  
                    :class="(index === activeSlide ? 'active': '')"
                    :data-slide-to="index"
                    href="javascript:void(0)"
                    @click="selectSlide(index)">
                        
                        <span v-if="index < 9">0</span>{{index+1}}
                </a>
            </div>

            <!--button class="prev" @click="prev">&#10094; Previous</button -->
            <!--button class="next" @click="next">&#10095; Next</button -->

      
            <div class="carouselContainer">
            <template v-for="(image, index) in imageGroupSliderGallery">
                <!-- Image -->
                <div v-if="image.type == 'img'" 
                    :class="['slide', (index === activeSlide ? 'active': '')]"
                    :width="newResizedWidth + 'px'" 
                    :height="newResizedHeight + 'px'"
                    :key="image.id">

                    <img    :src="getImgUrl(image.src)" 
                            :alt="image.alt"
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :importance="(index === 0 ? 'high': 'low')">
                </div>

                 <!-- Video HTML5 -->
                <vue-plyr   v-if="image.type == 'video-uploaded'" 
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index"
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :key="image.id">

                    <video  loop poster
                            :poster="getImgUrl(image.src)" 
                            :src="getVideoUrl(image.srcvideo)"
                            :aria-label="image.alt"
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :importance="(index === 0 ? 'high': 'low')">
                        <source :src="getVideoUrl(image.srcvideo)" type="video/mp4" size="720">
                        <source :src="getVideoUrl(image.srcvideo1080)" type="video/mp4" size="1080">
                    </video>
                </vue-plyr>

                <!-- Video Youtube -->
                <vue-plyr   v-if="image.type == 'video-youtube'" 
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index" 
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :key="image.id">
                    <div class="plyr__video-embed">
                        <iframe     :width="newResizedWidth + 'px'" 
                                    :height="newResizedHeight + 'px'"
                                    :alt="image.alt"
                                    :poster="image.src"
                                    :src="image.srcvideo"
                                    :importance="(index === 0 ? 'high': 'low')"
                                    allowtransparency>
                        </iframe>
                    </div>
                </vue-plyr>

                <!-- Video Vimeo -->
                <vue-plyr   v-if="image.type == 'video-vimeo'" 
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index"
                            :width="newResizedWidth + 'px'" 
                            :height="newResizedHeight + 'px'"
                            :key="image.id">

                    <div    class="plyr__video-embed">

                        <iframe :alt="image.alt"
                                :width="newResizedWidth + 'px'" 
                                :height="newResizedHeight + 'px'"
                                :poster="getImgUrl(image.src)"
                                :src="image.srcvideo"
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
import VuePlyr from 'vue-plyr'
export default {
    name: "bannerFullsize",
    components: {
        VuePlyr
    },
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
            slidesGroup:[],
            activeSlide: 0,
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
            newResizedHeight: '',
            timer: null,
            controls: true,
            pause: false
        }
    },
    created() {

        this.$http.get('../mocks/homepage-mock.json').then(response => {

            this.imageGroupSliderGallery = response.data.slidergallery

            for (let i = 0; i < this.imageGroupSliderGallery.length; i++){

                if ( this.imageGroupSliderGallery[i].type !== "img" ) {
                    let plyr__video = document.createElement("script")
                    plyr__video.setAttribute("type", "text/javascript")
                    plyr__video.setAttribute("src", "https://cdn.plyr.io/3.6.2/plyr.polyfilled.js")
                    document.head.appendChild(plyr__video)
                }

                this.slideWidth = this.imageGroupSliderGallery[i].width
                this.slideHeight = this.imageGroupSliderGallery[i].height
                this.slideAspectRatio = this.slideWidth / this.slideHeight
                this.resizeContent()
            }

            window.addEventListener('resize', this.resizeContent )
            
        })

    },
    // destroyed() {
    //     window.removeEventListener('resize', this.resizeContent);
    // },
    mounted: function() {
        this.startSlide();
    },
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
        },
        startSlide: function() {
            //this.timer = setInterval(this.next, 10000);
        },
        selectSlide: function (slideNumber){
            //this.timer = setInterval(this.next, 20000);
            this.activeSlide = slideNumber
        },
        next: function() {
            this.activeSlide += 1;

            if ( this.activeSlide == this.imageGroupSliderGallery.length ){
                this.activeSlide = 0
            }
        },
        prev: function() {
            this.activeSlide -= 1;

            if ( this.activeSlide == 0 ){
                this.activeSlide = this.imageGroupSliderGallery.length
            }
        }

    },
    computed: {
        currentSlide: function() {
            return this.images[Math.abs(this.activeSlide) % this.imageGroupSliderGallery.length];
        }
    },
    watch: {
        // windowHeight(newHeight, oldHeight) {
        //     console.log(oldHeight)
        //     console.log(newHeight)
        // }
    }
}
</script>