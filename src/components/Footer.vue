<template>
<footer>
    <div class="container">

        <div class="row">
            <NewsletterForm />
            <FooterMenu />
        </div>

        <div class="row">
            <div class="col-12 col-md-8 cofinancedby">
                <div class="col-12 col-md-6">
                    <a href="./assets/footer/Alentejo2020x.jpg" class="cofinance1" target="_blank" rel="noreferrer" :aria-label="$t('footer-cofinanced')"></a>
                </div>
                <div class="col-12 col-md-6">
                    <a href="./assets/footer/Compete2020x.jpg" class="cofinance2" target="_blank" rel="noreferrer" :aria-label="$t('footer-cofinanced2')"></a>
                </div>
            </div> 
           
            <div class="col-12 col-sm-4 social-icons d-flex align-items-center">
                <a href="https://www.facebook.com/bstone.marble/" class="fb" target="_blank" rel="noreferrer" :aria-label="$t('social-arialabel-facebook')"></a>
                <a href="https://www.instagram.com/bstone.marble/" class="in" target="_blank" rel="noreferrer" :aria-label="$t('social-arialabel-instagram')"></a>
                <a href="https://www.pinterest.pt/bstone_marble/" class="pi" target="_blank" rel="noreferrer" :aria-label="$t('social-arialabel-pinterest')"></a>     
                <a href="https://www.linkedin.com/company/bloco-b/" class="lk" target="_blank" rel="noreferrer" :aria-label="$t('social-arialabel-linkedin')"></a>
            </div>
        </div>


        <div class="row">
            <div class="logoFooter col-12 col-sm-6"></div>

            <div class="col-12 col-sm-6 copyrights d-flex align-items-center justify-content-end">
                <div class="copy"><p>{{$t('footer-text-copyright')}}</p></div>
                <div class="websiteBy"><p>{{$t('footer-text-madeby')}}</p> <a href="https://www.incentea.com/">inCentea MI</a></div>
            </div>
        </div>
      
        <a href="javascript:void(0)" class="scrollButton" aria-label="Click here to scroll top"></a>

    </div>
</footer>
</template>

<script>
import FooterMenu from './subcomponents/Footer_menu.vue'
import NewsletterForm from './subcomponents/NewsletterForm.vue'


export default {
    components: {
        FooterMenu,
        NewsletterForm
    }
}
</script>

<style lang="scss">

footer{
  background: #2A2A2A;
  position:   relative;
  color:      #FFF;
  z-index:    2;

      .row {
        border-top: 1px solid #363636;

        &:first-child{ border: 0;}
      }

      .footerMenu {
        padding: 4% 0;

        a { 
          color: #FFF;
          display: table;
          padding-bottom: 20px; 
          position: relative;
          -webkit-transition:   color .3s cubic-bezier(0, .5, 0, 1);
          -moz-transition:      color .3s cubic-bezier(0, .5, 0, 1);
          -o-transition:        color .3s cubic-bezier(0, .5, 0, 1);
          transition:           color .3s cubic-bezier(0, .5, 0, 1);

          &:before{
            content: '';
            display: block;
            position: absolute;
            top:14px;
            left: -80%;
            height:1px;
            width: 100%;
            background-color: #C47C5A;
            opacity: 0;
            -webkit-transition:   left 0.4s cubic-bezier(0, .5, 0, 1), opacity 0.4s cubic-bezier(0, .5, 0, 1);
            -moz-transition:      left 0.4s cubic-bezier(0, .5, 0, 1), opacity 0.4s cubic-bezier(0, .5, 0, 1);
            -o-transition:        left 0.4s cubic-bezier(0, .5, 0, 1), opacity 0.4s cubic-bezier(0, .5, 0, 1);
            transition:           left 0.4s cubic-bezier(0, .5, 0, 1), opacity 0.4s cubic-bezier(0, .5, 0, 1);
          }

          &:hover:before{
              left: 0;
              opacity: 1;
          }
        }

        .secondaryLinks a { 
          color: #B7B7B7;

          &:hover { color: #C47C5A;}
        }
      }

      .social-icons,
      .newsletterForm {
          border-left: 1px solid #363636
      }

      h1, h2{ color: #FFF; }

      .newsletterForm {
          padding: 4%;

          h2 { font-size: 0.9375rem; }
          h1 { font-size: 2rem; margin-bottom: 30px;}

          input[type=submit]{
            width: 40px;
            height: 40px;
            position: relative;
            
            border: none;
            outline: none;
            font-size: 0;
            
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;

            -webkit-transition:   background-color 0.4s cubic-bezier(0, .5, 0, 1);
            -moz-transition:      background-color 0.4s cubic-bezier(0, .5, 0, 1);
            -o-transition:        background-color 0.4s cubic-bezier(0, .5, 0, 1);
            transition:           background-color 0.4s cubic-bezier(0, .5, 0, 1);

            background-color: #000;
            background-image: url('../assets/images/icons/newsletter_enviar.svg');

            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg); 
            transform-origin: 50% 50%;

            &::after {
              position: absolute;
              top: 0; left: 0;
              content: '';
              display: block;
              
              width: 40px;
              height: 40px;
              outline: none;
            }

            &:hover{
              background-color: #C47C5A;
            }
        }
      }

      a {
        color:        #FFF;
        letter-spacing: 1px;
        font-weight:    200!important;
        display:        block;

        &:hover{
        text-decoration:  none;
        color:            #C47C5A;
        }
      }

      .logoFooter{
        display: block;
        margin: 2% 0;
        height: 50px;
        background: url(../assets/images/logo/logo_footer.svg) no-repeat 20px;
      }

    .social-icons{
        padding-left: 20px;
        
        a {
          margin-left: 10px;
        }
    }

    .cofinancedby{
    padding: 18px 0;

      div {
        float: left;
        padding: 2% 0;
      }

      a {
        height: 65px;
        display: block;
        text-decoration: none;
        background: url(../assets/images/footer/cofinanced1.svg) no-repeat center 0;
        background-size: contain;
        
        opacity: .7;

        &.cofinance2{
           background: url(../assets/images/footer/cofinanced2.svg) no-repeat center 0;
           background-size: contain;
        }

        &:hover{
            opacity: 1;
        }
      }
    }

    .copyrights {
        
        .websiteBy { 
          border-left: 1px solid #a7a7a7;
          padding-left: 60px;
          margin-left: 60px;
        }

        p, a {
          display: inline-flex;
          font-family: "Oswald", sans-serif;
          font-weight: 300;
          font-size: 15px;
          letter-spacing: 1px;
          color: #a7a7a7;
          margin: 0;
          white-space: nowrap;
        }

        a:hover{
            color: #C47C5A;
        }
    }
}

.scrollButton{display:none;}

@media (max-width: 768px) {
  
  .scrollButton{
        display: block;
        position: absolute;
        top: -20px;
        left: calc( 50% - 20px );
        width: 40px;
        height: 40px;
        background: #000;
        transform: rotate(45deg);
  }

  footer{
    .newsletterForm{
      border-left: 0;
      border-bottom: 1px solid #363636;
      padding: 10%;
    }

    .footerMenu {

      a {
        padding: 5%;
        text-align: center;
        display: block;
      }

      a:before,
      .mobileHided {display: none}
    }
    
    .cofinancedby a {
        width: 295px;
        margin: 0 auto;
    }

    .social-icons{
      padding: 40px 0;
      border-top: 1px solid #363636;
      justify-content: center;

      a{
        width: 80px;
        height: 80px;
      }
    }

    .logoFooter{
      margin: 10% 0;
      background-position: center;
    }

    .copyrights {
       justify-content: center!important;
       border-top: 1px solid #363636;
       padding: 10% 0;

       .websiteBy {
        padding-left: 20px;
        margin-left: 20px;
      }
    }
  }
}
</style>