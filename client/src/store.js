import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "memoranDEV",
    categories: [
      { id: 1, name: "all" },
      { id: 2, name: "quick" },
      { id: 3, name: "school" },
      { id: 4, name: "favorites" }
    ],
    notes: [],
    logIn: false
  },
  mutations: {
    loggingIn(state) {
      // mutate state
      state.logIn = !state.logIn;
    }
  },
  actions: {
    toggleLogIn(context) {
      context.commit("loggingIn");
    }
  }
});
