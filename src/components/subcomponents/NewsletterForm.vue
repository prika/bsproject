<template>
<div class="newsletterForm col-12 col-lg-4 order-1 order-lg-2">
    <h2>  {{ $t('footer-text-newsletter') }} </h2>
    <h1>  {{ $t('footer-sub-text-newsletter') }} </h1>

    <transition enter-active-class="animated fadeIn faster">
    <form id="newsletter"
            @submit.prevent="checkForm" v-if="!success">

            <div class="input_group col-9" :class="( cont_email_newsletter_error === true ? 'error': '')">  
                <input id="cont_email_newsletter"
                        v-model="cont_email_newsletter"
                        type="email" required
                        name="email" autocomplete="email"
                        :aria-label="$t('footer-input-email')" placeholder=" ">
                <label for="cont_email_newsletter">{{ $t('footer-input-email') }}</label>
                <p class="errormessage"> {{cont_email_newsletter_validator}} </p>
            </div>

            <input class="button" type="submit" :aria-label="$t('footer-submit-email')">
            
    </form>
    </transition>
    
    <transition enter-active-class="animated fadeIn faster">
        <div class="NewsletterRequestSubmited" v-if="success">
            <p>{{ $t('footer-newsletter-success') }}</p>
        </div>
    </transition>
</div>
</template>

<script>

export default {
    name: 'newsletterForm',
    data() {
        return {
            cont_email_newsletter: '',
            cont_email_newsletter_error: false,
            cont_email_newsletter_validator: '',
            success: false
        }
    },
    methods: {
        checkForm: function (e) {
            
            e.preventDefault()
            if(!this.validEmail()) return
            
            const data = { cont_email_newsletter: this.cont_email_newsletter }
            
            var self = this;
            this.$http.post('https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribe', data).then(response => {
                this.success = true
                
                setTimeout(function(){
                    self.success = false
                }, 5000)

            }).catch((e) => {
                this.errors = e.message
            })
            
        },
        validEmail: function () {
            
            if( cont_email_newsletter.value === '' ){

                this.cont_email_newsletter_error = true
                this.cont_email_newsletter_validator = this.cont_email_newsletter_error ?  "[[Campo de preenchimento obrigatório]]" : ""
                return false
            } 
            else {

                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.cont_email_newsletter_error = !re.test(this.cont_email_newsletter)
                this.cont_email_newsletter_validator = this.cont_email_newsletter_error ? '[[Valid email required.]]' : ""
                return !this.cont_email_newsletter_error

            }

            return !this.cont_email_newsletter_error
         }
    },
    watch: {
        cont_email_newsletter: function(newVal, oldVal) 
        { 
            this.validEmail()
        }
    }
}
</script>

<style lang="scss">
#newsletter{
    position: relative;
    min-height: 140px;
    justify-content: space-between;
    display: flex;
}
.NewsletterRequestSubmited{
    position: relative;
    min-height: 140px;
    justify-content: space-between;
    display: flex;
} 
</style>
