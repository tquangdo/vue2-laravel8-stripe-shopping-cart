require('./bootstrap')

import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes.js')
});

const store = new Vuex.Store({
    state: {
        state_products: [],
        state_cart: [],
        state_order: {}
    },
    mutations: {
        onUpdateProducts(state, arg_products) {
            state.state_products = arg_products;
        },
        addToCart(state, arg_product) {
            let productInCartIndex = state.state_cart.findIndex(item => item.slug === arg_product.slug);
            if (productInCartIndex !== -1) {
                state.state_cart[productInCartIndex].quantity++;
                return;
            }

            arg_product.quantity = 1;
            state.state_cart.push(arg_product);
        },
        removeFromCart(state, arg_index) {
            state.state_cart.splice(arg_index, 1);
        },
        updateOrder(state, arg_order) {
            state.state_order = arg_order;
        },
        onUpdateCart(state, arg_cart) {
            state.state_cart = arg_cart;
        }
    },
    actions: {
        onGetProducts({ commit }) {
            // fetch the categories and attached products from the api
            axios.get('/api/products')
                .then((response) => {
                    commit('onUpdateProducts', response.data);
                })
                .catch((error) => console.error(error));
        },
        clearCart({ commit }) {
            commit('onUpdateCart', []);
        }
    }
});

const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('onGetProducts')
            .then(_ => { })
            .catch((error) => console.error(error));
    }
});