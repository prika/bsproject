<template>
<footer>
     <transition appear enter-active-class="animated slideInUp faster delay-2s" leave-active-class="animated slideOutDown faster">
        <div class="cofinandedBanner" v-if="showBanner === true">
            <div class="col-12 col-md-8 cofinancedby d-flex">
                <a  v-for="item in cofinance" 
                    :key="item.id"
                    :href="item.file"
                    :aria-label="$t('footer-cofinanced')+' '+item.name"
                    :alt="$t('footer-cofinanced')+' '+item.name"
                    :style="{ 'backgroundImage': 'url(\'' + item.img + '\')' }"
                    target="_blank" class="col-12 col-md-6"
                    rel="noopener noreferrer nofollow">
                </a>
            </div> 
        </div>
    </transition>

    <div class="container revertColor">

        <div class="row">
            <NewsletterForm />
            <FooterMenu/>
        </div>

        <div class="row">
            
            <div class="col-12 col-md-8 cofinancedby d-block d-md-flex">
                <a  v-for="item in cofinance" 
                    :key="item.id"
                    :href="item.file"
                    :aria-label="$t('footer-cofinanced')+' '+item.name"
                    :alt="$t('footer-cofinanced')+' '+item.name"
                    :style="{ 'backgroundImage': 'url(\'' + item.img + '\')' }"
                    target="_blank" class="col-12 col-md-6"
                    rel="noopener noreferrer nofollow">
                </a>
            </div> 
            
            <SocialButtons />
            
        </div>

        <div class="row">
            <div class="logoFooter col-12 col-md-6"></div>

            <div class="col-12 col-md-6 copyrights d-flex align-items-center justify-content-end">
                <div class="copy"><p>{{$t('footer-text-copyright')}}</p></div>
                <div class="websiteBy"><p>{{$t('footer-text-madeby')}}</p> <a :href="$t('footer-text-company-link')" rel="noreferrer">{{$t('footer-text-company')}}</a></div>
            </div>
        </div>
      
        <a v-scroll-to="'header'" class="scrollButton" :aria-label="$t('footer-scroll-top')" rel="nofollow noindex noopener"></a>
    </div>
</footer>
</template>

<script>
import FooterMenu from './subcomponents/Footer_menu.vue'
import NewsletterForm from './subcomponents/NewsletterForm.vue'
import SocialButtons from './ui/socialButtons.vue'


export default {
    components: {
        FooterMenu,
        NewsletterForm,
        SocialButtons
    },
    data() {
        return {
            cofinance: [],
            showBanner: true
        }
    },
    methods:
    {
        getImgUrl: function (src) {
            return require( '@/assets/images/'+src )
        },
        parseObject: function(source, destination)
        {
            for ( var i = 0 ; i < source.length; i++ ) {
               let obj = source[i]
               obj.img = this.getImgUrl(obj.img)
               obj.file = this.getImgUrl(obj.file)
               destination.push(obj)
            }
        },
        scrollTop(){
          window.scrollTop = 0
        }
    },
    created() {
        this.$eventBus.$on('jsonGlobalLoaded', (response) => {
            this.parseObject(response.data.footer.cofinance, this.cofinance)
        });

        var self = this;
        setTimeout( function(){ self.showBanner = false; } , 90000 );
    },
    beforeDestroy() {
        this.$eventBus.$off('jsonGlobalLoaded')
    }
}
</script>

<style lang="scss">
.cofinandedBanner{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  width: 100%;
  height: 97px;
  background: #2A2A2A;
  border: 1px solid #363636;

  .cofinancedby {
      width: 100%;
      height: 97px;
      margin: 14px auto;

      a {
        height: 60px;
        text-decoration: none;
        background-repeat: no-repeat;
        background-position: center 0;
        background-size: contain;
        opacity: .7;
        margin: 0;

        &:hover{
            opacity: 1;
        }
      }
  }
}

footer{
  background: #2A2A2A;
  position:   relative;
  color:      #FFF;
  z-index:    3;

      .row {
        border-top: 1px solid #363636;

        &:first-child{ border: 0;}
      }

      .footerMenu {
        padding: 4%;

        a {
          display: table;
          padding-bottom: 20px; 
          position: relative;
          will-change: color;
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
            will-change: left, opacity;
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
            will-change: background-color;
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
        margin: 3% 0;
        height: 50px;
        background: url(../assets/images/shared/logo_footer.svg) no-repeat 15%;
      }

    .social-icons{
        padding-left: 20px;
        
        a {
          margin-left: 10px;
        }
    }

    .cofinancedby a {
        height: 60px;
        margin: 5% 0;
        text-decoration: none;
        background-repeat: no-repeat;
        background-position: center 0;
        background-size: contain;
        opacity: .7;

        &:hover{
            opacity: 1;
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

@media (max-width: 812px) {
  
  .scrollButton{
        display: block;
        position: absolute;
        top: -20px;
        left: calc( 50% - 20px );
        width: 40px;
        height: 40px;
        background: #000;
        -webkit-transform:  rotate(45deg);
        -ms-transform:      rotate(45deg);
        transform:          rotate(45deg); 
  }

  footer{
    .newsletterForm{
      text-align: center;
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
        margin: 5% auto;
    }

    .social-icons{
      padding: 40px 0;
      border-top: 1px solid #363636;
      border-left: 0;
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