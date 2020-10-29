<template>
    <div class="languageLinks d-md-flex ml-auto"> 

        <label v-for="(lang, i) in langs">
            <input type="radio" v-model="$i18n.locale" :key="`Lang${i}`" :value="lang">
            <p> {{ $tc('language', (lang, i) ) }}</p>

        </label>
    </div>
</template>

<script>
    export default {
        name: 'languageLinks',
        data(){
            return { langs: ['en'] }
        }
    }
</script>