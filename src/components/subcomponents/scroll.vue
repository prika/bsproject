<template>
    <div class="box" v-scroll="handleScroll">
        <a  rel="nofollow" href="/simulator">
            <img class="simutadorButton" src="../../assets/images/icons/simulator.svg" alt="B Stone" />
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        handleScroll: function (evt, el) {

            var scrollPosition = window.scrollY;
            var rotation = scrollPosition/10 ;

            el.setAttribute(
                'style',
                'transform: rotate(' + rotation + 'deg)'
            )
        }
    }
}

Vue.directive('scroll', {     
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})
</script>


<style lang="scss">
.box {
    transform-origin: 0 0;
    position: fixed;
    bottom: 45vh;
    right: 5%;
    z-index: 2;
    transform-origin: center;
}

.simutadorButton {
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    animation-duration: 21s;
    transform-origin: center;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>

