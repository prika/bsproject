<template>
    <div class="modalLogin">

        <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
            <button class="closeLoginButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="$emit('close')"><closeIcon></closeIcon></button>
        </transition>

        <div class="formLogin revertColor">

            <p class="h1 col-12" v-html="accountlogin.title">{{accountlogin.title}}</p>

            <form   id="login" 
                    @submit.prevent="checkLoginForm"
                    method="post" class="col-12">

                <div class="input_group" :class="(cont_user_error === true ? 'error': '')">  
                    <input  id="UserLogin"
                            type="email"
                            required name="email" autocomplete="email" autofocus
                            placeholder=" ">
                    <label for="UserLogin">{{accountlogin.inputuser.placeholder}}</label>
                    <p class="errormessage">{{cont_user_validator}}</p>
                </div>

                <div class="input_group" :class="(cont_password_error === true ? 'error': '')">  
                    <input id="PasswordLogin"
                            type="password"
                            required name="password" autocomplete="current-password"
                            placeholder=" ">
                    <label for="PasswordLogin">{{accountlogin.inputpassword.placeholder}}</label>
                    <p class="errormessage">{{cont_password_validator}}</p>
                </div>

                
                <router-link to="/auth/recovery" class="passwordRecoveryLink col-12">{{accountlogin.recoveryLink}}</router-link>
                <router-link to="/auth/register" class="accountRegisterLink col-12">{{accountlogin.registerLink}}</router-link>

                <input class="loginLink" type="submit">{{accountlogin.submit}}</input>
            </form>
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
            cont_user: '',
            cont_password: '',
            cont_user_error: false,
            cont_password_error: false,
            cont_user_validator: '',
            cont_password_validator: '',
            success: false
            
        }
    },
    created() {
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.accountlogin = response.data.accountlogin
        })
    },
    methods: {
        checkLoginForm: function (e) {

            e.preventDefault()
            if(!this.validateForm()) return

            const data = { 
                cont_user:      this.cont_user,
                cont_password:  this.cont_password
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
            this.cont_user_error =      false
            this.cont_password_error =  false


            if( this.cont_user === "" ) {

                hasErrors = true
                this.cont_user_error = true
                this.cont_user_validator = this.accountlogin.inputuser.errors
            }

            if( this.cont_password === "" ) {
                
                hasErrors = true
                this.cont_password_error = true
                this.cont_password_validator = this.accountlogin.inputpassword.errors

            }

            return !hasErrors

        },
        login() {
            
            console.log('login')
            
            const userId = '123'
            router.push({ path: '/auth/account', params: { userId } }) // -> /user
            
// {
//     if(this.cont_user == this.$parent.mockAccount.username && this.cont_password == this.$parent.mockAccount.password) {
//         this.$emit("authenticated", true);
//         this.$router.replace({ name: "secure" });
//     } else {

//         console.log("The username and / or password is incorrect");
//     }
// } else {
    
// }
        }
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
            color: #FFF;
            font-size: 36px;
            white-space: normal;
        }

        a.passwordRecoveryLink,
        a.accountRegisterLink{ 
            float: left; 
            display: block;
            padding: 0;
            color: #FFF;
        }

        a.accountRegisterLink{ margin-top: 70px}

        .loginLink{
            background-color: #000;
            color: #FFF;
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