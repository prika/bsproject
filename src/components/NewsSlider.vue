<template>
	<section class="newsContainer container">
		<slot></slot>

		<div class="row">
			<router-link
				v-for="(singleNews, index) in news"
				:key="singleNews.id"
				:to="getNewsLink(index)"
				class="col-12 col-md-6 col-lg-4 newsBlock animated slideInUp"
			>
				<div class="newsContentIimage">
					<img
						:src="singleNews.gallery[0].src"
						class="img-fluid"
						:alt="singleNews.gallery[0].alt"
						width="260px"
						height="260px"
					/>
				</div>

				<div class="newsContentText col-12">
					<div class="text">
						<p v-html="singleNews.title">{{ singleNews.title }}</p>
						<p class="newsDate">{{ singleNews.pubdata }}</p>
					</div>
				</div>
			</router-link>
		</div>

		<a
			@click="loadMoreClick"
			v-if="hasPaging && hasLink"
			style="display: block; text-align: center; margin: 30px 0 200px;"
		>
			<seeMoreButton>{{ $t("actions_seemore") }}</seeMoreButton>
		</a>

		<router-link
			to="/news"
			v-if="!hasPaging && hasLink"
			style="display: block; text-align: center; margin: 30px 0 200px;"
		>
			<seeMoreButton>{{ $t("actions_loadmore") }}</seeMoreButton>
		</router-link>
	</section>
</template>

<script>
	import seeMoreButton from "@/components/ui/seeMoreButton";

	export default {
		components: {
			seeMoreButton
		},
		data() {
			return {
				news: [],
				fullNews: [],
				currentPage: 1,
				itemsPerPage: 0,
				hasPaging: true,
				hasLink: true
			};
		},
		methods: {
			loadMoreClick() {
				let slice = this.fullNews.slice(
					this.currentPage * this.itemsPerPage,
					(this.currentPage + 1) * this.itemsPerPage
				);
				this.news = this.news.concat(slice);
				this.currentPage++;
				if (
					Math.round(this.fullNews.length / this.itemsPerPage) == this.currentPage
				)
					this.hasLink = false;
			},
			getNewsLink: function(index) {
				return (
					"/news/" +
					this.news[index].id +
					"-" +
					this.news[index].title.replace(/\s/g, "_")
				);
			}
		},
		created() {
			this.itemsPerPage = this.$parent.newsAmount;
			this.hasPaging = this.$parent.hasPaging;

			this.$http
				.get(
					"https://www.bstone.pt/webservices/" + this.$i18n.locale + "/news-list/"
				)
				.then(response => {
					this.fullNews = response.data;
					this.news = this.fullNews.slice(0, this.itemsPerPage);

					this.$eventBus.$emit("componentFinishLoad", true);
				});
		}
	};
</script>

<style lang="scss">
	.newsContainer {
		z-index: 0;
		padding: 0 50px;

		.row {
			display: flex;
			justify-content: space-around;

			.newsBlock {
				position: relative;
				height: 520px;
				padding: 0 5%;
				margin-bottom: 8%;

				& .newsContentIimage {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 0;
					width: 260px;
					height: 260px;
					overflow: hidden;

					img {
						width: 100%;
						will-change: transform;
						-webkit-transition: transform 0.4s cubic-bezier(0, 0.5, 0, 1);
						-moz-transition: transform 0.4s cubic-bezier(0, 0.5, 0, 1);
						-o-transition: transform 0.4s cubic-bezier(0, 0.5, 0, 1);
						transition: transform 0.4s cubic-bezier(0, 0.5, 0, 1);
					}
				}

				& .newsContentText {
					position: relative;
					float: right;
					width: 270px;
					margin-top: 150px;

					.text {
						position: absolute;
						top: 0;
						right: 0;
						z-index: 2;
						width: 270px;
						height: 340px;
						padding: 60px 55px;
						background: #fff;
						-webkit-clip-path: polygon(
							156px 0,
							0 0,
							0 379px,
							260px 379px,
							260px 61px
						);
						-o-clip-path: polygon(156px 0, 0 0, 0 379px, 260px 379px, 260px 61px);
						-ms-clip-path: polygon(
							156px 0,
							0 0,
							0 379px,
							260px 379px,
							260px 61px
						);
						clip-path: polygon(156px 0, 0 0, 0 379px, 260px 379px, 260px 61px);

						p {
							font-size: 18px;
							font-style: italic;
							color: #575757;
						}
					}

					&::after {
						content: "";
						position: absolute;
						display: block;
						top: -3px;
						right: 0;
						z-index: 2;
						width: 110px;
						height: 460px;

						background: #fff;
						-webkit-transition: all 0.4s cubic-bezier(0, 0.5, 0, 1);
						-moz-transition: all 0.4s cubic-bezier(0, 0.5, 0, 1);
						-o-transition: all 0.4s cubic-bezier(0, 0.5, 0, 1);
						transition: all 0.4s cubic-bezier(0, 0.5, 0, 1);

						-webkit-clip-path: polygon(100px 2px, 0px 2px, 100px 63px);
						-o-clip-path: polygon(100px 2px, 0px 2px, 100px 63px);
						-ms-clip-path: polygon(100px 2px, 0px 2px, 100px 63px);
						clip-path: polygon(100px 2px, 0px 2px, 100px 63px);
					}
				}

				&:hover {
					cursor: pointer;

					.newsContentIimage img {
						-webkit-transform: scale(1.1);
						-moz-transform: scale(1.1);
						-o-transform: scale(1.1);
						transform: scale(1.1);
					}

					.newsContentText::after {
						-webkit-clip-path: polygon(95px 8px, 17px 6px, 102px 58px);
						-o-clip-path: polygon(95px 8px, 17px 6px, 102px 58px);
						-ms-clip-path: polygon(95px 8px, 17px 6px, 102px 58px);
						clip-path: polygon(95px 8px, 17px 6px, 102px 58px);
					}
				}

				&:nth-child(2):hover .newsContentText:nth-child(2)::after {
					-webkit-clip-path: polygon(105px 0, 0 0, 90px 50px);
					-o-clip-path: polygon(105px 0, 0 0, 90px 50px);
					-ms-clip-path: polygon(105px 0, 0 0, 90px 50px);
					clip-path: polygon(105px 0, 0 0, 90px 50px);
				}

				&:nth-child(3):hover .newsContentText:nth-child(2)::after {
					-webkit-clip-path: polygon(110px 2px, 25px 10px, 95px 55px);
					-o-clip-path: polygon(110px 2px, 25px 10px, 95px 55px);
					-ms-clip-path: polygon(110px 2px, 25px 10px, 95px 55px);
					clip-path: polygon(110px 2px, 25px 10px, 95px 55px);
				}
			}
		}
	}

	.newsDate {
		position: absolute;
		bottom: 30px;
		font-family: "Oswald", sans-serif;
		font-size: 14px;
		font-weight: 400;
		font-style: normal;
		color: #575757;
	}

	#homepage .newsContainer {
		padding: 0 5%;
	}

	@media (max-width: 812px) {
		.newsContainer {
			padding: 0 20px 0 45px;
		}
	}
</style>
