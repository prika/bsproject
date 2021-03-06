<template>
	<div class="modalLogin">
		<transition
			appear
			enter-active-class="animated slideInRight"
			leave-active-class="animated slideOutRight"
		>
			<button
				class="closeLoginButton"
				v-bind:aria-label="$t('button-arialabel-close-menu')"
				@click="$emit('close')"
			>
				<closeIcon></closeIcon>
			</button>
		</transition>

		<div v-if="!success && !isLoggedIn" class="formLogin revertColor">
			<p class="h1 col-8" v-html="accountlogin.title">{{ accountlogin.title }}</p>

			<form id="login" @submit.prevent="checkLoginForm" class="col-12">
				<div class="input_group" :class="cont_email_login_error === true ? 'error' : ''">
					<input
						id="cont_email_login"
						ref="inputemail"
						v-model="cont_email_login"
						type="email"
						required
						name="email"
						autocomplete="email"
						:aria-label="accountlogin.inputuser.placeholder"
						placeholder=" "
					/>
					<label for="cont_email_login">{{accountlogin.inputuser.placeholder}}</label>
					<p class="errormessage">{{ cont_email_login_validator }}</p>
				</div>

				<div class="input_group" :class="cont_password_login_error === true ? 'error' : ''">
					<input
						id="cont_password_login"
						v-model="cont_password_login"
						type="password"
						required
						name="password"
						autocomplete="current-password"
						placeholder=" "
					/>
					<label for="cont_password_login">{{accountlogin.inputpassword.placeholder}}</label>
					<p class="errormessage">{{ cont_password_login_validator }} {{error_invalid_credentials}}</p>
				</div>

				<router-link to="/recovery" class="passwordRecoveryLink col-12">{{accountlogin.recoveryLink}}</router-link>
				<router-link to="/register" class="accountRegisterLink col-12">{{accountlogin.registerLink}}</router-link>
				<button
					class="loginLink col-12 col-md-3 col-lg-2 col-xl-1"
					type="submit"
					form="login"
				>{{ accountlogin.submit }}</button>
			</form>
		</div>

		<div v-if="isLoggedIn" class="formLogin revertColor">
			<p class="h1 col-12">Bem vindo</p>
			<br />
			<br />
			<p>Aceda aqui aos detalhes da sua conta:</p>
			<router-link to="/account" class="passwordRecoveryLink col-12">Account settings</router-link>
		</div>
	</div>
</template>

<script>
	import closeIcon from "../ui/closeIcon";
	import { mapState, mapGetters } from "vuex";

	export default {
		name: "loginModal",
		components: {
			closeIcon
		},
		data() {
			return {
				accountlogin: {
					title: "",
					subtitle: "",
					inputuser: {
						placeholder: "",
						errors: ""
					},
					inputpassword: {
						placeholder: "",
						errors: ""
					}
				},
				cont_email_login: "",
				cont_email_login_error: false,
				cont_email_login_validator: "",
				cont_password_login: "",
				cont_password_login_error: false,
				cont_password_login_validator: "",
				password_rules: [
					{ message: this.$i18n.t("input-password-lowercase"), regex: /[a-z]+/ },
					{ message: this.$i18n.t("input-password-uppercase"), regex: /[A-Z]+/ },
					{ message: this.$i18n.t("input-password-car-min"), regex: /.{8,}/ },
					{ message: this.$i18n.t("input-password-number"), regex: /[0-9]+/ }
				],
				success: false,
				error_required: "",
				error_invalid: "",
				error_invalid_credentials: ""
			};
		},
		created() {
			this.error_required = this.$i18n.t("input-error-required");
			this.error_invalid = this.$i18n.t("input-error-valid-email");

			this.$http 
				.get("https://www.bstone.pt/webservices/" +
						this.$i18n.locale +
						"/account")
				.then(response => {
					this.accountlogin = response.data.accountlogin;
					this.$refs.inputemail.focus();
				});
			
		},
		computed: {
			...mapGetters(["isLoggedIn"]),
			emailValidation() {
				const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				let hasError = !regex.test(this.cont_email_login);
				this.cont_email_login_error = hasError;
				this.cont_email_login_validator = hasError ? this.error_invalid : "";
				return !hasError;
			},
			passwordValidation() {
				let errors = [];

				for (let condition of this.password_rules) {
					if (!condition.regex.test(this.cont_password_login)) {
						errors.push(condition);
					}
				}

				if (errors.length === 0) {
					return { valid: true, errors };
				} else {
					return { valid: false, errors };
				}
			},
			isLoggedIn: function() {
				return this.$store.getters.isLoggedIn;
			}
		},
		methods: {
			checkLoginForm: function(e) {
				//e.preventDefault()
				if (!this.validateForm()) return;

				const obj = {
					email: this.cont_email_login,
					password: this.cont_password_login
				};

				const data = Object.keys(obj)
  					.map((key, index) => `${key}=${encodeURIComponent(obj[key])}`)
  					.join('&');

				let headers = {
				    'Content-Type': 'application/x-www-form-urlencoded'
				};

				var self = this;
				this.$http
					.post( "/webservices/createsanctumtoken", data, { headers })
					.then(response => {
						this.$store.dispatch("login", response.data);
						this.success = true;

						if (this.$parent.redirectURL != "") {
							this.$router.push(this.$parent.redirectURL);
							this.$parent.showLoginForm = false;
						}
					})
					.catch(error => {
						this.success = false;
						this.cont_email_login_error = false;
						this.cont_password_login_error = true;
						this.error_invalid_credentials = error.response.data.message;

						setTimeout(function() {
							self.cont_email_login_error = false;
							self.cont_password_login_error = false;
							self.error_invalid_credentials = '';
							self.cont_password_login = '';
						}, 5000);

					});
			},
			validateForm: function() {
				const validEmail = this.validateEmail();
				const validPassword = this.validatePassword();
				return validEmail && validPassword;
			},
			validateEmail: function() {
				if (cont_email_login.value === "") {
					this.cont_email_login_error = true;
					this.cont_email_login_validator = this.cont_email_login_error
						? this.error_required
						: "";
				} else {
					this.emailValidation;
				}

				return !this.cont_email_login_error;
			},
			validatePassword: function() {
				if (cont_password_login.value == "") {
					this.cont_password_login_error = true;
					this.cont_password_login_validator = this.cont_password_login_error
						? this.error_required
						: "";
				} else {
					this.cont_password_login_error = false;
					this.cont_password_login_validator = this.cont_password_login_error
						? ""
						: "";
				}

				return !this.cont_password_login_error;
			}
		},
		watch: {
			cont_email_login: function(newVal, oldVal) {
				this.validateEmail();
			},
			cont_password_login: function(newVal, oldVal) {
				this.validatePassword();
			}
		}
	};
</script>

<style lang="scss">
	.modalLogin {
		position: fixed;
		top: 0;
		right: 0;

		.closeLoginButton {
			background: #333;
			border: 0;
			position: fixed;
			top: 0;
			right: 0;
			width: 124px;
			height: 124px;

			rect {
				display: none;
			}
		}

		.formLogin {
			margin-top: 124px;
			background: black;
			height: 500px;
			width: 430px;
			background: #2a2a2a;
			padding: 60px;

			form#login {
				display: block;
				height: 100%;
			}
			p.h1 {
				width: 100%;
				font-size: 36px;
				white-space: normal;
			}

			a.passwordRecoveryLink,
			a.accountRegisterLink {
				float: left;
				display: block;
				padding: 0;
			}

			a.accountRegisterLink {
				margin-top: 55px;
			}

			.loginLink {
				background-color: #000;
				font-size: 20px;
				padding: 25px 10px;
				outline: none;
				border: none;
				position: fixed;
				top: 580px;
				right: 0;
				will-change: background-color;
				-webkit-transition: background-color 0.4s cubic-bezier(0, 0.5, 0, 1);
				-moz-transition: background-color 0.4s cubic-bezier(0, 0.5, 0, 1);
				-o-transition: background-color 0.4s cubic-bezier(0, 0.5, 0, 1);
				transition: background-color 0.4s cubic-bezier(0, 0.5, 0, 1);

				&:hover {
					background-color: #c47c5a;
				}
			}
		}
	}

	@media (max-width: 812px) {
		.modalLogin {
			.closeLoginButton {
				width: 94px;
				height: 68px;
			}
			.formLogin {
				margin-top: 68px;
				width: 100vw;
				height: calc(100vh - 68px - 75px);
				padding: 75px 25px;
				overflow: auto;

				p.h1 {
					margin-bottom: 60px;
				}

				.passwordRecoveryLink,
				.accountRegisterLink {
					text-align: center;
				}

				a.accountRegisterLink {
					margin-top: 130px;
					margin-bottom: 110px;
				}

				.loginLink {
					top: inherit;
					bottom: 0;
					padding: 30px 60px;
				}
			}
		}

		.pageReduced.accountPage.accountInfo,
		.pageReduced.accountPage.accountPageRegister,
		.pageReduced.accountPage.accountRecovery {
			padding-top: 150px;

			.containerReduced {
				float: none;
				overflow: scroll;
				-webkit-overflow-scrolling: touch;
				height: 100% !important;
				padding: 0 15px 200px 15px !important;
				margin: 0 !important;
			}

			.submitButton.extendedButton {
				position: relative;
				margin: 0;
				left: auto;
				width: 100%;
				top: auto;
				margin-bottom: 70px;

				.text {
					width: 100%;
					padding: 15px;
					text-align: center;
					font-size: 25px;
					font-weight: 200;
					color: inherit;
					text-decoration: underline;
				}

				.arrow,
				.icon {
					display: none;
				}
			}

			h1 {
				font-size: 38px;
				text-align: center;
				margin-bottom: 20px;
			}

			.subtitle {
				text-align: center;
				margin-bottom: 70px;
				font-size: 20px;

				br {
					display: none;
				}
			}

			form {
				margin-top: 50px;
			}
			.passwordValidationRules {
				display: none;
			}
			.submitButton {
				margin-top: 70px;
			}
		}
	}
</style>
