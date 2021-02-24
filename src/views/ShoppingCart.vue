<template>
	<div id="shoppingCartPage">
		<transition
			appear
			enter-active-class="animated slideInUp"
			leave-active-class="animated slideOutLeft"
		>
			<div class="row justify-content-center" v-if="checkoutStep == 1">
				<div class="cartTitle col-12 col-md-9 col-lg-8">
					<h1 class="text-center text-md-left">{{ $t("checkout-title-step1") }}</h1>
				</div>

				<div class="cartTable col-12 col-md-9 col-lg-8">
					<!-- Repeater containers -->
					<div class="categoryGroup" v-for="(container, cat) in categoryContainers" :key="cat">
						<div class="row">
							<p class="col-12 col-md-8 text-center text-md-left">
								<span class="categoryTitle uppercase">{{ container.category }}</span>
								<span class="containerQuantity">{{ container.quantity }}</span>
								<span class="d-none d-sm-inline-block">
									{{
									$tc("checkout-products", container.quantity)
									}}
								</span>
							</p>

							<p class="col-12 col-md-4 text-center containerInfo">
								<span class="uppercase">
									{{
									$tc("checkout-container", container.containerCount)
									}}
								</span>
								- {{ container.containerCount }} -
								{{ container.containerDimensions }}m
								<sup>2</sup>
							</p>
						</div>

						<!-- row -->
						<div class="categoryRow" v-for="(item, index) in container.containerItems" :key="index">
							<p v-if="isMobile()" class="categoryContainerMobile col-12 text-center d-block d-sm-none">
								<span class="bold lowercase">
									{{
									$tc("checkout-container", 1)
									}}
								</span>
								({{ item.name }})
								<span class="bold">{{ item.percentage }}%</span>
							</p>

							<!-- repeat -->
							<a
								v-for="(product, index) in item.products"
								:key="index"
								:href="product.link"
								class="productCart col-12 col-md-8 d-flex align-items-center justify-content-between"
							>
								<transition
									appear
									enter-active-class="animated slideInLeft"
									leave-active-class="animated slideOutLeft"
								></transition>
								<!--col-8 col-md-6 col-lg-6 col-xl-7-->
								<div class="d-flex align-items-center justify-content-between">
									<img :src="product.imgURL" width="156" height="156" />

									<div class="productInfo">
										<h2>{{ product.name }}</h2>
										<h3>{{ product.variantName }}</h3>
										<p>{{ product.dimensions }}cm</p>
									</div>
								</div>

								<button class="removebutton" @click="removeProduct(product.id)">
									<removeIcon />
								</button>
							</a>
							<!-- repeat -->

							<div class="categoryContainer text-center d-none d-md-block col-sm-4">
								<chartContainer
									:datapercent="item.percentage"
									:itemname="$tc('checkout-container', 1) + ' - ' + item.name"
								></chartContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition enter-class="animated slideInRight" leave-active-class="animated slideOutLeft">
			<div class="row justify-content-center" v-if="checkoutStep == 2">
				<div class="col-12 col-md-8">
					<div class="cartTitle2 col-12 col-md-8">
						<h1>{{ $t("checkout-title-step2") }}</h1>
					</div>
				</div>

				<transition
					appear
					enter-active-class="animated slideInRight"
					leave-active-class="animated slideOutLeft"
				>
					<div class="shippingOptions col-12 col-md-8">
						<div class="col-12 col-md-8">
							<label class="radioButtonStyle" v-for="(option, index) in deliveryOptions" :key="index">
								<input
									type="radio"
									:id="option.id"
									:value="option.name"
									v-model="selectedShippingOption"
									checked="checked"
								/>
								<div class="radioButton"></div>
								{{ option.name }}
							</label>
						</div>
					</div>
				</transition>

				<div class="notes col-12 col-md-8">
					<div class="col-12 col-md-8">
						<h3>{{ $t("checkout-notes") }}</h3>
						<div class="input_group">
							<input id="notesInput" type="text" name="notes" placeholder=" " />
							<label>{{ $t("checkout-notes-placeholder") }}</label>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition appear enter-active-class="animated slideInUp delay-1s">
			<div class="row pagecontrols">
				<div
					class="info"
					:class="
            checkoutStep === 1
              ? 'col-12 col-md-9'
              : 'col-12 col-md-6 order-md-2'
          "
				>
					<p>
						<span class="totalTitle" style="margin-right: 20px">
							<b>{{ $t("checkout-total") }}</b>
							<span
								class="textColor"
							>{{ totalProducts.generalquantity }} {{$tc("checkout-products", totalProducts.generalquantity)}}:</span>
						</span>

						<template v-for="(item, index) in totalProducts.categoriesTotal">
							{{ item.number }}
							<span
								class="d-none d-sm-block"
								:key="index"
							>{{ $tc("checkout-products", item.number) }}</span>
							({{ item.name }})
							<span class="d-none d-sm-block" :key="index">
								{{ item.dimensions }}m
								<sup>3</sup>
							</span>
							<span v-if="index + 1 < totalProducts.categoriesTotal.length" :key="index">-</span>
						</template>
					</p>
				</div>

				<a
					@click="checkoutStep = 1"
					href="javascript:void(0)"
					:class="
            checkoutStep === 2
              ? 'backlink col-6 col-md-2 order-md-1'
              : 'backlink d-none'
          "
				>
					<arrowRightIcon />
					{{ $t("checkout-prev-step") }}
				</a>

				<a
					@click="checkoutStep = 2"
					href="javascript:void(0)"
					:class="
            checkoutStep === 1
              ? 'cartLink col-12 col-md-3'
              : 'cartLink col-6 col-md-4 order-md-3'
          "
				>
					<arrowRightIcon />
					<span v-if="checkoutStep === 1">{{ $t("checkout-next-step") }}</span>
					<span v-else>{{ $t("checkout-final-step") }}</span>
				</a>
			</div>
		</transition>
	</div>
</template>

<script>
	import arrowRightIcon from "@/components/ui/arrow-slim-right.vue";
	import cartIcon from "@/components/ui/cartButton.vue";
	import shareIcon from "@/components/ui/shareButton.vue";
	import removeIcon from "@/components/ui/removeIcon.vue";
	import chartContainer from "@/components/ui/chartContainer.vue";

	export default {
		name: "shoppingCartPage",
		components: {
			removeIcon,
			arrowRightIcon,
			cartIcon,
			shareIcon,
			chartContainer
		},
		data() {
			return {
				checkoutStep: 1,
				page: "",
				categoryContainers: [],
				containerItems: [],
				totalProducts: "",
				categoriesTotal: "",
				deliveryOptions: [],
				selectedShippingOption: ""
			};
		},
		created() {
			this.$http
				.get("https://www.bstone.pt/mocks/cart-list-mock.json")
				.then(response => {
					this.categoryContainers = response.data.categoryContainers;
					this.containerItems = response.data.categoryContainers.containerItems;
					this.totalProducts = response.data.totalProducts;
					this.deliveryOptions = response.data.deliveryOptions;
					this.$eventBus.$emit("pageFinishLoad", true);
				});
		},
		methods: {
			isMobile() {
				return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				);
			},
			removeProduct(product) {
				this.$store.dispatch("removeFromCart", product);
			}
		}
	};
</script>

<style lang="scss">
	body {
		margin: 0;
	}

	.shoppingcart {
		overflow-x: hidden;
	}
	#shoppingCartPage {
		width: 100vw;
		height: 100%;
		padding-top: 200px;
		margin-bottom: 200px;

		h1,
		h2,
		h3,
		p {
			font-family: "Oswald", sans-serif;
			font-weight: 400;
		}

		h2 {
			text-transform: uppercase;
			font-size: 28px;
		}

		h3 {
			text-transform: uppercase;
			font-size: 22px;
			font-weight: 300;
		}

		p {
			font-size: 18px;
			font-weight: 300;
		}
		.uppercase {
			text-transform: uppercase;
			font-weight: 400;
		}

		.cartTitle h1,
		.cartTitle2 h1 {
			font-size: 22px;
			position: relative;
			text-transform: uppercase;
			letter-spacing: 1px;
			padding-bottom: 100px;

			&:before {
				content: "";
				display: block;
				position: absolute;
				top: 13px;
				left: 230px;
				background: #b7b7b7;
				width: 50%;
				height: 1px;
			}
		}

		.cartTitle h1 {
			&:after {
				content: "";
				display: block;
				position: absolute;
				top: 13px;
				right: -30vw;
				background: #b7b7b7;
				width: 50vw;
				height: 1px;
			}
		}

		.cartTitle2 h1:before {
			left: -30vw;
			width: 28vw;
		}

		.cartTable {
			background: #f0f0f0;

			.categoryGroup {
				width: 100%;
				margin-bottom: 100px;

				.categoryTitle::after {
					content: "-";
				}

				.categoryRow {
					position: relative;
					border-bottom: 1px solid #909090;

					& > p {
						padding: 10px;
						margin-bottom: 0;
						background: #fff;
					}

					.categoryContainer {
						position: absolute;
						top: calc(50% - 70px);
						right: 0;
					}
				}

				.productCart {
					padding: 0;
					height: 190px;
					border-top: 1px solid #909090;
					margin-top: -1px;
					cursor: pointer;
					text-decoration: none;
					color: inherit;
					will-change: transform;
					-webkit-transition: transform 0.2s ease;
					-moz-transition: transform 0.2s ease;
					-o-transition: transform 0.2s ease;
					transition: transform 0.2s ease;

					&:nth-child(1) {
						transition-delay: 0s;
					}
					&:nth-child(2) {
						transition-delay: 0.1s;
					}
					&:nth-child(3) {
						transition-delay: 0.2s;
					}
					&:nth-child(4) {
						transition-delay: 0.3s;
					}
					&:nth-child(5) {
						transition-delay: 0.4s;
					}
					&:nth-child(6) {
						transition-delay: 0.5s;
					}
					&:nth-child(7) {
						transition-delay: 0.6s;
					}

					&:hover {
						//background: rgba( 255, 255, 255, .4);
						-webkit-transform: translateX(2%);
						-moz-transform: translateX(2%);
						-o-transform: translateX(2%);
						transform: translateX(2%);
					}

					img {
						width: 156px;
						height: 156px;
						padding-left: 0;
					}

					.productInfo {
						height: 150px;
						padding-left: 20px;

						h2,
						h3 {
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
						h2 {
							margin-bottom: 32px;
						}
						h3 {
							margin-bottom: 30px;
						}
					}

					&:first-child {
						border-top: 0;
					}
				}
			}
		}

		.pagecontrols {
			height: 13vh;
			width: 100%;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 0;
			margin: 0;
			z-index: 3;

			div,
			a,
			p {
				display: inline-grid;
				align-items: center;
				margin: 0;
				font-family: "Oswald", sans-serif;
				font-size: 18px;
				font-weight: 200;
				text-decoration: none;
				letter-spacing: 0.8px;
				//padding: 0 50px;
				will-change: max-width, width;
				-webkit-transition: max-width 0.4s ease, width 0.4s ease;
				-moz-transition: max-width 0.4s ease, width 0.4s ease;
				-o-transition: max-width 0.4s ease, width 0.4s ease;
				transition: max-width 0.4s ease, width 0.4s ease;
			}

			.info {
				background: #1f1f1f;
				color: #fff;
				white-space: nowrap;
				padding: 2% 5%;
				//height: 116px;

				span {
					font-family: "Oswald", sans-serif;
					font-size: 18px;
					font-weight: 200;
					padding-left: 3px;
					padding-right: 3px;
				}

				//sup{ margin-right: 20px; }

				.totalTitle {
					text-transform: uppercase;
				}
				.textColor {
					color: #c47c5a;
				}

				* {
					display: inline-flex;
				}
			}

			.cartLink {
				background: #d19173;
				color: #fff;
				position: relative;
				display: inline-flex;
				justify-content: space-between;
				padding: 0 2%;

				.cartIcon * {
					stroke: #fff;
				}

				&:before {
					position: absolute;
					top: 50%;
					left: 25%;
					content: "";
					width: 70px;
					height: 1px;
					background: #fff;
					will-change: opacity, left;
					-webkit-transition: opacity 0.2s ease, left 0.2s ease;
					-moz-transition: opacity 0.2s ease, left 0.2s ease;
					-o-transition: opacity 0.2s ease, left 0.2s ease;
					transition: opacity 0.2s ease, left 0.2s ease;
					opacity: 0;
				}

				.arrowSlimIcon {
					position: absolute;
					margin-top: 1px;
					left: calc(25% + 64px);
					will-change: opacity, left;
					-webkit-transition: opacity 0.2s ease, left 0.2s ease;
					-moz-transition: opacity 0.2s ease, left 0.2s ease;
					-o-transition: opacity 0.2s ease, left 0.2s ease;
					transition: opacity 0.2s ease, left 0.2s ease;
					opacity: 0;

					svg * {
						stroke: #fff;
					}
				}

				&:hover {
					background: #c47c5a;

					&:before {
						opacity: 1;
						left: 40%;
					}
					.arrowSlimIcon {
						opacity: 1;
						left: calc(40% + 64px);
					}
				}
			}

			.backlink {
				background: #fff;
				color: #333;
				position: relative;
				text-align: right;
				padding: 0 2%;

				&:before {
					position: absolute;
					top: 50%;
					right: 120px;
					content: "";
					width: 50px;
					height: 1px;
					background: #333;
					will-change: width;
					-webkit-transition: width 0.2s ease;
					-moz-transition: width 0.2s ease;
					-o-transition: width 0.2s ease;
					transition: width 0.2s ease;
				}

				.arrowSlimIcon {
					transform: rotate(180deg);
					position: absolute;
					//top: 44%;
					right: 164px;
					will-change: right;
					-webkit-transition: right 0.2s ease;
					-moz-transition: right 0.2s ease;
					-o-transition: right 0.2s ease;
					transition: right 0.2s ease;
				}

				&:hover {
					&:before {
						width: 70px;
					}
					.arrowSlimIcon {
						right: 180px;
					}
				}
			}
		}

		.notes {
			margin: 100px 0 20px;

			.input_group {
				margin-top: 30px;
			}
		}
	}

	@media (max-width: 812px) {
		#shoppingCartPage {
			padding-top: 125px;

			.cartTitle h1,
			.cartTitle2 h1 {
				padding-bottom: 55px;
			}
		}

		#shoppingCartPage .cartTitle h1:before,
		#shoppingCartPage .cartTitle2 h1:before {
			display: none;
		}

		#shoppingCartPage .productCart {
			background: #fff;
			border-top: 0 !important;
			margin-bottom: 2px;
		}

		#shoppingCartPage .cartTable .categoryGroup {
			& .row p {
				margin-bottom: 5px;
			}

			.categoryTitle {
				font-weight: 600;
			}

			.containerQuantity {
				font-weight: 400;
				color: #c47c5a;

				&::before {
					content: "(";
				}
				&::after {
					content: ")";
				}
			}

			.containerInfo {
				span {
					text-transform: lowercase !important;
					font-size: 20px;
					font-weight: 300;
				}

				&::before {
					content: "(";
				}
				&::after {
					content: ")";
				}
			}

			.categoryRow {
				margin-top: 20px;

				.categoryContainerMobile {
					margin-bottom: 2px;
					font-weight: 300;

					.bold {
						font-size: 20px;
						font-weight: 400;
					}

					.lowercase {
						text-transform: lowercase !important;
					}
				}
			}
		}

		#shoppingCartPage .cartTable .categoryGroup .productCart {
			padding: 25px 10px 25px 25px;
			height: 142px;

			img {
				width: 94px;
				height: 94px;
			}

			.productInfo {
				height: 94px;

				h2,
				h3 {
					margin-bottom: 14px;
				}

				h2 {
					font-size: 18px;
				}
				h3 {
					font-size: 16px;
				}
				p {
					font-size: 15px;
					margin-bottom: 0;
				}
			}

			.removebutton svg {
				rect {
					fill: #333;
				}
				path {
					stroke: #fff;
				}
			}
		}

		#shoppingCartPage .pagecontrols {
			.info {
				.totalTitle {
					text-transform: lowercase;
				}

				span {
					font-size: 16px;
					padding-left: 5px;
				}

				p {
					padding: 0 !important;
				}
			}

			.backlink,
			.backlink:hover {
				&:before {
					width: 70px;
					right: auto;
					left: 5%;
				}
				.arrowSlimIcon {
					right: auto;
					left: 5%;
				}
			}

			.cartLink,
			.cartLink:hover {
				background: #c47c5a;
				&:before {
					opacity: 1;
					right: auto;
					left: 65%;
				}
				.arrowSlimIcon {
					opacity: 1;
					right: auto;
					left: calc(65% + 64px);
				}
			}
		}
	}

	@-webkit-keyframes progress {
		0% {
			stroke-dasharray: 0 283;
		}
	}

	@-moz-keyframes progress {
		0% {
			stroke-dasharray: 0 283;
		}
	}

	@-ms-keyframes progress {
		0% {
			stroke-dasharray: 0 283;
		}
	}

	@keyframes progress {
		0% {
			stroke-dasharray: 0 283;
		}
	}
</style>
