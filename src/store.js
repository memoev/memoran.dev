import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "My Custom Title",
    categories: [
      { id: 1, name: "All Notes" },
      { id: 2, name: "Quick Notes" },
      { id: 3, name: "Favorites" }
    ],
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
        context.commit('loggingIn');
      }
  }
});
