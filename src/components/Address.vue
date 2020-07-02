<template>
     <section id="addressSection" itemscope itemtype="http://schema.org/Organization">
        <div class="container">
            <div class="row">
             
              

                <div class="addressContainer col-md-5 order-md-2 col-xs-12">
                    <h1 class="h2">Nosso endereço</h1>
                    <address>
                        <span itemprop="streetAddress">Estrada Nacional n.º 4, km 152</span><br>
                        <span itemprop="addressLocality">Sítio Courela dos Aléns</span><br>
                        <span itemprop="postalCode">7100-011</span><br>
                    </address>
                </div>

                <div class="col-md-7 col-md-pull-5 order-md-1 col-xs-12">
                    <!-- col-md-offset-3 col-md-3 col-sm-offset-1 col-sm-3 col-xs-offset-0 col-xs-12-->
                    <a class="seeOnMap" href="https://goo.gl/maps/KYpeemR9z2YcZENQA" target="_blank" rel="noopener noreferrer nofollow">
                        <span class="text">Veja no mapa</span>
                        <span class="arrow"></span>
                        <span class="icon">
                            <svg class="svgpath" xmlns="http://www.w3.org/2000/svg" width="8.821" height="14.813" viewBox="0 0 8.821 14.813">
                                <path d="M230.221,220.144l-6.7-6.7,6.7-6.7" transform="translate(230.928 220.851) rotate(180)" fill="none" stroke="#c47c5a" stroke-miterlimit="10" stroke-width="2"/>
                            </svg>
                        </span>
                    </a>
                </div>
               
 
                <div class="addressContainer offset-md-7 col-xs-12 col-md-5 order-3">
                    <div class="contactsContainer"> 
                        <a itemprop="email" href="mailto:info@bstone.pt" aria-label="Email us">e.<span style="margin-left: 40px"></span>info@bstone.pt</a><br>
                        <a id="telephone" itemprop="telephone" href="tel:(+351)964956929" aria-label="Call us">t.<span style="margin-left: 40px"></span>(+351) 268 848 030</a>
                        <br><br><br>
                        <p>Sales Department<br>
                        <a href="tel:(+351)964956929">(+351)  964  956  929</a></p>
                        <p>Logistics<br>
                        <a href="tel:(+351)914490070">(+351)  914  490  070</a></p>
                        <p>Branding & Communication<br>
                        <a href="tel:(+351)925278115">(+351)  925  278  115</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
#addressSection,
#contactsSection{
    background-color: #FFF;
    background-image: url(../assets/images/B_Simbolo_estatico_Contactos.svg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 220px 130%;
    
    -webkit-background-size:  450px;
    -moz-background-size:     450px;
    -o-background-size:       450px;
    background-size:          450px;

    padding: 180px 0;
    position: relative;
    z-index: 0;
  
    & .contactForm h1,
    & .addressContainer h1{
      height: 41px;
      font-size: 22px;
      font-weight: 300;
      color: #a7a7a7;
    }

    & .contactForm p.h1,
    & .addressContainer span{
      font-family:  'Noe Display', serif;
      font-size:    2.4rem; //38px
    }

  
    & .seeOnMap{
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
        }

        &:hover .arrow::before{
          width: 210px;
        }
    }

    & .submitForm{
        background: none;
        border: none;
        outline: none;

        & .arrow{
          float:left;
          
          &::before {
            width: 0;
            margin-top: 6px;
          }
        }

        & .icon{
          right: 3px;
        }

        &:hover .arrow::before{
          width: 30px;
        }
    }

    & .seeOnMap,
    & .submitForm{
      display:      block;
      float:        right;
      position:     relative;
      
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
          content: '';
          display:block;
          background-color: #313131;
          height: 2px;
          -webkit-transition:   background-color 0.2s cubic-bezier(0, .5, 0, 1);
          -moz-transition:      background-color 0.2s cubic-bezier(0, .5, 0, 1);
          -o-transition:        background-color 0.2s cubic-bezier(0, .5, 0, 1);
          transition:           background-color 0.2s cubic-bezier(0, .5, 0, 1);
        }
      }

      & .icon{
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
        .arrow::before{ background-color: #c47c5a; }
        .svgpath{ opacity: 1; }
      }
    }

  //  Vertical Line 
	&::before,
	&::after{
		content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        height: 100%;
        background-color: #E8E8E8;
	}

	&::before{ left: 21%; }
}
  
.contactsContainer{
  padding: 30px 0;

  & > a {
    line-height: 2.5rem;
  }
  
  p, a {
    font-family:      'Oswald', sans-serif;
    font-size:        1.4rem; //22px
    font-weight:      300;
    text-decoration:  none;
  }

  p, p a{ font-size: 1.25rem;}
}

#contactsSection{
    border-top: 1px solid #E8E8E8;

    .contactForm{
        form {
            margin: 70px 0; 
        }
    }
}



@media (max-width: 768px) {
    #addressSection,
    #contactsSection {
      padding: 80px 0;
    }

    #addressSection{

      .addressContainer address {
        
        max-width: 70%;

        span{
          font-size: 1.8rem;
          max-width: 80%;
        }
      }

      & .seeOnMap {
          margin-top: 20px;
          float: none;
          
          .text{
            color: #c47c5a; 
            margin-bottom: 70px;
            margin-top: 0;
          }

          .arrow::before{
            width: 210px;
            background-color: #313131;
          }
          .icon .svgpath{
            opacity: 1;
            

            & path{
              stroke: #313131;
            }
          }
      }
    }
}
</style>