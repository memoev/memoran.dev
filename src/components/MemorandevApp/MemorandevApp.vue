<template>
  <div>
    <div>
      <div class="row">
        <div class="col-1 categoriesbar">
          <CategoriesBar />
        </div>
        <div class="col-2 notesbar">
          <NotesBar />
        </div>
        <div class="col-9 note">
          <div v-if="this.$store.state.selectedNote._id && !this.$store.state.createNote">
            <NoteDisplay />
          </div>
          <div v-if="this.$store.state.createNote">
            <NewNote />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesBar from './CategoriesBar/CategoriesBar.vue';
import NotesBar from './NotesBar/NotesBar.vue';
import NoteDisplay from './NoteDisplay.vue'
import NewNote from './NotesBar/NewNote.vue'
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
      FillNotesList: 'FillNotesList'
    })
  },
  mounted() {
    const callNotes = () => {
      API_URL += `/user/${this.$auth.user.nickname}`;
      
      fetch(API_URL).then(res => res.json()).then((result) => {
        // console.log(result);
        this.FillNotesList(result);
        // this.$store.state.notes = result;
      })
    }
    setTimeout(callNotes, 500);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.row {
  width: 100%;
  margin: 0;
}

.categoriesbar {
  background-color: #8fbc8f;
  font-family: Arial, Helvetica, sans-serif;
  padding: unset;
}

.notesbar {
  background-color: #2e2e2e;
  padding: unset;
}

.note {
  background-color: #272822;
  height: 100vh !important;
}

</style>
