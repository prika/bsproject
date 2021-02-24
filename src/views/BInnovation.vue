<template>
	<div id="binnovationpage">
		<ArticleParallax>
			<div class="pageContentText col-12 col-md-4 order-md-2">
				<h1 v-html="binnovation.title">{{ binnovation.title }}</h1>
				<p v-html="binnovation.content">{{ binnovation.content }}</p>
			</div>
		</ArticleParallax>

		<PortfolioMansory>
			<h1 class="pageTitleh2 h2">
				{{ binnovation.title1 }}
				<span>{{ binnovation.title2 }}</span>
			</h1>
		</PortfolioMansory>
	</div>
</template>

<script>
	import ArticleParallax from "@/components/ArticleParallax";
	import PortfolioMansory from "@/components/PortfolioMansory";

	export default {
		name: "binnovationpage",
		components: {
			ArticleParallax,
			PortfolioMansory
		},
		data() {
			return {
				binnovation: "",
				gallery1: [],
				gallery2: [],
				mansory: [],
				rellaxLoaded: false,
				mansoryLoaded: false,
				hasJsonData: false
			};
		},
		methods: {
			/* getImgUrl: function(src) {
								return require("@/assets/images/" + src);
							}, */
			parseObject: function(source, destination) {
				for (var i = 0; i < source.length; i++) {
					let obj = source[i];
					let fullPath = obj.src;
					//this.getImgUrl(obj.src);
					//obj.src = fullPath;
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
					"https://www.bstone.pt/webservices/" +
						this.$i18n.locale +
						"/b-innovation"
				)
				.then(response => {
					this.binnovation = response.data;
					this.parseObject(response.data.gallery1, this.gallery1);
					this.$eventBus.$emit("mansoryFinishLoad", response.data.mansory);

					this.hasJsonData = true;
					this.notifyFinishLoad();
				});
		}
	};
</script>
