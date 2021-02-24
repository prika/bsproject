<template>
	<header>
		<div class="containerHeader d-flex">
			<!-- Logo and Menus -->
			<slot></slot>

			<Language class="d-none" />

			<div class="controls d-flex">
				<router-link
					to="/search"
					itemprop="url"
					class="buttons searchButton"
					:aria-label="$t('button-arialabel-open-search')"
				>
					<SearchButton></SearchButton>
				</router-link>

				<button
					class="buttons userButton"
					disabled
					@click="autentication()"
					v-bind:aria-label="$t('button-arialabel-open-login')"
				>
					<UserButton></UserButton>
				</button>

				<button
					@click="showCart"
					tag="button"
					class="buttons cartButton"
					disabled
					v-bind:aria-label="$t('button-arialabel-open-cart')"
				>
					<CartButton>{{cartSize}}</CartButton>
				</button>
			</div>
		</div>

		<transition
			enter-active-class="animated slideInRight faster"
			leave-active-class="animated slideOutRight faster"
		>
			<ModalLogin v-if="showLoginForm" @close="showLoginForm = false"></ModalLogin>
		</transition>

		<transition
			enter-active-class="animated slideInDown faster"
			leave-active-class="animated slideOutUp faster"
		>
			<ModalSearch v-if="showModal" @close="showModal = false"></ModalSearch>
		</transition>
	</header>
</template>

<script>
	import Language from "./subcomponents/Header_language.vue";
	import SearchButton from "./ui/searchButton";
	import CartButton from "./ui/cartButton";
	import UserButton from "./ui/userButton";
	import ModalSearch from "./subcomponents/ModalSearch.vue";
	import ModalLogin from "./subcomponents/ModalLogin";
	import { mapState, mapGetters } from "vuex";

	export default {
		name: "Header",
		components: {
			Language,
			ModalSearch,
			ModalLogin,
			SearchButton,
			UserButton,
			CartButton
		},
		computed: {
			...mapState(["cart", "login"]),
			...mapGetters(["cartSize", "cartTotalAmount", "isLoggedIn"])
		},
		data() {
			return {
				showModal: false,
				showLoginForm: false,
				redirectURL: null
			};
		},
		methods: {
			showCart() {
				if (this.isLoggedIn) {
					this.$router.push("/shoppingcart");
				} else {
					this.showLoginForm = true;
					this.redirectURL = "/shoppingcart";
				}
			},
			autentication() {
				if (!this.isLoggedIn) {
					this.showLoginForm = true;
					this.redirectURL = "/account";
				} else {
					this.$router.push("/account");
				}
			}
		}
	};
</script>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 4;
		width: 100%;
		background: #fff;
		white-space: nowrap;

		.containerHeader {
			height: 68px;
			display: flex;
			flex-direction: row;
		}

		.logo {
			align-items: center;
			justify-content: space-between;
		}

		nav.menu {
			display: none;
			//bottom: 0;
			//align-items: center;
			justify-content: center;
			padding: 200px 0;
			//height:0;
			overflow: hidden;

			&.active {
				display: block;
			}

			& ul {
				display: flex;
				flex-direction: column;

				align-items: center;
				justify-content: center;
				margin: 0;
				padding-left: 0;
				list-style: none;

				& li {
					//margin-right: 18px;
					position: relative;

					&:not(:last-child):after {
						display: none;
						content: "";
						background-color: #a7a7a7;
						width: 18px;
						height: 1px;
						position: absolute;
						top: 50%;
						right: -15px;
					}

					a {
						font-size: 1.5rem; //22px
						padding: 10px 17px;
						font-weight: 300;
					}
				}
			}
		}

		.controls .buttons {
			border: none;
			border-left: 1px solid #e8e8e8;
			width: 70px;
			outline: none !important;
		}
	}

	@media (max-height: 860px) {
		body {
			margin-top: 90px;
		}
		header {
			.containerHeader {
				height: 90px !important;
			}

			.controls .buttons {
				width: 90px !important;

				svg {
					-webkit-transform: scale(1.2) !important;
					-ms-transform: scale(1.2) !important;
					transform: scale(1.2) !important;
				}
			}
		}

		h2.pageTitleh2,
		.h2.pageTitleh2 {
			margin: 25px auto 80px !important;
		}
		.parallaxContainer {
			padding-top: 5% !important;
		}
	}

	@media (min-width: 812px) {
		body {
			margin-top: 90px;
		}

		header {
			.containerHeader {
				height: 90px;

				.logo {
					justify-content: center;
				}
			}

			nav.menu {
				position: relative;
				display: flex !important;
				background: none;
				padding: 0 !important;

				ul {
					flex-direction: row;

					li:not(:last-child):after {
						display: block;
					}

					& li {
						margin-right: 18px;

						a {
							font-size: 1.2rem !important;
							padding: 10px 3px;
						}
					}
				}
			}

			.controls .buttons {
				width: 90px;

				svg {
					-webkit-transform: scale(1.2);
					-ms-transform: scale(1.2);
					transform: scale(1.2);
				}
			}
		}
	}

	//@include media-breakpoint-up(lg)
	@media (min-width: 992px) {
		header nav.menu ul li a {
			font-size: 1.2rem !important;
			padding: 10px 10px;
		}

		// header nav.menu .mobileAdd{
		//   display: none;
		// }

		header div.languageLinks {
			width: 240px;
		}
	}

	//@include media-breakpoint-up(xl)
	@media (min-width: 1200px) {
		body {
			margin-top: 124px;
		}

		header .controls .buttons {
			width: 124px;
		}
		header .containerHeader {
			height: 124px;
		}
	}
</style>
