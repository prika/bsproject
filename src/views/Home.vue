<template>
	<div id="homepage" class="pageContainer">
		<BannerFullsize />

		<ArticleParallax>
			<div class="pageContentText col-12 col-md-5 order-2 order-sm-2">
				<h1 v-html="home.title">{{ home.title }}</h1>
				<p v-html="home.content">{{ home.content }}</p>

				<!-- a href="" class="basicLink"><arrowRightIcon />{{ $t("readlink") }}</!-->
			</div>
		</ArticleParallax>

		<ProductsList>
			{{ home.featured_text1 }}
			<span>{{ home.featured_text2 }}</span>
		</ProductsList>

		<NewsSlider>
			<h1 class="pageTitleh2 h2">{{ $t("home-title-page") }}</h1>
		</NewsSlider>
	</div>
</template>

<script>
	import BannerFullsize from "../components/BannerFullsize";
	import ArticleParallax from "@/components/ArticleParallax";
	import arrowRightIcon from "@/components/ui/arrow-slim-right.vue";
	import ProductsList from "@/components/ProductsList";
	import NewsSlider from "@/components/NewsSlider";

	export default {
		name: "homepage",
		components: {
			BannerFullsize,
			ArticleParallax,
			arrowRightIcon,
			ProductsList,
			NewsSlider
		},
		data() {
			return {
				newsAmount: 3,
				hasPaging: false,
				hasLink: true,
				home: "",
				gallery1: [],
				gallery2: [],
				slidergallery: [],
				hasFeaturedProducts: true,
				productsPerPage: 6,
				bannerLoaded: false,
				rellaxLoaded: false,
				hasJsonData: false
			};
		},
		methods: {
			notifyFinishLoad() {
				if (!(this.bannerLoaded && this.rellaxLoaded && this.hasJsonData)) return;
				this.$eventBus.$emit("pageFinishLoad", true);
			}
		},
		mounted() {
			this.$eventBus.$on("componentFinishLoad", data => {
				if (data == "bannerLoaded") {
					this.bannerLoaded = true;
					this.notifyFinishLoad();
					return;
				}

				if (data == "rellaxLoaded") {
					this.rellaxLoaded = true;
					this.notifyFinishLoad();
					return;
				}
			});

			this.$http
				.get(
					"https://www.bstone.pt/webservices/" + this.$i18n.locale + "/homepage"
				)
				.then(response => {
					this.home = response.data;
					this.gallery1 = response.data.gallery1;
					this.gallery2 = response.data.gallery2;
					this.slidergallery = response.data.slidergallery;

					this.hasJsonData = true;
					this.notifyFinishLoad();
				});
		},
		beforeDestroy() {
			this.$eventBus.$off("componentFinishLoad");
		}
	};
</script>
<style lang="scss">
	.basicLink {
		font-family: "Oswald", sans-serif;
		font-size: 15px;
		font-weight: 300;
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
		color: #000;
		position: relative;
		margin-top: 5%;

		&::after {
			position: absolute;
			top: 11px;
			right: -60px;
			content: "";
			display: block;
			height: 1px;
			width: 40px;
			background-color: #000;
		}

		.arrowSlimIcon {
			position: absolute;
			top: -3px;
			right: -60px;

			svg line,
			svg path {
				stroke: #000;
			}
		}

		&:hover {
			color: #000;

			&::after {
				background-color: #b76646;
			}
			svg line,
			svg path {
				stroke: #b76646;
			}
		}
	}
</style>
