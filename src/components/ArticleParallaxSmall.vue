<template>
     <section class="parallaxContainer">
        <div class="container">          
          <div class="row">

            <div class="col-12 col-md-7 parallaxGroup1 order-1 order-sm-2">
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

        <div class="col-12 parallaxGroup2" v-if="imageGroup2.length > 0">
            <img    v-for="(image, index) in imageGroup2"
                    :key="image.id"
                    :src="image.src" 
                    :alt="image.alt" 
                    :data-rellax-speed="image.speed"
                    :class="['rellax',(image.addclass),('imageParallax'+(index+3))]"
                    importance="low">
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            imageGroup1:[],
            imageGroup2:[],
            rellax: null
        }
    },
    created() {

        this.imageGroup1 = this.$parent.gallery1
        this.imageGroup2 = this.$parent.gallery2

        var tag = document.createElement('script');
        tag.src = "https://cdnjs.cloudflare.com/ajax/libs/rellax/1.0.0/rellax.min.js";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        tag.onload = this.rellaxLoaded        
    },
    methods: {
        rellaxLoaded: function()  {
            this.rellax = new Rellax('.rellax');
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

.parallaxContainer {
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

.parallaxGroup1,
.parallaxGroup2{

    img{
        width: 100%;
        height: auto;
        margin: 0 auto;
        position: absolute;

        -webkit-filter:     grayscale(100%);
        -moz-filter:        grayscale(100%);
        filter:             grayscale(100%);
        -webkit-transition:     filter .3s cubic-bezier(.4,1.03,.83,.56);
        -moz-transition:        filter .3s cubic-bezier(.4,1.03,.83,.56);
        -o-transition:          filter .3s cubic-bezier(.4,1.03,.83,.56);
        transition:             filter .3s cubic-bezier(.4,1.03,.83,.56);

        &:hover{
            -webkit-filter: grayscale(0%);
            -moz-filter: grayscale(0%);
            filter: grayscale(0%);
        }
    }
}


.parallaxGroup1{

    .imageParallax1{
        z-index: 1;
        right: 10%;
        top: 40%;
    }

    .imageParallax2{
        z-index: 3;
        top: 80%; 
        left: 10%;
    }

    .imageParallax3{
        z-index: 2;
        top: 20%;
        left: 25%;
    }
}

.parallaxGroup2{
    overflow: hidden;
    position: relative;
    height: 1800px;
    margin-top: 400px;
    background: #F0F0F0;

    & .imageParallax3{
        top: 0;
        right: 20%;
        z-index: 0;
    }

    & .imageParallax4{
        top: 820px;
        left: 10%;
        z-index: 1;
    }

    & .imageParallax5{
        top: 120px; 
        right: 0;
        z-index: 1;
    }

    & .imageParallax6{
        top: 800px; 
        left: 27%;
        z-index: 0;
    }

    & .imageParallax7{
        top: 1980px; 
        left: 0;
        z-index: 1;
    }
}


.pageContentText { 
  z-index: 2;
  margin-top: 40vh; 
  padding-top: 150px;
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

    p{padding-top: 30px;}
    .quote {padding-left: 5%; font-style: italic;}
}




#homepage .parallaxContainer{
    background: url(../assets/images/B_Simbolo_estatico_Corpo.svg) no-repeat 75% 100% fixed;
    /* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/B_Simbolo_estatico_Corpo.svg', sizingMethod='scale');
    -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/B_Simbolo_estatico_Corpo.svg', sizingMethod='scale')"; */
    -webkit-background-size:  250px;
    -moz-background-size:     250px;
    -o-background-size:       250px;
    background-size:          250px;
    padding-top: 0;

    .parallaxGroup1{
        .imageParallax1{ z-index: 1; }
        .imageParallax2{ z-index: 0; left: 3%;}
    }

}


@media (max-width: 768px) {

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
}
</style>