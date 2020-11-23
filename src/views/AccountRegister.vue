<template>
  <div class="accountPage pageReduced accountPageRegister">
    <div class="containerReduced">
      <transition
        appear
        enter-active-class="animated slideInDown faster"
        leave-active-class="animated slideOutUp faster"
      >
        <button class="closebutton" @click="$router.go(-1)">
          <closeIcon />
        </button>
      </transition>

      <h1 v-html="accountregister.title">{{ accountregister.title }}</h1>

      <div v-if="!success">
        <p v-html="accountregister.subtitle" class="subtitle">
          {{ accountregister.subtitle }}
        </p>

        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <form id="register" @submit.prevent="checkFormRegister">
            <div class="row">
              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="cont_name_register_error === true ? 'error' : ''"
                >
                  <input
                    id="cont_name_register"
                    v-model.lazy="cont_name_register"
                    type="text"
                    required
                    name="name"
                    autocomplete="name"
                    :aria-label="accountregister.inputname.placeholder"
                    placeholder=" "
                  />
                  <label for="cont_name_register">{{
                    accountregister.inputname.placeholder
                  }}</label>
                  <p class="errormessage">{{ cont_name_register_validator }}</p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="cont_surname_register_error === true ? 'error' : ''"
                >
                  <input
                    id="cont_surname_register"
                    v-model.lazy="cont_surname_register"
                    type="text"
                    required
                    name="lname"
                    autocomplete="family-name"
                    :aria-label="accountregister.inputsurname.placeholder"
                    placeholder=" "
                  />
                  <label for="cont_surname_register">{{
                    accountregister.inputsurname.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_surname_register_validator }}
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="cont_company_register_error === true ? 'error' : ''"
                >
                  <input
                    id="cont_company_register"
                    v-model.lazy="cont_company_register"
                    type="text"
                    required
                    :aria-label="accountregister.inputcompany.placeholder"
                    placeholder=" "
                  />
                  <label for="cont_company_register">{{
                    accountregister.inputcompany.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_company_register_validator }}
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="cont_country_register_error === true ? 'error' : ''"
                >
                  <select
                    id="cont_country_register"
                    v-model.lazy="cont_country_register"
                    required
                    name="country"
                    autocomplete="country"
                    :class="cont_country_register.length > 0 ? 'selected' : ''"
                    :aria-label="accountregister.inputcountry.placeholder"
                    placeholder=" "
                  >
                    <option
                      v-for="(country, c) in accountregister.inputcountry
                        .options"
                      :key="c"
                      >{{ country.name }}</option
                    >
                  </select>
                  <label for="cont_country_register">{{
                    accountregister.inputcountry.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_country_register_validator }}
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="cont_phone_register_error === true ? 'error' : ''"
                >
                  <input
                    id="cont_phone_register"
                    v-model.lazy="cont_phone_register"
                    required
                    type="number"
                    pattern="/^\d{10,}(?:,\d{10,})*$/"
                    name="phone"
                    autocomplete="tel"
                    :aria-label="accountregister.inputphone.placeholder"
                    placeholder=" "
                  />
                  <label for="cont_phone_register">{{
                    accountregister.inputphone.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_phone_register_validator }}
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6"></div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="cont_email_register_error === true ? 'error' : ''"
                >
                  <input
                    id="cont_email_register"
                    v-model="cont_email_register"
                    type="email"
                    required
                    name="email"
                    autocomplete="email"
                    :aria-label="accountregister.inputemail.placeholder"
                    placeholder=" "
                  />
                  <label for="cont_email_register">{{
                    accountregister.inputemail.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_email_register_validator }}
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="
                    cont_email_confirm_register_error === true ? 'error' : ''
                  "
                >
                  <input
                    id="cont_email_confirm_register"
                    v-model="cont_email_confirm_register"
                    type="email"
                    required
                    name="email"
                    autocomplete="email"
                    :disabled="disabledInputEmail"
                    :aria-label="accountregister.inputemailconfirm.placeholder"
                    placeholder=" "
                  />
                  <label for="cont_email_confirm_register">{{
                    accountregister.inputemailconfirm.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_email_confirm_register_validator }}
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="cont_password_register_error === true ? 'error' : ''"
                >
                  <input
                    id="cont_password_register"
                    v-model="cont_password_register"
                    type="password"
                    required
                    name="password"
                    autocomplete="new-password"
                    :aria-label="accountregister.inputpassword.placeholder"
                    placeholder=" "
                  />
                  <label for="cont_password_register">{{
                    accountregister.inputpassword.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_password_register_validator }}
                  </p>
                  <ul class="passwordValidationRules">
                    <li
                      v-for="(error, e) in passwordValidation.errors"
                      :key="e"
                    >
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="input_group"
                  :class="
                    cont_password_confirm_register_error === true ? 'error' : ''
                  "
                >
                  <input
                    id="cont_password_confirm_register"
                    v-model="cont_password_confirm_register"
                    type="password"
                    required
                    :disabled="disabledInput"
                    name="password"
                    autocomplete="new-password"
                    :aria-label="
                      accountregister.inputpasswordconfirm.placeholder
                    "
                    placeholder=" "
                  />
                  <label for="cont_password_confirm_register">{{
                    accountregister.inputpasswordconfirm.placeholder
                  }}</label>
                  <p class="errormessage">
                    {{ cont_password_confirm_register_validator }}
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6"></div>
              <div class="col-12 col-md-6">
                <button
                  class="button submitButton float-right"
                  :aria-label="accountregister.submit"
                >
                  <submitIcon>{{ accountregister.submit }}</submitIcon>
                </button>
              </div>
            </div>
          </form>
        </transition>
      </div>

      <transition
        enter-active-class="animated fadeIn faster"
        leave-active-class="animated fadeOut faster"
      >
        <div class="col-12" v-if="success">
          <p v-html="accountregister.success">{{ accountregister.success }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import closeIcon from "../components/ui/closeIcon.vue";
import submitIcon from "@/components/ui/submitIcon.vue";

export default {
  name: "accountRegister",
  components: {
    closeIcon,
    submitIcon,
  },
  data() {
    return {
      accountregister: {
        title: "",
        subtitle: "",
        inputname: {
          placeholder: "",
          errors: "",
        },
        inputsurname: {
          placeholder: "",
          errors: "",
        },
        inputphone: {
          placeholder: "",
          errors: "",
        },
        inputcompany: {
          placeholder: "",
          errors: "",
        },
        inputemail: {
          placeholder: "",
          errors: "",
        },
        inputemailconfirm: {
          placeholder: "",
          errors: "",
        },
        inputpassword: {
          placeholder: "",
          errors: "",
        },
        inputpasswordconfirm: {
          placeholder: "",
          errors: "",
        },
        inputcountry: {
          placeholder: "",
          errors: "",
          options: [],
        },
        submit: "",
        success: "",
      },
      cont_name_register: "",
      cont_name_register_validator: "",
      cont_name_register_error: false,
      cont_surname_register: "",
      cont_surname_register_validator: "",
      cont_surname_register_error: false,
      cont_phone_register: "",
      cont_phone_register_validator: "",
      cont_phone_register_error: false,
      cont_company_register: "",
      cont_company_register_validator: "",
      cont_company_register_error: false,
      cont_email_register: "",
      cont_email_register_validator: "",
      cont_email_register_error: false,
      cont_email_confirm_register: "",
      cont_email_confirm_register_validator: "",
      cont_email_confirm_register_error: false,
      cont_password_register: "",
      cont_password_register_validator: "",
      cont_password_register_error: false,
      cont_password_confirm_register: "",
      cont_password_confirm_register_validator: "",
      cont_password_confirm_register_error: false,
      cont_country_register: "",
      cont_country_register_validator: "",
      cont_country_register_error: false,
      password_rules: [
        { message: this.$i18n.t("input-password-lowercase"), regex: /[a-z]+/ },
        { message: this.$i18n.t("input-password-uppercase"), regex: /[A-Z]+/ },
        { message: this.$i18n.t("input-password-car-min"), regex: /.{8,}/ },
        { message: this.$i18n.t("input-password-number"), regex: /[0-9]+/ },
      ],
      success: false,
      error_required: "",
      error_invalid: "",
      error_email_confirmation: "",
      error_password_confirmation: "",
    };
  },
  created() {
    this.error_required = this.$i18n.t("input-error-required");
    this.error_invalid = this.$i18n.t("input-error-valid-email");
    this.error_email_confirmation = this.$i18n.t("input-email-confirmation");
    this.error_password_confirmation = this.$i18n.t(
      "input-password-confirmation"
    );

    this.$http
      .get("https://www.bstone.pt/mocks/account-mock.json")
      .then((response) => {
        this.accountregister = response.data.accountregister;
        this.$eventBus.$emit("pageFinishLoad", true);
      });
  },
  computed: {
    emailValidation() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let hasError = !regex.test(this.cont_email_register);
      this.cont_email_register_error = hasError;
      this.cont_email_register_validator = hasError ? this.error_invalid : "";
      return !hasError;
    },
    disabledInputEmail() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !regex.test(this.cont_email_register);
    },
    passwordValidation() {
      let errors = [];

      for (let condition of this.password_rules) {
        if (!condition.regex.test(this.cont_password_register)) {
          errors.push(condition.message);
        }
      }

      if (errors.length === 0) {
        return { valid: true, errors };
      } else {
        return { valid: false, errors };
      }
    },
    disabledInput() {
      return !this.passwordValidation.valid;
    },
  },
  methods: {
    checkFormRegister: function(e) {
      //e.preventDefault()
      if (!this.validateForm()) return;

      const data = {
        cont_name_register: this.cont_name_register,
        cont_surname_register: this.cont_surname_register,
        cont_phone_register: this.cont_phone_register,
        cont_company_register: this.cont_company_register,
        cont_email_register: this.cont_email_register,
        cont_email_confirm_register: this.cont_email_confirm_register,
        cont_password_register: this.cont_password_register,
        cont_password_confirm_register: this.cont_password_confirm_register,
        cont_country_register: this.cont_country_register,
      };

      var self = this;
      this.$http
        .post(
          "https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribe",
          data
        )
        .then((response) => {
          this.success = true;

          setTimeout(function() {
            self.success = false;
          }, 10000);
        })
        .catch((e) => {
          this.errors.push(e.message);
        });
    },
    validateForm: function() {
      const validName = this.validateName();
      const validSurname = this.validateSurname();
      const validPhone = this.validatePhone();
      const validCompany = this.validateCompany();
      const validEmail = this.validateEmail();
      const validEmailCheck = this.validateEmailCheck();
      const validPassword = this.validatePassword();
      const validConfirmPassword = this.validateConfirmationPassword();
      const validCountry = this.validateCountry();

      return (
        validName &&
        validSurname &&
        validPhone &&
        validCompany &&
        validEmail &&
        validEmailCheck &&
        validPassword &&
        validConfirmPassword &&
        validCountry
      );
    },
    validateName: function() {
      this.cont_name_register_error = this.cont_name_register === "";
      this.cont_name_register_validator = this.cont_name_register_error
        ? this.error_required
        : "";
      return !this.cont_name_register_error;
    },
    validateSurname: function() {
      this.cont_surname_register_error = this.cont_surname_register === "";
      this.cont_surname_register_validator = this.cont_surname_register_error
        ? this.error_required
        : "";
      return !this.cont_surname_register_error;
    },
    validatePhone: function() {
      this.cont_phone_register_error = this.cont_phone_register === "";
      this.cont_phone_register_validator = this.cont_phone_register_error
        ? this.error_required
        : "";
      return !this.cont_phone_register_error;
    },
    validateCompany: function() {
      this.cont_company_register_error = this.cont_company_register === "";
      this.cont_company_register_validator = this.cont_company_register_error
        ? this.error_required
        : "";
      return !this.cont_company_register_error;
    },
    validateEmail: function() {
      if (cont_email_register.value === "") {
        this.cont_email_register_error = true;
        this.cont_email_register_validator = this.cont_email_register_error
          ? this.error_required
          : "";
        return false;
      } else {
        this.emailValidation;
        return false;
      }

      return !this.cont_email_register_error;
    },
    validateEmailCheck: function() {
      if (cont_email_confirm_register.value == "") {
        this.cont_email_confirm_register_error = true;
        this.cont_email_confirm_register_validator = this
          .cont_email_confirm_register_error
          ? this.error_required
          : "";
      } else {
        if (cont_email_register.value != cont_email_confirm_register.value) {
          this.cont_email_confirm_register_error = true;
          this.cont_email_confirm_register_validator = this
            .cont_email_confirm_register_error
            ? this.error_email_confirmation
            : "";
        } else {
          this.cont_email_confirm_register_error = false;
          this.cont_email_confirm_register_validator = this
            .cont_email_confirm_register_error
            ? ""
            : "";
        }
      }

      return !this.cont_email_confirm_register_error;
    },
    validatePassword: function() {
      if (cont_password_register.value == "") {
        this.cont_password_register_error = true;
        this.cont_password_register_validator = this
          .cont_password_register_error
          ? this.error_required
          : "";
      } else {
        this.passwordValidation;
        this.cont_password_register_error = false;
        this.cont_password_register_validator = this
          .cont_password_register_error
          ? ""
          : "";
      }

      return !this.cont_password_register_error;
    },
    validateConfirmationPassword: function() {
      if (cont_password_confirm_register.value == "") {
        this.cont_password_confirm_register_error = true;
        this.cont_password_confirm_register_validator = this
          .cont_password_confirm_register_error
          ? this.error_required
          : "";
      } else {
        if (
          cont_password_register.value != cont_password_confirm_register.value
        ) {
          this.cont_password_confirm_register_error = true;
          this.cont_password_confirm_register_validator = this
            .cont_password_confirm_register_error
            ? this.error_password_confirmation
            : "";
        } else {
          this.cont_password_confirm_register_error = false;
          this.cont_password_confirm_register_validator = this
            .cont_password_confirm_register_error
            ? ""
            : "";
        }
      }

      return !this.cont_password_confirm_register_error;
    },
    validateCountry: function() {
      this.cont_country_register_error = this.cont_country_register === "";
      this.cont_country_register_validator = this.cont_country_register_error
        ? this.error_required
        : "";
      return !this.cont_country_register_error;
    },
  },
  watch: {
    cont_name_register: function(newVal, oldVal) {
      this.validateName();
    },
    cont_surname_register: function(newVal, oldVal) {
      this.validateSurname();
    },
    cont_phone_register: function(newVal, oldVal) {
      this.validatePhone();
    },
    cont_company_register: function(newVal, oldVal) {
      this.validateCompany();
    },
    cont_email_register: function(newVal, oldVal) {
      this.validateEmail();
    },
    cont_email_confirm_register: function(newVal, oldVal) {
      this.validateEmailCheck();
    },
    cont_password_register: function(newVal, oldVal) {
      this.validatePassword();
    },
    cont_password_confirm_register: function(newVal, oldVal) {
      this.validateConfirmationPassword();
    },
    cont_country_register: function(newVal, oldVal) {
      this.validateCountry();
    },
  },
};
</script>

<style lang="scss">
.pageReduced.accountPage {
  width: 100%;
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff url(../assets/images/B_Simbolo_estatico_Contactos.svg)
    no-repeat 10% 60vh;
  background-size: 350px;

  .containerReduced {
    width: 100%;
    max-width: 880px;
    height: 100vh;
    position: relative;
    float: right;
    padding: 10% 5% 5% 20px;
    margin-right: 10%;
  }
}

.accountPageRegister {
  .containerReduced {
    padding: 10% 5% 5% 20px;
  }
}
.passwordValidationRules {
  padding: 15px 15px 0;
  height: 100px;

  li {
    font-weight: 200;
    font-size: 14px;
  }
}
</style>
