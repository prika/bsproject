<template>
<footer>
    <div class="container">

        <div class="row">
            
            <FooterMenu />
            
            <NewsletterForm />
            
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
      
        <!--a href="javascript:void(0)" class="scrollButton" aria-label="Click here to scroll top"></a-->

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