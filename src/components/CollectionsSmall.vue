<template>
    <div class="collectionContainer container" :style="collectionVariables">
        <div class="row">
            <a class="collection collection1 col-12 col-md-6">
                <h1 class="pageTitle" :aria-label="$t('home-title-page')"> 
                    Lusi<span>tania</span>
                </h1>
            </a>
            <a class="collection collection2 col-12 col-md-6">              
                 <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
                    Sahu<span>ra</span>
                </h1>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collections: {
                    collection1: {
                        url: '../assets/images/shared/collection1.jpg',
                        count: 10
                    },
                    collection2: {
                        url: '../assets/images/shared/collection2.jpg',
                        count: 9
                    }
                }
            }
        },
        computed: {
            collectionVariables(){
                return {
                    '--collection1-count': this.collections.collection1.count,
                    '--collection2-count': this.collections.collection2.count
                }
            }
        }
    }
</script>

<style lang="scss">
// Variables needed
// 1. Image to Background
// 2. Number of stones to Count
// Calc: Number of Stones x Height of Stone Image:293px
$calcCollection1: calc(-293px * var(--collection1-count));
$calcCollection2: calc(-293px * var(--collection2-count));


@keyframes play1 {
   100% { 
       background-position: 0 $calcCollection1;
    }
}

@keyframes play2 {
   100% { 
       background-position: 0 $calcCollection2; 
    }
}

.collectionContainer{
    position: relative;
    padding-top:130px;
}

.collection{
    cursor: pointer;
    margin-bottom: 40px;
    height: 293px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    .pageTitle{
        font-size: 5rem;
        line-height: 5rem;
        margin-left: 0;
        

        & span{
            padding-left: 95px; 
            position: relative;

            &::before{
                width: 80px;
            }

            &::after{
                content: 'Collection';
                font-family: "Oswald", sans-serif;
                font-weight: 400;
                text-transform: uppercase;
                letter-spacing: .2rem;
                font-size: 1.1rem;
                color: white;
                position: absolute;
                top: 0;
                left: -140px;
                -webkit-transition:   left 0.3s cubic-bezier(0, .5, 0, 1) .2s;
                -moz-transition:      left 0.3s cubic-bezier(0, .5, 0, 1) .2s;
                -o-transition:        left 0.3s cubic-bezier(0, .5, 0, 1) .2s;
                transition:           left 0.3s cubic-bezier(0, .5, 0, 1) .2s;
            }
        }
    }

    &.collection1{ background: url('../assets/images/shared/collection1.jpg') 0 0; }
    &.collection2{ background: url('../assets/images/shared/collection2.jpg') 0 0; }

    &:hover{

        &.collection1{ animation: play1 2s steps(var(--collection1-count)) infinite;}
        &.collection2{ animation: play2 1s steps(var(--collection2-count)) infinite;}
        
        & span::after{
            left: -20px;
        }
    }
}
</style>