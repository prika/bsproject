<template>
<div class="col-4">
    <div class="newsletterForm">
        <h2>  {{ $t('footer-text-newsletter') }} </h2>
        <h1>  {{ $t('footer-sub-text-newsletter') }} </h1>
        <form
            id="newsletter"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post"
            novalidate="true">

            <input id="email"
                v-model="email"
                type="email"
                name="email"
                :aria-label="$t('footer-input-email')">
            
            <input class="button" type="submit" :aria-label="$t('footer-submit-email')">
            
            <p style="height: 30px; color: red">
                <span v-if="errors.length">{{ $t('footer-newsletter-error') }}</span>
                <ul v-if="errors.length">
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
        </form>


    </div>
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
