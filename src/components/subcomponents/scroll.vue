<div id="app">
    <div class="box" v-scroll="handleScroll">
        <div class="demo"></div>
    </div>
</div>

<script>
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

    new Vue({
        el: '#app',
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
    })
</script>


<style>
    .box {
        transform-origin: 0 0;
        position: fixed;
        bottom: 45vh;
        right: 5%;
        z-index: 2;
        transform-origin: center;
    }

    .demo {
        width: 100px;
        height: 100px;
        background: grey;
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

