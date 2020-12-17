<template>
	<section id="contactsSection" itemscope itemtype="http://schema.org/Organization">
		<div class="container">
			<div class="col-sm-12 col-md-8 col-lg-6 offset-md-2">
				<div class="contactForm">
					<h1 class="h2" v-html="formContact.title">{{formContact.title}}</h1>
					<p class="h1" v-html="formContact.subtitle">{{formContact.subtitle}}</p>

					<form id="contact" @submit.prevent="checkContactsForm" v-if="!success">
						<div class="row">
							<div class="col-xs-12 col-sm-6">
								<div class="input_group" :class="(cont_name_error ? 'error': '')">
									<input type="text" v-model="cont_name" id="cont_name" placeholder=" " />
									<label for="cont_name">{{formContact.inputname}}</label>
									<p class="errormessage">{{cont_name_validator}}</p>
								</div>
							</div>

							<div class="col-xs-12 col-sm-6">
								<div class="input_group" :class="(cont_surname_error ? 'error': '')">
									<input type="text" v-model="cont_surname" id="cont_surname" placeholder=" " />
									<label for="cont_surname">{{formContact.inputsurname}}</label>
									<p class="errormessage">{{cont_surname_validator}}</p>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-xs-12 col-sm-6">
								<div class="input_group" :class="(cont_email_error ? 'error': '')">
									<input type="email" v-model="cont_email" id="cont_email" placeholder=" " />
									<label for="cont_email">{{formContact.inputemail}}</label>
									<p class="errormessage">{{cont_email_validator}}</p>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-12">
								<div class="input_group" :class="(cont_message_error  ? 'error': '')">
									<textarea v-model="cont_message" id="cont_message" rows="1" placeholder=" "></textarea>
									<label for="cont_message">{{formContact.inputmessage}}</label>
									<p class="errormessage">{{cont_message_validator}}</p>
								</div>
							</div>
						</div>

						<div class="row d-flex align-items-center">
							<div class="input_file_group col-6" :class="(cont_file_error  ? 'error': '')">
								<input
									id="cont_file"
									type="file"
									ref="file"
									accept="image/*, .doc, .docx, .pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
									v-on:change="handleFileUpload()"
								/>
								<label for="cont_file" :aria-label="formContact.inputfile"></label>
								<p class="errormessage">{{cont_file_validator}}</p>
							</div>

							<div class="col-xs-12 col-sm-6">
								<label
									:aria-label="formContact.inputcheckbox"
									class="float-right"
									:style="(cont_checkboxPP_error  ? 'color: #FA0B4C;': '')"
								>
									<input type="checkbox" id="cont_checkboxPP" v-model="cont_checkboxPP" />
									{{formContact.inputpolicy}}
									<a
										href="https://www.bstone.pt/privacy-policy"
										target="_blank"
									>{{formContact.inputpolicyrouter}}</a>
								</label>
								<br />
								<br />
								<button class="button submitButton float-right" :aria-label="formContact.submit">
									<submitIcon>{{formContact.submit}}</submitIcon>
								</button>
							</div>
						</div>
					</form>

					<transition enter-active-class="animated slideInUp">
						<div v-if="notsuccess">
							<p class="float-right" style="color: #FA0B4C">{{notsuccess_error}}</p>
						</div>
					</transition>

					<transition enter-active-class="animated slideInRight">
						<div class="ContactFormSubmited" v-if="success">
							<p v-html="formContact.feedbacksuccess">{{formContact.feedbacksuccess}}</p>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import submitIcon from "@/components/ui/submitIcon.vue";

	export default {
		components: {
			submitIcon
		},
		data() {
			return {
				formContact: "",
				cont_name: "",
				cont_name_validator: "",
				cont_name_error: false,
				cont_surname: "",
				cont_surname_validator: "",
				cont_surname_error: false,
				cont_email: "",
				cont_email_validator: "",
				cont_email_error: false,
				cont_message: "",
				cont_message_validator: "",
				cont_message_error: false,
				cont_file: "",
				file: "",
				cont_file_validator: "",
				cont_file_error: false,
				cont_checkboxPP: "",
				cont_checkboxPP_error: false,
				success: false,
				notsuccess: false,
				notsuccess_error: "",
				error_required: "",
				error_invalid: "",
				error_file_min: "",
				error_file_max: ""
			};
		},
		created() {
			this.error_required = this.$i18n.t("input-error-required");
			this.error_invalid = this.$i18n.t("input-error-valid-email");
			this.error_file_min = this.$i18n.t("input-error-file-limit-min");
			this.error_file_max = this.$i18n.t("input-error-file-limit-max");

			this.$eventBus.$on("jsonGlobalLoaded", response => {
				this.formContact = response.data.formContact;
			});
		},
		beforeDestroy() {
			this.$eventBus.$off("jsonGlobalLoaded"); // releases the subscription
		},
		methods: {
			checkContactsForm: function(e) {
				e.preventDefault();
				if (!this.validateForm()) return;
				this.notsuccess = false;

				let data = new FormData();
				data.append("cont_file", this.file);
				data.append("cont_name", this.cont_name);
				data.append("cont_surname", this.cont_surname);
				data.append("cont_email", this.cont_email);
				data.append("cont_message", this.cont_message);

				let headers = {
					"Content-Type": "multipart/form-data"
				};

				var self = this;
				this.$http
					.post("/webservices/EnvioFormulario", data, { headers })
					.then(response => {
						this.success = true;

						setTimeout(function() {
							self.success = false;
						}, 5000);
					})
					.catch(e => {
						self.success = false;
						self.notsuccess = true;
						this.notsuccess_error = e.message;
					});
			},
			validateForm: function() {
				const validName = this.validateName();
				const validSurname = this.validateSurname();
				const validEmail = this.validateEmail();
				const validMessage = this.validateMessage();
				const validFile = this.validateFile();
				const validCheckboxPP = this.validateCheckboxPP();

				return (
					validName &&
					validSurname &&
					validEmail &&
					validMessage &&
					validFile &&
					validCheckboxPP
				);
			},
			validateName: function() {
				this.cont_name_error = this.cont_name === "";
				this.cont_name_validator = this.cont_name_error
					? this.error_required
					: "";
				return !this.cont_name_error;
			},
			validateSurname: function() {
				this.cont_surname_error = this.cont_surname === "";
				this.cont_surname_validator = this.cont_surname_error
					? this.error_required
					: "";
				return !this.cont_surname_error;
			},
			validateEmail: function() {
				if (this.cont_email === "") {
					this.cont_email_error = true;
					this.cont_email_validator = this.error_required;
					return false;
				}

				const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				if (!regex.test(this.cont_email)) {
					this.cont_email_error = true;
					this.cont_email_validator = this.error_invalid;
					return false;
				}

				this.cont_email_error = false;
				this.cont_email_validator = "";
				return true;
			},
			validateMessage: function() {
				this.cont_message_error = this.cont_message === "";
				this.cont_message_error = this.cont_message.length < 2;
				this.cont_message_validator = this.cont_message_error
					? this.error_required
					: "";
				return !this.cont_message_error;
			},
			validateFile: function() {
				var files = cont_file.files;

				if (files.length == 0) {
					this.cont_file_error = false;
					this.cont_file_validator = "";
					return true;
				} else if (files[0].size > 1024 * 1024 * 4) {
					this.cont_file_error = true;
					this.cont_file_validator = this.error_file_max;
					return false;
				}

				this.cont_file_validator = "";
				this.cont_file_error = false;
				return true;
			},
			validateCheckboxPP: function() {
				this.cont_checkboxPP_error = !this.cont_checkboxPP;
				return this.cont_checkboxPP;
			},
			handleFileUpload: function() {
				this.file = this.$refs.file.files[0];
			}
		},
		watch: {
			cont_name: function(newVal, oldVal) {
				this.validateName();
			},
			cont_surname: function(newVal, oldVal) {
				this.validateSurname();
			},
			cont_email: function(newVal, oldVal) {
				this.validateEmail();
			},
			cont_message: function(newVal, oldVal) {
				this.validateMessage();
			},
			cont_file: function(newVal, oldVal) {
				this.validateFile();
			},
			cont_checkboxPP: function(newVal, oldVal) {
				this.validateCheckboxPP();
			}
		}
	};
</script>

<style lang="scss">
	.ContactFormSubmited {
		height: 327px;
		margin: 70px 0;
	}
</style>