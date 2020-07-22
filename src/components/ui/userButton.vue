<template>
    <div class="userIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.148" height="35.967" viewBox="0 0 31.148 35.967">
            <g transform="translate(-46.426 -44.017)">
                <path d="M76.574,70.414V53.586L62,45.171,47.426,53.586V70.414L62,78.829Z" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
                <path d="M54.969,67.491l4.012,2.316h6.038l4.012-2.316" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
                <g>
                    <path d="M59.958,57.516l-3.239-1.87-3.239,1.87" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
                    <path d="M70.519,57.516l-3.239-1.87-3.239,1.87" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
                </g>
            </g>
        </svg>
    </div>
</template>

<style lang="scss">
 .userButton{
    background: #FFF;
    position: relative;

    .userIcon svg {
        width: 25px;
        -webkit-transition:   transform 0.2s cubic-bezier(0, .5, 0, 1);
        -moz-transition:      transform 0.2s cubic-bezier(0, .5, 0, 1);
        -o-transition:        transform 0.2s cubic-bezier(0, .5, 0, 1);
        transition:           transform 0.2s cubic-bezier(0, .5, 0, 1);
    }

    &:hover {
        & .userIcon svg { 
            -webkit-transform:  scale(1.5);
            -ms-transform:      scale(1.5);
            transform:          scale(1.5);
        }
    }
 }
</style>