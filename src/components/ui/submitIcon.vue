<template>
    <div>
        <span class="text"><slot></slot></span>
        <span class="arrow"></span>
        <span class="icon">
            <svg class="svgpath" alt="[[Icon de seta para avançar]]" xmlns="http://www.w3.org/2000/svg" width="8.821" height="14.813" viewBox="0 0 8.821 14.813">
                <path d="M230.221,220.144l-6.7-6.7,6.7-6.7" transform="translate(230.928 220.851) rotate(180)" fill="none" stroke="#c47c5a" stroke-miterlimit="10" stroke-width="2"/>
            </svg>
        </span>
    </div>
</template>
<script>
// export default {
//     props: {
//         rectBackgroundColor: {
//             type: String,
//             default: '#575757'
//         },
//         strokeColor: {
//             type: String,
//             default: '#FFFFFF'
//         }
//     }
// }
</script>
<style lang="scss">
.submitButton{
    display:      block;
    //float:        right;
    position:     relative;
    background: none;
    border: none;
    outline: none;

    & .text{
        float: left;
        text-transform:   uppercase;
        text-decoration:  none;
        font-family:      'Oswald', sans-serif;
        font-size:        22px;
        font-weight:      300;
        color:            #313131;
        line-height:      15px;
        -webkit-transition:   color 0.2s cubic-bezier(0, .5, 0, 1);
        -moz-transition:      color 0.2s cubic-bezier(0, .5, 0, 1);
        -o-transition:        color 0.2s cubic-bezier(0, .5, 0, 1);
        transition:           color 0.2s cubic-bezier(0, .5, 0, 1);
    }

    & .arrow{
        float:left;
        
        &::before {
            width: 0;
            margin-top: 6px;
            content: '';
            display:block;
            background-color: #313131;
            height: 2px;
            -webkit-transition:   background-color 0.2s cubic-bezier(0, .5, 0, 1), width 0.2s cubic-bezier(0, .5, 0, 1);
            -moz-transition:      background-color 0.2s cubic-bezier(0, .5, 0, 1), width 0.2s cubic-bezier(0, .5, 0, 1);
            -o-transition:        background-color 0.2s cubic-bezier(0, .5, 0, 1), width 0.2s cubic-bezier(0, .5, 0, 1);
            transition:           background-color 0.2s cubic-bezier(0, .5, 0, 1), width 0.2s cubic-bezier(0, .5, 0, 1);
        }
    }

    & .icon{
        right: 3px;
        position: absolute;
        top: -8px;

        & .svgpath{
          -webkit-transition:   .1s opacity 0.1s cubic-bezier(0, .5, 0, 1);
          -moz-transition:      .1s opacity 0.1s cubic-bezier(0, .5, 0, 1);
          -o-transition:        .1s opacity 0.1s cubic-bezier(0, .5, 0, 1);
          transition:           .1s opacity 0.1s cubic-bezier(0, .5, 0, 1);
          opacity: 0;
        }
    }

    &:hover {
        .text{ color: #c47c5a; }
        .arrow::before{ background-color: #c47c5a; width: 30px;}
        .svgpath{ opacity: 1; }
    }
}

.extendedButton{
    margin-top:   70px;
    width:        380px;
    margin-right:     20px;

    & .arrow{
        float:left;
        width: 230px;

        &::before {
        margin: 4px auto;
        width: 170px;
        }
    }

    & .icon{
        right: 45px;
        top: -9px;
    }

    &:hover .arrow::before{
        width: 210px;
    }
}

@media (max-width: 768px) {
    .submitButton.extendedButton {
        .text{ color: #c47c5a; }
        .arrow::before{ width: 210px;}
        .svgpath{ 
            opacity: 1; 
            path{stroke: #313131}
        }
    }

    .contactForm .submitButton{ float: right }
}
</style>