<template>
   <section class="newsContainer container">

        <h1 class="pageTitleh2 h2">notícias</h1>

        <div class="row">
            <a class="col-3 newsBlock">
                 <div class="newsContentIimage"><img src="../assets/images/shared/exemplo_3.jpg" class="img-fluid" alt=""></div>
                 
                 <div class="newsContentText col-7">
                    <div class="text">
                        <p>O Grupo J .Silva investe na Bloco B transformando a empresa numa das mais modernas no sector dos Mármores!</p>
                        <p class="newsDate">23   —   novembro  —   2018</p>
                    </div>
                 </div>
            </a>
            <a class="col-3 newsBlock">
                <div class="newsContentIimage"><img src="../assets/images/shared/exemplo_3.jpg" class="img-fluid" alt=""></div>
                 
                 <div class="newsContentText col-7">
                    <div class="text">
                        <p>O Grupo J .Silva investe na Bloco B transformando a empresa numa das mais modernas no sector dos Mármores!</p>
                        <p class="newsDate">23   —   novembro  —   2018</p>
                    </div>
                 </div>
            </a>
            <a class="col-3 newsBlock">
                <div class="newsContentIimage"><img src="../assets/images/shared/exemplo_3.jpg" class="img-fluid" alt=""></div>
                 
                 <div class="newsContentText col-7">
                    <div class="text">
                        <p>O Grupo J .Silva investe na Bloco B transformando a empresa numa das mais modernas no sector dos Mármores!</p>
                        <p class="newsDate">23   —   novembro  —   2018</p>
                    </div>
                 </div>
            </a>
        </div>

        <a href="/noticias" style="display: block; text-align: center; margin: 100px 0;"><seeMoreButton>Ver mais</seeMoreButton></a>
    </section>
</template>

        
<script>
    import seeMoreButton from '@/components/ui/seeMoreButton'

    export default {
        components: {
           seeMoreButton
        }
    }
</script>

<style lang="scss">

.newsContainer {
    z-index: 0;
    padding: 0 50px;

    .row{
    display: flex;
    justify-content: space-around;
    

    .newsBlock{
        position: relative;
        height: 520px;

        & .newsContentIimage{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 260px;
            height: 260px;
            overflow: hidden;

            img{
                -webkit-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
                -moz-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
                -o-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
                transition: all 0.4s cubic-bezier(0, .5, 0, 1);
            }
        }

        & .newsContentText{
            position: relative;
            float: right;
            width: 270px;
            margin-top: 100px;
            
            .text{
                position: absolute;
                top: 0;
                right: 0;
                z-index: 2;
                width: 270px;
                height: 380px;
                padding: 60px 55px;
                background: #FFF;
                -webkit-clip-path:  polygon(156.430px 0px, 0px 0px, 0px 379.014px, 260.676px 379.014px, 260.676px 61.515px);
                -o-clip-path:       polygon(156.430px 0px, 0px 0px, 0px 379.014px, 260.676px 379.014px, 260.676px 61.515px);
                -ms-clip-path:      polygon(156.430px 0px, 0px 0px, 0px 379.014px, 260.676px 379.014px, 260.676px 61.515px);
                clip-path:          polygon(156.430px 0px, 0px 0px, 0px 379.014px, 260.676px 379.014px, 260.676px 61.515px); 

                p{
                    font-size: 18px;
                    font-style: italic;
                }

                .newsDate{
                    position: absolute;
                    bottom: 30px;
                    font-family: 'Oswald', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    font-style: normal;
                    color: #575757;
                }
            }

            &::after{
                content: '';
                position: absolute;
                display: block;
                top: -3px;
                right: 0;
                z-index: 2;
                width: 110px;
                height: 460px;

                background: #FFF;
                -webkit-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
                -moz-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
                -o-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
                transition: all 0.4s cubic-bezier(0, .5, 0, 1);

                -webkit-clip-path:  polygon( 100px 2px,  0px 2px,  100px 63px ); 
                -o-clip-path:       polygon( 100px 2px,  0px 2px,  100px 63px ); 
                -ms-clip-path:      polygon( 100px 2px,  0px 2px,  100px 63px ); 
                clip-path:          polygon( 100px 2px,  0px 2px,  100px 63px ); 
            }
        }

        &:hover {
            cursor: pointer;

            .newsContentIimage img{
                transform: scale(1.1);
            }

            .newsContentText::after {
                -webkit-clip-path:  polygon(95.324px 8.821px, 17.800px 6.235px, 102.010px 58.286px);
                -o-clip-path:       polygon(95.324px 8.821px, 17.800px 6.235px, 102.010px 58.286px);
                -ms-clip-path:      polygon(95.324px 8.821px, 17.800px 6.235px, 102.010px 58.286px);
                clip-path:          polygon(95.324px 8.821px, 17.800px 6.235px, 102.010px 58.286px);
            }
        }

        &:nth-child(2):hover .newsContentText:nth-child(2)::after{
            -webkit-clip-path:  polygon(105px 0, 0 0, 90px 50px);
            -o-clip-path:       polygon(105px 0, 0 0, 90px 50px);
            -ms-clip-path:      polygon(105px 0, 0 0, 90px 50px);
            clip-path:          polygon(105px 0, 0 0, 90px 50px);
        }

        &:nth-child(3):hover .newsContentText:nth-child(2)::after{
            -webkit-clip-path:  polygon(110px 2px, 25px 10px, 95px 55px);
            -o-clip-path:       polygon(110px 2px, 25px 10px, 95px 55px);
            -ms-clip-path:      polygon(110px 2px, 25px 10px, 95px 55px);
            clip-path:          polygon(110px 2px, 25px 10px, 95px 55px);
        }

    }
}
}

</style>