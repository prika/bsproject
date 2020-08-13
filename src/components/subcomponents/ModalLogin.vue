<template>
    <div class="modalLogin">

        <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
            <button class="closeLoginButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="$emit('close')"><closeIcon></closeIcon></button>
        </transition>

        <div v-if="!success" class="formLogin revertColor">

            <p class="h1 col-12" v-html="accountlogin.title">{{accountlogin.title}}</p>

            <form   id="login" 
                    @submit.prevent="checkLoginForm"
                    class="col-12">

                <div class="input_group" :class="(cont_email_login_error === true ? 'error': '')">  
                    <input  id="cont_email_login"
                            v-model="cont_email_login"
                            type="email" required
                            name="email" autocomplete="email"
                            :aria-label="accountlogin.inputuser.placeholder"
                            placeholder=" ">
                    <label for="cont_email_login">{{accountlogin.inputuser.placeholder}}</label>
                    <p class="errormessage">{{cont_email_login_validator}}</p>
                </div>

                <div class="input_group" :class="(cont_password_login_error === true ? 'error': '')">  
                    <input id="cont_password_login"
                            v-model="cont_password_login"
                            type="password" required
                            name="password" autocomplete="current-password"
                            placeholder=" ">
                    <label for="cont_password_login">{{accountlogin.inputpassword.placeholder}}</label>
                    <p class="errormessage">{{cont_password_login_validator}}</p>
                </div>
                    
                <router-link to="/recovery" class="passwordRecoveryLink col-12">{{accountlogin.recoveryLink}}</router-link>
                <router-link to="/register" class="accountRegisterLink col-12">{{accountlogin.registerLink}}</router-link>
                <button class="loginLink col-12 col-md-3 col-lg-2 col-xl-1" type="submit" form="login">{{accountlogin.submit}}</button>
            </form>
        </div>

        <div v-if="success" class="formLogin revertColor">
            <p class="h1 col-12">Bem vindo user X</p>
            <br> <br>
            <p>Aceda aqui aos detalhes da sua conta:</p>
            <router-link to="/account" class="passwordRecoveryLink col-12">Account settings</router-link>
        </div>
    </div>
</template>

<script>
import closeIcon from '../ui/closeIcon'

export default {
    name: 'loginModal',
    components: {
        closeIcon
    },
    data() {
        return {
            accountlogin: {
                title: '',
                subtitle: '',
                inputuser: {
                    placeholder: '',
                    errors: ''
                },
                inputpassword: {
                    placeholder: '',
                    errors: ''
                }
            },
            cont_email_login: '',
            cont_email_login_error: false,
            cont_email_login_validator: '',
            cont_password_login: '',
            cont_password_login_error: false,
            cont_password_login_validator: '',
            password_rules: [
				{ message: this.$i18n.t('input-password-lowercase') , regex:/[a-z]+/ },
				{ message: this.$i18n.t('input-password-uppercase'),  regex:/[A-Z]+/ },
				{ message: this.$i18n.t('input-password-car-min'), regex:/.{8,}/ },
				{ message: this.$i18n.t('input-password-number'), regex:/[0-9]+/ }
			],
            success: false,
            error_required: '',
            error_invalid: ''
            
        }
    },
    created() {
        this.error_required     =   this.$i18n.t('input-error-required')
        this.error_invalid      =   this.$i18n.t('input-error-valid-email')

        this.$http.get('http://localhost:8081/mocks/account-mock.json').then(response => {
            this.accountlogin = response.data.accountlogin
        })
    },
    computed: {
		emailValidation () {

            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let hasError = !regex.test(this.cont_email_login)
            this.cont_email_login_error = hasError
            this.cont_email_login_validator = hasError ? this.error_invalid : ""
            return !hasError

		},
        passwordValidation () {
			let errors = []
            
			for ( let condition of this.password_rules ) {

				if ( !condition.regex.test(this.cont_password_login) ) {
                    errors.push( condition )
                }
			}

			if ( errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		}
    },
    methods: {
        checkLoginForm: function (e) {

            e.preventDefault()
            if(!this.validateForm()) return

            const data = { 
                cont_email_login:       this.cont_email_login,
                cont_password_login:    this.cont_password_login
            }

            var self = this;
            this.$http.post('https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribe', data).then(response => {
                
                this.success = true

            }).catch((e) => {
                this.errors.push(e.message)
            })
        },
        validateForm: function () {
            
            const validEmail = this.validateEmail()
            const validPassword = this.validatePassword()

            return validEmail && validPassword

        },
        validateEmail: function (){

            if( cont_email_login.value === '' ){
                this.cont_email_login_error = true
                this.cont_email_login_validator = this.cont_email_login_error ?  this.error_required : ""
            } 
            else {
                this.emailValidation
            }

            return !this.cont_email_login_error
        },
        validatePassword: function() {

            if( cont_password_login.value == '' ){
                this.cont_password_login_error = true
                this.cont_password_login_validator = this.cont_password_login_error ?  this.error_required : ""
            } else {
                this.cont_password_login_error = false
                this.cont_password_login_validator = this.cont_password_login_error ?  "" : ""
            }

            return !this.cont_password_login_error
        },
        login() {
            
            console.log('login')
            
            const userId = '123'
            router.push({ path: '/auth/account', params: { userId } }) // -> /user
            
            // router.beforeEach((to, from, next) => {
            //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
            //   else next()
            // })

            
            // {
            //     if(this.cont_email_login == this.$parent.mockAccount.username && this.cont_password == this.$parent.mockAccount.password) {
            //         this.$emit("authenticated", true);
            //         this.$router.replace({ name: "secure" });
            //     } else {

            //         console.log("The username and / or password is incorrect");
            //     }
            // } else {
                
            // }
        }
    },
    watch: {
        cont_email_login: function(newVal, oldVal) 
        { 
            this.validateEmail()
        },
        cont_password_login: function(newVal, oldVal) 
        { 
            this.validatePassword()
        },
    }
}
</script>

<style lang="scss">
.modalLogin {
    position: fixed;
    top: 0;
    right: 0;

    .closeLoginButton{
        background: #333;
        border: 0;
        position: fixed;
        top: 0;
        right: 0;
        width: 124px;
        height: 124px;

        rect { display: none; }
    }

    .formLogin{
        margin-top: 124px;
        background: black;
        height: 500px;
        width: 430px;
        background: #2A2A2A;
        padding: 60px;

        form#login{
            display: block;
            height: 100%;
        }
        p.h1 {
            width: 100%;
            font-size: 36px;
            white-space: normal;
        }

        a.passwordRecoveryLink,
        a.accountRegisterLink{ 
            float: left; 
            display: block;
            padding: 0;
        }

        a.accountRegisterLink{ margin-top: 70px}

        .loginLink{
            background-color: #000;
            font-size: 20px;
            padding: 25px 10px;
            outline: none;
            border: none;
            position: fixed;
            top: 580px;
            right: 0;
            -webkit-transition:     background-color 0.4s cubic-bezier(0, 0.5, 0, 1);
            -moz-transition:        background-color 0.4s cubic-bezier(0, 0.5, 0, 1);
            -o-transition:          background-color 0.4s cubic-bezier(0, 0.5, 0, 1);
            transition:             background-color 0.4s cubic-bezier(0, 0.5, 0, 1);

            &:hover{ background-color: #C47C5A; }
        }
        
    }
}



@media (max-width: 812px) {
    .modalLogin {
        .closeLoginButton{
            width: 94px;
            height: 68px;
        }
        .formLogin{
            margin-top: 68px;
            width: 100vw;
            height: calc( 100vh - 68px - 75px );
            padding: 75px 25px;
            overflow: auto;

            p.h1{
                margin-bottom: 60px;
            }

            .passwordRecoveryLink,
            .accountRegisterLink{
                text-align: center;
            }

            a.accountRegisterLink{
                margin-top: 130px;
                margin-bottom: 110px;
            }

            .loginLink{
                top: inherit;
                bottom: 0;
                padding: 30px 60px;
            }
        }
    }

    .pageReduced.accountPage.accountInfo,
    .pageReduced.accountPage.accountPageRegister,
    .pageReduced.accountPage.accountRecovery {
        padding-top: 150px;

        
        .containerReduced{
            float: none;
            overflow: scroll;
            -webkit-overflow-scrolling: touch;
            height: 100%!important;
            padding: 0 15px 200px 15px!important;
            margin: 0!important;
        }

        .submitButton.extendedButton{
            position: relative;
            margin: 0;
            left: auto;
            width: 100%;
            top: auto;
            margin-bottom: 70px;
            
            .text{
                width: 100%;
                padding: 15px;
                text-align: center;
                font-size: 25px;
                font-weight: 200;
                color: inherit;
                text-decoration: underline; 
            }

            .arrow, .icon {
                display: none;
            }
        }

        h1 {
            font-size: 38px;
            text-align: center;
            margin-bottom: 20px;
        }

        .subtitle{
            text-align: center;
            margin-bottom: 70px;
            font-size: 20px;

            br{display: none;}
        }

        form{ margin-top: 50px; }
        .passwordValidationRules{ display: none; }
        .submitButton{ margin-top: 70px;}
    }
}

</style>