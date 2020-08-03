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
                        
                        <div :id="'youtube_video_'+index" :width="resizedWidth[index] + 'px'"  :height="resizedHeight[index] + 'px'"></div>
                </div>

                <!-- Video Vimeo -->
                <div    v-if="image.type == 'video-vimeo'"
                            :class="['slide', (index === activeSlide ? 'active': '')]" 
                            :ref="'player'+index"
                            :width="resizedWidth[index] + 'px'" 
                            :height="resizedHeight[index] + 'px'"
                            :key="image.id" :poster="getImgUrl(image.src)">

                        <div    :id="'vimeo_video_'+index"
                                :alt="image.alt"
                                :importance="(index === 0 ? 'high': 'low')"
                                frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen muted="muted">
                        </div>
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
            pauseElement: [],
            youtubePlayers: {},
            vimeoPlayers: {}
        }
    },
    created() {

        

        this.$http.get('../mocks/homepage-mock.json').then(response => {

            this.imageGroupSliderGallery = response.data.slidergallery
            var hasYoutubeVideoPlayerScript = false
            var hasVimeoVideoPlayerScript = false

            for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {

                if (this.imageGroupSliderGallery[i].type === "img") continue

                if (this.imageGroupSliderGallery[i].type === "video-youtube" && !hasYoutubeVideoPlayerScript) {
                    this.appendYoutubePlayerJS()
                    hasYoutubeVideoPlayerScript = true
                } 

                if (this.imageGroupSliderGallery[i].type === "video-vimeo" && !hasVimeoVideoPlayerScript) {
                    this.appendVimeoPlayerJS()
                    hasVimeoVideoPlayerScript = true
                } 
            }

            this.resizeContent()
            window.addEventListener('resize', this.resizeContent )
            window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady
            this.startSlide();
        })
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
        appendVimeoPlayerJS: function() {
            var tag = document.createElement('script');
            tag.src = "https://player.vimeo.com/api/player.js";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            tag.onload = this.onVimeoIframeAPIReady
        },
        onYouTubeIframeAPIReady: function() {

            for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {

                if (this.imageGroupSliderGallery[i].type != "video-youtube") continue

                var player = new YT.Player('youtube_video_'+i, {
                    videoId: this.imageGroupSliderGallery[i].srcvideo,
                    playerVars: { 'autoplay': 0, 'controls': 0 },
                    width: this.resizedWidth[i],
                    height: this.resizedHeight[i],
                    events: {
                        'onStateChange': this.endedMedia
                    }
                })

                this.youtubePlayers[i] = player
            }
        },
        onVimeoIframeAPIReady: function() {
            
            for (let i = 0; i < this.imageGroupSliderGallery.length; i++) {

                if (this.imageGroupSliderGallery[i].type != "video-vimeo") continue

                let options = {
                    id: this.imageGroupSliderGallery[i].srcvideo,
                    width: this.resizedWidth[i],
                    height: this.resizedHeight[i]
                }

                var vimeoPlayer = new Vimeo.Player('vimeo_video_'+i, options)
                vimeoPlayer.on('ended', this.next );
                this.vimeoPlayers[i] = vimeoPlayer
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
            this.selectSlide(0) 
        },
        selectSlide: function (slideNumber) {            
            this.pauseMedia(this.activeSlide)
            this.activeSlide = slideNumber
            this.playMedia(this.activeSlide)
        },
        next: function() {
            this.pauseMedia(this.activeSlide)
            this.activeSlide = this.activeSlide + 1 ==  this.imageGroupSliderGallery.length ?  0 : this.activeSlide + 1
            this.playMedia(this.activeSlide) 
        },
        prev: function() {
            this.pauseMedia(this.activeSlide)
            this.activeSlide = (this.activeSlide - 1 == 0) ? this.imageGroupSliderGallery.length : this.activeSlide - 1
            this.playMedia(this.activeSlide) 
        },
        playMedia: function() {

            if (this.imageGroupSliderGallery[this.activeSlide].type == "img") 
            {
                this.timer = setInterval(this.next, 5000) 
                return
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-uploaded"){
                console.log('play uploaded')
                let playElement = document.getElementById("video" + this.activeSlide)
                playElement.addEventListener('ended', this.next );
                playElement.play()
                return
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-youtube") {
                console.log('play youtube:  '+"video" + this.activeSlide)
                this.youtubePlayers[this.activeSlide].playVideo()
                return
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-vimeo"){
                console.log('play vimeo')
                console.log( this.vimeoPlayers[this.activeSlide] )
                this.vimeoPlayers[this.activeSlide].play()
                return
            }
        },
        pauseMedia: function() {

            if (this.imageGroupSliderGallery[this.activeSlide].type == "img") 
            {
                clearInterval(this.timer);
                return
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-uploaded"){
                console.log('pause uploaded: ')
                let pauseElement = document.getElementById("video" + this.activeSlide)
                pauseElement.pause()
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-youtube"){
                console.log('pause youtube: ')
                this.youtubePlayers[this.activeSlide].pauseVideo()
            }

            if (this.imageGroupSliderGallery[this.activeSlide].type == "video-vimeo"){
                console.log('pause vimeo')
                this.vimeoPlayers[this.activeSlide].pause()
            }
        },
        endedMedia: function(event)
        {
            if ( this.imageGroupSliderGallery[this.activeSlide].type == "video-youtube" && event.data == 0) this.next()
        }
    }
}
</script>