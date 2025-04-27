import { BASE_URL } from '@/constants'
import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            token: sessionStorage.getItem('token') || '',
            data: null
        }
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setData(state, payload) {
            state.data = payload
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
        }
    }
})

export default store;
