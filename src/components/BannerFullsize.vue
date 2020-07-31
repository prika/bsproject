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
                    :width="resizedWidth[index] + 'px'" 
                    :height="resizedHeight[index] + 'px'"
                    :key="image.id">

                    <img    :src="getImgUrl(image.src)" 
                            :alt="image.alt"
                            :width="resizedWidth[index] + 'px'" 
                            :height="resizedHeight[index] + 'px'"
                            :importance="(index === 0 ? 'high': 'low')">
                </div>

                 <!-- Video HTML5 -->
                <vue-plyr   :emit="['ended', 'duration']" @ended="endedMovie" @duration="durationMovie(event)"
                            v-if="image.type == 'video-uploaded'" 
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index"
                            :width="resizedWidth[index] + 'px'" 
                            :height="resizedHeight[index] + 'px'"
                            :key="image.id">

                    <video  crossorigin playsinline :id="'video'+index"
                            :poster="getImgUrl(image.src)" 
                            :src="getVideoUrl(image.srcvideo)"
                            :aria-label="image.alt"
                            :width="resizedWidth[index] + 'px'" 
                            :height="resizedHeight[index] + 'px'"
                            :importance="(index === 0 ? 'high': 'low')">
                        <source :src="getVideoUrl(image.srcvideo)" type="video/mp4" size="720">
                        <source :src="getVideoUrl(image.srcvideo1080)" type="video/mp4" size="1080">
                    </video>
                </vue-plyr>

                <!-- Video Youtube -->
                <vue-plyr   :emit="['ended', 'duration']" @ended="endedMovie" @duration="durationMovie"
                            v-if="image.type == 'video-youtube'" 
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index" 
                            :width="resizedWidth[index] + 'px'" 
                            :height="resizedHeight[index] + 'px'"
                            :key="image.id"
                            class="plyr__video-embed"
                            data-plyr-provider="youtube"
                            :id="'video'+index">

                    <div class="plyr__video-embed">
                        <iframe     
                                    :width="resizedWidth[index] + 'px'" 
                                    :height="resizedHeight[index] + 'px'"
                                    :alt="image.alt"
                                    :poster="image.src"
                                    :src="image.srcvideo"
                                    :importance="(index === 0 ? 'high': 'low')"
                                    allowtransparency>
                        </iframe>
                    </div>
                </vue-plyr>

                <!-- Video Vimeo -->
                <vue-plyr   :emit="['ended', 'duration']" @ended="endedMovie" @duration="durationMovie"
                            v-if="image.type == 'video-vimeo'" 
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index"
                            :width="resizedWidth[index] + 'px'" 
                            :height="resizedHeight[index] + 'px'"
                            data-plyr-provider="vimeo"
                            :key="image.id" :id="'video'+index">

                    <div class="plyr__video-embed">

                        <iframe :alt="image.alt"
                                :width="resizedWidth[index] + 'px'" 
                                :height="resizedHeight[index] + 'px'"
                                :poster="getImgUrl(image.src)"
                                :src="image.srcvideo"
                                :importance="(index === 0 ? 'high': 'low')"
                                allowtransparency>
                        </iframe>
                    </div>
                </vue-plyr>
            </template>
            </div>

       
    </section>
</template>

<script>
//import VuePlyr from 'vue-plyr'
export default {
    name: "bannerFullsize",
    // components: {
    //     VuePlyr
    // },
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
            activeSlide: 0,
            slide: '',
            slideWidth: [],
            slideHeight: [],
            slideAspectRatio: [],
            windowHeight: 0,
            windowWidth: 0,
            windowRatio: 0,
            resizedWidth: [],
            resizedHeight: [],
            timer: null,
            controls: true,
            pause: false,
            player: null,
            playElement: null,
            pauseElement: null
        }
    },
    created() {

        this.$http.get('../mocks/homepage-mock.json').then(response => {

            this.imageGroupSliderGallery = response.data.slidergallery

            for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {

                if (this.imageGroupSliderGallery[i].type === "img") continue
                this.appendPlayerJS()
                break
            }

            this.resizeContent()
            window.addEventListener('resize', this.resizeContent )
            this.startSlide();
        })
    },
    mounted() {
		console.log( this.$refs );
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeContent);
    },
    methods: {
        appendPlayerJS: function() {
            let plyr__video = document.createElement("script")
            plyr__video.setAttribute("type", "text/javascript")
            plyr__video.setAttribute("src", "https://cdn.plyr.io/3.6.2/plyr.polyfilled.js")
            document.head.appendChild(plyr__video)
        },
        resizeContent: function() {

            this.windowWidth = window.innerWidth
            this.windowHeight = window.innerHeight
            this.windowRatio = this.windowWidth / this.windowHeight

            for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {

                this.slideWidth[i] = this.imageGroupSliderGallery[i].width
                this.slideHeight[i] = this.imageGroupSliderGallery[i].height
                this.slideAspectRatio[i] = this.slideWidth[i] / this.slideHeight[i]
                
                if (this.slideAspectRatio[i] < this.windowRatio) {
                    this.resizedWidth[i] = this.windowWidth
                    this.resizedHeight[i] =  this.resizedWidth[i] / this.slideAspectRatio[i]
                } else {
                    this.resizedHeight[i] = this.windowHeight
                    this.resizedWidth[i] = this.resizedHeight[i] * this.slideAspectRatio[i]
                }
            }
        },
        getImgUrl: function (src) {
            return require( '@/assets/images/'+src )
        },
        getVideoUrl: function (src) {
            return require( '@/assets/media/'+src )
        },
        startSlide: function() {
            this.timer = setInterval(this.next, 5000) 
        },
        selectSlide: function (slideNumber) {            
            this.pauseMovie(this.activeSlide)
            this.activeSlide = slideNumber
            this.playMovie(this.activeSlide)
            this.timer = setInterval(this.next, 5000) 
        },
        next: function() {
            this.pauseMovie(this.activeSlide)
            this.activeSlide = this.activeSlide + 1 ==  this.imageGroupSliderGallery.length ?  0 : this.activeSlide + 1
            this.playMovie(this.activeSlide) 
        },
        prev: function() {
            this.pauseMovie(this.activeSlide)
            this.activeSlide = (this.activeSlide - 1 == 0) ? this.imageGroupSliderGallery.length : this.activeSlide - 1
            this.playMovie(this.activeSlide) 
        },
        playMovie: function() {

            let playElement = null

            if (this.imageGroupSliderGallery[this.activeSlide].type == "img") return
            clearInterval( this.timer );

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-uploaded"){
                console.log('play uploaded')
                playElement = document.getElementById("video" + this.activeSlide) 
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-youtube"){
                console.log('play youtube')
                playElement = document.getElementById("video" + this.activeSlide)
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-vimeo"){
                console.log('play vimeo')
                playElement = document.getElementById("video" + this.activeSlide)
            }
            

            playElement.play()

        },
        pauseMovie: function() {

            let pauseElement = null

            if (this.imageGroupSliderGallery[this.activeSlide].type == "img") return

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-uploaded"){
                console.log('pause uploaded: ')
                pauseElement = document.getElementById("video" + this.activeSlide)
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-youtube"){
                console.log('pause youtube')
                //pauseElement = document.getElementById("video" + this.activeSlide)
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-vimeo"){
                console.log('pause vimeo')
                pauseElement = document.getElementById("video" + this.activeSlide)
            }
            
            pauseElement.pause()

        },
        endedMovie: function(){
            console.log('THE END')
            this.timer = setInterval(this.next, 5000)
        },
        durationMovie: function(event){
           console.log( "duration: "+ event.detail.plyr.currentTime )
        }
    }
}
</script>