<template>
    <svg xmlns="http://www.w3.org/2000/svg" :aria-labelledby="$t('popup-close-here')" width="70" height="70" viewBox="0 0 60 60">
        <title :id="$t('popup-close-here')">{{$t('popup-close-here')}} icon</title>
        <rect x="10" y="10" width="40" height="40" transform="rotate(45)" :fill="rectBackgroundColor" stroke-width="1" :stroke="borderColor"></rect>
        
        <g id="fechar" transform="translate(21 21)">
            <path d="M0,0H26" transform="translate(18.385 0) rotate(135)" fill="none" :stroke="strokeColor" stroke-width="2"/>
            <path d="M0,0H26" transform="translate(0 0) rotate(45)" fill="none" :stroke="strokeColor" stroke-width="2"/>
        </g>
    </svg>
</template>
<script>
export default {
    props: {
        rectBackgroundColor: {
            type: String,
            default: '#FFFFFF'
        },
        borderColor: {
            type: String,
            default: '#FFFFFF'
        },
        strokeColor: {
            type: String,
            default: '#575757'
        }
    }
}
</script>
<style lang="scss">
.removebutton{
    outline: none;
    border: 0;
    background: transparent;
    

    svg{
        width: 50px;

        rect{
            -webkit-transform-origin:   50% 50%;
            -ms-transform-origin:       50% 50%;
            transform-origin:           50% 50%;
            will-change: transform;
            -webkit-transition:     transform 0.2s ease;
            -moz-transition:        transform 0.2s ease;
            -o-transition:          transform 0.2s ease;
            transition:             transform 0.2s ease;
        }
    }
    
    &:hover rect{
        -webkit-transform:  rotate(225deg);
        -ms-transform:      rotate(225deg);
        -o-transform:      rotate(225deg);
        transform:          rotate(225deg);
    }
}
</style>