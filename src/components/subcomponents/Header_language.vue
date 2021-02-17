<template>
	<div class="languageLinks d-md-flex ml-auto">
		<label v-for="(lang, i) in langs" :key="i">
			<input
				type="radio"
				v-model="$i18n.locale"
				:key="`Lang${i}`"
				:value="lang"
				@change="changed($i18n.locale)"
			/>
			<p>{{ $tc('language', (lang, i) ) }}</p>
		</label>
	</div>
</template>

<script>

	export default {
		name: "languageLinks",
		data() {
			return {
				langs: ["en", "pt"]
			};
		},
		methods: {
			changed: function(newLanguage) {
				$cookies.set("selectedLanguage", newLanguage);
				this.$router.go()
			}
		},
		created() {

			if ($cookies.isKey("selectedLanguage"))  
			{ 
				const lang = $cookies.get("selectedLanguage");
				this.$i18n.locale = lang;
			}
		}
	};
</script>