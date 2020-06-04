<template>
    <div class="SeeMoreIcon">
        <svg version="1.1" id="botao" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
            viewBox="0 0 56 56" enable-background="new 0 0 56 56" xml:space="preserve">
            
            <!--path id="bg" fill="#333333" d="M28.3,0l28.3,28.3L28.3,56.6L0,28.3L28.3,0z"/-->
            <path id="linha_x5F_eleminar" fill="#333333" stroke="#FFFFFF" stroke-width="2" d="M28,38V18"/>
            <path id="linha_x5F_esquerda_1_" fill="#333333" stroke="#FFFFFF" stroke-width="2" d="M18,28.3h15.1"/>
            <path id="linha_x5F_direita" fill="#333333" stroke="#FFFFFF" stroke-width="2" d="M22.9,28.3H38"/>
        </svg>
    </div>
</template>

<style lang="scss">
 .seeMoreButton{
    //background: url(../assets/images/icons/ver_mais_1.svg) no-repeat top center;
    //padding-top: 50px;
    //margin: 120px auto 100px;
    border: 0;
    position: relative;
    -webkit-transition:   all 0.3s cubic-bezier(0, .5, 0, 1);
    -moz-transition:      all 0.3s cubic-bezier(0, .5, 0, 1);
    -o-transition:        all 0.3s cubic-bezier(0, .5, 0, 1);
    transition:           all 0.3s cubic-bezier(0, .5, 0, 1);

    &:before{
        position: absolute;
        content:'';
        top: 8px; 
        left: calc(50% - 20px); 
        width: 40px;
        height: 40px;
        z-index: 0;
        background: #333;
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
            transform: rotate(135deg);
            background: #C47C5A;
        }
        
        & .SeeMoreIcon{

            & svg #linha_x5F_eleminar {
                opacity: 0;
            }

            & svg #linha_x5F_esquerda_1_ {
                transform: rotate(45deg) translate(3px, 7px);
                transform-origin: 50% 50%;
            }

            & svg #linha_x5F_direita {
                transform: rotate(-45deg) translate(-3px, 7px);
                transform-origin: 50% 50%;
            }
        } 
    }
}
</style>