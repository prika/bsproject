<template>
    <section id="contactsSection" itemscope itemtype="http://schema.org/Organization">
       
       <div class="container">
       <div class="col-6 offset-md-2">
            <div class="contactForm">
                <h1 class="h2">Fale conosco</h1>
                <p class="h1">  Dê-nos uma <br> palavrinha </p>
                <form id="contact"
                    @submit="checkForm"
                    action="https://vuejs.org/"
                    method="post"
                    novalidate="true">

                    <div class="row">
                        <div class="col-6">
                        <div class="input_group">
                            <input type="text" id="name">
                            <label for="form1">Nome</label>
                            <span class="bar"></span>
                        </div>
                        </div>

                        <div class="col-6">
                        <div class="input_group">
                            <input type="text" id="surname">
                            <label for="form1">Sobrenome</label>
                            <span class="bar"></span>
                        </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                        <div class="input_group">
                            <input type="email" id="email">
                            <label for="form1">Email</label>
                            <span class="bar"></span>
                        </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                        <div class="input_group">
                            <textarea  id="" rows="1"></textarea>
                            <label for="form1">Mensagem</label>
                            <span class="bar"></span>
                        </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <input type="file">
                        </div>

                         <div class="col-6">
                            <input class="button" type="submit" :aria-label="$t('footer-submit-email')">
                        </div>
                    </div>

                 
                   
           
                    
                    
                    
                    <p style="height: 30px; color: red">
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
            errors: [],
            email: null
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.email) {
                this.errors.push('[[Email required.]]');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('[[Valid email required.]]');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
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