<template>
    <div class="languageLinks d-none d-md-flex ml-auto"> 

        <label v-for="locale in locales">
            <input type="radio" v-model="currentLocale" :value="locale.id">
            <p>{{locale.name}}</p>
        </label>

        
        <!-- {{ message[currentLocale] }} -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentLocale: uv.page.locale,
                locales: [ 
                    {id: 'en', name: 'English'}, 
                    {id: 'pt', name: 'Português'}
                ],
                message: {
                    en: 'Hello you, Vue.js!',
                    pt: "Olá, Vuejs"
                }
            }
        }
    }
</script>