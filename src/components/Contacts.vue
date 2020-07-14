<template>
    <section id="contactsSection" itemscope itemtype="http://schema.org/Organization">
       
       <div class="container">
       <div class="col-sm-12 col-md-8 col-lg-6 offset-md-2">
            <div class="contactForm">
                <h1 class="h2" v-html="formContact.title">{{formContact.title}}</h1>
                <p class="h1" v-html="formContact.subtitle">{{formContact.subtitle}}</p>
                <form id="contact"
                    @submit.prevent="checkContactsForm"
                    method="post"
                    novalidate="true">

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">

                            <div class="input_group" :class="(cont_name_error === true ? 'error': '')">
                                <input type="text"
                                        v-model="cont_name"
                                        id="cont_name" placeholder=" ">
                                <label for="cont_name">{{formContact.inputname}}</label>
                                <span class="bar"></span>
                                <p class="errormessage"> {{cont_name_validator}} </p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <div class="input_group" :class="(cont_surname_error === true ? 'error': '')">
                                <input type="text" 
                                        v-model="cont_surname"
                                        id="cont_surname" placeholder=" ">
                                <label for="cont_surname">{{formContact.inputsurname}}</label>
                                <span class="bar"></span>
                                <p class="errormessage"> {{cont_surname_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <div class="input_group" :class="(cont_email_error === true ? 'error': '')">
                                <input  type="email" 
                                        v-model="cont_email"
                                        id="cont_email" placeholder=" ">
                                <label for="cont_email">{{formContact.inputemail}}</label>
                                <span class="bar"></span>
                                <p class="errormessage"> {{cont_email_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="input_group" :class="(cont_message_error === true ? 'error': '')">
                                <textarea v-model="cont_message"
                                            id="cont_message" rows="1" placeholder=" "></textarea>
                                <label for="cont_message">{{formContact.inputmessage}}</label>
                                <span class="bar"></span>
                                <p class="errormessage"> {{cont_message_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row d-flex align-items-center">
                        <div class="col-xs-12 col-sm-6">
                            <input id="cont_file" type="file">
                            <label for="cont_file" :aria-label="formContact.inputfile"></label>
                        </div>


                         <div class="col-xs-12 col-sm-6">
                            <button class="button submitButton" :aria-label="formContact.submit">
                                <submitIcon>{{formContact.submit}}</submitIcon>
                            </button>
                        </div>
                    </div>

                    <p style="color: red; margin-top: 36px;">
                        <span v-if="errors.length">{{ $t('footer-newsletter-error') }}</span>
                        <ul v-if="errors.length">
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                </form>
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
            formContact: '',
            errors: [],
            cont_name: '',
            cont_name_validator: '',
            cont_name_error: false,
            cont_surname: '',
            cont_surname_validator: '',
            cont_surname_error: false,
            cont_email: '',
            cont_email_validator: '',
            cont_email_error: false,
            cont_message: '',
            cont_message_validator: '',
            cont_message_error: false,
            cont_file: ''
        }
    },
    created() {
      this.$eventBus.$on('jsonGlobalLoaded', (response) => {
          this.formContact = response.data.formContact
      });
    },
    methods: {
        checkContactsForm: function (e) {
            
            e.preventDefault()
            if(!this.validateForm()) return
            
            const data = { 
                cont_name:      this.cont_name,
                cont_surname:   this.cont_surname,
                cont_email:     this.cont_email,
                cont_message:   this.cont_message,
                cont_file:      this.cont_file
            }
            
            var self = this;
            this.$http.post('https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribe', data).then(response => {
                this.success = true
                
                setTimeout(function(){
                    self.success = false
                }, 2500)

            }).catch((e) => {
                this.errors.push(e.message)
            })
        },
         validateForm: function () {
            
            var hasErrors =             false
            this.cont_name_error =      false
            this.cont_surname_error =   false
            this.cont_email_error =     false
            this.cont_message_error =   false
            

            if (this.cont_name.length == 0) 
            { 
                hasErrors = true
                this.cont_name_error = true
                this.cont_name_validator = "Missing field"
            }

            if (this.cont_surname.length == 0) 
            { 
                hasErrors = true
                this.cont_surname_error = true
                this.cont_surname_validator = "Missing field"
            }

            if (this.cont_email.length == 0) 
            { 
                hasErrors = true
                this.cont_email_error = true
                this.cont_email_validator = "Missing field"
            }

            if (this.cont_message.length == 0) 
            { 
                hasErrors = true
                this.cont_message_error = true
                this.cont_message_validator = "Missing field"
            }

            return !hasErrors
         }
    }
}
</script>

<style lang="scss">


</style>