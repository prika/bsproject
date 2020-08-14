<template>
    <transition appear enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <div class="modal-mask">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$emit('close')"> 
                    <closeIcon rectBackgroundColor="#FFFFFF" strokeColor="#000000" borderColor="#FFFFFF"></closeIcon>
                </button>
            </transition>

            <div class="gallerySliderContainer">

                <transition appear enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                    <div class="gallerySlider" :style="'margin-left:' + galleryPosition + 'vw'">
                        <div v-for="(image, index) in largeImages" :key="image.id"
                            :class="(index == selectedIndex ? 'galleryImage selected': 'galleryImage')">

                            <img v-if="image.type == 'img'"
                                :src="image.src"
                                :width="image.width" :height="image.height" 
                                :alt="image.alt"  itemprop="image">

                            <div v-if="image.type == 'video' && image.provider == 'upload'" 
                                :ref="'player'+index"
                                :width="image.width"  :height="image.height"
                                :key="image.id">

                                <video  crossorigin playsinline :id="'video'+index"
                                        :poster="getImgUrl(image.src)" 
                                        :src="getVideoUrl(image.srcvideo)"
                                        :aria-label="image.alt"
                                        :width="image.width"  :height="image.height" muted="muted">
                                    <source :src="getVideoUrl(image.srcvideo)" type="video/mp4" size="720">
                                    <source :src="getVideoUrl(image.srcvideo1080)" type="video/mp4" size="1080">
                                </video>
                            </div>


                            <div v-if="image.type == 'video' && image.provider == 'youtube'"
                                    :id="'videoContainer'+index">
                                    <div :id="'youtube_video_'+index" :width="image.width"  :height="image.height"></div>
                            </div>


                            <div v-if="image.type == 'video' && image.provider == 'vimeo'" 
                                        :ref="'player'+index"
                                        :width="image.width"  :height="image.height"
                                        :key="image.id" :poster="getImgUrl(image.src)">

                                    <div    :id="'vimeo_video_'+index"
                                            :alt="image.alt"
                                            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></div>
                            </div>
                            
                        </div>


                        <div class="page-indicators">
                            <p><span v-if="selectedIndex < 9">0</span>{{selectedIndex+1}} <span class="imagesLength">{{largeImages.length}}</span></p>
                        </div>
                    </div>
                </transition>


                <transition appear enter-active-class="animated slideInLeft faster" leave-active-class="animated slideOutLeft faster">
                    <a class="buttonPrev" v-on:click="prevSlide" :alt="$t('popup-gallery-prev-slide')" v-if="selectedIndex>0">
                        <prevIcon />
                    </a>
                </transition>


                <transition appear enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
                    <a class="buttonNext" v-on:click="nextSlide" :alt="$t('popup-gallery-next-slide')" v-if="selectedIndex<largeImages.length-1">
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
            galleryPosition: 0,
            youtubePlayers: {},
            vimeoPlayers: {}
        }
    },
    mounted() {
        this.largeImages = this.$parent.largeImages
        this.selectedIndex = this.$parent.selectedIndex
        this.galleryPosition = 25-(this.selectedIndex * 50);

        debugger

        var hasYoutubeVideoPlayerScript = false
        var hasVimeoVideoPlayerScript = false

        for (let i = 0; i < this.largeImages.length; i++) {
            
            if (this.largeImages[i].type == "img") continue

            if (this.largeImages[i].provider == "youtube" && !hasYoutubeVideoPlayerScript) {
                this.appendYoutubePlayerJS()
                hasYoutubeVideoPlayerScript = true
            } 

            if (this.largeImages[i].provider == "vimeo" && !hasVimeoVideoPlayerScript) {
                this.appendVimeoPlayerJS()
                hasVimeoVideoPlayerScript = true
            } 
        }

        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady

    },
    methods: {
        prevSlide: function() {
            this.selectedIndex--
            this.galleryPosition = 25-(this.selectedIndex * 50);

            this.playMedia(this.selectedIndex)
        },
        nextSlide: function() {
            this.selectedIndex++
            this.galleryPosition = 25-(this.selectedIndex * 50);

            this.playMedia(this.selectedIndex)
        },
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

            for (let i = 0; i < this.largeImages.length; i++) {

                if (this.largeImages[i].provider != "youtube") continue

                var player = new YT.Player('youtube_video_'+i, {
                    videoId: this.largeImages[i].srcvideo,
                    playerVars: { 'autoplay': 0, 'controls': 0 },
                    width: this.largeImages[i].width,
                    height: this.largeImages[i].height,
                    showinfo: 0,
                    modestbranding: 1,
                    cc_load_policy: 0,
                    iv_load_policy: 3,
                    controls: 0,
                    events: {
                        'onStateChange': this.endedMedia
                    }
                })

                this.youtubePlayers[i] = player
                debugger
            }
        },
        onVimeoIframeAPIReady: function() {
            
            for (let i = 0; i < this.largeImages.length; i++) {

                if (this.largeImages[i].provider != "vimeo") continue

                let options = {
                    id: this.largeImages[i].srcvideo,
                    width: this.largeImages.width[i],
                    height: this.largeImages.height[i],
                    controls: false,
                    muted: true,
                    title: false
                }

                var vimeoPlayer = new Vimeo.Player('vimeo_video_'+i, options)
                vimeoPlayer.on('ended', this.next );
                this.vimeoPlayers[i] = vimeoPlayer
            }
        },
        getVideoUrl: function (src) {
            return require( '@/assets/media/'+src )
        },
        playMedia: function() {

            let videoType = this.largeImages[this.selectedIndex].provider 

            if ( videoType == "uploaded" ){
                let playElement = document.getElementById("video" + this.selectedIndex)
                //playElement.addEventListener('ended', this.next );
                playElement.play()
                return
            }

            if ( videoType == "youtube" ) {
                debugger
                console.log(this.youtubePlayers[this.selectedIndex])
                this.youtubePlayers[this.selectedIndex].playVideo().mute()
                return
            }

            if ( videoType == "vimeo" ){
                this.vimeoPlayers[this.selectedIndex].play()
                return
            }
        },
        pauseMedia: function() {

            let videoType = this.imageGroupSliderGallery[this.selectedIndex].provider

            // if ( videoType == "img") {
            //     clearInterval(this.timer); 
            //     return
            // }

            if ( videoType == "uploaded" ){   document.getElementById("video" + this.selectedIndex).pause() }
            if ( videoType == "youtube" ){    this.youtubePlayers[this.selectedIndex].pauseVideo() }
            if ( videoType == "vimeo" ){      this.vimeoPlayers[this.selectedIndex].pause() }
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
    

    .gallerySliderContainer {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #000;

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

            .page-indicators{
                align-items: baseline;
                position: fixed;
                bottom: 25px;
                left: calc(50% - 50px);
                z-index: 4;

                p {
                    flex: 0 1 auto;
                    width: 100px;
                    height: 40px;
                    text-indent: 0;
                    justify-items: center;
                    color: #FFF;
                    font-family: 'Oswald', sans-serif;
                    text-decoration: none;
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
                }
                
                .imagesLength {
                    margin-left: 70px;
                    line-height: 28px;
                    font-size: 28px;

                    &:before {
                        content: '';
                        position: absolute;
                        background: #FFF;
                        height: 2px;
                        width: 45px;
                        bottom: 20px;
                        left: 32px;
                    }
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

@media (max-width: 812px) {
    .modal-mask .gallerySliderContainer .gallerySlider .galleryImage.selected img {
        max-width: 190%;
        margin-left: -45%;
    }
}
</style>