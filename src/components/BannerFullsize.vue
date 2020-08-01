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
                <div    v-if="image.type == 'video-uploaded'" 
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
                            :importance="(index === 0 ? 'high': 'low')" muted="muted">
                        <source :src="getVideoUrl(image.srcvideo)" type="video/mp4" size="720">
                        <source :src="getVideoUrl(image.srcvideo1080)" type="video/mp4" size="1080">
                    </video>
                </div>

                <div v-if="image.type == 'video-youtube'" 
                        :class="['slide', (index === activeSlide ? 'active': '')]" 
                        :id="'videoContainer'+index">
                        <div :id="'youtube_video_'+index" 
                        :width="resizedWidth[index] + 'px'" 
                        :height="resizedHeight[index] + 'px'"></div>
                </div>

                <!-- Video Vimeo -->
                <div    v-if="image.type == 'video-vimeo'" muted="muted"
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index"
                            :width="resizedWidth[index] + 'px'" 
                            :height="resizedHeight[index] + 'px'"
                            data-plyr-provider="vimeo"
                            :key="image.id" :id="'video'+index">

                        <iframe :alt="image.alt"
                                :width="resizedWidth[index] + 'px'" 
                                :height="resizedHeight[index] + 'px'"
                                :poster="getImgUrl(image.src)"
                                :src="image.srcvideo"
                                :importance="(index === 0 ? 'high': 'low')"
                                allowtransparency muted="muted">
                        </iframe>
                   
                </div>
            </template>
            </div>

       
    </section>
</template>

<script>
export default {
    name: "bannerFullsize",
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
            playElement: [],
            pauseElement: []
        }
    },
    created() {


        this.$http.get('../mocks/homepage-mock.json').then(response => {

            this.imageGroupSliderGallery = response.data.slidergallery

            for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {

                if (this.imageGroupSliderGallery[i].type === "img") continue

                if (this.imageGroupSliderGallery[i].type === "video-youtube"){
                    this.appendYoutubePlayerJS()
                    break
                } 
            }

            this.resizeContent()
            window.addEventListener('resize', this.resizeContent )
            window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady
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
        appendYoutubePlayerJS: function() {

            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        },
        onYouTubeIframeAPIReady: function() {

            for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {

                if (this.imageGroupSliderGallery[i].type === "video-youtube"){

                    var player = new YT.Player('youtube_video_'+i, {
                        videoId: this.imageGroupSliderGallery[i].srcvideo,
                        playerVars: { 'autoplay': 0, 'controls': 0 },
                        width: this.resizedWidth[i],
                        height: this.resizedHeight[i],
                        events: {
                            //'onReady': onPlayerReady,
                            //'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
                            //'onStateChange': onPlayerStateChange,
                            //'onError': onPlayerError
                        }
                    })

                }
            }
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
            //this.timer = setInterval(this.next, 5000) 
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
        // loadVideoByIndex: function(index)
        // {

        // },
        playMovie: function() {

            if (this.imageGroupSliderGallery[this.activeSlide].type == "img") return
            
            clearInterval( this.timer );

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-uploaded"){
                console.log('play uploaded')
                let playElement = document.getElementById("video" + this.activeSlide) 
                playElement.play()
                return
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-youtube"){
                console.log('play youtube:  '+"video" + this.activeSlide)
                
                // let playElement = document.getElementById('youtube_video_'+this.activeSlide)
                // playElement.playVideo()

                return
            }

            // if (this.imageGroupSliderGallery[this.activeSlide].type == "video-vimeo"){
            //     console.log('play vimeo')
            //     playElement = document.getElementById("video" + this.activeSlide)
            // }

        },
        pauseMovie: function() {

            if (this.imageGroupSliderGallery[this.activeSlide].type == "img") return

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-uploaded"){
                console.log('pause uploaded: ')
                let pauseElement = document.getElementById("video" + this.activeSlide)
                pauseElement.pause()
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-youtube"){
                console.log('pause youtube: ')
                //this.player[this.activeSlide].pauseVideo()
                
            }

            // if (this.imageGroupSliderGallery[this.activeSlide].type == "video-vimeo"){
            //     console.log('pause vimeo')
            //     pauseElement = document.getElementById("video" + this.activeSlide)
            // }
            
            

        },
        endedMovie: function(){
            console.log('THE END')
            this.timer = setInterval(this.next, 5000)
            
            //YT.PlayerState.ENDED
        },
        durationMovie: function(event){
           console.log( "duration: "+ event.detail.plyr.currentTime )
        }
    }
}
</script>