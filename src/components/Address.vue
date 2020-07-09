<template>
     <section id="addressSection" itemscope itemtype="http://schema.org/Organization">
        <div class="container">
            <div class="row">
             
                <div class="addressContainer col-md-5 order-md-2 col-xs-12">
                    <h1 class="h2">{{address.title}}</h1>
                    <address>
                        <span itemprop="streetAddress">{{address.street}}</span><br>
                        <span itemprop="addressLocality">{{address.location}}s</span><br>
                        <span itemprop="postalCode">{{address.postcode}}</span><br>
                    </address>
                </div>

                <div class="col-md-7 col-md-pull-5 order-md-1 col-xs-12">
                    <a class="extendedButton submitButton" :href="address.map" target="_blank" rel="noopener noreferrer nofollow">
                        <submitIcon>{{address.button}}</submitIcon>
                    </a>
                </div>
               
                <div class="addressContainer offset-md-7 col-xs-12 col-md-5 order-3">
                    <div class="contactsContainer"> 
                        <a itemprop="email"
                            :href="'mailto:'+contacts.email"
                            aria-label="Email us">e.<span style="margin-left: 40px"></span>{{contacts.email}}</a><br>
                        <a id="telephone" itemprop="telephone" 
                            :href="'tel:'+contacts.phone" 
                            aria-label="Call us">t.<span style="margin-left: 40px"></span>{{contacts.phone}}</a>
                        <br><br><br>

                        <div v-for="item in departments">
                            <p>{{item.name}}<br>
                            <a :href="'tel:'+item.phone">{{item.phone}}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import submitIcon from '@/components/ui/submitIcon.vue'

export default {
    components:{
        submitIcon
    },
    data() {
        return {
            address: "",
            contacts: "",
            departments: []
        }
    },
    created() {
      this.$eventBus.$on('jsonGlobalLoaded', (response) => {
          this.address = response.data.address
          this.contacts = response.data.contacts
          this.departments = response.data.contacts.departments
      });
    }
}
</script>

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