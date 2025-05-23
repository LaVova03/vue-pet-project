import { BASE_URL } from '@/constants'
import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            data: null,
            product: null,
            productsInCart: [],
        }
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setProduct(state, payload) {
            state.product = payload
        },
        addProductInCart(state, payload) {
            state.productsInCart.push(payload);
            state.productsInCart.flat(1);
        },
        deleteFromCart(state, index) {
            const indexItem = state.productsInCart.findIndex(el => el.id == index);
            if (indexItem !== -1) {
                state.productsInCart.splice(indexItem, 1)
            }
        },
        clearCart(state) {
            state.productsInCart = [];
        }
    },
    actions: {
        async fetchData({ commit }) {
            try {
                const response = await axios.get(`${BASE_URL}`);
                if (response.status === 200) {
                    commit('setData', response.data);
                }
            } catch (error) {
                console.error('Error with get data', error)
            }
        },
    }
})

export default store;
