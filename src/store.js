import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "memoran.DEV",
    openbook: false,
    categories: [
      { id: 1, name: "All", icon: "code" },
      { id: 2, name: "Quick", icon: "bolt" },
      { id: 3, name: "School", icon: "book" },
      { id: 4, name: "Favorites", icon: "star" }
    ],
    notes: [],
    selectedNote: {},
    createNote: false
  },
  mutations: {
    openBook(state) {
      // mutate state without payload
      state.openbook = !state.openbook;
    },
    initNote(state) {
      // mutate state without payload
      state.createNote = !state.createNote;
    },
    setNotesList(state, payload) {
      // mutate state with payload
      state.notes.push(payload)
    },
    getNotesList(state, payload) {
      payload.forEach(i => {
        state.notes.push(i);
      });
    },
    selectNote(state, payload) {
      // mutate state with payload
      state.selectedNote = payload;
    },
    removeNote(state, payload) {
      const index = state.notes.indexOf(payload);
      if (index > -1) {
        state.notes.splice(index, 1);
      }
    }
  },
  actions: {
    toggleBook(context) {
      context.commit("openBook");
    },
    toggleNewNote(context) {
      context.commit("initNote");
    },
    FillNotesList(context, notesList) {
      context.commit("setNotesList", notesList);
    },
    initNotesList(context, notesList) {
      context.commit("getNotesList", notesList);
    },
    pushSelectedNote(context, note) {
      context.commit("selectNote", note)
    },
    deleteSelectedNote(context, note) {
      context.commit("removeNote", note)
    }
  }
});
