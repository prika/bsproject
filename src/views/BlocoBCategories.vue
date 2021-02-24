<template>
	<transition
		appear
		enter-active-class="animated fadeIn faster"
		leave-active-class="animated fadeOut faster"
	>
		<div class="blocobmenu">
			<div class="containerReduced">
				<transition
					appear
					enter-active-class="animated slideInDown faster"
					leave-active-class="animated slideOutUp faster"
				>
					<button class="closebutton" @click="$router.go(-1)">
						<closeIcon rectBackgroundColor="#FFFFFF" strokeColor="#3E3E3E" bordercolor="#D5D5D5" />
					</button>
				</transition>

				<div class="row">
					<transition
						appear
						enter-active-class="animated fadeInLeft"
						leave-active-class="animated fadeOutLeft"
					>
						<div class="col-12 col-md-5 d-none d-md-block space"></div>
					</transition>

					<transition
						appear
						enter-active-class="animated fadeInRight"
						leave-active-class="animated fadeOutRight"
					>
						<nav class="col-12 col-md-4 blocoBSelectCategory">
							<ul class="categoryMenu" ref="filterCategory" key="filterCategory">
								<li
									v-for="(category, i) in categories"
									:key="i"
									:class="
                    category.id == selectedCategory
                      ? 'filters__item active'
                      : 'filters__item'
                  "
								>
									<router-link
										:to="{
                          path:
                            '/bloco-b/category/' +
                            category.id
                        }"
									>{{ category.name }}</router-link>

									<ul
										:class="'cat-' + selectedCategory + ' collectionMenu'"
										ref="filterCollection"
										key="filterCollection"
									>
										<li
											class="filters__item"
											v-for="(collection, c) in collections"
											:key="c"
											:class="
                        collection.id == selectedCollection
                          ? 'filters__item active'
                          : 'filters__item'
                      "
										>
											<router-link
												:to="{
                          path:
                            '/bloco-b/category/' +
                            category.id +
                            '/collection/' +
                            collection.id +
                            '/',
                        }"
											>{{ collection.name }}</router-link>
										</li>
									</ul>
								</li>
							</ul>

							<!--router-link to="/simulator" class="simulatorLink">{{
                $t("simulator")
							}}</router-link-->
						</nav>
					</transition>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import closeIcon from "../components/ui/closeIcon.vue";
	import submitIcon from "@/components/ui/submitIcon.vue";

	export default {
		name: "blocobmenu",
		components: {
			closeIcon,
			submitIcon
		},
		data() {
			return {
				categories: [],
				collections: [],
				selectedCategory: null,
				selectedCollection: null
			};
		},
		beforeCreate() {
			this.$http
				.get(
					"https://www.bstone.pt/webservices/" + this.$i18n.locale + "/news-list"
				)
				.then(response => {
					this.categories = response.data.categories;
					this.collections = response.data.collections;
					this.$eventBus.$emit("pageFinishLoad", true);
				});
		},
		mounted() {
			let query = this.$route.params; // Querystring params

			if (!(query && query.category)) return; // no value defined
			this.selectedCategory = this.$route.params.category;
		}
	};
</script>

<style lang="scss">
	.blocobmenu {
		width: 100%;
		position: fixed;
		z-index: 999999;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff url(../assets/images/shared/bg_menu.svg) no-repeat;
		background-position: bottom left;
		background-size: 113%;

		.closebutton {
			top: calc(50vh - 42px);
			left: 85vw;

			svg {
				width: 85px;
				height: 85px;
			}
		}

		.space {
			height: 100vh;
		}

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: calc(85vw + 42px);
			height: 100vh;
			width: 1px;
			background: #d5d5d5;
			z-index: 0;
		}

		.containerReduced {
			height: 100vh;
			position: relative;
		}

		.blocoBSelectCategory {
			position: relative;
			z-index: 1;
			padding-left: 0;
			height: 100vh;
			display: grid;
			align-items: center;

			.simulatorLink {
				font-family: "Oswald", sans-serif;
				font-size: 1.1rem;
				font-weight: 300;
				text-transform: uppercase;
				color: #c47c5a;

				&:hover {
					text-decoration: underline;
				}
			}

			.categoryMenu,
			.collectionMenu {
				list-style: none;
				padding: 0;
			}

			.categoryMenu {
				& > li {
					position: relative;

					& > a {
						position: relative;
						display: table;
						font-family: "Oswald", sans-serif;
						font-size: 4.75rem;
						font-weight: 500;
						color: #333;
						line-height: 5rem;
						text-transform: uppercase;
						margin: 20px 0 30px;
						will-change: margin;
						-webkit-transition: margin 0.3s ease;
						-moz-transition: margin 0.3s ease;
						-o-transition: margin 0.3s ease;
						transition: margin 0.3s ease;

						&::before {
							display: block;
							position: absolute;
							top: 50%;
							left: -30%;
							content: "";
							width: 0;
							height: 7px;
							background-color: #333;
							will-change: width, left;
							-webkit-transition: width 0.4s ease, 0.1s left 0.3s ease;
							-moz-transition: width 0.4s ease, 0.1s left 0.3s ease;
							-o-transition: width 0.4s ease, 0.1s left 0.3s ease;
							transition: width 0.4s ease, 0.1s left 0.3s ease;
						}
					}

					&:hover,
					&.active {
						& > a {
							margin: 10px 0 130px;

							&:before {
								left: -20px;
								width: 115%;
							}
						}

						.collectionMenu {
							height: 100%;
							opacity: 1;
						}
					}
				}
			}

			.collectionMenu {
				position: absolute;
				left: 5px;
				top: 100px;
				overflow: hidden;
				height: 0;
				opacity: 0;
				will-change: height, opacity;
				-webkit-transition: height 0.5s ease, opacity 0.5s ease;
				-moz-transition: height 0.5s ease, opacity 0.5s ease;
				-o-transition: height 0.5s ease, opacity 0.5s ease;
				transition: height 0.5s ease, opacity 0.5s ease;

				// &.cat-0{top: 360px;}
				// &.cat-1{top: 460px;}
				// &.cat-2{top: 560px;}

				& > li {
					a {
						display: block;
						position: relative;
						font-family: "Oswald", sans-serif;
						font-size: 1.2rem;
						font-weight: 400;
						letter-spacing: 2px;
						color: #333;
						line-height: 1.5rem;
						text-transform: uppercase;
						margin: 10px 0;
					}

					&.active a,
					& > a:hover {
						color: #c47c5a;

						&:before {
							background-color: #c47c5a;
							width: 43px;
						}
					}
				}
			}
		}
	}

	@media (max-width: 812px) {
		.blocobmenu {
			&:before {
				left: calc(65vw + 42px);
			}

			.closebutton {
				top: 80vh;
				left: 65vw;
				z-index: 3;
			}

			.blocoBSelectCategory {
				padding: 30px;

				.categoryMenu {
					& > li {
						text-align: center;
						height: 200px;
						width: 100%;

						& > a,
						&.active > a,
						&:hover > a {
							text-align: center;
							font-size: 1.8rem;
							margin: 5px auto;

							&:before {
								display: none;
								left: -20px;
								width: 115%;
							}
						}

						.collectionMenu {
							width: 100%;
							top: 70px;
							height: 100%;
							opacity: 1;

							& li a,
							& li:hover a,
							& li a.active {
								margin: 20px auto !important;
							}
						}
					}
				}
			}
		}
	}
</style>
