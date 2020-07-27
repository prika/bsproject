<template>
    <div class="pageReduced">
        <div class="containerReduced">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon />
                </button>
            </transition>

            <h1>{{privacypolicy.title}}</h1>

            <div class="questionsContainer">
                <div v-for="(item, index) in questions" :key="item.id" class="questionContainer">
                    <h2>{{item.question}}</h2>
                    <p>{{item.answer}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import closeIcon from '../components/ui/closeIcon.vue'

export default {
    name: 'pagePP',
    components:{
        closeIcon
    },
    data() {
        return {
            privacypolicy: '',
            questions: []
        }
    },
    created(){
        this.$http.get('../mocks/global-mock.json').then(response => {
            this.privacypolicy = response.data.privacypolicy
            this.questions = response.data.privacypolicy.questions
        })
    }
}
</script>

<style lang="scss">

.pageReduced{
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
        max-width: 560px;
        height: 100vh;
        margin: 0 auto;
        position: relative;
        padding: 0 25px;
    }

    // .closeMenuButton{
    //     position: fixed;
    //     top: 50px;
    //     left: calc( 50% - 20px );
    //     display: block;
    // }

    h1{  position: fixed;
        top: 150px; }

    .questionsContainer{
        position: absolute;
        top: 290px;
        left: 0;
        width: 100%;
        height: calc( 100vh - 290px );
        overflow-y: scroll;
        padding: 0 25px;

        .questionContainer{
            border-bottom: 1px solid #CFCFCF;
            padding: 20px 0;

            h2 {
                font-family: 'Oswald', sans-serif;
                font-weight: 400;
                font-size: 18px;
                text-transform: uppercase;
                margin-bottom: 10px;
            }
            p {
                color: #707070;
            }
        }
    }
}
</style>