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
        },
        removeItem(state, id) {
            state.data = state.data.filter(item => item.id !== id)
        },
        updateItem(state, item) {
            const index = state.data.findIndex(el => el.id === item.id);
            if (index !== -1) {
                state.data.splice(index, 1, item);
            }
        },
        postItem(state, item) {
            state.data.push(item)
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
        async deleteItem({ commit }, id) {
            try {
                const response = await axios.delete(`${BASE_URL}/${id}`);
                if (response.status === 200) {
                    commit('removeItem', id);
                }
            } catch (error) {
                console.error('Error with delete data', error)
            }
        },
        async editItem({ commit }, item) {
            try {
                const response = await axios.put(`${BASE_URL}/${item.id}`, item);
                if (response.status === 200) {
                    commit('updateItem', response.data);
                }
            } catch (error) {
                console.error('Error with edit data', error)
            }
        },
        async createItem({ commit }, item) {
            try {
                const response = await axios.post(`${BASE_URL}`, item);
                if (response.status === 200 || 201) {
                    commit('postItem', response.data);
                }
            } catch (error) {
                console.error('Error with create data', error)
            }
        }
    }
})

export default store;
