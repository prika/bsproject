<template>
    <div class="row">
        <a class="collection collection1 col-6">
            <h1 class="pageTitle" :aria-label="$t('home-title-page')"> 
                Lusi<span>tania</span>
            </h1>
        </a>
        <a class="collection collection2 col-6">
                <h1 class="pageTitle" :aria-label="$t('home-title-page')" > 
                Sahu<span>ra</span>
            </h1>
        </a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">

@keyframes play {
   100% { background-position: 0 -1172px; }
}

.collection{
    cursor: pointer;
    height: 100vh;
    
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

    &.collection1{ background: url(../assets/images/shared/collection1.jpg) 0 0; }
    &.collection2{ background: url(../assets/images/shared/collection.jpg) 0 0; }

    &:hover{
        animation: play 0.5s steps(4) infinite;

        & span::after{
            left: -20px;
        }
    }
}
</style>