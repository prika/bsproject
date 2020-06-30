<template>
<div class="newsletterForm revertColor col-12 col-lg-4 order-1 order-lg-2">
    <h2>  {{ $t('footer-text-newsletter') }} </h2>
    <h1>  {{ $t('footer-sub-text-newsletter') }} </h1>
    <form
        id="newsletter"
        @submit="checkForm"
        action="https://vuejs.org/"
        method="post"
        novalidate="true">

        <div class="input_group col-9">  
            <input id="emailnewsletter"
                    v-model="email"
                    type="email"
                    name="email"
                    :aria-label="$t('footer-input-email')" placeholder=" ">
            <label for="form1">Email</label>
            <span class="bar"></span>
        </div>

        <input class="button" type="submit" :aria-label="$t('footer-submit-email')">
        
        <p style="margin-top: 36px; color: red">
            <span v-if="errors.length">{{ $t('footer-newsletter-error') }}</span>
            <ul v-if="errors.length">
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            email: null
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.email) {
                this.errors.push('[[Email required.]]');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('[[Valid email required.]]');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>
