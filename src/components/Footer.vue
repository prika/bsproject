<template>
<footer>
    <div class="container">

        <div class="row">
            
            <FooterMenu />
            
            <div class="col-4">
                <div class="newsletterForm">
                    <h2>Newsletter</h2>
                    <h1>Receba as últimas notícias</h1>
                    <form action="">
                        <input type="email" name="" id="">
                        <input type="button" value="">
                    </form>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-8 cofinancedby">
                <div class="col-md-6 centered-sm centered-xs">
                    <a href="assets/Alentejo2020x.pdf" class="cofinance1" target="_blank" rel="noreferrer" aria-label="Co-financed by: Alentejo 2020"></a>
                </div>
                <div class="col-md-6 centered-sm centered-xs">
                    <a href="assets/Compete2020x.pdf" class="cofinance2" target="_blank" rel="noreferrer" aria-label="Co-financed by: Compete 2020"></a>
                </div>
            </div> 
           
            <div class="col-4 social-icons d-flex align-items-center">
                <a href="https://www.facebook.com/bstone.marble/" class="fb" target="_blank" rel="noreferrer" aria-label="Link to Facebook"></a>
                <a href="https://www.instagram.com/bstone.marble/" class="in" target="_blank" rel="noreferrer" aria-label="Link to Instagram"></a>
                <a href="https://www.pinterest.pt/bstone_marble/" class="pi" target="_blank" rel="noreferrer" aria-label="Link to Pinterest"></a>     
                <a href="https://www.linkedin.com/company/bloco-b/" class="lk" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"></a>
            </div>
        </div>


        <div class="row">
            <div class="logoFooter col-6 centered-sm centered-xs"></div>

            <div class="col-6 copyrights">
                <p>Copyright 2019 Bloco B       |       Website by <a href="">inCentea MI</a></p>
            </div>
        </div>
      
        <a href="javascript:void(0)" class="scrollButton" aria-label="Click here to scroll top"></a>

    </div>
</footer>

</template>

<script>
import FooterMenu from './subcomponents/Footer_menu.vue'

export default {
  components: {
        FooterMenu
  }
  //name: 'Header',
  // props: {
  //   msg: String
  // }
}
</script>


<style lang="scss">
footer{
  background: #2A2A2A;
  position: relative;
  color: #FFF;

      & .row{
        border-bottom: 1px solid #363636
      }

      .col-8 {
          border-right: 1px solid #363636
      }

      .newsletterForm {

          padding: 12% 27px;

          h2 { font-size: 0.9375rem; }
          h1 { font-size: 2rem; }
      }

      a {
        color: #FFF!important;
        letter-spacing: 1px;
        font-weight: 200!important;

        &.small{
          text-transform: uppercase;
          font-size: 14px;
          color: #A7A7A7
        }

        &:hover{
        text-decoration: none;
        color: #FFF;
        }
      }

      .logoFooter{
        display: block;
        margin: 2% 0;
        height: 50px;
        background: url(../assets/images/footer/logo_footer.svg) no-repeat 20px;
      }

      .social-icons{
          padding-left: 20px;

          a {
              display: inline-block;
              width: 50px;
              height: 50px;
              margin-left: 10px;

              -webkit-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
              -moz-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
              -o-transition: all 0.4s cubic-bezier(0, .5, 0, 1);
              transition: all 0.4s cubic-bezier(0, .5, 0, 1);

              background-position: center center;
              line-height: 0;
              background-color: #666;

                &.fb{
                    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16.926" height="16.926" viewBox="0 0 16.926 16.926"><path d="M14.647,0H2.283A2.281,2.281,0,0,0,0,2.281V14.645a2.281,2.281,0,0,0,2.281,2.281h6.1l.01-6.048H6.82a.371.371,0,0,1-.371-.369l-.008-1.95a.371.371,0,0,1,.371-.372H8.381V6.3a3.078,3.078,0,0,1,3.285-3.377h1.6a.371.371,0,0,1,.371.371V4.941a.371.371,0,0,1-.371.371h-.982c-1.061,0-1.266.5-1.266,1.244V8.186h2.331a.371.371,0,0,1,.368.414l-.231,1.95a.371.371,0,0,1-.368.327H11.029l-.01,6.048h3.628a2.281,2.281,0,0,0,2.281-2.281V2.281A2.281,2.281,0,0,0,14.647,0Z" transform="translate(-0.002)"/></svg>') no-repeat center center;
                    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16.926" height="16.926" viewBox="0 0 16.926 16.926"><path d="M14.647,0H2.283A2.281,2.281,0,0,0,0,2.281V14.645a2.281,2.281,0,0,0,2.281,2.281h6.1l.01-6.048H6.82a.371.371,0,0,1-.371-.369l-.008-1.95a.371.371,0,0,1,.371-.372H8.381V6.3a3.078,3.078,0,0,1,3.285-3.377h1.6a.371.371,0,0,1,.371.371V4.941a.371.371,0,0,1-.371.371h-.982c-1.061,0-1.266.5-1.266,1.244V8.186h2.331a.371.371,0,0,1,.368.414l-.231,1.95a.371.371,0,0,1-.368.327H11.029l-.01,6.048h3.628a2.281,2.281,0,0,0,2.281-2.281V2.281A2.281,2.281,0,0,0,14.647,0Z" transform="translate(-0.002)"/></svg>') no-repeat center center;
                }

                &.in{
                    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.769" height="18.769" viewBox="0 0 18.769 18.769"><path d="M13.178,0H5.591A5.6,5.6,0,0,0,0,5.591v7.586a5.6,5.6,0,0,0,5.591,5.591h7.586a5.6,5.6,0,0,0,5.591-5.591V5.591A5.6,5.6,0,0,0,13.178,0Zm3.7,13.178a3.7,3.7,0,0,1-3.7,3.7H5.591a3.7,3.7,0,0,1-3.7-3.7V5.591a3.7,3.7,0,0,1,3.7-3.7h7.586a3.7,3.7,0,0,1,3.7,3.7v7.586Z" /><path d="M137.854,133a4.854,4.854,0,1,0,4.854,4.854A4.86,4.86,0,0,0,137.854,133Zm0,7.821a2.966,2.966,0,1,1,2.966-2.966A2.966,2.966,0,0,1,137.854,140.821Z" transform="translate(-128.47 -128.47)"/><ellipse cx="1.163" cy="1.163" rx="1.163" ry="1.163" transform="translate(13.085 3.403)"/></svg>') no-repeat center center;
                    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.769" height="18.769" viewBox="0 0 18.769 18.769"><path d="M13.178,0H5.591A5.6,5.6,0,0,0,0,5.591v7.586a5.6,5.6,0,0,0,5.591,5.591h7.586a5.6,5.6,0,0,0,5.591-5.591V5.591A5.6,5.6,0,0,0,13.178,0Zm3.7,13.178a3.7,3.7,0,0,1-3.7,3.7H5.591a3.7,3.7,0,0,1-3.7-3.7V5.591a3.7,3.7,0,0,1,3.7-3.7h7.586a3.7,3.7,0,0,1,3.7,3.7v7.586Z" /><path d="M137.854,133a4.854,4.854,0,1,0,4.854,4.854A4.86,4.86,0,0,0,137.854,133Zm0,7.821a2.966,2.966,0,1,1,2.966-2.966A2.966,2.966,0,0,1,137.854,140.821Z" transform="translate(-128.47 -128.47)"/><ellipse cx="1.163" cy="1.163" rx="1.163" ry="1.163" transform="translate(13.085 3.403)"/></svg>') no-repeat center center;
                }
                  
                &.pi{
                    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.847" height="18.878" viewBox="0 0 18.847 18.878"><path d="M9.431,0A9.434,9.434,0,0,0,5.992,18.218a9.08,9.08,0,0,1,.031-2.709c.171-.737,1.1-4.688,1.1-4.688a3.435,3.435,0,0,1-.279-1.4c0-1.312.761-2.29,1.708-2.29a1.185,1.185,0,0,1,1.2,1.327A18.647,18.647,0,0,1,8.965,11.6a1.372,1.372,0,0,0,1.4,1.708c1.677,0,2.965-1.77,2.965-4.316A3.722,3.722,0,0,0,9.385,5.162,4.082,4.082,0,0,0,5.123,9.253a3.681,3.681,0,0,0,.7,2.15.281.281,0,0,1,.062.272c-.07.295-.233.939-.264,1.071-.039.171-.14.21-.318.124A4.225,4.225,0,0,1,3.384,9.214c0-2.973,2.158-5.705,6.233-5.705a5.535,5.535,0,0,1,5.814,5.449c0,3.252-2.049,5.868-4.89,5.868a2.506,2.506,0,0,1-2.158-1.087l-.59,2.243a10.275,10.275,0,0,1-1.172,2.476A9.44,9.44,0,1,0,9.431,0Z"/></svg>') no-repeat center center;
                    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.847" height="18.878" viewBox="0 0 18.847 18.878"><path d="M9.431,0A9.434,9.434,0,0,0,5.992,18.218a9.08,9.08,0,0,1,.031-2.709c.171-.737,1.1-4.688,1.1-4.688a3.435,3.435,0,0,1-.279-1.4c0-1.312.761-2.29,1.708-2.29a1.185,1.185,0,0,1,1.2,1.327A18.647,18.647,0,0,1,8.965,11.6a1.372,1.372,0,0,0,1.4,1.708c1.677,0,2.965-1.77,2.965-4.316A3.722,3.722,0,0,0,9.385,5.162,4.082,4.082,0,0,0,5.123,9.253a3.681,3.681,0,0,0,.7,2.15.281.281,0,0,1,.062.272c-.07.295-.233.939-.264,1.071-.039.171-.14.21-.318.124A4.225,4.225,0,0,1,3.384,9.214c0-2.973,2.158-5.705,6.233-5.705a5.535,5.535,0,0,1,5.814,5.449c0,3.252-2.049,5.868-4.89,5.868a2.506,2.506,0,0,1-2.158-1.087l-.59,2.243a10.275,10.275,0,0,1-1.172,2.476A9.44,9.44,0,1,0,9.431,0Z"/></svg>') no-repeat center center;
                }
                  
                &.yt{
                  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="22.023" height="15.583" viewBox="0 0 22.023 15.583"><path d="M17.449,67.393H4.574A4.574,4.574,0,0,0,0,71.967V78.4a4.574,4.574,0,0,0,4.574,4.574H17.449A4.574,4.574,0,0,0,22.023,78.4V71.967A4.574,4.574,0,0,0,17.449,67.393ZM14.356,75.5,8.333,78.37a.242.242,0,0,1-.346-.218V72.228a.242.242,0,0,1,.351-.216l6.022,3.052A.242.242,0,0,1,14.356,75.5Z" transform="translate(0 -67.393)"/></svg>') no-repeat center center;
                  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="22.023" height="15.583" viewBox="0 0 22.023 15.583"><path d="M17.449,67.393H4.574A4.574,4.574,0,0,0,0,71.967V78.4a4.574,4.574,0,0,0,4.574,4.574H17.449A4.574,4.574,0,0,0,22.023,78.4V71.967A4.574,4.574,0,0,0,17.449,67.393ZM14.356,75.5,8.333,78.37a.242.242,0,0,1-.346-.218V72.228a.242.242,0,0,1,.351-.216l6.022,3.052A.242.242,0,0,1,14.356,75.5Z" transform="translate(0 -67.393)"/></svg>') no-repeat center center;
                }
                
                &.lk{
                  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16.728" height="16.926" viewBox="0 0 16.728 16.926"><path d="M648.266,217H634.911a1.689,1.689,0,0,0-1.686,1.692v13.542a1.689,1.689,0,0,0,1.686,1.692h13.355a1.689,1.689,0,0,0,1.686-1.692V218.7A1.689,1.689,0,0,0,648.266,217ZM638.592,230.4h-2.25v-7.24h2.25Zm-1.14-8.129a1.128,1.128,0,1,1,1.214-1.125A1.122,1.122,0,0,1,637.452,222.268Zm9.357,8.129h-2.25v-4.012c0-.933-.326-1.569-1.14-1.569a1.236,1.236,0,0,0-1.155.844,1.618,1.618,0,0,0-.074.563V230.4h-2.25v-4.93c0-.9-.029-1.658-.059-2.31h1.954l.1,1.007h.044a2.6,2.6,0,0,1,2.236-1.17c1.48,0,2.591.992,2.591,3.124Z" transform="translate(-633.225 -217.004)"/></svg>') no-repeat center center;
                  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16.728" height="16.926" viewBox="0 0 16.728 16.926"><path d="M648.266,217H634.911a1.689,1.689,0,0,0-1.686,1.692v13.542a1.689,1.689,0,0,0,1.686,1.692h13.355a1.689,1.689,0,0,0,1.686-1.692V218.7A1.689,1.689,0,0,0,648.266,217ZM638.592,230.4h-2.25v-7.24h2.25Zm-1.14-8.129a1.128,1.128,0,1,1,1.214-1.125A1.122,1.122,0,0,1,637.452,222.268Zm9.357,8.129h-2.25v-4.012c0-.933-.326-1.569-1.14-1.569a1.236,1.236,0,0,0-1.155.844,1.618,1.618,0,0,0-.074.563V230.4h-2.25v-4.93c0-.9-.029-1.658-.059-2.31h1.954l.1,1.007h.044a2.6,2.6,0,0,1,2.236-1.17c1.48,0,2.591.992,2.591,3.124Z" transform="translate(-633.225 -217.004)"/></svg>') no-repeat center center;
                }

                &:hover {
                  background-color: #fff;
                }
          }
      }

.cofinancedby{
    padding: 18px 0;

    div {
        float: left;
        padding: 2% 0;
    }

    a {
      width: 355px;
      height: 65px;
      display: block;
      text-decoration: none;
      background: url(../assets/images/footer/cofinanced1.svg) no-repeat;
      opacity: .7;

      &.cofinance2{
          background: url(../assets/images/footer/cofinanced2.svg) no-repeat;
      }

      &:hover{
          opacity: 1;
      }
    }
  }

.copyrights {

    p {
      text-align: right;
      font-family: "Oswald", sans-serif;
      font-size: 15px;
      font-weight: 300;
      text-transform: 1px;
      color: #A7A7A7;
      padding: 7% 0;
      margin: 0;
    }

    a{
       text-align: right;
      &:hover{
          color: #fff;
      }
    }
}
}




@media (max-width: 767px) { 
  
  footer{
    padding-top: 40px;
    padding-bottom: 40px;
  
      .logoFooter,
      .social-icons{
        margin: 30px 0;
      }

      .social-icons a{ 
        width: 60px;
        height: 60px;
        margin-top: 20px;
        background-size: 30px!important;
      }
  }

}
</style>
