<template>
    <div class="modalLogin">
        <transition mode="out-in" appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
            <button class="closeLoginButton" v-bind:aria-label="$t('button-arialabel-close-menu')" @click="$emit('close')"><closeIcon></closeIcon></button>
        </transition>
        <div class="formLogin">
            <p class="h1">Entrar <br>na minha <br>conta</p>
            <form>
                <!--input type="text" name="username" v-model="input.username" placeholder="Username" /><br-->
                <!--input type="password" name="password" v-model="input.password" placeholder="Password" /><br-->
                <button type="button" v-on:click="login()">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import closeIcon from '../ui/closeIcon'

export default {
    components: {
        closeIcon
    },
    //name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
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
    
    .closeLoginButton{
        background: #333;
        border: 0;
        position: fixed;
        top: 0;
        right: 0;
        width: 124px;
        height: 124px;

        #fechar path {
            stroke: #FFF;
        }
    }

    .formLogin{
        position: fixed;
        right: 0;
        background: black;
        height: 500px;
        width: 450px;
        background: #2A2A2A;
        padding: 75px;

        p.h1 {
            color: #FFF;
            font-size: 36px;
            white-space: normal;
        }
        
    }
}
</style>