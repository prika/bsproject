<template>
    <div class="accountPage accountInfo pageReduced">
        <div class="containerReduced">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
            </transition>
            
            <div class="col-12 col-md-1 order-md-1">
                <a class="extendedButton submitButton" href="javascript:void(0)" target="_blank" rel="noopener noreferrer nofollow">
                    <submitIcon>{{accountinfo.logoutButton}}</submitIcon>
                </a>
            </div>
            

            <div class="col-12 col-md-12 order-3">
                <h1 v-html="accountinfo.title">{{accountinfo.title}}</h1>

                <p v-if="!success" v-html="accountinfo.subtitle">{{accountinfo.subtitle}}</p>

                <form   v-if="!success" id="recovery"
                        @submit.prevent="checkAccountEditForm">

                        <div class="row">

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_name_account_error === true ? 'error': '')"> 
                                    <input id="cont_name_account"
                                            v-model.lazy="cont_name_account"
                                            type="text"
                                            name="name" autocomplete="name"
                                            :aria-label="accountinfo.inputname.placeholder" placeholder=" ">
                                    <label for="cont_name_account">{{accountinfo.inputname.placeholder}}</label>
                                    <p class="errormessage"> {{cont_name_account_validator}} </p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_surname_account_error === true ? 'error': '')">  
                                    <input id="cont_surname_account"
                                            v-model.lazy="cont_surname_account"
                                            type="text"
                                            name="lname" autocomplete="family-name"
                                            :aria-label="accountinfo.inputsurname.placeholder" placeholder=" ">
                                    <label for="cont_surname_account">{{accountinfo.inputsurname.placeholder}}</label>
                                    <p class="errormessage"> {{cont_surname_account_validator}} </p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_phone_account_error === true ? 'error': '')">  
                                    <input id="cont_phone_account"
                                            v-model.number="cont_phone_account"
                                            type="number" pattern="/^\d{10,}(?:,\d{10,})*$/"
                                            name="phone" autocomplete="tel"
                                            :aria-label="accountinfo.inputphone.placeholder" placeholder=" ">
                                    <label for="cont_phone_account">{{accountinfo.inputphone.placeholder}}</label>
                                    <p class="errormessage"> {{cont_phone_account_validator}} </p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_country_account_error === true ? 'error': '')">
                                    <select id="cont_country_account"
                                            v-model.lazy="cont_country_account"
                                            name="country" autocomplete="country"
                                            :class="(cont_country_account.length > 0 ? 'selected': '')"
                                            :aria-label="accountinfo.inputcountry.placeholder" placeholder=" ">

                                            <option v-for="country in accountinfo.inputcountry.options">{{country.name}}</option>
                                    </select>
                                    <label for="cont_country_account">{{accountinfo.inputcountry.placeholder}}</label>
                                    <p class="errormessage"> {{cont_country_account_validator}} </p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_password_account_error === true ? 'error': '')">  
                                    <input id="cont_password_account"
                                            v-model="cont_password_account"
                                            type="password" required
                                            name="password" autocomplete="new-password"
                                            :aria-label="accountinfo.inputpassword.placeholder" placeholder=" ">
                                    <label for="cont_password_account">{{accountinfo.inputpassword.placeholder}}</label>
                                    <p class="errormessage"> {{cont_password_account_validator}} </p>
                                    <ul class="passwordValidationRules">
                                        <li v-for='error in passwordValidation.errors'>{{error}}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_password_confirm_account_error === true ? 'error': '')">  
                                    <input id="cont_password_confirm_account"
                                            v-model="cont_password_confirm_account"
                                            type="password" required
                                            :disabled="disabledInput"
                                            name="password" autocomplete="new-password"
                                            :aria-label="accountinfo.inputpasswordconfirm.placeholder" placeholder=" ">
                                    <label for="cont_password_confirm_account">{{accountinfo.inputpasswordconfirm.placeholder}}</label>
                                    <p class="errormessage"> {{cont_password_confirm_account_validator}}</p>
                                </div>
                            </div>

                        
                            <div class="col-12 col-md-6"></div>

                            <div class="col-12 col-md-6">
                                <button class="button submitButton" :aria-label="accountinfo.submit">
                                    <submitIcon>{{accountinfo.submit}}</submitIcon>
                                </button>
                            </div>

                        </div>
                   
                </form>
            </div>

            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
             <div v-if="success" class="col-12">
                <p v-html="accountinfo.success">{{accountinfo.success}}</p>
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
import closeIcon from '../components/ui/closeIcon.vue'
import submitIcon from '@/components/ui/submitIcon.vue'

export default {
    name: 'accountInfo',
    components:{
        closeIcon,
        submitIcon
    },
    data() {
        return {
            accountinfo: {
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
                    errors: '',
                    options: []    
                },
                submit: '',
                success: ''
            },
            cont_name_account: '',
            cont_name_account_validator: '',
            cont_name_account_error: false,
            cont_surname_account: '',
            cont_surname_account_validator: '',
            cont_surname_account_error: false,
            cont_phone_account: '',
            cont_phone_account_validator: '',
            cont_phone_account_error: false,
            cont_password_account: '',
            cont_password_account_validator: '',
            cont_password_account_error: false,
            cont_password_confirm_account: '',
            cont_password_confirm_account_validator: '',
            cont_password_confirm_account_error: false,
            cont_country_account: '',
            cont_country_account_validator: '',
            cont_country_account_error: false,
            password_rules: [
				{ message:'One lowercase letter required.', regex:/[a-z]+/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"8 characters minimum.", regex:/.{8,}/ },
				{ message:"One number required.", regex:/[0-9]+/ }
			],
            success: false
        }
    },
    created(){
        this.$http.get('../mocks/account-mock.json').then(response => {
            this.accountinfo = response.data.accountinfo
        })
    },
    computed: {
		passwordValidation () {
			let errors = []
            
			for ( let condition of this.password_rules ) {
				if ( !condition.regex.test(this.cont_password_account) ) {
                    errors.push( condition.message )
                }
			}

			if ( errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		},
        disabledInput () {
            return !this.passwordValidation.valid
        }
    },
    methods:{
        checkAccountEditForm: function (e) {
            
            e.preventDefault()            
            if(!this.validateForm()) return
            
            const data = { 
                cont_name_account:              this.cont_name_account,
                cont_surname_account:           this.cont_surname_account,
                cont_phone_account:             this.cont_phone_account,
                cont_password_account:          this.cont_password_account,
                cont_password_confirm_account:  this.cont_password_confirm_account,
                cont_country_account:           this.cont_country_account
            }

            
            var self = this;
            this.$http.post('https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribe', data).then(response => {
                
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
            const validPhone = this.validatePhone()
            const validPassword = this.validatePassword()
            const validConfirmPassword = this.validateConfirmationPassword()
            const validCountry =  this.validateCountry()

            return validName && validSurname && validPhone && validPassword && validConfirmPassword && validCountry
        },
         validateName: function() {
            this.cont_name_account_error = this.cont_name_account === '' 
            this.cont_name_account_validator = this.cont_name_account_error ?  "Campo de preenchimento obrigatório" : ""
            return !this.cont_name_account_error
         },
         validateSurname: function() {
            this.cont_surname_account_error = this.cont_surname_account === '' 
            this.cont_surname_account_validator = this.cont_surname_account_error ?  "Campo de preenchimento obrigatório" : ""
            return !this.cont_surname_account_error
         },
         validatePhone: function() {
            this.cont_phone_account_error = this.cont_phone_account === '' 
            this.cont_phone_account_validator = this.cont_phone_account_error ?  "Campo de preenchimento obrigatório" : ""
            return !this.cont_phone_account_error
         },
         validatePassword: function() {

            if( cont_password_account.value == '' ){
                this.cont_password_account_error = true
                this.cont_password_account_validator = this.cont_password_account_error ?  "Campo de preenchimento obrigatório" : ""
            } else {
                this.passwordValidation
                this.cont_password_account_error = false
                this.cont_password_account_validator = this.cont_password_account_error ?  "" : ""
            }

            return !this.cont_password_account_error
         },
         validateConfirmationPassword: function() {
            
            if( cont_password_confirm_account.value == '' ) {
                this.cont_password_confirm_account_error = true
                this.cont_password_confirm_account_validator = this.cont_password_confirm_account_error ?  "Campo de preenchimento obrigatório" : ""
            } else {

                if( cont_password_account.value != cont_password_confirm_account.value ) {
                    
                    this.cont_password_confirm_account_error = true
                    this.cont_password_confirm_account_validator = this.cont_password_confirm_account_error ?  "A confirmação ainda não coincide com a palavra-chave" : ""
                
                } else {
                    this.cont_password_confirm_account_error = false
                    this.cont_password_confirm_account_validator = this.cont_password_confirm_account_error ?  "" : ""
                }
            }

            return !this.cont_password_confirm_account_error
         },
         validateCountry: function() {
            this.cont_country_account_error = this.cont_country_account === '' 
            this.cont_country_account_validator = this.cont_country_account_error ?  "Campo de preenchimento obrigatório" : ""
            return !this.cont_country_account_error
         }
    },
    watch: {
        cont_name_account: function(newVal, oldVal) 
        { 
            this.validateName()
        },
        cont_surname_account: function(newVal, oldVal) 
        { 
            this.validateSurname()
        },
        cont_phone_account: function(newVal, oldVal) 
        { 
            this.validatePhone()
        },
        cont_password_account: function(newVal, oldVal) 
        { 
            this.validatePassword()
        },
        cont_password_confirm_account: function(newVal, oldVal) 
        { 
            this.validateConfirmationPassword()
        },
        cont_country_account: function(newVal, oldVal) 
        { 
            this.validateCountry()
        }
    }
}
</script>

<style lang="scss">
.pageReduced.accountPage.accountInfo{
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

    .extendedButton{
        margin: 0;
        position: absolute;
        top: 19px;
        left: -300px;
        width: 300px;

        &:hover .arrow::before{ width: 147px; }
    }
}

.passwordValidationRules{
    padding: 15px 15px 0;
    height: 100px;

    li{
    font-weight: 200;
    font-size: 14px;
    }
}
</style>