import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "memoran.DEV",
    openbook: true,
    categories: [
      { id: 1, name: "all" },
      { id: 2, name: "quick" },
      { id: 3, name: "school" },
      { id: 4, name: "favorites" }
    ],
    notes: [],
    selectedNote: {},
    logIn: false,
    createNote: false
  },
  mutations: {
    openBook(state) {
      // mutate state
      state.openbook = !state.openbook;
    }
  },
  actions: {
    toggleBook(context) {
      context.commit("openBook");
    }
  }
});
