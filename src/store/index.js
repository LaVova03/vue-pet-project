import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            token: ''
        }
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        }
    },
})

export default store
