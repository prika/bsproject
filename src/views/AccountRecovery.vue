<template>
    <div class="accountPage pageReduced">
        <div class="containerReduced">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
            </transition>

            <h1 v-html="accountrecovery.title">{{accountrecovery.title}}</h1>
            <p  v-if="!success" v-html="accountrecovery.subtitle">{{accountrecovery.subtitle}}</p>

            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <form  id="recovery" v-if="!success"
                        @submit.prevent="checkFormRecovery">

                    <div class="row d-flex align-items-center">
                        <div class="col-12 col-md-7">  
                            <div class="input_group" :class="(cont_email_recovery_error === true ? 'error': '')">  
                                <input id="emailrecovery"
                                        type="email"
                                        v-model.lazy="emailrecovery"
                                        name="email" autocomplete="email"
                                        :aria-label="accountrecovery.input.placeholder" placeholder=" ">
                                <label for="emailrecovery">{{accountrecovery.input.placeholder}}</label>
                                <p class="errormessage">{{cont_email_recovery_validator}}</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-7">
                            <button class="button submitButton" :aria-label="accountrecovery.submit">
                                <submitIcon>{{accountrecovery.submit}}</submitIcon>
                            </button>
                        </div>

                    </div>
                </form>
            
            </transition>

            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                <div v-if="success">
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
            accountrecovery: {
                title: '',
                subtitle: '',
                input: {
                    placeholder: '',
                    errors: ''
                },
                submit: '',
                success: ''
            },
            success: false,
            cont_email_recovery: '',
            cont_email_recovery_validator: '',
            cont_email_recovery_error: false
        }
    },
    created(){
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.accountrecovery = response.data.accountrecovery
        })
    },
    methods: {
        checkFormRecovery: function (e) {

            e.preventDefault()
            if(!this.validateForm()) return

            const data = { 
                cont_email_recovery:      this.cont_email_recovery,
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
            
            var hasErrors =                         false
            this.cont_email_recovery_error =        false

            if( this.cont_email_recovery === "" ) {

                hasErrors = true
                this.cont_email_recovery_error = true
                this.cont_email_recovery_validator = "Campo de preenchimento obrigatório"
            }

            return !hasErrors
        }
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