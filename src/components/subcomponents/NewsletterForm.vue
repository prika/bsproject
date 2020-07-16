<template>
<div class="newsletterForm revertColor col-12 col-lg-4 order-1 order-lg-2">
    <h2>  {{ $t('footer-text-newsletter') }} </h2>
    <h1>  {{ $t('footer-sub-text-newsletter') }} </h1>
    <form
        id="newsletter"
        @submit.prevent="checkForm">

        <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <div v-if="!success">
            <div class="input_group col-9" :class="( hasError === true ? 'error': '')">  
                <input id="emailnewsletter"
                        v-model="email"
                        type="email"
                        name="email"
                        :aria-label="$t('footer-input-email')" placeholder=" ">
                <label for="emailnewsletter">{{ $t('footer-input-email') }}</label>
                <p class="errormessage"> {{ errors }} </p>
            </div>

            <input class="button" type="submit" :aria-label="$t('footer-submit-email')">
            
        </div>
        </transition>

        <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <div class="NewsletterRequestSubmited" v-if="success">
            <p>{{ $t('footer-newsletter-success') }}</p>
        </div>
        </transition>
    </form>
</div>
</template>

<script>

export default {
    data() {
        return {
            errors: '',
            hasError: false,
            email: '',
            success: false
        }
    },
    methods: {
        checkForm: function (e) {
            
            e.preventDefault()
            if(!this.validEmail()) return
            
            const data = { email: this.email }
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
            
            if (!this.email) // No email 
            {
                this.hasError = true
                this.errors = '[[Email required.]]'
                return false
            } 
            
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(this.email))
            {
                this.hasError = true
                this.errors = '[[Valid email required.]]'
                return false
            }
            return true
         }
    }
}
</script>

<style lang="scss">

#newsletter{
    position: relative;
    min-height: 140px;

     .NewsletterRequestSubmited{
        position: absolute; 
        top: 0; left: 0;
    } 
}
</style>
