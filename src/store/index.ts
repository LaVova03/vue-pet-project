import { createStore } from "vuex";

export interface State {
  count: number;
}

export default createStore<State>({
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => state.count * 2,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
});
