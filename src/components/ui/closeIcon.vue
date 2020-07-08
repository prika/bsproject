<template>
    <svg xmlns="http://www.w3.org/2000/svg" :alt="$t('popup-close-here')" width="19.799" height="19.799" viewBox="0 0 19.799 19.799">
        <title>{{$t('popup-close-here')}}</title>
        <g id="fechar" transform="translate(0.707 0.707)">
            <path d="M0,0H26" transform="translate(18.385 0) rotate(135)" fill="none" stroke="#000" stroke-width="2"/>
            <path d="M0,0H26" transform="translate(0 0) rotate(45)" fill="none" stroke="#000" stroke-width="2"/>
        </g>
    </svg>
</template>

<style lang="scss">
.closebutton{
    position: fixed;
    top: 3%;
    left: calc( 50% - 25px );
    border: 0;
    outline: none;
    background: transparent;
    width: 45px;
    height: 45px;
    
    &:before{
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index:0;
        background: #FFF;
        display: block;
        width: 50px;
        height: 50px;
        -webkit-transform:  rotate(45deg);
        -ms-transform:      rotate(45deg);
        transform:          rotate(45deg);

        -webkit-transition:     transform 0.2s ease;
        -moz-transition:        transform 0.2s ease;
        -o-transition:          transform 0.2s ease;
        transition:             transform 0.2s ease;
    }

    svg {
        position: absolute;
        top: 16px; 
        left: 16px;
        z-index:1;
    }

    &:hover::before{
        -webkit-transform:  scale(.9) rotate(225deg);
        -ms-transform:      scale(.9) rotate(225deg);
        transform:          scale(.9) rotate(225deg);
    }
}
</style>