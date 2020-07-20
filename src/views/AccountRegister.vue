<template>
    <div class="accountPage pageReduced accountPageRegister">
        <div class="containerReduced">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
            </transition>

            <h1 v-html="accountregister.title">{{accountregister.title}}</h1>
            
           
           <!--transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">-->
            <div v-if="!success">
                <p v-html="accountregister.subtitle">{{accountregister.subtitle}}</p>

                <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <form  id="register"
                        @submit.prevent="checkFormRegister">

                        <div class="row">
                               
                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_name_register_error === true ? 'error': '')">  
                                    <input id="cont_name_register"
                                            type="text"
                                            name="name" autocomplete="name"
                                            :aria-label="accountregister.inputname.placeholder" placeholder=" ">
                                    <label for="cont_name_register">{{accountregister.inputname.placeholder}}</label>
                                    <p class="errormessage"> {{cont_name_register_validator}} </p>
                                </div>
                            </div>

                             <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_surname_register_error === true ? 'error': '')">  
                                    <input id="cont_surname_register"
                                            type="text"
                                            name="lname" autocomplete="family-name"
                                            :aria-label="accountregister.inputsurname.placeholder" placeholder=" ">
                                    <label for="cont_surname_register">{{accountregister.inputsurname.placeholder}}</label>
                                    <p class="errormessage"> {{cont_surname_register_validator}} </p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_phone_register_error === true ? 'error': '')">  
                                    <input id="cont_phone_register"
                                            type="tel"
                                            pattern="[0-9]{3}-[0-9]{9}"
                                            name="phone" autocomplete="tel"
                                            :aria-label="accountregister.inputphone.placeholder" placeholder=" ">
                                    <label for="cont_phone_register">{{accountregister.inputphone.placeholder}}</label>
                                    <p class="errormessage"> {{cont_phone_register_validator}} </p>
                                </div>
                            </div>

                             <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_company_register_error === true ? 'error': '')">  
                                    <input id="cont_company_register"
                                            type="text"
                                            :aria-label="accountregister.inputcompany.placeholder" placeholder=" ">
                                    <label for="cont_company_register">{{accountregister.inputcompany.placeholder}}</label>
                                    <p class="errormessage"> {{cont_company_register_validator}} </p>
                                </div>
                            </div>


                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_email_register_error === true ? 'error': '')">  
                                    <input id="cont_email_register"
                                            type="email"
                                            name="email" autocomplete="email"
                                            :aria-label="accountregister.inputemail.placeholder" placeholder=" ">
                                    <label for="cont_email_register">{{accountregister.inputemail.placeholder}}</label>
                                    <p class="errormessage"> {{cont_email_register_validator}} </p>
                                </div>
                            </div>
                     
                             <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_email_confirm_register_error === true ? 'error': '')">  
                                    <input id="cont_email_confirm_register"
                                            type="email"
                                            name="email" autocomplete="email" :disabled="cont_email_register_error === true ? disabled : ''"
                                            :aria-label="accountregister.inputemailconfirm.placeholder" placeholder=" ">
                                    <label for="cont_email_confirm_register">{{accountregister.inputemailconfirm.placeholder}}</label>
                                    <p class="errormessage"> {{cont_email_confirm_register_validator}} </p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">   
                                <div class="input_group" :class="(cont_password_register_error === true ? 'error': '')">  
                                    <input id="cont_password_register"
                                            type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                                            name="password" autocomplete="new-password"
                                            :aria-label="accountregister.inputpassword.placeholder" placeholder=" ">
                                    <label for="cont_password_register">{{accountregister.inputpassword.placeholder}}</label>
                                    <p class="errormessage"> {{cont_password_register_validator}} </p>
                                </div>
                            </div>

                             <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_password_confirm_register_error === true ? 'error': '')">  
                                    <input id="cont_password_confirm_register"
                                            type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                                             name="password" autocomplete="new-password" :disabled="cont_password_register_error  === true ? disabled : ''"
                                            :aria-label="accountregister.inputpasswordconfirm.placeholder" placeholder=" ">
                                    <label for="cont_password_confirm_register">{{accountregister.inputpasswordconfirm.placeholder}}</label>
                                    <p class="errormessage"> {{cont_password_confirm_register_validator}} </p>
                                </div>
                            </div>

                                
                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_country_register_error === true ? 'error': '')">  
                                    <select id="cont_country_register"
                                             name="country" autocomplete="country"
                                            :aria-label="accountregister.inputcountry.placeholder" placeholder=" ">
                                        <option selected>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                    </select>
                                    <label for="cont_country_register">{{accountregister.inputcountry.placeholder}}</label>
                                    <p class="errormessage"> {{cont_country_register_validator}} </p>
                                </div>
                            </div>

                        </div>

                        <div class="row">  
                            <div class="col-12 col-md-6"></div>
                            <div class="col-12 col-md-6">
                                <button class="button submitButton" :aria-label="accountregister.submit">
                                    <submitIcon>{{accountregister.submit}}</submitIcon>
                                </button>
                            </div>
                        </div>
                
                </form>
                 </transition>
            </div>
            <!-- </transition-->


            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                <div class="" v-if="success">
                    <p v-html="accountregister.success">{{accountregister.success}}</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import closeIcon from '../components/ui/closeIcon.vue'
import submitIcon from '@/components/ui/submitIcon.vue'

export default {
    name: 'accountRegister',
    components:{
        closeIcon,
        submitIcon
    },
    data() {
        return {
            accountregister: {
                title: '',
                subtitle: '',
                inputname: {
                    placeholder: '', 
                    errors: ''
                },
                inputsurname: {
                    placeholder: '', 
                    errors: ''
                 },
                inputphone: {
                    placeholder: '', 
                    errors: ''
                },
                inputcompany: {
                    placeholder: '', 
                    errors: ''
                },
                inputemail: {
                    placeholder: '', 
                    errors: ''
                },
                inputemailconfirm: {
                    placeholder: '', 
                    errors: ''
                },
                inputpassword: {
                    placeholder: '', 
                    errors: ''
                },
                inputpasswordconfirm: {
                    placeholder: '',
                    errors: ''
                },
                inputcountry: {
                    placeholder: '', 
                    errors: ''
                },
                submit: '',
                success: ''
            },
            cont_name_register: '',
            cont_name_register_validator: '',
            cont_name_register_error: false,
            cont_surname_register: '',
            cont_surname_register_validator: '',
            cont_surname_register_error: false,

            cont_phone_register: '',
            cont_phone_register_validator: '',
            cont_phone_register_error: false,
            cont_company_register: '',
            cont_company_register_validator: '',
            cont_company_register_error: false,

            cont_email_register: '',
            cont_email_register_validator: '',
            cont_email_register_error: false,
            cont_email_confirm_register: '',
            cont_email_confirm_register_validator: '',
            cont_email_confirm_register_error: false,

            cont_password_register: '',
            cont_password_register_validator: '',
            cont_password_register_error: false,
            cont_password_confirm_register: '',
            cont_password_confirm_register_validator: '',
            cont_password_confirm_register_error: false,

            cont_country_register: '',
            cont_country_register_validator: '',
            cont_country_register_error: false,

            success: false
        }
    },
    created(){
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.accountregister = response.data.accountregister
        })
    },
    methods: {
        checkFormRegister: function (e) {
            
            e.preventDefault()
            if(!this.validateForm()) return
            
            const data = { 
                cont_name_register:              this.cont_name_register, 
                cont_surname_register:           this.cont_surname_register, 
                cont_phone_register:             this.cont_phone_register, 
                cont_company_register:           this.cont_company_register, 
                cont_email_register:             this.cont_email_register, 
                cont_email_confirm_register:     this.cont_email_confirm_register, 
                cont_password_register:          this.cont_password_register, 
                cont_password_confirm_register:  this.cont_password_confirm_register, 
                cont_country_register:           this.cont_country_register
            }
            
            var self = this;
            this.$http.post('https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribe', data).then(response => {
                
                this.success = true
                
                setTimeout(function(){
                    self.success = false
                }, 10000)

            }).catch((e) => {
                this.errors.push(e.message)
            })
        },
         validateForm: function () {
            
            var hasErrors =                             false
            this.cont_name_register_error             = false
            this.cont_surname_register_error          = false
            this.cont_phone_register_error            = false
            this.cont_company_register_error          = false
            this.cont_email_register_error            = false
            this.cont_email_confirm_register_error    = false
            this.cont_password_register_error         = false
            this.cont_password_confirm_register_error = false
            this.cont_country_register_error          = false
            

            if (this.cont_name_register === '') 
            { 
                hasErrors = true
                this.cont_name_register_error = true
                this.cont_name_register_validator = "Campo de preenchimento obrigatório"
            }

            if (this.cont_surname_register === '') 
            { 
                hasErrors = true
                this.cont_surname_register_error = true
                this.cont_surname_register_validator = "Campo de preenchimento obrigatório"
            }

            if (this.cont_phone_register === '') 
            { 
                hasErrors = true
                this.cont_phone_register_error = true
                this.cont_phone_register_validator = "Campo de preenchimento obrigatório"
            }

            if (this.cont_company_register === '') 
            { 
                hasErrors = true
                this.cont_company_register_error = true
                this.cont_company_register_validator = "Campo de preenchimento obrigatório"
            }


            if (this.cont_email_register === '') 
            { 
                hasErrors = true
                this.cont_email_register_error = true
                this.cont_email_register_validator = "Campo de preenchimento obrigatório"
                
            } 
            //else {
                

                if (this.cont_email_confirm_register === '') 
                { 
                    hasErrors = true
                    this.cont_email_confirm_register_error = true
                    this.cont_email_confirm_register_validator = "Campo de preenchimento obrigatório"
                }

            //}


            if (this.cont_password_register === '') 
            { 
                hasErrors = true
                this.cont_password_register_error = true
                this.cont_password_register_validator = "Campo de preenchimento obrigatório"


            } 
            //else {

                if (this.cont_password_confirm_register === '') 
                { 
                    hasErrors = true
                    this.cont_password_confirm_register_error = true
                    this.cont_password_confirm_register_validator = "Campo de preenchimento obrigatório"
                }
           //}

            


            if (this.cont_country_register === '') 
            { 
                hasErrors = true
                this.cont_country_register_error = true
                this.cont_country_register_validator = "Campo de preenchimento obrigatório"
            }

            return !hasErrors
        }
    }



//     function validatePassword(){
//   if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }
}
</script>

<style lang="scss">
.pageReduced.accountPage{
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFF url(../assets/images/B_Simbolo_estatico_Contactos.svg) no-repeat 10% 60vh;
    background-size: 350px;

    .containerReduced{
        width: 100%;
        max-width: 880px;
        height: 100vh;
        position: relative;
        float: right;
        padding: 10% 5% 5% 20px;
        margin-right: 10%;
    }
}

.accountPageRegister{
    .containerReduced{
        padding: 10% 5% 5% 20px;
    }
}
</style>