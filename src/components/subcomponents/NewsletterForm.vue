<template>
<div class="col-4">
    <div class="newsletterForm">
        <h2>Newsletter</h2>
        <h1>Receba as últimas notícias</h1>
        <form
            id="newsletter"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post"
            novalidate="true">

            <input id="email"
                v-model="email"
                type="email"
                name="email">
            
            <input type="submit" value="Submit">
            
            <p style="height: 30px; color: red">
                <span v-if="errors.length">Please correct the following error(s):</span>
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
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
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
