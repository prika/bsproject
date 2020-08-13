<template>
    <div class="cartIcon">
       <svg xmlns="http://www.w3.org/2000/svg" width="77.879" height="29.526" viewBox="0 0 77.879 29.526">
        <g transform="translate(-0.496 -50.505)">
            <path d="M65.9,76.5l3.488,2.325L72.874,76.5V73.015L69.386,70.69,65.9,73.015Z" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <path d="M13.243,76.5l3.488,2.325L20.219,76.5V73.015L16.731,70.69l-3.488,2.325Z" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
           
            <path d="M13.243,74.759H5.816V72.386l2.373-2.373V56.251L5.816,53.878V51.5H56.121v2.373l-2.373,2.373V70.014l2.373,2.373v2.373h-35.9" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <path d="M16.731,57.943v9.429H19.1" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <path d="M26.223,57.943v9.429H28.6" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <path d="M35.714,57.943v9.429h2.373" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <path d="M45.206,57.943v9.429h2.373" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>

            <path d="M72.874,74.759h4.5V65.318L73.449,58.7a7.152,7.152,0,0,0-6.152-3.5H62.763V74.759" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <line x2="44.777" transform="translate(21.121 74.759)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <line x2="12.747" transform="translate(0.496 74.759)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
            <line x1="6.254" transform="translate(71.121 65.318)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        </svg>
        <!-- Show number of products in cart by slot in Header -->
        <span class="qttProducts"><slot></slot></span>
    </div>
</template>

<style lang="scss">
.cartButton{
    background: #FFF;
    position: relative;

    .qttProducts{
        position: absolute;
        left: calc( 50% - 17px );
        top: calc(50% - 36px);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #C47C5A;
        color: #FFF;
        font-size: 16px;
        padding: 2px 5px;
        text-align: center;
    }

    .qttProducts,
    .cartIcon svg {
        -webkit-transition:   transform 0.2s cubic-bezier(0, .5, 0, 1);
        -moz-transition:      transform 0.2s cubic-bezier(0, .5, 0, 1);
        -o-transition:        transform 0.2s cubic-bezier(0, .5, 0, 1);
        transition:           transform 0.2s cubic-bezier(0, .5, 0, 1);
    }

    svg{width: 60px;}

    &:hover {
        .cartIcon svg,
        .qttProducts{ 
            font-size: 14px;
            transform: scale(1.15);
        }
    }
}
</style>