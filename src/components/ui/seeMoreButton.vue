<template>
<button class="seeMoreButton">
    <div class="SeeMoreIcon">
        <svg version="1.1" id="botao" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
            viewBox="0 0 56 56" enable-background="new 0 0 56 56" xml:space="preserve">
            <path id="linha_x5F_eleminar" fill="#333333" stroke="#FFFFFF" stroke-width="2" d="M28,38V18"/>
            <path id="linha_x5F_esquerda_1_" fill="#333333" stroke="#FFFFFF" stroke-width="2" d="M18,28.3h15.1"/>
            <path id="linha_x5F_direita" fill="#333333" stroke="#FFFFFF" stroke-width="2" d="M22.9,28.3H38"/>
        </svg>
    </div>
    <slot></slot>
</button>
</template>

<style lang="scss">
 .seeMoreButton{
    border: 0;
    position: relative;

    &:before{
        position: absolute;
        content:'';
        top: 8px; 
        left: calc(50% - 20px); 
        width: 40px;
        height: 40px;
        z-index: 0;
        background: #333;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg); 
        transform: rotate(45deg); 
        -webkit-transition:   all 0.3s cubic-bezier(0, .5, 0, 1);
        -moz-transition:      all 0.3s cubic-bezier(0, .5, 0, 1);
        -o-transition:        all 0.3s cubic-bezier(0, .5, 0, 1);
        transition:           all 0.3s cubic-bezier(0, .5, 0, 1);
    }
    
    & .SeeMoreIcon {
        width:  56px;
        height: 56px;
        margin: 0 auto;
        z-index: 1;
        position: relative;

        & svg path{
            -webkit-transition:   all 0.3s cubic-bezier(0, .5, 0, 1);
            -moz-transition:      all 0.3s cubic-bezier(0, .5, 0, 1);
            -o-transition:        all 0.3s cubic-bezier(0, .5, 0, 1);
            transition:           all 0.3s cubic-bezier(0, .5, 0, 1);
        }
    }

    &:hover{
        
        &:before{
            -webkit-transform: rotate(135deg);
            -ms-transform: rotate(135deg);
            transform: rotate(135deg); 
            background: #C47C5A;
        }
        
        & .SeeMoreIcon{

            & svg #linha_x5F_eleminar {
                opacity: 0;
            }

            & svg #linha_x5F_esquerda_1_ {
                -webkit-transform:  rotate(45deg) translate(3px, 7px);
                -ms-transform:  rotate(45deg) translate(3px, 7px);
                transform:  rotate(45deg) translate(3px, 7px);
                transform-origin: 50% 50%;
            }

            & svg #linha_x5F_direita {
                -webkit-transform:  rotate(-45deg) translate(-3px, 7px);
                -ms-transform:  rotate(-45deg) translate(-3px, 7px);
                transform:  rotate(-45deg) translate(-3px, 7px);
                transform-origin: 50% 50%;
            }
        } 
    }
}
</style>