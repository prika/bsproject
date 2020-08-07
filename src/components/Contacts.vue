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
                    v-if="!success">

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <div class="input_group" :class="(cont_name_error ? 'error': '')">
                                <input type="text" 
                                        v-model="cont_name"
                                        id="cont_name" placeholder=" ">
                                <label for="cont_name">{{formContact.inputname}}</label>
                                <p class="errormessage"> {{cont_name_validator}} </p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <div class="input_group" :class="(cont_surname_error ? 'error': '')">
                                <input type="text" 
                                        v-model="cont_surname"
                                        id="cont_surname" placeholder=" ">
                                <label for="cont_surname">{{formContact.inputsurname}}</label>
                                <p class="errormessage"> {{cont_surname_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <div class="input_group" :class="(cont_email_error ? 'error': '')">
                                <input  type="email" 
                                        v-model="cont_email"
                                        id="cont_email" placeholder=" ">
                                <label for="cont_email">{{formContact.inputemail}}</label>
                                <p class="errormessage"> {{cont_email_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="input_group" :class="(cont_message_error  ? 'error': '')">
                                <textarea v-model="cont_message" 
                                            id="cont_message" rows="1" placeholder=" "></textarea>
                                <label for="cont_message">{{formContact.inputmessage}}</label>
                                <p class="errormessage"> {{cont_message_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row d-flex align-items-center">
                        <div class="input_file_group col-6" :class="(cont_file_error  ? 'error': '')">
                            <input id="cont_file" type="file" multiple accept="image/* , .doc, .docx, .pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document">
                            <label for="cont_file" :aria-label="formContact.inputfile"></label>
                            <p class="errormessage"> {{cont_file_validator}} </p>
                        </div>

                         <div class="col-xs-12 col-sm-6">
                            <button class="button submitButton float-right" :aria-label="formContact.submit">
                                <submitIcon>{{formContact.submit}}</submitIcon>
                            </button>
                        </div>
                    </div>
                </form>

                 <transition enter-active-class="animated slideInRight">
                    <div class="ContactFormSubmited" v-if="success">
                        <p v-html="formContact.feedbacksuccess">{{formContact.feedbacksuccess}}</p>
                    </div>
                </transition>

                
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
            cont_file: '',
            cont_file_validator: '',
            cont_file_error: false,
            success: false,
            error_required: '',
            error_invalid: '', 
            error_file_min: '', 
            error_file_max: ''
        }
    },
    created() {
        this.error_required     =   this.$i18n.t('input-error-required')
        this.error_invalid      =   this.$i18n.t('input-error-valid-email')
        this.error_file_min     =   this.$i18n.t('input-error-file-limit-min')
        this.error_file_max     =   this.$i18n.t('input-error-file-limit-max')

        this.$eventBus.$on('jsonGlobalLoaded', (response) => {
            this.formContact = response.data.formContact
        });
    },
    beforeDestroy() {
        this.$eventBus.$off('jsonGlobalLoaded') // releases the subscription
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
            this.$http.post('https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribeFail', data).then(response => {
                
                this.success = true
                
                setTimeout(function(){
                    self.success = false
                }, 5000)

            }).catch((e) => {
                alert(e.message)
            })
        },
         validateForm: function () {
            
            const validName = this.validateName()
            const validSurname = this.validateSurname()
            const validEmail = this.validateEmail()
            const validMessage = this.validateMessage()
            const validFile =  this.validateFile()

            return validName && validSurname && validEmail && validMessage && validFile
         },
         validateName: function() {
            this.cont_name_error = this.cont_name === '' 
            this.cont_name_validator = this.cont_name_error ?  this.error_required : ""
            return !this.cont_name_error
         },
         validateSurname: function() {
            this.cont_surname_error = this.cont_surname === '' 
            this.cont_surname_validator = this.cont_surname_error ?  this.error_required : ""
            return !this.cont_surname_error
         },
         validateEmail: function () {
            
            if (this.cont_email === '') 
            { 
                this.cont_email_error = true
                this.cont_email_validator = this.error_required
                return false
            }

            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!regex.test(this.cont_email))
            {
                this.cont_email_error = true
                this.cont_email_validator = this.error_invalid
                return false
            }

            this.cont_email_error = false
            this.cont_email_validator = ''
            return true
        },
        validateMessage: function() 
        {
            this.cont_message_error = this.cont_message === '' 
            this.cont_message_validator = this.cont_message_error ?  this.error_required : ""
            return !this.cont_message_error
         },
        validateFile: function()
        {
            var files = cont_file.files;
            
            if (files.length == 0) {
                this.cont_file_error = false
                this.cont_file_validator = ""
                return true
            } else {

                if ( files[0].size < 75 * 1024 ) {
                    this.cont_file_error = true
                    this.cont_file_validator = this.error_file_min
                    return false
                }

                if ( files[0].size > 1024 * 1024 * 4 ) {
                    
                    this.cont_file_error = true
                    this.cont_file_validator = this.error_file_max
                    return false
                }
            }

            this.cont_file_validator = ""
            this.cont_file_error = false
            return true
        }
    },
    watch: { 
      	cont_name: function(newVal, oldVal) 
        { 
            this.validateName()
        },
        cont_surname: function(newVal, oldVal) 
        { 
            this.validateSurname()
        },
        cont_email: function(newVal, oldVal) 
        { 
            this.validateEmail()
        },
        cont_message: function(newVal, oldVal) 
        { 
            this.validateMessage()
        },
        cont_file: function(newVal, oldVal) 
        { 
            this.validateFile()
        }
      }
}
</script>

<style lang="scss">
.ContactFormSubmited{ height: 327px; margin: 70px 0; }
</style>