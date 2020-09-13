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

let API_URL = 'https://memoran-dev.herokuapp.com/notes';

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
    const callNotes = () => {
      API_URL += `/user/${this.$auth.user.nickname}`;
      
      fetch(API_URL).then(res => res.json()).then((result) => {
        this.FillNotesList(result);
      })
    }
    setTimeout(callNotes, 500);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.app-container {
  width: 100%;
  margin: 0;
  height: 100vh;
  display: flex;
}

.categoriesbar {
  background-color: #363636;
  font-family: Arial, Helvetica, sans-serif;
  padding: unset;
  height: 100vh;
  flex: 0 0 200px;
  position: relative;
}

.notesbar {
  background-color: #cecece;
  padding: unset;
  height: 100vh;
  flex: 0 0 300px;
}

.note {
  background-color: #f2f2f2;
  height: 100vh !important;
}

</style>
