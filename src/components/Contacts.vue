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
                    novalidate="true" v-if="!success">

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">

                            <div class="input_group" :class="(cont_name_error === true ? 'error': '')">
                                <input type="text" required
                                        v-model.lazy="cont_name"
                                        id="cont_name" placeholder=" ">
                                <label for="cont_name">{{formContact.inputname}}</label>
                                <p class="errormessage"> {{cont_name_validator}} </p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <div class="input_group" :class="(cont_surname_error === true ? 'error': '')">
                                <input type="text" required
                                        v-model.lazy="cont_surname"
                                        id="cont_surname" placeholder=" ">
                                <label for="cont_surname">{{formContact.inputsurname}}</label>
                                <p class="errormessage"> {{cont_surname_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <div class="input_group" :class="(cont_email_error === true ? 'error': '')">
                                <input  type="email" required
                                        v-model.lazy="cont_email"
                                        id="cont_email" placeholder=" ">
                                <label for="cont_email">{{formContact.inputemail}}</label>
                                <p class="errormessage"> {{cont_email_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="input_group" :class="(cont_message_error === true ? 'error': '')">
                                <textarea v-model.lazy="cont_message" required
                                            id="cont_message" rows="1" placeholder=" "></textarea>
                                <label for="cont_message">{{formContact.inputmessage}}</label>
                                <p class="errormessage"> {{cont_message_validator}} </p>
                            </div>
                        </div>
                    </div>

                    <div class="row d-flex align-items-center">
                        <div class="input_file_group col-6" :class="(cont_file_error === true ? 'error': '')">
                            <input id="cont_file" type="file">
                            <label for="cont_file" :aria-label="formContact.inputfile"></label>
                            <p class="errormessage"> {{cont_file_validator}} </p>
                        </div>


                         <div class="col-xs-12 col-sm-6">
                            <button class="button submitButton" :aria-label="formContact.submit">
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
            cont_file: '',
            cont_file_validator: '',
            cont_file_error: false,
            success: false
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
            if(!this.validEmail()) return
            
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
                }, 5000)

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
            this.cont_file_error    =   false
            

            if (this.cont_name === '') 
            { 
                hasErrors = true
                this.cont_name_error = true
                this.cont_name_validator = "Campo de preenchimento obrigatório"
            }

            if (this.cont_surname === '') 
            { 
                hasErrors = true
                this.cont_surname_error = true
                this.cont_surname_validator = "Campo de preenchimento obrigatório"
            }

            if (this.cont_email === '') 
            { 
                hasErrors = true
                this.cont_email_error = true
                this.cont_email_validator = "Email necessário"
            }

            if (this.cont_message === '') 
            { 
                hasErrors = true
                this.cont_message_error = true
                this.cont_message_validator = "Mensagem de preenchimento obrigatório"
            }

            if (this.cont_file.files.size > 1024 * 1024) 
            {   
                alert( this.cont_file.files.size  )
                hasErrors = true
                this.cont_file_error = true
                this.cont_file_validator = "File too big (> 1MB)"
            }

            return !hasErrors
         },
         validEmail: function () {
            
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(this.cont_email))
            {
                this.cont_email_error = true
                this.cont_email_validator = '[[Valid email required.]]'
                return false
            }
            return true
         }
    }
    // ,
    // watch: { 
    //   	cont_name_error: function(newVal, oldVal) { // watch it
    //       console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    //     }
    //   }
}
</script>

<style lang="scss">
.ContactFormSubmited{ height: 327px; margin: 70px 0; }
</style>