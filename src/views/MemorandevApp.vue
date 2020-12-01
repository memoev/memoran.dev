<template>
  <div class="app-container">
    <div class="categoriesbar">
      <CategoriesBar />
    </div>
    <div class="notesbar">
      <NotesBar />
    </div>
    <div class="note">
      <NoteDisplay v-if="this.$store.state.selectedNote._id && !this.$store.state.createNote"/>
      <NewNote v-if="this.$store.state.createNote"/>
    </div>
  </div>
</template>

<script>
import CategoriesBar from '../components/CategoriesBar/CategoriesBar.vue';
import NotesBar from '../components/NotesBar/NotesBar.vue';
import NoteDisplay from '../components/NoteDisplay.vue'
import NewNote from '../components/NotesBar/NewNote.vue'
import { mapActions } from 'vuex';

export default {
  name: 'MemorandevApp',
  components: {
    CategoriesBar,
    NotesBar,
    NoteDisplay,
    NewNote
  },
  methods: {
    ...mapActions({
      FillNotesList: 'FillNotesList',
    })
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.app-container {
  margin: 0;
  height: 100vh;
  display: flex;
  width: 100%;
}

.categoriesbar {
  background-color: #363636;
  font-family: Arial, Helvetica, sans-serif;
  padding: unset;
  height: 100vh;
  flex: 0 0 195px;
  position: relative;
  border-right: 2px solid #000;
}

.notesbar {
  background-color: #282828;
  padding: unset;
  height: 100vh;
  flex: 0 0 260px;
}

.note {
  background-color: #d2d2d2;
  height: 100vh !important;
  flex: auto;
  min-width: 600px;
}

</style>
