<template>
    <section id="contactsSection" itemscope itemtype="http://schema.org/Organization">
       
       <div class="container">
       <div class="col-sm-12 col-md-8 col-lg-6 offset-md-2">
            <div class="contactForm">
                <h1 class="h2" v-html="formContact.title">{{formContact.title}}</h1>
                <p class="h1" v-html="formContact.subtitle">{{formContact.subtitle}}</p>
                <form id="contact"
                    @submit.prevent="checkContactsForm"
                    method="post"
                    novalidate="true">

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                        <div class="input_group">
                            <input type="text" 
                                    v-model="cont_name"
                                    id="cont_name" placeholder=" ">
                            <label for="cont_name">{{formContact.inputname}}</label>
                            <span class="bar"></span>
                        </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                        <div class="input_group">
                            <input type="text" 
                                    v-model="cont_surname"
                                    id="cont_surname" placeholder=" ">
                            <label for="cont_surname">{{formContact.inputsurname}}</label>
                            <span class="bar"></span>
                        </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                        <div class="input_group">
                            <input  type="email" 
                                    v-model="cont_email"
                                    id="cont_email" placeholder=" ">
                            <label for="cont_email">{{formContact.inputemail}}</label>
                            <span class="bar"></span>
                        </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                        <div class="input_group">
                            <textarea v-model="cont_message"
                                        id="cont_message" rows="1" placeholder=" "></textarea>
                            <label for="cont_message">{{formContact.inputmessage}}</label>
                            <span class="bar"></span>
                        </div>
                        </div>
                    </div>

                    <div class="row d-flex align-items-center">
                        <div class="col-xs-12 col-sm-6">
                            <input id="cont_file" type="file">
                            <label for="cont_file" :aria-label="formContact.inputfile"></label>
                        </div>

                         <div class="col-xs-12 col-sm-6">
                            <button class="button submitForm" :aria-label="formContact.submit">
                                <span class="text">{{formContact.submit}}</span>
                                <span class="arrow"></span>
                                <span class="icon">
                                    <svg class="svgpath" :alt="formContact.inputfile" xmlns="http://www.w3.org/2000/svg" width="8.821" height="14.813" viewBox="0 0 8.821 14.813">
                                        <path d="M230.221,220.144l-6.7-6.7,6.7-6.7" transform="translate(230.928 220.851) rotate(180)" fill="none" stroke="#c47c5a" stroke-miterlimit="10" stroke-width="2"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <p style="color: red; margin-top: 36px;">
                        <span v-if="errors.length">{{ $t('footer-newsletter-error') }}</span>
                        <ul v-if="errors.length">
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                </form>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formContact: '',
            errors: [],
            cont_name: '',
            cont_surname: '',
            cont_email: '',
            cont_message: ''
        }
    },
    created() {
      this.$eventBus.$on('jsonGlobalLoaded', (response) => {
          this.formContact = response.data.formContact
      });
    },
    methods: {
        checkContactsForm: function (e) {
            
            e.preventDefault()
            if(!this.validEmail()) return
            
            const data = { 
                cont_name: this.cont_name,
                cont_surname: this.cont_surname,
                cont_email: this.cont_email,
                cont_message: this.cont_message
            }
            
            console.log( "data: "+data )
            var self = this;

            console.log( "self: "+self )

            this.$http.post('https://bafdc7b9-222e-4e30-a8ec-f760c186fb05.mock.pstmn.io/subscribe', data).then(response => {
                this.success = true
                
                setTimeout(function(){
                    self.success = false
                }, 2500)

            }).catch((e) => {
                this.errors.push(e.message)
            })
        },
         validEmail: function () {
            
            if (!this.cont_email) // No email 
            {
                this.errors.push('[[Email required.]]');
                return false
            } 
            
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (re.test(cont_email))
            {
                this.errors.push('[[Valid email required.]]');
                return false
            }
            return true
         }
    }
}


// $("input, textarea")
//         .on("input", function (d) {
//             if ($(this).val().length > 0) {
//                 $(this).addClass("edited");
//             } else {
//                 $(this).removeClass("edited");
//             }
//         })
//         .each(function () {
//             if ($(this).val().length > 0) {
//                 $(this).addClass("edited");
//             } else {
//                 $(this).removeClass("edited");
//             }
//         });
//     $(".hasDatepicker")
//         .blur(function () {
//             if ($(this).val().length > 0) {
//                 $(this).addClass("edited");
//             } else {
//                 $(this).removeClass("edited");
//             }
//         })
//         .each(function () {
//             console.log("1");
//             if ($(this).val().length > 0) {
//                 $(this).addClass("edited");
//             } else {
//                 $(this).removeClass("edited");
//             }
//         });
</script>

<style lang="scss">

</style>