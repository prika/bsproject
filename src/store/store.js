import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //gerenciador de estado
    // state: {
    //     products:[
    //         // { id: 1, name: 'Product 1', quantity: 7, price: 14.55 },
    //         // { id: 2, name: 'Product 2', quantity: 10, price: 14.55 },
    //         // { id: 3, name: 'Product 3', quantity: 7, price: 12.55 },
    //         // { id: 4, name: 'Product 4', quantity: 3, price: 4.55 }
    //     ]
    // },
    // getters: {
    //     valorTotal(state){
    //         state.products.map(p => p.quantity * p.price).reduce((total_actual) => total + atual, 0)

    //         //usamos no computed do sitio a usar
    //         // total() {
    //         //     return this.$store.getters.valorTotal
    //         // }

    //         //ou
    //         //computed: mapGetters(['valorTotal']);
    //         //e no template
    //         //{{ valorTotal | dinheiro }}
            
    //         //ou ainda
    //         // computed: mapGetters({
    //         //     total: 'valorTotal'
    //         // })
    //         //com
    //         //{{ total | dinheiro }}
    //     }
    // },
    // mutations: {
            // adicionarProduto(state, product){
            //     state.products.push(product)
            // }
    // }

            
        // user: {
        //     name: "Variavel Global no index",
        //     user_id: "8492834083",
        //         email: "user@example.com",
        //     language: "en-gb",
        //     isLogged: false
        // },
        // page:{
        //     breadcrumb: (4) ["", "", "", ""],
        //     cookieDomainName: "",
        //     currencyCode: "EUR",
        //     locale: "en",
        //     pageId: "product"
        // }
})