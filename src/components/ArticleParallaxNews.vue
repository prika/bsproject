<template>
     <section class="parallaxContainerNews">
        <div class="container">          
          <div class="row">

            <div class="col-12 col-md-6 parallaxGroup1 order-1 order-sm-2">
                <img    v-for="(image, index) in imageGroup1"
                        :key="image.id"
                        :src="image.src" 
                        :alt="image.alt" 
                        :data-rellax-speed="image.speed"
                        :class="['rellax',(image.addclass),('imageParallax'+(index+1))]"
                        importance="high">
            </div>

            <slot></slot>

          </div>
        </div>

    </section>
</template>

<script>

export default {
    data() {
        return {
            imageGroup1:[],
            rellax: null
        }
    },
    created() {

        this.imageGroup1 = this.$parent.gallery1

        var tag = document.createElement('script');
        tag.src = "https://cdnjs.cloudflare.com/ajax/libs/rellax/1.0.0/rellax.min.js";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        tag.onload = this.rellaxLoaded        
    },
    methods: {
        rellaxLoaded: function()  {
            this.rellax = new Rellax('.rellax');
            this.$eventBus.$emit('componentFinishLoad', 'rellaxLoaded');
        }
    },
    watch: {
        $route(to , from){
            this.rellax.refresh();
        }
    }
}
</script>

<style lang="scss">

.parallaxContainerNews {
    min-height: calc(100vh + 290px);
    padding-top: 150px; 
    position: relative;
    z-index: 0;
    overflow:hidden;

    &:after{
        position: absolute;
        left: 0; bottom: 0;
        right: 0;
        content: '';
        display: block;
        z-index: 2;
        background: linear-gradient(rgba(240, 240, 240, 0) 0%, #f0f0f0 100%);
        height: 130px;
    }
}

.parallaxGroup1 img,
.parallaxGroup2 img{
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative!important;
    
   /*  &.imageParallax1{
        z-index: 1;
        right: 10%;
        top: 40%;
    }

    &.imageParallax2{
        z-index: 3;
        top: 80%; 
        left: 10%;
    }

    &.imageParallax3{
        z-index: 2;
        top: 20%;
        left: 25%;
    }   */
}

.pageContentText { 
    z-index: 2;

    margin-top: 20vh;
    padding-top: 0;
    background: rgb(240,240,240);
    background: linear-gradient(180deg, rgba(240,240,240,0) 0%, rgba(240,240,240,1) 10%, rgba(240,240,240,1) 90%, rgba(240,240,240,0) 100%);
    
    & h1{
        font-size: 40px;
        position: relative;

        &:after{
            content: '';
            position: absolute;
            top: 30px;
            left: -200px;
            background: #C47C5A;
            width: 140px;
            height: 2px;
        }
    }

    p{ padding: 30px 0; }
    .quote {padding-left: 5%; font-style: italic;}
}



/* 
@media (max-width: 812px) {

    .pageContentText{
        margin-top: 0;
        padding-top: 10px;
    }

    .parallaxGroup1 {
        img{
            position: initial;
            padding-top: 10%;
        }
        img.imageParallax2 { float: right; }
    }
    
    .parallaxGroup2{
        margin-top: 240px;
        height: 1600px;

        & .imageParallax3{
            top: 0;
            right: 20%;
            z-index: 2;
        }

        & .imageParallax4{
            top: 720px;
            left: -10%;
            z-index: 1;
        }

        & .imageParallax5{
            right: 30%;
            z-index: 0;
        }

        & .imageParallax6{
            top: 900px; 
            right: 0;
        }

        & .imageParallax7{
            top: 1980px; 
            left: 0;
        }
    }
} */
</style>