<template>
	<div id="bprojectpage">
		<ArticleParallax>
			<div class="pageContentText col-12 col-md-4 order-md-2">
				<h1 v-html="bproject.title">{{ bproject.title }}</h1>
				<p v-html="bproject.content">{{ bproject.content }}</p>
			</div>
		</ArticleParallax>

		<Collections />

		<PortfolioMansory>
			<h1 class="pageTitleh2 h2">
				{{ bproject.title1 }}
				<span>{{ bproject.title2 }}</span>
			</h1>
		</PortfolioMansory>
	</div>
</template>

<script>
	import ArticleParallax from "@/components/ArticleParallax";
	import PortfolioMansory from "@/components/PortfolioMansory";
	import Collections from "@/components/Collections";

	export default {
		name: "bprojectpage",
		components: {
			ArticleParallax,
			PortfolioMansory,
			Collections
		},
		data() {
			return {
				bproject: "",
				gallery1: [],
				gallery2: [],
				collections: [],
				mansoryLoaded: false,
				rellaxLoaded: false,
				hasJsonData: false
			};
		},
		methods: {
			parseObject: function(source, destination) {
				for (var i = 0; i < source.length; i++) {
					let obj = source[i];
					let fullPath = obj.src;
					destination.push(obj);
				}
			},
			notifyFinishLoad() {
				if (!(this.mansoryLoaded && this.rellaxLoaded && this.hasJsonData))
					return;
				this.$eventBus.$emit("pageFinishLoad", true);
			}
		},
		mounted() {
			this.$eventBus.$on("componentFinishLoad", data => {
				if (data == "rellaxLoaded") {
					this.rellaxLoaded = true;
					this.notifyFinishLoad();
					return;
				}

				if (data == "mansoryLoaded") {
					this.mansoryLoaded = true;
					this.notifyFinishLoad();
					return;
				}
			});

			this.$http
				.get(
					"https://www.bstone.pt/webservices/" + this.$i18n.locale + "/b-project"
				)
				.then(response => {
					this.bproject = response.data;
					this.parseObject(response.data.gallery1, this.gallery1);
					this.$eventBus.$emit(
						"collectionsLoadedEvent",
						response.data.collections
					);
					this.$eventBus.$emit("mansoryFinishLoad", response.data.mansory);
					this.hasJsonData = true;
					this.notifyFinishLoad();
				});
		}
	};
</script>
