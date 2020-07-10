<template>
    <div class="accountPage pageReduced">
        <div class="containerReduced">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
            </transition>

            <h1 v-html="accountrecovery.title">{{accountrecovery.title}}</h1>
            
           
           <!--transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">-->
            <div>   <!-- v-if="!success" -->
                <p v-html="accountrecovery.subtitle">{{accountrecovery.subtitle}}</p>

                <form  id="recovery"
                        @submit.prevent="checkFormRecovery"
                        novalidate="true">

                    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <div class="row d-flex align-items-center">
                            <div class="col-12 col-md-7">  
                                <div class="input_group">  
                                    <input id="emailrecovery"
                                            v-model="email"
                                            type="email"
                                            name="email"
                                            :aria-label="accountrecovery.input.placeholder" placeholder=" ">
                                    <label for="emailrecovery">{{accountrecovery.input.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">  
                                <p style="margin-top: 36px; color: red">
                                    <!--span v-if="errors">{{ $t('footer-newsletter-error') }}</!span-->
                                    <span> {{accountrecovery.input.errors}} </span>
                                </p>
                            </div>

                            <div class="col-12 col-md-6">
                                <button class="button submitButton" :aria-label="accountrecovery.submit">
                                    <submitIcon>{{accountrecovery.submit}}</submitIcon>
                                </button>
                            </div>

                        </div>
                    </transition>

                </form>
            </div>
            <!-- </transition-->


            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                <div class=""> <!-- v-if="success"-->
                    <p v-html="accountrecovery.success">{{accountrecovery.success}}</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import closeIcon from '../components/ui/closeIcon.vue'
import submitIcon from '@/components/ui/submitIcon.vue'

export default {
    name: 'accountRecovery',
    components:{
        closeIcon,
        submitIcon
    },
    data() {
        return {
            accountrecovery: ''
        }
    },
    created(){
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.accountrecovery = response.data.accountrecovery
        })
    }
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
        padding: 15% 5% 5% 20px;
        margin-right: 10%;
    }
}
</style>