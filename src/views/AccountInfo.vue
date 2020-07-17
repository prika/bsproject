<template>
    <div class="accountPage pageReduced">
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

                <form  v-if="!success" id="recovery"
                        @submit.prevent="checkFormRecovery">

                    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <div class="row">

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_name_account_error === true ? 'error': '')"> 
                                    <input id="cont_name_account"
                                            type="text"
                                            name="name" autocomplete="name"
                                            :aria-label="accountinfo.inputname.placeholder" placeholder=" ">
                                    <label for="cont_name_account">{{accountinfo.inputname.placeholder}}</label>
                                    <!--p class="errormessage"> {{cont_name_account_validator}} </p-->
                                </div>
                            </div>

                            <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_surname_account_error === true ? 'error': '')">  
                                    <input id="cont_surname_account"
                                            v-model="inputsurname"
                                            type="text"
                                            name="lname" autocomplete="family-name"
                                            :aria-label="accountinfo.inputsurname.placeholder" placeholder=" ">
                                    <label for="cont_surname_account">{{accountinfo.inputsurname.placeholder}}</label>
                                    <!--p class="errormessage"> {{cont_surname_account_validator}} </p-->
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_phone_account_error === true ? 'error': '')">  
                                    <input id="cont_phone_account"
                                            v-model="inputphone"
                                            type="text"
                                            name="phone" autocomplete="tel"
                                            :aria-label="accountinfo.inputphone.placeholder" placeholder=" ">
                                    <label for="cont_phone_account">{{accountinfo.inputphone.placeholder}}</label>
                                    <!--p class="errormessage"> {{cont_phone_account_validator}} </p-->
                                </div>
                            </div>

                            <div class="col-12 col-md-6"></div>

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_password_account_error === true ? 'error': '')">  
                                    <input id="cont_password_account"
                                            v-model="inputpassword"
                                            type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                                            name="password" autocomplete="new-password"
                                            :aria-label="accountinfo.inputpassword.placeholder" placeholder=" ">
                                    <label for="cont_password_account">{{accountinfo.inputpassword.placeholder}}</label>
                                    <!--p class="errormessage"> {{cont_password_account_validator}} </p-->
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="input_group" :class="(cont_password_confirm_account_error === true ? 'error': '')">  
                                    <input id="cont_password_confirm_account"
                                            v-model="inputpasswordconfirm"
                                            type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                                            name="password" autocomplete="new-password"
                                            :aria-label="accountinfo.inputpasswordconfirm.placeholder" placeholder=" ">
                                    <label for="cont_password_confirm_account">{{accountinfo.inputpasswordconfirm.placeholder}}</label>
                                    <!--p class="errormessage"> {{cont_password_confirm_account_validator}} </p-->
                                </div>
                            </div>

                            
                            <div class="col-12 col-md-6">  
                                <div class="input_group" :class="(cont_country_account_error === true ? 'error': '')">
                                    <select id="cont_country_account"
                                            name="country" autocomplete="country"
                                            :aria-label="accountinfo.inputcountry.placeholder" placeholder=" ">
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                    </select>
                                    <label for="cont_country_account">{{accountinfo.inputcountry.placeholder}}</label>
                                    <!--p class="errormessage"> {{cont_country_account_validator}} </p-->
                                </div>
                            </div>
                            
                            <div class="col-12 col-md-6"></div>
                            <div class="col-12 col-md-6"></div>

                            <div class="col-12 col-md-6">
                                <button class="button submitButton" :aria-label="accountinfo.submit">
                                    <submitIcon>{{accountinfo.submit}}</submitIcon>
                                </button>
                            </div>

                        </div>
                    </transition>
                </form>
            </div>

            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                <p v-if="success" v-html="accountinfo.success">{{accountinfo.success}}</p>
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
                    errors: ''
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

            success: false
        }
    },
    created(){
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.accountinfo = response.data.accountinfo
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
</style>