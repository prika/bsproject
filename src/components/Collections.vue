<template>
	<div class="collectionContainer container" :style="collectionVariables">
		<div class="row">
			<router-link
				v-for="(collection, index) in collections"
				:key="index"
				:to="'/bloco-b/category/0/collection/'+collection.id"
				:class="'collection col-12 col-md-6 collection'+index"
				:style="{'background-image':'url(' + collection.imgsrc +')'}"
			>
				<h1 class="pageTitle" v-once :aria-label="collection.name">
					{{collection.splitname1}}
					<span>{{collection.splitname2}}</span>
				</h1>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				collections: [],
				collectionVariables: []
			};
		},
		created() {
			this.$eventBus.$on("collectionsLoadedEvent", data => {
				this.collections = data;

				this.collectionVariables = {
					"--collection1-count": this.collections[0].count,
					"--collection2-count": this.collections[1].count
				};
			});
		},
		beforeDestroy() {
			this.$eventBus.$off("collectionsLoadedEvent"); // releases the subscription
		}
	};
</script>

<style lang="scss">
	// Variables needed
	// 1. Image to Background
	// 2. Number of stones to Count
	// Calc: Number of Stones x Height of Stone Image:293px
	$calcCollection1: calc(-293px * var(--collection1-count));
	$calcCollection2: calc(-293px * var(--collection2-count));

	@keyframes play1 {
		100% {
			background-position: 0 $calcCollection1;
		}
	}

	@keyframes play2 {
		100% {
			background-position: 0 $calcCollection2;
		}
	}

	.collectionContainer {
		position: relative;
		padding-top: 130px;
	}

	.collection {
		cursor: pointer;
		margin-bottom: 40px;
		height: 293px;

		display: flex;
		justify-content: center;
		align-items: center;

		.pageTitle {
			font-size: 5rem;
			line-height: 5rem;
			margin-left: 0;

			& span {
				padding-left: 95px;
				position: relative;

				&::before {
					width: 80px;
				}

				&::after {
					content: "Collection";
					font-family: "Oswald", sans-serif;
					font-weight: 400;
					text-transform: uppercase;
					letter-spacing: 0.2rem;
					font-size: 1.1rem;
					color: white;
					position: absolute;
					top: 0;
					left: -140px;
					will-change: left;
					-webkit-transition: left 0.3s cubic-bezier(0, 0.5, 0, 1) 0.2s;
					-moz-transition: left 0.3s cubic-bezier(0, 0.5, 0, 1) 0.2s;
					-o-transition: left 0.3s cubic-bezier(0, 0.5, 0, 1) 0.2s;
					transition: left 0.3s cubic-bezier(0, 0.5, 0, 1) 0.2s;
				}
			}
		}

		&:hover {
			&.collection0 {
				animation: play1 2s steps(var(--collection1-count)) infinite;
			}
			&.collection1 {
				animation: play2 2s steps(var(--collection2-count)) infinite;
			}

			& span::after {
				left: -20px;
			}
		}
	}

	@media (max-width: 812px) {
		.collection {
			margin-bottom: 0;

			.pageTitle {
				font-size: 50px;
				line-height: 3rem;
				text-align: center;
				top: 70px;

				span {
					padding-left: 65px;

					&::before {
						width: 50px;
					}
					&::after {
						top: 150%;
						left: calc(50% - 60px);
					}
				}
			}
		}
	}

	@media (max-width: 1024px) {
		.collectionContainer {
			max-width: 100%;

			.pageTitle {
				line-height: 4rem;
				text-align: center;
				top: 60px;

				span::after {
					top: 120%;
					left: calc(50% - 60px);
				}
			}
		}
	}
</style>