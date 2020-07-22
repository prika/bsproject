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
                    
                <router-link to="/auth/recovery" class="passwordRecoveryLink col-12">{{accountlogin.recoveryLink}}</router-link>
                <router-link to="/auth/register" class="accountRegisterLink col-12">{{accountlogin.registerLink}}</router-link>

                <button class="loginLink" type="submit" form="login">{{accountlogin.submit}}</button>
            </form>
        </div>

        <div v-if="success" class="formLogin revertColor">
            <p class="h1 col-12">Bem vindo user X</p>
            <br> <br>
            <p>Aceda aqui aos detalhes da sua conta:</p>
            <router-link to="/auth/account" class="passwordRecoveryLink col-12">Account settings</router-link>
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
				{ message:'One lowercase letter required.', regex:/[a-z]+/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"8 characters minimum.", regex:/.{8,}/ },
				{ message:"One number required.", regex:/[0-9]+/ }
			],
            success: false
            
        }
    },
    created() {
        this.$http.get('../mocks/account-mock.json').then(response => {
            this.accountlogin = response.data.accountlogin
        })
    },
    computed: {
		emailValidation () {

            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let hasError = !regex.test(this.cont_email_login)
            this.cont_email_login_error = hasError
            this.cont_email_login_validator = hasError ? '[[Valid email required.]]' : ""
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
                
                // setTimeout(function(){
                //     self.success = false
                // }, 5000)

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
                this.cont_email_login_validator = this.cont_email_login_error ?  "Campo de preenchimento obrigatório" : ""
            } 
            else {
                this.emailValidation
            }

            return !this.cont_email_login_error
        },
        validatePassword: function() {

            if( cont_password_login.value == '' ){
                this.cont_password_login_error = true
                this.cont_password_login_validator = this.cont_password_login_error ?  "Campo de preenchimento obrigatório" : ""
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
            padding: 25px 60px;
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

</style>