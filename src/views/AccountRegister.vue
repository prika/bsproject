<template>
    <div class="accountPage pageReduced">
        <div class="containerReduced">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
            </transition>

            <h1 v-html="accountregister.title">{{accountregister.title}}</h1>
            
           
           <!--transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">-->
            <div>   <!-- v-if="!success" -->
                <p v-html="accountregister.subtitle">{{accountregister.subtitle}}</p>

                <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <form  id="register"
                        @submit.prevent="checkFormRegister">

                        <div class="row">

                            <div class="col-12 col-md-6">
                                <div class="input_group">  
                                    <input id="inputname"
                                            v-model="inputname"
                                            type="text"
                                            required name="name" autocomplete="name" autofocus
                                            :aria-label="accountregister.inputname.placeholder" placeholder=" ">
                                    <label for="inputname">{{accountregister.inputname.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                             <div class="col-12 col-md-6">  
                                <div class="input_group">  
                                    <input id="inputsurname"
                                            v-model="inputsurname"
                                            type="text"
                                            required name="lname" autocomplete="family-name"
                                            :aria-label="accountregister.inputsurname.placeholder" placeholder=" ">
                                    <label for="inputsurname">{{accountregister.inputsurname.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="input_group">  
                                    <input id="inputphone"
                                            v-model="inputphone"
                                            type="tel"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            required name="phone" autocomplete="tel"
                                            :aria-label="accountregister.inputphone.placeholder" placeholder=" ">
                                    <label for="inputphone">{{accountregister.inputphone.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                             <div class="col-12 col-md-6">  
                                <div class="input_group">  
                                    <input id="inputcompany"
                                            v-model="inputcompany"
                                            type="text"
                                            name="inputcompany"
                                            :aria-label="accountregister.inputcompany.placeholder" placeholder=" ">
                                    <label for="inputcompany">{{accountregister.inputcompany.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>


                            <div class="col-12 col-md-6">
                                <div class="input_group">  
                                    <input id="inputemail"
                                            v-model="inputemail"
                                            type="email"
                                            required name="email" autocomplete="email"
                                            :aria-label="accountregister.inputemail.placeholder" placeholder=" ">
                                    <label for="inputemail">{{accountregister.inputemail.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                             <div class="col-12 col-md-6">  
                                <div class="input_group">  
                                    <input id="inputemailconfirm"
                                            v-model="inputemailconfirm"
                                            type="email"
                                            required name="email" autocomplete="email"
                                            :aria-label="accountregister.inputemailconfirm.placeholder" placeholder=" ">
                                    <label for="inputemailconfirm">{{accountregister.inputemailconfirm.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">   
                                <div class="input_group">  
                                    <input id="inputpassword"
                                            v-model="inputpassword"
                                            type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                                            required name="password" autocomplete="new-password"
                                            :aria-label="accountregister.inputpassword.placeholder" placeholder=" ">
                                    <label for="inputpassword">{{accountregister.inputpassword.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                             <div class="col-12 col-md-6">  
                                <div class="input_group">  
                                    <input id="inputpasswordconfirm"
                                            v-model="inputpasswordconfirm"
                                            type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                                            required name="password" autocomplete="new-password"
                                            :aria-label="accountregister.inputpasswordconfirm.placeholder" placeholder=" ">
                                    <label for="inputpasswordconfirm">{{accountregister.inputpasswordconfirm.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                                
                            <div class="col-12 col-md-6">
                                <div class="input_group">  
                                    <select id="inputcountry"
                                            v-model="inputcountry" 
                                            required name="country" autocomplete="country"
                                            :aria-label="accountregister.inputcountry.placeholder" placeholder=" ">
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                    </select>
                                    <label for="inputcountry">{{accountregister.inputcountry.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                        </div>

                        <div class="row">  
                            <div class="col-12 col-md-6">  
                                <p style="margin-top: 36px; color: red">
                                    <span> {{accountregister.inputname.errors}} </span>
                                </p>
                            </div>

                            <div class="col-12 col-md-6">
                                <button class="button submitButton" :aria-label="accountregister.submit">
                                    <submitIcon>{{accountregister.submit}}</submitIcon>
                                </button>
                            </div>

                        </div>
                
                </form>
                 </transition>
            </div>
            <!-- </transition-->


            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                <div class=""> <!-- v-if="success"-->
                    <p v-html="accountregister.success">{{accountregister.success}}</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import closeIcon from '../components/ui/closeIcon.vue'
import submitIcon from '@/components/ui/submitIcon.vue'

export default {
    name: 'accountRegister',
    components:{
        closeIcon,
        submitIcon
    },
    data() {
        return {
            accountregister: ''
        }
    },
    created(){
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.accountregister = response.data.accountregister
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
}
</style>