<template>
    <div class="modalLogin">

        <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
            <button class="closeLoginButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="$emit('close')"><closeIcon></closeIcon></button>
        </transition>

        <div class="formLogin revertColor">
            <p class="h1 col-12">[[Entrar <br>na minha <br>conta]]</p>

            <form   id="login" 
                    @submit.prevent="checkLoginForm"
                    method="post" novalidate="true" class="col-12">

                <div class="input_group col-12">  
                    <input id="UserLogin"
                            type="text"
                            name="username"
                            placeholder=" ">
                    <label for="UserLogin">[[Username]]</label>
                    <span class="bar"></span>
                </div>

                <div class="input_group col-12">  
                    <input id="PasswordLogin"
                            type="password"
                            name="password"
                            placeholder=" ">
                    <label for="PasswordLogin">[[Password]]</label>
                    <span class="bar"></span>
                </div>

                
                <router-link to="/auth/recovery" class="passwordRecoveryLink col-12">[[Esqueceu-se da palavra-chave?]]</router-link>
                <router-link to="/auth/account" class="passwordRecoveryLink col-12">[[Para apagar - AccountInfo]]</router-link>

                <router-link to="/auth/register" class="accountRegisterLink col-12">[[criar conta]]</router-link>

                <button class="loginLink" type="button" v-on:click="login()">[[Login]]</button>
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
            inputs: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        checkLoginForm(){

        },
        login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                } else {
                    console.log("The username and / or password is incorrect");
                }
            } else {
                console.log("A username and password must be present");
            }
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