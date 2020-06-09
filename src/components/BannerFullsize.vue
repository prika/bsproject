<template>
    <section id="bannerFullsize">
        <div id="bannerImage"></div>

        <div class="line horizontalLine"></div>
        <div class="line verticalLeftLine"></div>
        <div class="line verticalRightLine"></div>

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="../assets/images/banners/BlocoB-7234_Banner.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/images/banners/banner_stone_foto_1.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/images/banners/banner_stone_foto_2.jpg" alt="Third slide">
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

            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </section>
</template>

<script>

export default {
    beforeCreate() {
        jQuery('carousel').carousel();
    }
}
</script>
