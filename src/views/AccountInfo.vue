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
            
           
           <!--transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">-->
            <div>   <!-- v-if="!success" -->
                <p v-html="accountinfo.subtitle">{{accountinfo.subtitle}}</p>

                <form  id="recovery"
                        @submit.prevent="checkFormRecovery">

                    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <div class="row">

                            <div class="col-12 col-md-6">
                                <div class="input_group">  
                                    <input id="inputname"
                                            v-model="inputname"
                                            type="text"
                                            name="inputname"
                                            :aria-label="accountinfo.inputname.placeholder" placeholder=" ">
                                    <label for="inputname">{{accountinfo.inputname.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>

                                <div class="input_group">  
                                    <input id="inputphone"
                                            v-model="inputphone"
                                            type="text"
                                            name="inputphone"
                                            :aria-label="accountinfo.inputphone.placeholder" placeholder=" ">
                                    <label for="inputphone">{{accountinfo.inputphone.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>

                                <div class="input_group">  
                                    <input id="inputpassword"
                                            v-model="inputpassword"
                                            type="password"
                                            name="inputpassword"
                                            :aria-label="accountinfo.inputpassword.placeholder" placeholder=" ">
                                    <label for="inputpassword">{{accountinfo.inputpassword.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">  
                                <div class="input_group">  
                                    <input id="inputsurname"
                                            v-model="inputsurname"
                                            type="text"
                                            name="inputsurname"
                                            :aria-label="accountinfo.inputsurname.placeholder" placeholder=" ">
                                    <label for="inputsurname">{{accountinfo.inputsurname.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>

                                <div class="input_group">  
                                    <select id="inputcountry"
                                            v-model="inputcountry" name="inputcountry"
                                            :aria-label="accountinfo.inputcountry.placeholder" placeholder=" ">
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                        <option>Portugal</option>
                                    </select>
                                    <label for="inputcountry">{{accountinfo.inputcountry.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>

                                <div class="input_group">  
                                    <input id="inputpasswordconfirm"
                                            v-model="inputpasswordconfirm"
                                            type="password"
                                            name="inputpasswordconfirm"
                                            :aria-label="accountinfo.inputpasswordconfirm.placeholder" placeholder=" ">
                                    <label for="inputpasswordconfirm">{{accountinfo.inputpasswordconfirm.placeholder}}</label>
                                    <span class="bar"></span>
                                </div>
                            </div>


                            <div class="col-12 col-md-6">  
                                <p style="margin-top: 36px; color: red">
                                    <span> {{accountinfo.inputname.errors}} </span>
                                </p>
                            </div>

                            <div class="col-12 col-md-6">
                                <button class="button submitButton" :aria-label="accountinfo.submit">
                                    <submitIcon>{{accountinfo.submit}}</submitIcon>
                                </button>
                            </div>

                        </div>
                    </transition>

                </form>
            </div>
            <!-- </transition-->
            </div>

            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
                <div class=""> <!-- v-if="success"-->
                    <p v-html="accountinfo.success">{{accountinfo.success}}</p>
                </div>
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
            accountinfo: ''
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