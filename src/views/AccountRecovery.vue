<template>
    <div class="accountPage accountRecovery pageReduced">
        <div class="containerReduced">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
            </transition>


            <transition appear enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
            <div>
            <h1 v-html="accountrecovery.title">{{accountrecovery.title}}</h1>
            <p class="subtitle" v-if="!success" v-html="accountrecovery.subtitle">{{accountrecovery.subtitle}}</p>

            
                <form  id="recovery" v-if="!success"
                        @submit.prevent="checkFormRecovery">

                    <div class="row d-flex align-items-center">
                        <div class="col-12 col-md-7">  
                            <div class="input_group" :class="(cont_email_recovery_error === true ? 'error': '')">  
                                <input id="cont_email_recovery"
                                        type="email"
                                        v-model.lazy="cont_email_recovery"
                                        name="email" autocomplete="email"
                                        :aria-label="accountrecovery.input.placeholder" placeholder=" ">
                                <label for="cont_email_recovery">{{accountrecovery.input.placeholder}}</label>
                                <p class="errormessage">{{cont_email_recovery_validator}}</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-7">
                            <button class="button submitButton float-right" :aria-label="accountrecovery.submit">
                                <submitIcon>{{accountrecovery.submit}}</submitIcon>
                            </button>
                        </div>

                    </div>
                </form>
        

                <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                    <div v-if="success">
                        <p v-html="accountrecovery.success">{{accountrecovery.success}}</p>
                    </div>
                </transition>
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
            cont_email_recovery: '',
            cont_email_recovery_validator: '',
            cont_email_recovery_error: false,
            success: false,
            error_required: '',
            error_invalid: ''
        }
    },
    created(){
        
        this.$http.get('https://dev5.incentea-mi.pt/bstone/mocks/account-mock.json').then(response => {
            this.accountrecovery = response.data.accountrecovery
            this.$eventBus.$emit('pageFinishLoad', true) 
        })

        this.error_required     =   this.$i18n.t('input-error-required')
        this.error_invalid      =   this.$i18n.t('input-error-valid-email')
    },
    methods: {
        checkFormRecovery: function (e) {

            //e.preventDefault()
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
                alert(e.message)
            })
        },
        validateForm: function () {
            
            const validEmail = this.validateEmail()

            return validEmail
        },
        validateEmail: function () {
            
            if (this.cont_email_recovery === '') 
            { 
                this.cont_email_recovery_error = true
                this.cont_email_recovery_validator = this.error_required
                return false
            }

            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!regex.test(this.cont_email_recovery))
            {
                this.cont_email_recovery_error = true
                this.cont_email_recovery_validator = this.error_invalid
                return false
            }

            this.cont_email_recovery_error = false
            this.cont_email_recovery_validator = ''
            return true
        }
    },
    watch: { 
      	cont_email_recovery: function(newVal, oldVal) 
        { 
            this.validateEmail()
        }
    }
}
</script>

<style lang="scss">
.pageReduced.accountPage.accountRecovery{
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